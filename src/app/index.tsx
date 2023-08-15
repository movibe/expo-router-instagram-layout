 // app/Index.tsx
 import { Button } from "@/components/Button";
import { storybookEnabled } from "@/config";
import React from "react";
 import { Text, View } from "react-native";
 import { SafeAreaView } from "react-native-safe-area-context";

 

 const Index = () => {
   return (
     <View className="flex-1 items-center justify-center bg-white">
      <View className="flex-1 justify-center ">
        <Text className="font-bold text-2xl">Home</Text>
        <Text className="text-lg">Modify app/index.tsx</Text>
        <Button onPress={console.log}>Teste de botão</Button>
      </View>
    </View>
   );
 };

 let EntryPoint = Index;

 if (storybookEnabled) {
   const StorybookUI = require("../../.ondevice").default;
   EntryPoint = () => {
     return (
       <View style={{ flex: 1 }}>
         <StorybookUI />
       </View>
     );
   };
 }

 export default EntryPoint;
