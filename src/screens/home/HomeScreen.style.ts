import { ViewStyle, TextStyle, StyleSheet, TouchableOpacityProps } from "react-native";
import themes from '@themes'
import { dimensions, colors } from '@theme-variables';
import { mixins } from '@mixins'
interface Style {
  buttonStyle: TouchableOpacityProps;
  containerStyle: ViewStyle;
  settingsButton: TextStyle;
  changeLanguageButton: TextStyle;
  textStyle: TextStyle;
  changeLanguageTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  buttonStyle: {
    // borderColor: themes.mint.support,
    borderRadius: 10,
    // borderWidth: dimensions.border.small,
    width: '60%',
},
containerStyle: {
    ...mixins.containerStyle
},
settingsButton: {
    // borderColor: themes.mint.support,
    borderRadius: 10,
    // borderWidth: dimensions.border.small,
    margin: 20,
    width: '50%'
},
changeLanguageButton: {
    // borderColor: themes.mint.support,
    borderRadius: 10,
    // borderWidth: dimensions.border.small,
    margin: 20,
    width: '70%'
},
changeLanguageTextStyle: {
  textAlign: 'center',
    width: '100%',
},
textStyle: {
    ...mixins.mediumText,
    color: colors.blue,
}
});
