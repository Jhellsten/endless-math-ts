import { width, colors } from '@theme-variables';
import {mixins} from '@mixins';
import { ViewStyle, TextStyle, StyleSheet, Platform } from "react-native";

interface Style {
  buttonContainerStyle: ViewStyle;
  containerStyle: ViewStyle;
  iconStyle: TextStyle;
  innerContainerStyle: ViewStyle;
  itemStyle: ViewStyle;
  scrollContainerStyle: ViewStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  buttonContainerStyle: {
    borderRadius: 15,
    marginBottom: '5%',
    width: width - 40
},
containerStyle: {
    ...mixins.containerStyle,
    backgroundColor: colors.white,
},
iconStyle: {
    alignSelf: 'center',
    marginTop: 0
},
innerContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
},
itemStyle: {
    width: width * 0.8
},
scrollContainerStyle: {
    marginTop: Platform.OS === 'ios' ? 30 : 40,
    paddingBottom: Platform.OS === 'ios' ? 30 : 40
},
textStyle: {
    ...mixins.mediumText,
    marginBottom: '10%'
}
});
