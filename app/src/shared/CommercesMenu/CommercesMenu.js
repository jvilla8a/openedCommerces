import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { COMMERCES } from "../../app.constants";
import { ContextMenu, Menu, Option } from "./CommercesMenu.styles";

const CommercesMenu = (props) => {
  const { openHandler } = props;

  const getCommercesOptions = () => {
    const options = COMMERCES.map((commerce) => (
      <Menu>
        <Option className="Label">{commerce.label}</Option>
        {commerce.options.map((option) => (
          <Option>
            <Link to={`/comercios/${option.value}`}>{option.label}</Link>
          </Option>
        ))}
      </Menu>
    ));

    return options;
  };

  return (
    <ContextMenu onMouseLeave={openHandler}>
      {getCommercesOptions()}
    </ContextMenu>
  );
};

CommercesMenu.propTypes = {
  openHandler: PropTypes.func,
};

export default CommercesMenu;
