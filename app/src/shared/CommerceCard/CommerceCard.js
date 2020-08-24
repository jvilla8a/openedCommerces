import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import {
  Card,
  Avatar,
  Title,
  Header,
  Banner,
  Body,
  Subtitle,
  Action,
  TagsContainer,
  Tag,
} from "./CommerceCard.styles";

const CommerceCard = (props) => {
  const { banner, avatar, title, category, tags } = props;
  return (
    <Card>
      <Header>
        <Banner src={banner} />
        <Avatar src={avatar} />
      </Header>
      <Body>
        <Title>{title}</Title>
        <Subtitle>{category}</Subtitle>
        <TagsContainer>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TagsContainer>
      </Body>
      <Action>
        <Button label="Ver Información" variant="primary" />
      </Action>
    </Card>
  );
};

CommerceCard.defaultProps = {
  banner: "http://placehold.jp/006699/cccc00/400x200.png",
  avatar: "http://placehold.jp/150x150.png",
  title: "Nombre del Negocio",
  category: "Categoría",
  tags: ["Domicilio", "Transferencia"],
};

CommerceCard.propTypes = {
  banner: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default CommerceCard;
