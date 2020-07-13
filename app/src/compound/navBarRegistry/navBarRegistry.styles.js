import styled from "styled-components";

export const Bar = styled.div`
  background-color: #282c34;
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
  margin: 0 auto;
  width: 350px;
`;

export const Img = styled.img`
  width: 100%;
  position: relative;
  top: 25px;
`;
