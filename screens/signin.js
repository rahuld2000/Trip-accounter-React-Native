import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ChevronLeftIcon from "react-native-heroicons/outline/ChevronLeftIcon";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Signin = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <View>
      <SafeAreaView>
        <View className="flex flex-col h-full justify-between">
          <View>
            <View className="flex flex-row px-5 items-center justify-center">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="w-10 h-10 flex justify-center items-center rounded-full bg-white border border-gray-200 absolute left-3 "
              >
                <ChevronLeftIcon size="30" />
              </TouchableOpacity>
              <Text className="font-bold text-2xl">Add Trip</Text>
            </View>

            <View className="flex justify-center items-center mt-3">
              <Image
                className="w-80 h-80"
                source={require("../assets/login.png")}
              />
            </View>

            <View className="space-y-2 mx-2">
              <Text className="text-lg font-bold mx-3">Email</Text>
              <TextInput
                value={Email}
                onChangeText={(value) => setEmail(value)}
                className="bg-white p-4 rounded-full mb-3"
              ></TextInput>
              <Text className="text-lg font-bold mx-3">Password</Text>
              <TextInput
                secureTextEntry
                value={Password}
                onChangeText={(value) => setPassword(value)}
                className="bg-white p-4 rounded-full mb-3"
              ></TextInput>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={async () => {
                if (Email && Password) {
                 await signInWithEmailAndPassword(auth,Email,Password)
                } else {
    
                }
              }}
              className="p-3 bg-green-500 mx-4 rounded-full py-5 "
            >
              <Text className=" text-center text-white text-lg font-bold">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Signin;
