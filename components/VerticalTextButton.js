import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { FONTS, COLORS, SIZES } from "../constants";

const VerticalTextButton = ({ containerStyle, label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        transform: [{ rotate: "-90deg" }],
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: selected ? COLORS.white : COLORS.lightGreen,
          ...FONTS.body2,
          fontSize: 16,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default VerticalTextButton;
