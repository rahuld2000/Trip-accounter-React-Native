import React from "react";
import { View,Text } from "react-native";
export default Emptylist=()=>{
    return(
        <View className="h-96 flex items-center justify-center ">
           <Text className="text-xl font-semibold">
            No Trip Added!
           </Text>
        </View>
    )
}