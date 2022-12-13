import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "styled-components";

import { InputForm } from "../../components/Form/InputForm";
import { Container, Header, Title, Form, Fields } from "./styles";

export function CreateGame() {
  const theme = useTheme();
  const { control } = useForm();

  const [selectedValue, setSelectedValue] = useState();

  const placeholder = {
    label: "Select a sport...",
    value: null,
    color: "#9EA0A4",
  };

  return (
    <Container>
      <Header>
        <Title>Crie, Sorteie {"\n"}e Divirta-se</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm
            name="gameName"
            control={control}
            placeholder="Nome para o jogo"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={"adsad"}
          />
          <InputForm
            name="modality"
            control={control}
            placeholder={"Esporte a ser praticado"}
            autoCapitalize="sentences"
            error={"sdadsa"}
          />
          <InputForm
            name="quantityPerTeam"
            control={control}
            placeholder={"Quantidade de jogadores por time"}
            keyboardType={"numeric"}
            error={"sdadsa"}
          />
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </Fields>
      </Form>
    </Container>
  );
}
