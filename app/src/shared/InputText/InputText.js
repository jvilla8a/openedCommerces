import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  InputContainer,
  InputError,
  InputLabel,
  Input,
} from "./InputText.styles";

const InputText = (props) => {
  const { placeholder, value, error, name, id, required, type } = props;

  return (
    <InputContainer>
      <Input value={value} name={name} id={id} type={type} />
      <InputLabel>{placeholder}</InputLabel>
      <InputError>{error}</InputError>
    </InputContainer>
  );
};

InputText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default InputText;
