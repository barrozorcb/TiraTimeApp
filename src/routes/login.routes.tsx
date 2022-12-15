import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "native-base";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const Stack = createNativeStackNavigator();

export function LoginRoutes() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="SigIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SigIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
