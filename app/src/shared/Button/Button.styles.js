import styled from "styled-components";

import { button } from "../Styles/Styles.constants";

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.a`
  font-size: 13px;
  background-color: ${(props) => button[props.variant].bg || button.primary.bg};
  padding: 6px 15px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  color: ${(props) => button[props.variant].color || button.primary.color};

  &:hover {
    background-color: ${(props) =>
      button[props.variant].bgH || button.primary.bgH};
    color: ${(props) => button[props.variant].colorH || button.primary.colorH};
  }
`;
