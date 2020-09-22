import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const Title = styled.h5`
  margin: 10px 2px;
  color: #ffffff;
  font-size: 13px;
`;

export const Filter = styled.div`
  width: fit-content;
  font-size: 12px;
  margin: 5px;
  color: #ffffff;
  display: flex;
  align-items: center;

  & > * {
    cursor: pointer;
  }

  & label {
    word-break: break-all;
  }
`;

export const Icon = styled.i`
  margin: 5px;
`;

export const Comment = styled.span`
  display: block;
  text-align: center;
  font-size: 11px;
  color: #505050;
`;
