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
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  padding-top: 16px;
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;

  padding: 0 16px;
`;

export const GamaNameTitle = styled.Text`
  padding: 16px 0;
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const GameName = styled.TextInput.attrs({
  placeholderTextColor: "white",
})`
  width: 100%;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.success};
  border-radius: 5px;
  padding: 10px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
