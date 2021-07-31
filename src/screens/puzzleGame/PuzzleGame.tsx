import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './PuzzleGame.style'
import { mixins } from '@mixins'
import { Game } from '../../actions/index'
import { ScrollView } from 'react-native-gesture-handler'
import { calculate } from '../../utils/calculators'
import { GameOperators, GameOptions, PuzzleGameObjectType } from 'shared/types/game.type'
import { ThemeType } from '@themes'
import { StyledContainer, StyledText } from '@shared-components/StyledViews'
import Button from '@shared-components/Button/Button'
import Header from '@shared-components/Header/Header'
import { puzzleSets } from '@shared-constants'
import CustomIcon from '@shared-components/CustomIcon/CustomIcon'
import CustomInput from '@shared-components/CustomInput/CustomInput'
import { GameState } from 'reducers/game'
import { SettingsStateType } from 'reducers/settings'

type IState = {
    answered: boolean
}

type IProps = {
    game: PuzzleGameObjectType[],
    operator: GameOperators,
    route: any,
    generateGame: ([]) => void,
    changeOperator: (operator: GameOperators) => void,
    changeAnswer: (text: string, index: number) => void,
    numberOfRows: number,
    theme: ThemeType,
    navigation: any
}

class PuzzleGame extends Component<IProps, IState> {
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
        const { title } = this.props.route.params
        let max = 10
        let { operator } = this.props.route.params
        if (operator === GameOptions.picture) {
            switch (title) {
                case 'Helpot':
                    operator = '+'
                    break
                case 'Tavalliset':
                    operator = '+'
                    max = 20
                    break
                case 'Vaikeat':
                    operator = '*'
                    max = 24
                    break
                default:
                    operator = '+'
                    break
            }
        }
        
        const { icons, color } = puzzleSets[1]
        const game = []
        const number1 = Math.ceil(Math.random() * Math.floor(max))
        let number2 = Math.ceil(Math.random() * Math.floor(max))
        let number3 = Math.ceil(Math.random() * Math.floor(max))
        while (number1 === number2) {
            number2 = Math.ceil(Math.random() * Math.floor(max))
        }
        while (number1 === number3 || number2 === number3) {
            number3 = Math.ceil(Math.random() * Math.floor(max))
        }

        game.push({
            correctAnswer: calculate(operator, number1, number1, number1),
            operator,
            answer: calculate(operator, number1, number1, number1),
            icon: icons[0],
            color
        })
        game.push({
            correctAnswer: calculate(operator, number2, number2, number2),
            operator,
            answer: calculate(operator, number2, number2, number2),
            icon: icons[1],
            color
        })

        game.push({
            correctAnswer: calculate(operator, number3, number3, number3),
            operator,
            answer: calculate(operator, number3, number3, number3),
            icon: icons[2],
            color
        })
        game.push({
            correctAnswer: calculate(operator, number1, number2, number3),
            operator,
            icons: icons,
            color,
            answer: ''
        })

        this.props.changeOperator(operator)
        this.props.generateGame(game)
        if (this.state.answered) {
            this.setState({ answered: false })
        }
    }

    _renderQuestions() {
        const { game, theme } = this.props
        if (!Array.isArray(game)) {
            return
        }
        return game.map((game, index) => {
            const correctAnswer = Number(game.answer) === Number(game.correctAnswer)
            return game.icons ? (
                <View style={styles.gameRowStyle} key={index}>
                    <CustomIcon icon={game.icons[0]} noMargin color={game.color} />
                    <StyledText theme={theme} style={styles.textRowStyle}>
                        {game.operator}
                    </StyledText>
                    <CustomIcon icon={game.icons[1]} noMargin color={game.color} />
                    <StyledText theme={theme} style={styles.textRowStyle}>
                        {game.operator}
                    </StyledText>
                    <CustomIcon icon={game.icons[2]} noMargin color={game.color} />
                    <StyledText theme={theme} style={styles.textRowStyle}>
                        {'='}
                    </StyledText>
                    <CustomInput
                        width={'15%'}
                        value={game.answer}
                        keyboardType={'number-pad'}
                        onChangeText={text => this.props.changeAnswer(text, index)}
                        editable={!this.state.answered}
                    ></CustomInput>

                    {game.icons && (
                        <StyledText theme={theme} style={styles.textRowStyle}>
                            {correctAnswer && this.state.answered
                                ? 'Oikein!'
                                : this.state.answered && game.answer !== ''
                                ? 'Väärin'
                                : ''}
                        </StyledText>
                    )}
                </View>
            ) : (
                <View style={styles.gameRowStyle} key={index}>
                    <CustomIcon icon={game.icon} noMargin color={game.color} />
                    <StyledText theme={theme} style={styles.textRowStyle}>
                        {game.operator}
                    </StyledText>
                    <CustomIcon icon={game.icon} noMargin color={game.color} />
                    <StyledText theme={theme} style={styles.textRowStyle}>
                        {game.operator}
                    </StyledText>
                    <CustomIcon icon={game.icon} noMargin color={game.color} />
                    <StyledText theme={theme} style={styles.textRowStyle}>
                        {` =  ${game.answer}`}
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
                    <ScrollView style={styles.scrollContainerStyle}>
                        <StyledText theme={theme} style={styles.textStyle}>
                            {route.params.title}
                        </StyledText>
                        {this._renderQuestions()}
                        <View style={[mixins.buttonContainer, styles.buttonContainer]}>
                            <Button
                                onPress={() => this.generateGame()}
                                style={styles.button}
                                text={'Uusi peli'}
                            />
                            <Button
                                onPress={() => this.setState({ answered: !this.state.answered })}
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

const mapStateToProps = (state: {game: GameState, settings: SettingsStateType}) => ({
    game: state.game.game,
    theme: state.settings.theme
})

const mapDispatchToProps = (dispatch) => ({
    generateGame: (game: PuzzleGameObjectType[]) => dispatch(Game.generateGame(game)),
    changeAnswer: (answer: string, index: number) => dispatch(Game.changeAnswer(answer, index)),
    changeOperator: (operator: string) => dispatch(Game.changeOperator(operator))
})

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleGame)
