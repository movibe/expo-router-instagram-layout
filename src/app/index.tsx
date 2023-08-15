import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="flex-1 justify-center ">
        <Text className="font-bold text-2xl">Home</Text>
        <Text className="text-lg">Modify app/index.tsx</Text>
      </View>
    </View>
  );
}

