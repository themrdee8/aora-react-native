import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }: any) => {
  return (
    <View className="items-center justify-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />

      <Text className="text-xl text-center mt-2 text-white font-psemibold">
        {title}
      </Text>
      <Text className="text-sm font-pmedium text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="my-5 w-full"
      />
    </View>
  );
};

export default EmptyState;
