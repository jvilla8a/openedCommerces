import styled from "styled-components";

export const Bar = styled.div`
  background-color: transparent;
  width: 100%;
  height: 50px;
  position: fixed;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

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

export const Nav = styled.nav``;

export const Logo = styled.div`
  width: 250px;
`;

export const Menu = styled.ul`
  padding: 0px;
`;

export const Option = styled.li`
  margin-right: 10px;
  cursor: pointer;
  color: #ffffff;
  padding: 3px 10px;
  background-color: #00000040;
  border-radius: 40px;

  &:hover {
    text-decoration: underline;
    background-color: #282c34;
  }
`;

export const Redes = styled.ul``;
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

export const Img = styled.img`
  width: 100%;
  position: relative;
  top: 15px;
`;
