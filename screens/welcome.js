import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const Navigation=useNavigation();
  return (
    <SafeAreaView >
    <View className="flex-col justify-between h-full">
    <View className="flex justify-center items-center">
      <Image className="w-96 h-96" source={require("../assets/welcome.gif")}/>
    </View>
  <View className="space-y-4 mb-16">
  <Text className="text-4xl font-bold text-center mb-6">Trip Accounter</Text>
    <TouchableOpacity onPress={()=>Navigation.navigate("Signup")} className="p-3 bg-green-500 mx-4 rounded-full py-3 ">
        <Text className=" text-center text-white text-lg font-bold">
            Sign up
        </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>Navigation.navigate("Signin")} className="p-3 bg-green-500 mx-4 rounded-full py-3 ">
        <Text className=" text-center text-white text-lg font-bold">
            Sign in
        </Text>
    </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Welcome