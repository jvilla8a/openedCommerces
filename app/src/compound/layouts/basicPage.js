import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import NavBar from "../navBar";
import NavBarRegistry from "../navBarRegistry";
import Footer from "../footer";

const BasicPage = (props) => {
  const { children } = props;

  return (
    <Container>
      <NavBarRegistry />
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
`;

export default BasicPage;
