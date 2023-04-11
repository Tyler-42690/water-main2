import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core'
import Settings from './screens/Settings';
import ResetPassword from './screens/ResetPassword';

const Stack = createNativeStackNavigator();

const SettingsStack = (navigation,route) => 
{
  console.log(navigation)
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" options={{ headerShown: true, title: 'Settings', headerTitleStyle: { color: global.primary } }} component={Settings} />
      <Stack.Screen name="ResetPassword" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: 'Reset Password', headerTitleStyle: { color: global.primary } }} component={ResetPassword} />
    </Stack.Navigator>
  )

}

export default SettingsStack;

//      <Stack.Screen name="StudentHome" options={{ headerShown: true, title: 'Student WaterPAL', headerTitleStyle: { color: global.primary } }} component={StudentHomeScreen} />
// <Stack.Scren name="ResetPassword" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={ResetPassword} />