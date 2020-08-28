import React from "react";
import { PropTypes } from "prop-types";

import { Img, LoaderBody, LoaderContainer, P } from "./Loader.styles";

const Loader = (props) => {
  const { open, transparent } = props;

  return open ? (
    <LoaderContainer transparent={transparent}>
      <LoaderBody>
        <Img src="/assets/images/loader.svg" alt="Loader" />
        <P>Cargando...</P>
      </LoaderBody>
    </LoaderContainer>
  ) : (
    ""
  );
};

Loader.propTypes = {
  open: PropTypes.bool,
  transparent: PropTypes.bool,
};

export default Loader;
