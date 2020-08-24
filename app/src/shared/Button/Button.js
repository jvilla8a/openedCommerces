import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button.styles";

const ButtonComponent = (props) => {
  const { label, variant } = props;

  return <Button variant={variant}>{label}</Button>;
};

ButtonComponent.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
};

export default ButtonComponent;
