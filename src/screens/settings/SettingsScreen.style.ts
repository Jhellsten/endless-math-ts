import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import {  colors, dimensions } from '@theme-variables'
import themes from '@themes'
import { mixins } from '@mixins'

interface Style {
    buttonContainerStyle: ViewStyle;
    containerStyle: ViewStyle;
    settingRowStyle: ViewStyle;
    textStyle: TextStyle;
    textRowStyle: TextStyle;
  }

export default StyleSheet.create<Style>({
    buttonContainerStyle: {
        marginBottom: '5%',
        width: '100%'
    },
    containerStyle: {
        ...mixins.containerStyle,
        backgroundColor: colors.white
    },
    settingRowStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        ...mixins.mediumText,
        color: themes.mint.secondary,
        margin: '10%',
        textAlign: 'center'
    },
    textRowStyle: {
        color: themes.mint.secondary,
        margin: dimensions.margin.medium,
        minWidth: '20%',
        padding: dimensions.padding.medium,
        textAlign: 'center'
    }
})
