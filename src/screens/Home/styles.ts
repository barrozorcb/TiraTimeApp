import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(28)}px;

  background-color: ${({ theme }) => theme.colors.success};

  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(48)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserPhoto = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;

  border-radius: 10px;
`;

export const UserLogged = styled.View`
  margin-left: 17px;
`;

export const UserGrettings = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(26)}px;
`;

export const LastGamesArea = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.header};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};

  margin: 16px 0;
`;

export const LastGamesList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() },
})``;
