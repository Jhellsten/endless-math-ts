import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import * as NavigationService from "react-navigation-helpers";
import { SettingsStateType } from 'reducers/settings'
import { SETTINGS_OPTIONS } from '@shared-constants';
import themes, { ThemeType } from '@themes'

import styles from "./SettingsScreen.style"
import CustomInput from '@shared-components/CustomInput/CustomInput';
import Button from '@shared-components/Button/Button';
import { Setting, Theme } from '@actions';
import Header from '@shared-components/Header/Header';
import { localStrings } from 'shared/localization';

interface IProps {
    themes: typeof themes,
    settings: any,
    changeSetting: (text: string, value: string) => void,
    changeTheme: (theme: ThemeType) => void
  }
  
  interface IState {}

class Settings extends Component<IProps, IState> {

    _settingsString = (settingName: string, index: number) => {
        switch (settingName) {
            case Object.keys(SETTINGS_OPTIONS)[index]:
                return localStrings.settings.numberOfRows
            default:
                return settingName
        }
    }

    _renderSettings() {
        return Object.keys(SETTINGS_OPTIONS).map((setting, index) => {
            return (
                <View style={styles.settingRowStyle} key={index}>
                    <Text style={styles.textRowStyle}>{this._settingsString(Object.keys(SETTINGS_OPTIONS)[index], index)}</Text>
                    <CustomInput
                        width={'30%'}
                        value={this.props.settings[setting]}
                        keyboardType={'number-pad'}
                        onChangeText={(text: string) => this.props.changeSetting(setting, text)}
                    ></CustomInput>
                </View>
            )
        })
    }
    _renderThemeSelection() {
        const { themes, changeTheme } = this.props
        return Object.keys(themes).map((theme: keyof typeof themes, index: number) => {
            return (
                <View key={index}>
                    {/* <Text style={styles.textRow}>{theme}</Text> */}
                    <Button
                        width={'30%'}
                        style={{
                            ...styles.textRowStyle,
                            backgroundColor: themes[theme].primary
                        }}
                        textColor={themes[theme].secondary}
                        text={themes[theme].name}
                        // value={this.props.settings[theme]}
                        onPress={() => changeTheme(themes[theme])}
                    ></Button>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    goBack={() => NavigationService.goBack()}
                    back={true}
                    // title={'Asetukset'}
                    // titleColor={colors.red}
                />
                <KeyboardAwareScrollView>
                    <Text style={styles.textStyle}>{localStrings.settings.title}</Text>
                    {this._renderSettings()}
                    <Text style={styles.textStyle}>{localStrings.settings.theme}</Text>
                    {this._renderThemeSelection()}
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state: {settings: SettingsStateType}) => ({
    settings: state.settings.settings,
    themes: state.settings.selectableThemes
})

const mapDispatchToProps = (dispatch) => ({
    changeSetting: (name: string, value: string) => dispatch(Setting.changeSetting(name, value)),
    changeTheme: (theme: ThemeType) => dispatch(Theme.changeTheme(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
