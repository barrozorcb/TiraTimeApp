import React from "react";
import {
  VStack,
  Heading,
  Center,
  useTheme,
  Text,
  Button as NativeBaseButton,
  ScrollView,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/InputSigIn";
import { Button } from "../../components/ButtonSignIn";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

type DataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required("Informe o E-mail").email("E-mail inválido!"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter no mínimo 6 dígitos"),
});

export function SignIn() {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    resolver: yupResolver(signInSchema),
  });
  const navigation = useNavigation();

  function handleSignIn(data: DataProps) {
    console.log(data);
    //Alert.alert("Clicou no entrar!!");
  }

  function handleCadastar() {
    Alert.alert("Clicou no cadastar!!");
    navigation.navigate("SignUp");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.green[500] }}>
      <ScrollView w="full" h="full">
        <VStack flex={1} bgColor="green.500" px={10}>
          <Center>
            <Icon
              name="soccer-field"
              size={120}
              color="white"
              style={{ marginTop: 48 }}
            />
            <VStack mt={24} mb={16}>
              <Center>
                <Heading
                  fontFamily="heading"
                  fontWeight="400"
                  fontStyle="normal"
                  fontSize="3xl"
                  color="white"
                >
                  Entre com sua
                </Heading>
                <Heading
                  fontFamily="heading"
                  fontWeight="400"
                  fontStyle="normal"
                  fontSize="3xl"
                  color="white"
                >
                  conta
                </Heading>
              </Center>
            </VStack>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="E-mail"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <Input
                  secureTextEntry
                  type="password"
                  placeholder="Password"
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />
            <Text
              color="gray.200"
              fontSize="md"
              fontFamily="body"
              fontStyle="normal"
              fontWeight="400"
              mt={4}
            >
              Não possui cadastro?
            </Text>
            <NativeBaseButton
              size="lg"
              _text={{ color: "blue.700" }}
              variant="link"
              onPress={handleCadastar}
            >
              Cadastre-se
            </NativeBaseButton>
          </Center>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
