import {dimensions, colors} from '@theme-variables'
import {mixins} from '@mixins'
import { StyleSheet, Platform, ViewStyle, TextStyle } from 'react-native'

interface Style {
    button: ViewStyle;
    buttonContainer: ViewStyle;
    containerStyle: ViewStyle;
    gameRowStyle: ViewStyle;
    scrollContainerStyle: ViewStyle;
    textStyle: TextStyle;
    textRowStyle: TextStyle;
  }

export default StyleSheet.create<Style>({
    button: {
        margin: dimensions.margin.big,
        width: 100
    },
    buttonContainer: {
        paddingBottom: '5%'
    },
    containerStyle: {
        ...mixins.containerStyle,
        backgroundColor: colors.white
    },
    gameRowStyle: {
        flexDirection: 'row',
    },
    scrollContainerStyle: {
        marginTop: Platform.OS === 'ios' ? 30 : 40
    },
    textStyle: {
        ...mixins.mediumText,
        fontSize: dimensions.fontSize.big,
        marginBottom: '10%',
        textAlign: 'center'
    },
    textRowStyle: {
        fontSize: dimensions.fontSize.medium,
        margin: dimensions.margin.medium,
        minWidth: '40%',
        // padding: dimensions.padding.medium,
        textAlign: 'center'
    }
})
