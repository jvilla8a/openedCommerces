import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Loader = (props) => {
  const { open } = props;

  return open ? (
    <LoaderContainer>
      <LoaderBody>
        <Img src="assets/images/loader.svg" alt="" />
        <P>Cargando...</P>
      </LoaderBody>
    </LoaderContainer>
  ) : (
    ""
  );
};

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
  background: #272727c7;
  top: 0;
  left: 0;
  display: flex;
`;

const Img = styled.img`
  margin: 0 auto;
`;

const P = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const LoaderBody = styled.div`
  text-align: center;
  margin: auto;
`;

Loader.propTypes = {
  open: PropTypes.bool,
};

export default Loader;
