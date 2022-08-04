import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { Platform } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { Home } from "../screens/Home";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.success,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 88,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Create Game"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="soccer-ball-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
