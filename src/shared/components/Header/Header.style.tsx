/**
 * 
 *
 * @author Jan Hellsten <hellsten@live.com>
 *
 * @copyright Jan Hellsten 2021
 */

import { ImageStyle, Platform, StyleSheet, ViewStyle } from 'react-native'
import { colors, dimensions, width } from '@theme-variables'
import themes from '@themes'
import { getStatusBarHeight } from 'react-native-status-bar-height'

interface Style {
    centerComp: ViewStyle,
    componentStyle: ViewStyle,
    containerStyle: ViewStyle,
    imageStyle: ImageStyle,
    downloadTextStyle: ViewStyle,
    iconStyle: ViewStyle,
}

export default StyleSheet.create<Style>({
    centerComp: {
        alignItems: 'center',
        flex: 2
    },
    componentStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    containerStyle: {
        backgroundColor: colors.white,
        height: Platform.OS === 'ios' ? 100 + getStatusBarHeight() : 120 + getStatusBarHeight(),
        marginBottom: 'auto',
        width: width
    },
    imageStyle: {
        backgroundColor: colors.white,
        height: Platform.OS === 'ios' ? 100 + getStatusBarHeight() : 120 + getStatusBarHeight(),
        marginBottom: 'auto',
        width: width
    },
    downloadTextStyle: {
        fontSize: dimensions.fontSize.medium
    },
    iconStyle: {
        color: themes.mint.decorative,
        left: 0,
        position: 'absolute',
        top: 50
    }
})
