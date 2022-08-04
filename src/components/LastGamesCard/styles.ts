import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const TitleGame = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(20)}px;
  text-align: center;
`;

export const Infos = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 18px;
`;

export const AmountTeams = styled.View`
  width: 70%;

  justify-content: space-evenly;
  align-items: center;
`;

export const AmountTeam = styled.Text`
  color: ${({ theme }) => theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(18)}px;
`;

export const DateGame = styled.Text`
  color: ${({ theme }) => theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(14)}px;

  margin-top: 12px;
`;

export const RankingVictory = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TitleRanking = styled.Text`
  color: ${({ theme }) => theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(14)}px;
`;

export const TeamName = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;

  margin-top: 8px;
`;
