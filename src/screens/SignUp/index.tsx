import React from "react";
import { VStack, Heading, Center, useTheme, ScrollView } from "native-base";
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
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o E-mail").email("E-mail inválido!"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter no mínimo 6 dígitos"),
  password_confirm: yup
    .string()
    .required("Informe a confirmação de senha")
    .oneOf([yup.ref("password")], "A confirmação de senha não é igual"),
});

export function SignUp() {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    resolver: yupResolver(signUpSchema),
  });
  const navigation = useNavigation();

  function handleSignUp(data: DataProps) {
    console.log(data);
    Alert.alert("Clicou no cadastrar!!");
    navigation.goBack();
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
            <VStack mt={14} mb={12}>
              <Center>
                <Heading
                  fontFamily="heading"
                  fontWeight="400"
                  fontStyle="normal"
                  fontSize="3xl"
                  color="white"
                >
                  Crie sua
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
              name="name"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />
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
                  placeholder="Senha"
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password_confirm"
              render={({ field: { onChange } }) => (
                <Input
                  secureTextEntry
                  type="password"
                  placeholder="Confirmação da Senha"
                  onChangeText={onChange}
                  errorMessage={errors.password_confirm?.message}
                />
              )}
            />

            <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
          </Center>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
