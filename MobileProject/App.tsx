import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator()

export default function app() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='index'>

      </stack.Navigator>
    </NavigationContainer>
  )
}
