import React from "react";
import { VStack, HStack, useTheme, Text, Box, Image } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";
export function Main() {
  const theme = useTheme();
  return (
    <VStack space={4} alignItems="center" backgroundColor="gray.200" flex={1}>
      <Box
        w="full"
        h={RFPercentage(20)}
        bg="green.500"
        justifyContent="center"
        safeAreaTop={10}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <Box ml={4}>
            <HStack alignItems="center">
              <Image
                size={60}
                borderRadius={100}
                source={{
                  uri: "https://avatars.githubusercontent.com/u/6095593?v=4",
                }}
                alt="Avatar"
              />
              <Text ml={4}>Nome usuário</Text>
            </HStack>
          </Box>
          <Box mr={4}>
            <MaterialIcons name="logout" size={24} />
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
}
