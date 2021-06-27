/**
 * 
 *
 * @author Jan Hellsten <hellsten@live.com>
 *
 * @copyright Jan Hellsten 2021
 */

import React from 'react'
import Styles from './CustomInput.styles'
import { connect } from 'react-redux'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { ThemeType } from '@themes'
import { SettingsStateType } from 'reducers/settings'

type CustomInputProps = {
    value: string,
    onChange?: () => void,
    placeholder?: string,
    width?: string | number,
    onChangeText: (text: string) => void,
    onFocus?: () => void,
    editable?: boolean,
    theme: ThemeType,
    keyboardType?: KeyboardTypeOptions,
}

const Input = ({
    value,
    onChange,
    placeholder,
    width,
    keyboardType = 'default',
    onChangeText,
    onFocus,
    editable,
    theme
}: CustomInputProps) => {
    return (
        <TextInput
            value={String(value)}
            placeholder={placeholder}
            onChange={onChange}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            style={{ ...Styles.input, color: theme.secondary, width: width }}
            onFocus={onFocus}
            editable={editable}
        />
    )
}

const mapStateToProps = (state: {settings: SettingsStateType}) => ({
    theme: state.settings.theme
})

export default connect(mapStateToProps)(Input)
