/**
 * 
 *
 * @author Jan Hellsten <hellsten@live.com>
 *
 * @copyright Jan Hellsten 2021
 */

import React from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import styles from './Header.style'
import * as NavigationService from "react-navigation-helpers";

import { SettingsStateType } from 'reducers/settings'
import { ThemeType } from '@themes'
import CustomIcon from '@shared-components/CustomIcon/CustomIcon';

type HeaderProps = {
    theme: ThemeType,
    goBack: () => void,
    back: boolean
}

const Header = ({theme, goBack}: HeaderProps) => {
    const back = () => {
        if (goBack) {
            return goBack()
        }
        return NavigationService.goBack()
    }

    return (
        <View style={styles.containerStyle}>
            <Image source={theme.smallLogo} style={styles.imageStyle} />
            <CustomIcon
                icon={'arrow-left'}
                style={[styles.iconStyle, { color: theme.secondary }]}
                onPress={back}
                size={25}
            />
        </View>
    )
}
const mapStateToProps = (state: {settings: SettingsStateType}) => ({
    theme: state.settings.theme
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
