import styled from "styled-components";

export const InputContainer = styled.div`
  text-align: left;
  margin: 5px;
`;

export const InputError = styled.span`
  color: #cc0000;
  font-size: 11px;
  margin-top: 3px;
  margin-left: 6px;
  display: block;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 15px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #cccccc;
  height: 30px;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 5px;

  &:focus {
    outline: -webkit-focus-ring-color auto 0px;

    & + ${InputLabel} {
      top: -4px;
      font-weight: bold;
      color: blue;
    }
  }
`;
