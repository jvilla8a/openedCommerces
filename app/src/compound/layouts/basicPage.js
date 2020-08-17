import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import NavBar from "../navBar";
import Footer from "../footer";

const BasicPage = (props) => {
  const { children } = props;

  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
};

BasicPage.propTypes = {
  children: PropTypes.node,
};

const Container = styled.div`
  height: 100vh;
  padding-top: 1px;
  box-sizing: border-box;
`;

export default BasicPage;
