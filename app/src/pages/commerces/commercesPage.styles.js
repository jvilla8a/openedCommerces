import styled from "styled-components";

import { ORANGE } from "../../shared/Styles/Styles.constants";

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
  width: 30%;
  border-radius: 4px;
  -webkit-box-shadow: 20px 0px 5px -15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 20px 0px 5px -15px rgba(0, 0, 0, 1);
  box-shadow: 20px 0px 5px -15px rgba(0, 0, 0, 1);
  max-width: 230px;
  min-width: 150px;
  position: sticky;
  top: 101px;
  height: fit-content;
  max-height: calc(100% - 200px);
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
  font-size: 22px;
  margin-top: 0px;
`;
