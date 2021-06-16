import React, { Fragment } from 'react'
import { View } from 'react-native'
import styles from './NextSteps.styles'
import { APP_ROUTE } from '@shared-constants'
import Button from '@shared-components/Button/Button'
import { ThemeType } from '@themes'
import { GameOperators } from 'shared/types/game.type'

interface IProps {
    navigation: any,
    type: string,
    operator: GameOperators,
    options: any,
    theme: ThemeType,
}

export default function NextSteps({ navigation, type, operator, options, theme }: IProps): JSX.Element {
    const renderNextStep = () => {
        const opts = []
        for (let i = 1; i + 1 < options.max; i++) {
            opts.push(
                <View style={styles.buttonContainer} key={i}>
                    <Button
                        // theme={theme}
                        style={styles.buttonContainer}
                        onPress={() =>
                            navigation.navigate(APP_ROUTE.BASIC_GAME, {
                                title: type,
                                operator: operator,
                                min: i,
                                max: 10
                            })
                        }
                        text={i + ' kertotaulu'}
                    ></Button>
                </View>
            )
        }
        return opts
    }

    return (<Fragment>{renderNextStep()}</Fragment>)
}
