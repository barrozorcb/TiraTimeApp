import React from "react";
import {
  VStack,
  HStack,
  Text,
  Box,
  Image,
  Button,
  ScrollView,
  Pressable,
  Badge,
  Spacer,
  Flex,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function Main() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function handleLogout() {
    navigation.navigate("SignIn");
  }
  return (
    <VStack alignItems="center" backgroundColor="gray.200" flex={1}>
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
                size={70}
                borderRadius={100}
                source={{
                  uri: "https://avatars.githubusercontent.com/u/6095593?v=4",
                }}
                alt="Avatar"
              />
              <VStack>
                <Text
                  ml={4}
                  fontFamily="heading"
                  fontWeight="400"
                  fontStyle="normal"
                  fontSize="md"
                  color="gray.200"
                >
                  Bem vindo,
                </Text>
                <Text
                  ml={4}
                  fontFamily="heading"
                  fontWeight="400"
                  fontStyle="normal"
                  fontSize="xl"
                  color="white"
                >
                  Nome usuário
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box mr={4}>
            <Button variant="unstyled" onPress={handleLogout}>
              <MaterialIcons name="logout" size={24} />
            </Button>
          </Box>
        </HStack>
      </Box>
      <ScrollView w="full" h="full">
        <Box alignItems="center" mx={6} my={4}>
          <Pressable
            onPress={() => console.log("I'm Pressed")}
            rounded="8"
            overflow="hidden"
            borderWidth="1"
            borderColor="coolGray.300"
            shadow="3"
            bg="coolGray.100"
            p="5"
          >
            <Box>
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: "white",
                  }}
                  variant="solid"
                  rounded="4"
                >
                  Business
                </Badge>
                <Spacer />
                <Text fontSize={10} color="coolGray.800">
                  1 month ago
                </Text>
              </HStack>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl"
              >
                Marketing License
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerfull time-saving tools for creating email delivery
                and collecting marketing data
              </Text>
              <Flex>
                <Text
                  mt="2"
                  fontSize={12}
                  fontWeight="medium"
                  color="darkBlue.600"
                >
                  Read More
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>
      </ScrollView>
    </VStack>
  );
}
