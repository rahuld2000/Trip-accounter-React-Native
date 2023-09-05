import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useDispatch, useSelector } from 'react-redux';
import Home from '../screens/home';
import Addtrip from '../screens/addtrip';
import Expenses from '../screens/expenses';
import AddExpenses from '../screens/addexpense';
import Welcome from '../screens/welcome';
import Signin from '../screens/signin';
import Signup from '../screens/signup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { setUser } from '../redux/slice/user';
const Stack= createNativeStackNavigator();
export default function Navigation() {
  const {user} =useSelector(state=>state.user)
  const dispatch =useDispatch();
  onAuthStateChanged(auth,u=>{
  dispatch(setUser(u))
  })
if(user){
  return (
   
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Addtrip' component={Addtrip}/>
      <Stack.Screen name='Expenses' component={Expenses}/>
      <Stack.Screen name="AddExpense" component={AddExpenses}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
}else{
  return (
  
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Welcome' component={Welcome}/>
      <Stack.Screen name='Signin' component={Signin}/>
      <Stack.Screen name='Signup' component={Signup}/>
    </Stack.Navigator>
  </NavigationContainer>
 
  );
  }


}
