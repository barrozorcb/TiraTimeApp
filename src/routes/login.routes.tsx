import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

import { Main } from "../screens/Main";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export function LoginRoutes() {
  const theme = useTheme();

  function TabTeste() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="SigIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SigIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TabTeste" component={TabTeste} />
    </Stack.Navigator>
  );
}
