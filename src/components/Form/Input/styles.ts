import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput).attrs({
  placeholderTextColor: "gray",
})`
  width: 100%;
  padding: 16px 18px;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 5px;

  margin-bottom: 8px;
`;
