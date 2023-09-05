import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import banner from "../assets/banner.png"
import randomImage from "../assets/randomImage";
import EmptyList from "../components/emptyList";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { auth, tripsRef } from "../config/firebase";
import { useSelector } from "react-redux";
import { doc, getDoc, getDocs, query, where } from "firebase/firestore";


let Home = () => {

const isFocused= useIsFocused();

const[trips,settrips]=useState([]);
  const navigation=useNavigation();
const {user}= useSelector(state=>state.user);
const fetchtrip= async()=>{
  const q= query(tripsRef,where("userId", "==", user.uid))
  const querysnapshot = await getDocs(q);
  let data=[];
  querysnapshot.forEach(doc=>{
    data.push({...doc.data(), id: doc.id})

  })
  settrips(data)
}
useEffect(()=>{
  
  fetchtrip();
},[isFocused])


  return (
    <SafeAreaView>
      <View className="flex justify-between flex-row p-2 px-3 items-center">
        <Text className="text-2xl font-extrabold shadow-sm">
          Trip Accounter
        </Text>
        <TouchableOpacity onPress={()=>{auth.signOut()}} className="w-24 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
          <Text className="text-gray-700">Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex items-center bg-blue-200 rounded-md m-3 mx-5 ">
        <Image source={banner} className="w-60 h-60" />
      </View>
      <View className="flex justify-between flex-row p-3  items-center">
        <Text className="text-xl font-bold">
          Recent Trips
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Addtrip")} className="w-24 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center">
          <Text>
            Add Trips
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex items-center">
        <FlatList data={trips}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList/>}
          keyExtractor={items => items.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate("Expenses",{...item})} className="w-[185] h-52 m-2 bg-white border border-gray-200 rounded-2xl">
                <View>
                <View className="flex items-center">
                <Image className="w-32 h-32" source={randomImage()} />
                </View>
                 <View className="p-3 mt-3">
                 <Text className="font-bold">{item.place}</Text>
                  <Text className="text-gray-700 text-xs">{item.country}
                  </Text>
                 </View>
                 
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </SafeAreaView>


  )
}
export default Home;