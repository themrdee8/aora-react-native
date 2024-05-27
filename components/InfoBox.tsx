import { View, Text } from "react-native";
import React from "react";

const InfoBox = ({ title, containerStyles, textStyles, subtitle }: any) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${textStyles}`}>
        {title}
      </Text>
      <Text className="text-sm text-gray-100 font-pregular text-center">
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
