import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { dimensions } from '../variables'
import themes from '@theme'
interface Style {
    buttonContainer: ViewStyle;
    buttonRounded: ViewStyle;
    buttonSquare: ViewStyle;
    containerStyle: ViewStyle;
    mediumText: TextStyle;
  }


export default StyleSheet.create<Style>({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonRounded: {
        borderRadius: dimensions.fontSize.medium
    },
    buttonSquare: {
        borderRadius: 0
    },
    containerStyle: {
        alignItems: 'center',
        backgroundColor: themes.mint.primary,
        flex: 1,
        justifyContent: 'center'
    },
    mediumText: {
        fontSize: dimensions.fontSize.medium
    }
})
