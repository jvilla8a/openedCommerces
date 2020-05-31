import React from "react";
import PropTypes from "prop-types";

import NavBar from "../navBar";

const BasicPage = (props) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

BasicPage.propTypes = {
  children: PropTypes.node,
};

export default BasicPage;
