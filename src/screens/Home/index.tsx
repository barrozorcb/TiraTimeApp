import React from "react";

import { LastGamesCard } from "../../components/LastGamesCard";
import { DataGameDTO } from "../../dtos/DataGameDTO";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserPhoto,
  UserLogged,
  UserGrettings,
  UserName,
  LogoutButton,
  Icon,
  LastGamesArea,
  Title,
  LastGamesList,
} from "./styles";

export function Home() {
  const dataGames: DataGameDTO[] = [
    {
      id: "1",
      nameGame: "Master 50",
      amountTeams: 3,
      dateGame: "01/01/0001",
      teams: [
        {
          nameTeam: "Time Do Paulo",
          amountVictory: 4,
        },
        {
          nameTeam: "Time do André",
          amountVictory: 2,
        },
        {
          nameTeam: "Time do João",
          amountVictory: 1,
        },
      ],
    },
    {
      id: "2",
      nameGame: "Master Soccer 60+",
      amountTeams: 4,
      dateGame: "01/01/0001",
      teams: [
        {
          nameTeam: "Time do Ubirajara",
          amountVictory: 5,
        },
        {
          nameTeam: "Time do Waldemar",
          amountVictory: 2,
        },
        {
          nameTeam: "Time do Tarcísio",
          amountVictory: 4,
        },
      ],
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserPhoto
              source={{
                uri: "https://avatars.githubusercontent.com/u/6095593?v=4",
              }}
            />
            <UserLogged>
              <UserGrettings>Olá,</UserGrettings>
              <UserName>Rafael Caldas</UserName>
            </UserLogged>
          </UserInfo>
          <LogoutButton>
            <Icon name="logout" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <LastGamesArea>
        <Title>Last Games</Title>
        <LastGamesList
          data={dataGames}
          keyExtrator={(item) => item.id}
          renderItem={({ item }) => <LastGamesCard dataGame={item} />}
        />
      </LastGamesArea>
    </Container>
  );
}
