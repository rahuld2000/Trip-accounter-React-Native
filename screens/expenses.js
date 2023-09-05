import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyList from "../components/emptyList";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { expenses } from "../config/firebase";
import { getDocs, query, where } from "firebase/firestore";

let items = [{
    id: 1,
    title: "yefhr",
    amount: 300,
    category: "cnrhc"
},
{
    id: 2,
    title: "ythvv",
    amount: 564,
    category: "yjvt"
},
{
    id: 3,
    title: "fjvt",
    amount: 465,
    category: "vhuei"
},
{
    id:4,
    title:"frf",
    amount:748,
    category:"f4f4"
}

]

let Expenses = (props) => {
    const { id, place, country } = props.route.params;
    const navigation = useNavigation();

    const isFocused= useIsFocused();

    const[expense,setexpenses]=useState([]);
    
   
    const fetchexpenses= async()=>{
      const q= query(expenses,where("userId", "==", id))
      const querysnapshot = await getDocs(q);
      let data=[];
      querysnapshot.forEach(doc=>{
        data.push({...doc.data(), id: doc.id})
    
      })
      setexpenses(data)
    }
    useEffect(()=>{
      
      fetchexpenses();
    },[isFocused])

    return (
        <SafeAreaView>
            <View className="flex-col justify-between p-2 px-3 items-center">
                <Text className="text-2xl font-extrabold shadow-sm">
                    {place}
                </Text>
                <Text>{country}</Text>

            </View>
            <View className="flex items-center rounded-md ">
                <Image source={require("../assets/7.png")} className="w-72 h-72" />
            </View>
            <View className="flex justify-between flex-row p-3  items-center">
                <Text className="text-xl font-bold">
                    Expenses
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("AddExpense",{id,place,country})} className="w-28 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center">
                    <Text>
                        Add Expenses
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex items-center">
                <FlatList data={expense}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<EmptyList />}
                    keyExtractor={items => items.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity >


                                <View className="flex-row justify-between p-3 mb-3 items-center w-96 bg-red-200 rounded-2xl" >
                                    <View>
                                        <Text className="font-extrabold">{item.what}</Text>
                                        <Text>{item.category}</Text>
                                    </View>
                                    <Text className="text-gray-700 text-xs">{item.amount}</Text>
                                </View>


                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </SafeAreaView>


    )
}
export default Expenses;