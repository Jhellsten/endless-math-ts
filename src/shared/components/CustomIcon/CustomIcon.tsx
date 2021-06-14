import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from './CustomIcon.styles'
import themes from '@themes'
import { IconProps } from 'react-native-vector-icons/Icon'
import { TextStyle } from 'react-native'


type CustomIconProps = {
    icon: string,
    size: number,
    color?: string,
    noMargin?: boolean,
    onPress?: () => void,
    style?: IconProps & TextStyle
}

const CustomIcon = ({
    onPress,
    icon,
    size = 30,
    color = themes.mint.primary,
    noMargin = false,
    style,
}: CustomIconProps) => {
    return (
        <Icon
            name={icon}
            size={size}
            color={color}
            style={noMargin ? style : [Styles.container, style]}
            onPress={onPress}
        />
    )
}

export default CustomIcon
