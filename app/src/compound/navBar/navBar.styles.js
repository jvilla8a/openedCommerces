import styled from "styled-components";

export const Bar = styled.div`
  background-color: #ffffff;
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
    color: #000000;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Nav = styled.nav``;

export const Logo = styled.div`
  width: 200px;
`;

export const Menu = styled.ul`
  padding: 0px;
`;

export const Option = styled.li`
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContextMenu = styled.div`
  max-width: 60%;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const MenuC = styled.ul`
  padding: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 20px;
`;
export const OptionC = styled.li`
  width: 33%;
`;
