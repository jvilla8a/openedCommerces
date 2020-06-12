import styled from "styled-components";

export const Bar = styled.div`
  background-color: #050859;
  width: 100%;
  height: 50px;
  position: sticky;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & * {
    display: inline;
  }
  & a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.div`
  width: 200px;
`;

export const Redes = styled.ul`

`;
export const Social = styled.li`
  color: #ffffff;
  font-size: 24px;
  margin: 0 10px;
  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      text-decoration: none;
    }
  }
`;
