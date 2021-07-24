import {dimensions, colors, width} from '@theme-variables'
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
        paddingBottom: '5%',
        maxWidth: width
    },
    containerStyle: {
        ...mixins.containerStyle,
        backgroundColor: colors.white,
        width: width
    },
    gameRowStyle: {
        flexDirection: 'row',
        maxWidth: width,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    scrollContainerStyle: {
        marginTop: Platform.OS === 'ios' ? 30 : 40,
        
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: dimensions.padding.medium,
        textAlign: 'center'
    }
})
