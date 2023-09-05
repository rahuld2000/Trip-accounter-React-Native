
import React from 'react'
import Navigation from './components/navigation'
import { Provider } from 'react-redux'
import store from './redux/store'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <Provider store={store}>
    <StatusBar/>
   <Navigation/>
   </Provider>
  )
}

export default App