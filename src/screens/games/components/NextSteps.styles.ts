import { mixins } from '@mixins'
import { width, colors } from '@theme-variables'
import themes from '@themes'
import { StyleSheet, Platform, TextStyle, ViewStyle } from 'react-native'


interface Style {
    buttonContainer: ViewStyle;
    containerStyle: ViewStyle;
    innerContainer: ViewStyle;
    scrollContainer: ViewStyle;
    iconStyle: TextStyle;
    textStyle: TextStyle;
  }

export default StyleSheet.create<Style>({
    buttonContainer: {
        borderRadius: 15,
        marginBottom: '5%',
        width: width * 0.9
    },
    containerStyle: {
        ...mixins.containerStyle,
        backgroundColor: themes.mint.primary,
        flex: 1
    },
    iconStyle: {
        marginTop: Platform.OS === 'ios' ? 0 : 50
    },
    innerContainer: {
        ...mixins.containerStyle,
        backgroundColor: colors.white,
        flex: 1,
        height: 1000,
        paddingBottom: '30%',
        width: width
    },
    scrollContainer: {
        ...mixins.containerStyle,
        backgroundColor: colors.white,
        display: 'flex',
        height: '100%',
        paddingBottom: '30%',
        paddingTop: Platform.OS === 'ios' ? 30 : 40,
        width: width
    },
    textStyle: {
        ...mixins.mediumText,
        marginBottom: '10%'
    }
})
