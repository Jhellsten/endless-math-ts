import React, { Fragment } from 'react'
import { View } from 'react-native'
import styles from './NextSteps.style'
import { APP_ROUTE } from '@shared-constants'
import Button from '@shared-components/Button/Button'
import { ThemeType } from '@themes'
import { GameOperators } from 'shared/types/game.type'

interface IProps {
    navigate: (routeName: string, params?: any) => void,
    type: string,
    operator: GameOperators,
    options: any,
    theme: ThemeType,
}

export default function NextSteps({ navigate, type, operator, options, theme }: IProps): JSX.Element {
    const renderNextStep = () => {
        const opts = []
        for (let i = 1; i + 1 < options.max; i++) {
            opts.push(
                <View style={styles.buttonContainer} key={i}>
                    <Button
                        // theme={theme}
                        style={styles.buttonContainer}
                        onPress={() =>
                            navigate(APP_ROUTE.BASIC_GAME, {
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
