import { View, Text } from 'react-native'
import React from 'react'

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import Details from './Screens/Details'

export type RootStackParamList = {
  Home:undefined,
  Details: {product:Product}
} 

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Home'
          }}
        />
      
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: 'Smart Phones'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App