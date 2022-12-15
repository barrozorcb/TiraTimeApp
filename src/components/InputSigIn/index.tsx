import React from "react";
import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl mb={4} isInvalid={invalid}>
      <NativeBaseInput
        bg="gray.200"
        fontSize={16}
        h={16}
        isInvalid={invalid}
        _invalid={{
          borderColor: "red.500",
          borderWidth: 2,
        }}
        _focus={{
          bg: "gray.200",
          borderWidth: 2,
          borderColor: "blue.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
