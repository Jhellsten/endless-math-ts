import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { APP_ROUTE, DIFFICULTIES, GameOptionsType, TitleTypes } from '@shared-constants'
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
import { GameOptions, GameTypes } from 'shared/types/game.type'
import { localStrings } from 'shared/localization'

interface IProps {
    theme: ThemeType,
    categories: CategoryType[]
}

interface IState {
    operator: GameOptions,
    type: string,
    options: {},
    shouldShowOptions: boolean,
    hasOptions: boolean
}

class Games extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            operator: GameOptions.empty,
            type: '',
            options: {},
            shouldShowOptions: false,
            hasOptions: false
        }
    }

    _categoryTitleString = (title: GameTypes): string => {
        const { games: gameStrings } = localStrings
        switch (title) {
            case GameTypes.addition:
                return gameStrings.addition
            case GameTypes.substraction:
                return gameStrings.substraction
            case GameTypes.multiply:
                return gameStrings.multiply
            case GameTypes.division:
                return gameStrings.division
            case GameTypes.picturePuzzles:
                return gameStrings.picturePuzzles
            default:
                return ''
        }

    }
    _difficultyString = (title: TitleTypes): string => {
        const { games: gameStrings } = localStrings
        switch (title) {
            case TitleTypes.easy:
                return gameStrings.difficultyLevels.easy
            case TitleTypes.medium:
                return gameStrings.difficultyLevels.regular
            case TitleTypes.hard:
                return gameStrings.difficultyLevels.hard
            case TitleTypes.multiplyTable:
                return gameStrings.multiplyTables
            default:
                return ''
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
                        onPress={() => this.setState({
                                      operator: category.operator,
                                      shouldShowOptions: true
                                  })
                        }
                        text={this._categoryTitleString(category.title)}
                    ></Button>
                </View>
            )
        })
    }

    _renderDifficulties() {
        const { operator } = this.state
        return DIFFICULTIES[operator].map((difficulty: {title: TitleTypes, options: GameOptionsType}, index: number) => {
            return (
                <View style={styles.buttonContainerStyle} key={index}>
                    <Button
                        // style={styles.button}
                        key={index}
                        onPress={() =>
                            difficulty.title === TitleTypes.multiplyTable
                                ? this.setState({
                                    type: difficulty.title,
                                    options: difficulty.options,
                                    shouldShowOptions: false,
                                    hasOptions: true
                                })
                                : operator === GameOptions.picture
                                ? navigate(APP_ROUTE.PUZZLE_GAME, {
                                      title: difficulty.title,
                                      operator: operator,
                                      min: difficulty.options?.min,
                                      max: difficulty.options?.max
                                  })
                                : navigate(APP_ROUTE.BASIC_GAME, {
                                    title: difficulty.title,
                                    operator: operator,
                                    min: difficulty.options?.min,
                                    max: difficulty.options?.max
                                })
                        }
                        text={this._difficultyString(difficulty.title)}
                    ></Button>
                </View>
            )
        })
    }

    render() {
        const { games: gameStrings } = localStrings
        const { operator, type, options, shouldShowOptions, hasOptions } = this.state
        const { theme } = this.props
        return (
            <StyledContainer theme={theme} style={styles.containerStyle}>
                <Header
                    goBack={() =>
                        shouldShowOptions
                            ? hasOptions ? this.setState({
                                  operator: GameOptions.empty,
                                  shouldShowOptions: true,
                                  
                              }) : this.setState({
                                operator: GameOptions.empty,
                                type: '',
                                shouldShowOptions: false,
                                
                            })
                            : hasOptions && type === TitleTypes.multiplyTable ? this.setState({
                                operator: GameOptions.multiply,
                                type: '',
                                shouldShowOptions: true,
                                hasOptions: false
                                
                            }) : goBack()
                    }
                    back={true}
                />
                <ScrollView
                    style={styles.scrollContainerStyle}
                    contentContainerStyle={styles.innerContainerStyle}
                >
                    <CustomIcon icon={'gem'} style={styles.iconStyle} />
                    {operator !==  GameOptions.multiply ? (
                        <StyledText style={styles.textStyle} theme={theme}>{gameStrings.selectGame}</StyledText>
                    ) : (
                        <StyledText
                            theme={theme}
                            style={styles.textStyle}
                            onPress={() =>
                                hasOptions ? this.setState({
                                    shouldShowOptions: true,
                                    hasOptions: false
                                }) :
                                this.setState({
                                    operator: GameOptions.empty,
                                    type: '',
                                    shouldShowOptions: false
                                })
                            }
                        >
                            {localStrings.previous}
                        </StyledText>
                    )}
                    {!shouldShowOptions && !hasOptions && this._renderCategories()}
                    {shouldShowOptions && this._renderDifficulties()}
                    {hasOptions && type === TitleTypes.multiplyTable && (
                        <NextSteps
                            // scrollContainer={styles.scrollContainerStyle}
                            navigate={navigate}
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

export default connect(mapStateToProps, null)(Games)

