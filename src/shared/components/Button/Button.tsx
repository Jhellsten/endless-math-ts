import React from "react"
import { TouchableOpacity, Text, TouchableOpacityProps, TextStyle } from "react-native"
import { connect } from "react-redux"
import { ThemeType } from "@themes"
import { SettingsStateType } from "reducers/settings"

import CustomIcon from "../CustomIcon/CustomIcon"

import Styles from "./Button.styles"

type ButtonProps = {
  onPress: () => void
  text: string
  width?: number | string,
  disabled?: boolean
  style?: TouchableOpacityProps | TextStyle | any
  icon?: boolean
  iconName?: string
  iconColor?: string
  iconSize?: number
  iconNoMargin?: boolean
  textColor?: string,
  theme: ThemeType,
  textStyles?: TextStyle
}

const Button = ({
  onPress,
  text,
  width,
  disabled,
  style,
  icon,
  iconName,
  iconColor,
  iconSize = 30,
  iconNoMargin,
  textColor,
  theme,
  textStyles
}: ButtonProps) => {
  textColor = textColor || theme.secondary
  const defaultStyle = {
    backgroundColor: theme.primary,
    borderColor: theme.support,
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        icon
          ? [defaultStyle, Styles.buttonStyle, style, Styles.rowStyle]
          : [defaultStyle, Styles.buttonStyle, style]
      }
      disabled={disabled}
    >
      <Text style={[Styles.textStyle, { color: textColor }, textStyles]}>{text}</Text>
      {icon && iconName && (
        <CustomIcon
          icon={iconName}
          color={iconColor}
          size={iconSize}
          noMargin={iconNoMargin}
        />
      )}
    </TouchableOpacity>
  )
}

const mapStateToProps = (state: { settings: SettingsStateType }) => ({
  theme: state.settings.theme,
})

export default connect(mapStateToProps)(Button)
