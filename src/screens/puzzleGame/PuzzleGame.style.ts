import {mixins,} from '@mixins'
import {colors, dimensions, width} from '@theme-variables'
import { StyleSheet, Platform, TextStyle, ViewStyle } from 'react-native'


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
        alignItems: 'baseline',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingLeft: width * 0.1
    },
    scrollContainerStyle: {
        marginTop: Platform.OS === 'ios' ? 30 : 40
    },
    textStyle: {
        ...mixins.mediumText,
        fontSize: dimensions.fontSize.big,
        textAlign: 'center'
    },
    textRowStyle: {
        display: 'flex',
        alignSelf: 'baseline',
        fontSize: dimensions.fontSize.medium,
        margin: dimensions.margin.medium,
        minWidth: '5%',
        padding: dimensions.padding.medium
    }
})
