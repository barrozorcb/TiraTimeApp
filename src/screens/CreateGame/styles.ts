import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(22)}px;

  background-color: ${({ theme }) => theme.colors.success};

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  padding-top: 32px;
  padding-left: 40px;
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const Form = styled.View`
  /* flex: 1;
  align-items: flex-start;

  padding: 0 16px; */
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Fields = styled.View``;
