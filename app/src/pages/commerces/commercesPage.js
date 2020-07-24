import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { ORANGE } from "../../shared/Styles/Styles.constants";

const CommercesPage = (props) => {
  const {
    match: {
      params: { category },
    },
  } = props;

  return (
    <Container>
      <Title>{category.replace("-", " ")}</Title>
      <Content>
        <FiltersList>
          <CurrentFilters>
            <Filter>Whatever</Filter>
            <Filter>You</Filter>
            <Filter>Looking</Filter>
            <Filter>For</Filter>
          </CurrentFilters>
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
        </FiltersList>
        <CardsHolder>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsHolder>
      </Content>
    </Container>
  );
};

export const Container = styled.div`
  box-sizing: border-box;
  margin: 20px 0px;
  padding: 0px 20px;
  margin-top: 100px;
  width: 100%;
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
`;

export const FiltersList = styled.aside`
  background-color: #2c313a;
  width: 200px;
  border-radius: 4px;
  width: 30%;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  max-width: 350px;
`;

export const CardsHolder = styled.div`
  width: 100%;
  border-radius: 4px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 200px;
  height: 250px;
  background-color: #ffffff;
  margin: 5px;
  border-radius: 4px;
`;

export const Title = styled.h3`
  color: ${ORANGE};
  font-size: 20px;
`;

export const CurrentFilters = styled.div``;

export const Filters = styled.div``;

export const Filter = styled.div``;

CommercesPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
    }),
  }),
};

export default withRouter(CommercesPage);
