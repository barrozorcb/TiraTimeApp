import React from "react";

import {
  Container,
  Header,
  Title,
  Content,
  GamaNameTitle,
  GameName,
} from "./styles";

export function CreateGame() {
  return (
    <Container>
      <Header>
        <Title>Crie seu jogo {"\n"} e se divirta</Title>
      </Header>
      <Content>
        <GamaNameTitle>Nome do Jogo</GamaNameTitle>
        <GameName placeholder="Nome do Jogo" />
      </Content>
    </Container>
  );
}
