import { ViewStyle, TextStyle, StyleSheet, TouchableOpacityProps } from "react-native";
import themes from '@themes'
import { dimensions, colors } from '@theme-variables';
import { mixins } from '@mixins'
interface Style {
  buttonStyle: TouchableOpacityProps;
  containerStyle: ViewStyle;
  settingsButton: TextStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  buttonStyle: {
    borderColor: themes.mint.support,
    borderRadius: 10,
    borderWidth: dimensions.border.small,
    width: '50%'
},
containerStyle: {
    ...mixins.containerStyle
},
settingsButton: {
    borderColor: themes.mint.support,
    borderRadius: 10,
    borderWidth: dimensions.border.small,
    margin: 20,
    width: '50%'
},
textStyle: {
    ...mixins.mediumText,
    color: colors.blue,
}
});
