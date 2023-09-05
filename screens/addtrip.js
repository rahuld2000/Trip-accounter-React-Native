import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChevronLeftIcon from 'react-native-heroicons/outline/ChevronLeftIcon'
import { useNavigation } from '@react-navigation/native'
import { addDoc } from 'firebase/firestore'
import { tripsRef } from '../config/firebase'
import { useSelector } from 'react-redux'
export default function Addtrip() {
    const navigation=useNavigation();
    const[place,setPlace] =useState("");
    const[country,setCountry]=useState("");
    const {user}=useSelector(state=>state.user)
    return (
        
        <View>
       
            <SafeAreaView >
          
            <View className="flex flex-col h-full justify-between">
        
            <View>
          <View className="flex flex-row px-5 items-center justify-center">
                <TouchableOpacity onPress={()=>navigation.navigate("Home")} className="w-10 h-10 flex justify-center items-center rounded-full bg-white border border-gray-200 absolute left-3 ">
                    <ChevronLeftIcon size="30" />
                </TouchableOpacity>
                <Text className="font-bold text-2xl">Add Trip</Text>
                 </View>
                
                <View className="flex justify-center items-center mt-3">
                    <Image className="w-80 h-80" source={require("../assets/4.png")} />
                </View>
                <KeyboardAvoidingView enabled={true} behavior={"padding"}>
                <View className="space-y-2 mx-2">
      
                    <Text className="text-lg font-bold">
                        Where on Earth
                    </Text>
                    <TextInput value={place} onChangeText={value=>setPlace(value)} className="bg-white p-4 rounded-full mb-3"></TextInput>
                    <Text className="text-lg font-bold">Which Country</Text>
                    <TextInput value={country} onChangeText={value=>setCountry(value)} className="bg-white p-4 rounded-full mb-3"></TextInput>
                 
               
                </View>
                </KeyboardAvoidingView>
                </View>
              
                <View>
                    <TouchableOpacity  onPress={ async ()=>{
                            if(place && country){
                                let doc = await addDoc(tripsRef,{
                                    place,
                                    country,
                                    userId:user.uid
                                })
                                if(doc && doc.id){
                                    navigation.goBack();
                                }
                            }else{
                      
                            }
                        }} className="p-3 bg-green-500 mx-4 rounded-full py-5 ">
                        <Text className=" text-center text-white text-lg font-bold">Add Trip</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>

        </View>
      
    )
}