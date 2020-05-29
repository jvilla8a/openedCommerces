import React from "react";
import PropTypes from "prop-types";

const BasicPage = (props) => {
  const { children } = props;

  return (
    <>
      <p>Layout Working</p>
      {children}
    </>
  );
};

BasicPage.propTypes = {
  children: PropTypes.node,
};

export default BasicPage;
