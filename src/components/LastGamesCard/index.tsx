import React, { useState } from "react";
import { Alert, Modal, Text } from "react-native";
import { DataGameDTO } from "../../dtos/DataGameDTO";

import {
  Container,
  TitleGame,
  Infos,
  AmountTeams,
  AmountTeam,
  DateGame,
  RankingVictory,
  TitleRanking,
  TeamName,
} from "./styles";

interface Props {
  dataGame: DataGameDTO;
}

export function LastGamesCard({ dataGame }: Props) {
  const [showResumeGame, setShowResumeGame] = useState(false);

  function handleClickCard() {
    setShowResumeGame(true);
  }

  return (
    <Container onPress={handleClickCard}>
      <TitleGame>{dataGame.nameGame}</TitleGame>
      <Infos>
        <AmountTeams>
          <AmountTeam>{dataGame.amountTeams} Times</AmountTeam>
          <DateGame>{dataGame.dateGame}</DateGame>
        </AmountTeams>
        <RankingVictory>
          <TitleRanking>Victorious Ranking</TitleRanking>
          {dataGame.teams.map((team) => (
            <TeamName>
              {team.nameTeam} - {team.amountVictory} victories
            </TeamName>
          ))}
          {/* <TeamName>1º TeamName - 3 victories</TeamName>
          <TeamName>2º TeamName - 2 victories</TeamName>
          <TeamName>3º TeamName - 1 victory</TeamName> */}
        </RankingVictory>
      </Infos>
      <Modal visible={showResumeGame}>
        <Text>Teste</Text>
      </Modal>
    </Container>
  );
}
