import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { APP_ROUTE, DIFFICULTIES } from '@shared-constants'
import NextSteps from './components/NextSteps'
import styles from './GamesScreen.style'
import { ThemeType } from '@themes'
import { goBack, navigate } from 'react-navigation-helpers'
import { SettingsStateType } from 'reducers/settings'
import { CategoryStateType, CategoryType } from 'reducers/categories'
import Button from '@shared-components/Button/Button'
import { StyledContainer, StyledText } from '@shared-components/StyledViews'
import Header from '@shared-components/Header/Header'
import CustomIcon from '@shared-components/CustomIcon/CustomIcon'
import navigation from '@services/navigation'
import { GameOperators, GameTypes } from 'shared/types/game.type'

interface IProps {
    theme: ThemeType,
    categories: CategoryType[]
}

interface IState {
    operator: GameOperators | null,
    type: string | null,
    options: {}
}

class Games extends Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            operator: null,
            type: '',
            options: {}
        }
    }

    _renderCategories() {
        const { theme, categories } = this.props
        return categories.map((category, index) => {
            return (
                <View style={styles.buttonContainerStyle} key={index}>
                    <Button
                        style={[
                            
                            { backgroundColor: theme.primary, color: theme.secondary }
                        ]}
                        onPress={() =>
                            category.operator === GameOperators.multiply || category.operator === GameOperators.empty
                                ? this.setState({
                                      operator: category.operator
                                  })
                                :  navigate(APP_ROUTE.BASIC_GAME, {
                                      title: category.title,
                                      operator: category.operator,
                                      min: 1,
                                      max: 10
                                  })
                        }
                        text={category.title}
                    ></Button>
                </View>
            )
        })
    }

    _renderDifficulties() {
        const { operator } = this.state
        return DIFFICULTIES[operator].map((difficulty: {title: string, options: {}}, index: number) => {
            return (
                <View style={styles.buttonContainerStyle} key={index}>
                    <Button
                        // style={styles.button}
                        onPress={() =>
                            difficulty.title !== GameTypes.multiply && operator !== GameOperators.empty
                                ? navigate(APP_ROUTE.BASIC_GAME, {
                                      title: difficulty.title,
                                      operator: operator
                                  })
                                : operator === GameOperators.empty
                                ? navigate(APP_ROUTE.PUZZLE_GAME, {
                                      title: difficulty.title,
                                      operator: operator
                                  })
                                : this.setState({
                                      type: difficulty.title,
                                      options: difficulty.options
                                  })
                        }
                        text={difficulty.title}
                    ></Button>
                </View>
            )
        })
    }

    render() {
        // TODO simplify logic
        const { operator, type, options } = this.state
        const { theme } = this.props
        return (
            <StyledContainer theme={theme} style={styles.containerStyle}>
                <Header
                    goBack={() =>
                        operator || operator === GameOperators.empty
                            ? this.setState({
                                  operator: null,
                                  type: null
                              })
                            : goBack()
                    }
                    back={true}
                />
                <ScrollView
                    style={styles.scrollContainerStyle}
                    contentContainerStyle={styles.innerContainerStyle}
                >
                    <CustomIcon icon={'diamond'} style={styles.iconStyle} />
                    {operator !==  GameOperators.multiply && operator !== GameOperators.empty ? (
                        <StyledText theme={theme}>Valitse peli</StyledText>
                    ) : (
                        <StyledText
                            theme={theme}
                            onPress={() =>
                                this.setState({
                                    operator: GameOperators.empty,
                                    type: ''
                                })
                            }
                        >
                            Edellinen
                        </StyledText>
                    )}
                    {operator !== GameOperators.multiply && operator !==  GameOperators.empty && this._renderCategories()}
                    {(operator === GameOperators.multiply || operator ===  GameOperators.empty) &&
                        type !== GameTypes.multiply &&
                        this._renderDifficulties()}
                    {operator && type === GameTypes.multiply && (
                        <NextSteps
                            // scrollContainer={styles.scrollContainerStyle}
                            navigation={navigation}
                            operator={operator}
                            type={type}
                            theme={theme}
                            options={options}
                        />
                    )}
                </ScrollView>
            </StyledContainer>
        )
    }
}

const mapStateToProps = (state: {settings: SettingsStateType, categories: CategoryStateType}) => ({
    categories: state.categories.categories,
    theme: state.settings.theme
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Games)

