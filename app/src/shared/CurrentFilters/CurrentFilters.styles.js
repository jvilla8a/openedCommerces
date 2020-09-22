import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h5`
  margin: 5px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  display: inline-block;
`;

export const Tag = styled.div`
  width: fit-content;
  background: #ffffff0d;
  padding: 2px 10px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 300;
  margin: 2px;
  display: inline-block;
  color: #ffffff;

  &:hover {
    background: #ffffff52;
    cursor: pointer;
  }
`;

export const Icon = styled.i`
  margin: 5px;
`;
