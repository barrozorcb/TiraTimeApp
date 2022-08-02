import React from "react";

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
} from "./styles";

export function Home({ ...rest }) {
  return (
    <Container {...rest}>
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
    </Container>
  );
}
