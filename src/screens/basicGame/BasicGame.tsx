import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './BasicGame.style'
import { Game } from '../../actions/index'
import { ScrollView } from 'react-native-gesture-handler'
import { calculate } from '../../utils/calculators'
import { SettingsStateType } from 'reducers/settings'
import { StyledContainer, StyledText } from '@shared-components/StyledViews'
import Button from '@shared-components/Button/Button'
import { mixins } from '@mixins'
import Header from '@shared-components/Header/Header'
import CustomInput from '@shared-components/CustomInput/CustomInput'
import { GameObjectType, GameOperators } from 'shared/types/game.type'
import { ThemeType } from '@themes'
import { TitleTypes } from '@shared-constants'

type IState = {
    answered: boolean
}

type IProps = {
    game: GameObjectType[],
    operator: GameOperators,
    route: any,
    generateGame: ([]) => void,
    changeOperator: (operator: GameOperators) => void,
    changeAnswer: (text: string, index: number) => void,
    numberOfRows: number,
    theme: ThemeType,
    navigation: any
}



class BasicGame extends Component<IProps, IState> {
    _scrollView = React.createRef<ScrollView>()
    constructor(props: IProps) {
        super(props)
        this.state = {
            answered: false
        }
    }

    componentDidMount() {
        if (
            (this.props.game && this.props.game.length === 0) ||
            this.props.route.params.operator !== this.props.operator ||
            !this.props.route.params.continue
        ) {
            this.props.generateGame([])
            this.generateGame()
        }
    }

    generateGame() {
        const { operator, min, title, max } = this.props.route.params
        const games = this.props.numberOfRows || 10
        const game = []
        let tries = 0
        if (title === TitleTypes.multiplyTable) {
            for (let index = 0; index < max; index++) {
                game.push({
                    calculation: `${min} ${operator} ${index + 1} =`,
                    correctAnswer: calculate(operator, min, index + 1),
                    answer: ''
                })
            }
        } else {
            for (let index = 0; index < games; index++) {
                let number1 = Math.ceil(Math.random() * Math.floor(max))
                let number2 =
                    operator === GameOperators.substraction || operator === GameOperators.division
                        ? Math.ceil(Math.random() * Math.floor(number1))
                        : Math.ceil(Math.random() * Math.floor(max))

                while (
                    game.filter(
                        existingGame =>
                            existingGame.correctAnswer === calculate(operator, number1, number2)
                    ).length > 1
                ) {
                    number1 = Math.ceil(Math.random() * Math.floor(max))
                    number2 =
                        operator === GameOperators.substraction || operator === GameOperators.division
                            ? Math.ceil(Math.random() * Math.floor(number1))
                            : Math.ceil(Math.random() * Math.floor(max))
                    tries++
                    if (tries + games + 50) {
                        break
                    }
                }
                game.push({
                    calculation: `${number1} ${operator} ${number2} =`,
                    correctAnswer: calculate(operator, number1, number2),
                    answer: ''
                })
            }
        }

        this.props.changeOperator(operator)
        this.props.generateGame(game)
        if (this.state.answered) {
            this.setState({ answered: false })
        }
    }

    _renderQuestions() {
        const { theme, changeAnswer, game: games } = this.props
        if (!Array.isArray(games)) {
            return
        }
        return games.map((game, index) => {
            const correctAnswer = Number(game.answer) === game.correctAnswer
            return (
                <View style={styles.gameRowStyle} key={index}>
                    <StyledText theme={theme} style={styles.textRowStyle}>
                        {game.calculation}
                    </StyledText>
                    <CustomInput
                        width={'20%'}
                        value={games[index].answer}
                        keyboardType={'number-pad'}
                        onChangeText={text => changeAnswer(text, index)}
                        editable={!this.state.answered}
                    ></CustomInput>

                    <StyledText theme={theme} style={styles.textRowStyle}>
                        {correctAnswer && this.state.answered
                            ? 'Oikein!'
                            : this.state.answered && game.answer !== ''
                            ? 'V????rin'
                            : ''}
                    </StyledText>
                </View>
            )
        })
    }

    render() {
        const { theme, route, navigation } = this.props
        return (
            <StyledContainer theme={theme} style={styles.containerStyle}>
                <Header goBack={() => navigation.goBack()} back={true} />
                <KeyboardAwareScrollView contentContainerStyle={styles.containerStyle}>
                    <ScrollView
                        style={styles.scrollContainerStyle}
                        ref={this._scrollView}
                    >
                        <StyledText theme={theme} style={styles.textStyle}>
                            {route.params.title}
                        </StyledText>
                        {this._renderQuestions()}
                        <View style={[mixins.buttonContainer, styles.buttonContainer]}>
                            <Button
                                onPress={() => this.generateGame()}
                                style={styles.button}
                                text={'Nollaa'}
                            />
                            <Button
                                onPress={() =>
                                    this.setState(
                                        { answered: !this.state.answered },
                                        () => this._scrollView.current?.scrollTo({
                                            x: 0,
                                            y: 0,
                                            animated: true
                                        })
                                    )
                                }
                                style={styles.button}
                                text={this.state.answered ? 'Jatka' : 'Vastaa'}
                            />
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </StyledContainer>
        )
    }
}

const mapStateToProps = (state: {settings: SettingsStateType, game: any}) => ({
    game: state.game.game,
    numberOfRows: state.settings.settings.numberOfRows,
    operator: state.game.operator,
    theme: state.settings.theme
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    generateGame: (game: GameObjectType[]) => dispatch(Game.generateGame(game)),
    changeAnswer: (answer: number, index: number) => dispatch(Game.changeAnswer(answer, index)),
    changeOperator: (operator: GameOperators) => dispatch(Game.changeOperator(operator))
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicGame)
