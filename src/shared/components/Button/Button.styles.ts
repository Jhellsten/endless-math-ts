import {
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { colors, dimensions } from "@theme-variables";

interface Style {
  buttonStyle: TouchableOpacityProps;
  containerStyle: ViewStyle;
  rowStyle: TextStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  buttonStyle: {
    alignItems: "center",
    borderRadius: dimensions.border.smallRadius,
    height: dimensions.button.height,
    justifyContent: "center",
    width: "100%",
    shadowColor: '#2a2a2a',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 2
  },
  containerStyle: {
    alignItems: "center",
    backgroundColor: colors.blue,
    justifyContent: "center",
  },
  rowStyle: {
    flexDirection: "row",
  },
  textStyle: {
    fontFamily: "LaoSangamMN",
    fontSize: dimensions.fontSize.medium,
  },
});
