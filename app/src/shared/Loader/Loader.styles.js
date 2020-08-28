import styled from "styled-components";

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
  background: ${(props) => (props.transparent ? "#272727c7" : "#272727")};
  top: 0;
  left: 0;
  display: flex;
`;

export const Img = styled.img`
  margin: 0 auto;
`;

export const P = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const LoaderBody = styled.div`
  text-align: center;
  margin: auto;
`;
