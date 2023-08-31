import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Guia"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Guia" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
