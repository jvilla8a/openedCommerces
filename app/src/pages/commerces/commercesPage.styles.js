import styled from "styled-components";

import { ORANGE } from "../../shared/Styles/Styles.constants";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
`;

export const FiltersList = styled.aside`
  width: 25%;
  max-width: 230px;
  min-width: 150px;
  position: sticky;
  top: 120px;
  height: fit-content;
  max-height: calc(100% - 200px);
  padding: 10px 0 0 20px;
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
  max-width: 1480px;
  margin: 20px auto;
  height: fit-content;
`;

export const Title = styled.h3`
  color: ${ORANGE};
  font-size: 22px;
  margin: 0px;
`;

export const SubTitle = styled.span`
  color: #505050;
  font-size: 13px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px 20px;
  position: sticky;
  top: 55px;
  z-index: 1;
  background-color: #282c34;
  display: flex;
`;

export const CategoryInfo = styled.div`
  margin-right: 20px;
  min-width: 100px;
`;
