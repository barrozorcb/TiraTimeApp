import { Box, VStack, Text } from "native-base";

export function SignIn() {
  return (
    <VStack space={4} alignItems="center" flex={1} justifyContent="center">
      <Text
        fontFamily="body"
        fontWeight="600"
        fontStyle="italic"
        fontSize="3xl"
      >
        Teste
      </Text>
      <Box>NativeBase</Box>
    </VStack>
  );
}
