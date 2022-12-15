import React from "react";
import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      h={16}
      bg="blue.700"
      _pressed={{
        bgColor: "blue.900",
      }}
      {...rest}
    >
      <Text
        color="white"
        fontSize="xl"
        fontFamily="heading"
        fontWeight="400"
        fontStyle="normal"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}
