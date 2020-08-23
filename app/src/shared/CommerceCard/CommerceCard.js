import React from "react";

import {
  Card,
  Avatar,
  Title,
  Header,
  Banner,
  Body,
  Subtitle,
  Action,
  Button,
  TagsContainer,
  Tag,
} from "./CommerceCard.styles";

const CommerceCard = () => (
  <Card>
    <Header>
      <Banner src="http://placehold.jp/006699/cccc00/400x200.png" />
      <Avatar src="http://placehold.jp/150x150.png" />
    </Header>
    <Body>
      <Title>Nombre del Negocio</Title>
      <Subtitle>Categoría</Subtitle>
      <TagsContainer>
        <Tag>Domicilio</Tag>
        <Tag>Transferencia</Tag>
      </TagsContainer>
    </Body>
    <Action>
      <Button>Ver Información</Button>
    </Action>
  </Card>
);

export default CommerceCard;
