import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChevronLeftIcon from 'react-native-heroicons/outline/ChevronLeftIcon'
import { useNavigation } from '@react-navigation/native'
import { category } from '../components/categories'
import { addDoc } from 'firebase/firestore'
import { expenses } from '../config/firebase'


export default function AddExpenses(props) {
    let {id} =props.route.params;
    const navigation=useNavigation();
    const[what,setwhat] =useState("");
    const[amount,setamount]=useState("");
    const[value,setvalue]=useState("");
    return (
        
        <View>
       
            <SafeAreaView >
          
            <View className="flex flex-col h-full justify-between">
        
            <View>
          <View className="flex flex-row px-5 items-center justify-center">
                <TouchableOpacity onPress={()=>navigation.navigate("Home")} className="w-10 h-10 flex justify-center items-center rounded-full bg-white border border-gray-200 absolute left-3 ">
                    <ChevronLeftIcon size="30" />
                </TouchableOpacity>
                <Text className="font-bold text-2xl">Add Expenses</Text>
                 </View>
                
                <View className="flex justify-center items-center mt-3">
                    <Image className="w-80 h-80" source={require("../assets/4.png")} />
                </View>
       
                <View className="space-y-2 mx-2">
      
                    <Text className="text-lg font-bold">
                       For What</Text>
                    <TextInput value={what} onChangeText={value=>setwhat(value)} className="bg-white p-4 rounded-full mb-3"></TextInput>
                    <Text className="text-lg font-bold">How much</Text>
                    <TextInput value={amount} onChangeText={value=>setamount(value)} className="bg-white p-4 rounded-full mb-3"></TextInput>
                 
               
                </View>
                <View>
                    <Text className="font-bold text-lg mx-2">Category</Text>
                    <View className="flex-row w-72 flex-wrap mx-3 ">
                   {
                    category.map(cat=>{
                        let bgcolor="bg-white";
                        if(cat.id==value){
                            bgcolor="bg-green-200"
                        }
                        return(
                            <TouchableOpacity onPress={()=>setvalue(cat.id)} className={`${bgcolor} p-2 m-1 rounded-2xl`} key={cat.id}>
                            <Text> {cat.category}</Text>
                            </TouchableOpacity>
                           
                        )
                    })
                   }
                   </View>
                </View>
              
                </View>
              
                <View>
                    <TouchableOpacity onPress={async ()=>{
                            if(what && amount){
                               let doc = await addDoc(expenses,{
                                what,
                                amount,
                              value,
                              userId:id
                               })
                               if(doc && doc.id){
                                navigation.goBack();
                               }
                            }else{
                   
                            }
                        }} className="p-3 bg-green-500 mx-4 rounded-full py-5 ">
                        <Text  className=" text-center text-white text-lg font-bold">Add Trip</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>

        </View>
      
    )
}