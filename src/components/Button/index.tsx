import React from "react";
import { Text, TouchableOpacity } from "react-native";

export type ButtonProps = {
  onPress?: () => void;
  children: string;
  disabled?: boolean;
};

export const Button = ({ onPress, children, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      className="bg-green-400 h-10 justify-center  items-center rounded-md  mt-3"
      onPress={onPress}
    >
      <Text className="text-lg font-bold text-gray-900">{children}</Text>
    </TouchableOpacity>
  );
};
