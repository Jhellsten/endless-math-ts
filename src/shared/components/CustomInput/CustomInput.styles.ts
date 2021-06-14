/**
 * 
 *
 * @author Jan Hellsten <hellsten@live.com>
 *
 * @copyright Jan Hellsten 2021
 */

import { StyleSheet, TextStyle } from 'react-native'
import { dimensions } from '@theme-variables'
import {mixins} from '@mixins'

interface Style {
    input: TextStyle
}

export default StyleSheet.create<Style>({
    input: {
        borderRadius: dimensions.border.smallRadius,
        borderWidth: dimensions.border.small,
        height: dimensions.input.height,
        width: '90%',
        ...mixins.mediumText,

        margin: dimensions.margin.medium,
        padding: dimensions.padding.medium
    }
})
