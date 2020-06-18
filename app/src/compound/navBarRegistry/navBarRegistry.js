import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Bar,
  Logo,
  Img
} from "./navBarRegistry.styles";

const NavBarRegistry = () => {
  const [open, setOpen] = useState(false);

  const commercesClickHandler = () => {
    setOpen(!open);
  };

  const onMouseEnterHandler = () => {
    setOpen(true);
  };

  return (
    <Bar>
      <Logo>
        <Img src="assets/images/logo1.svg" alt=""/>
      </Logo>
    </Bar>
  );
};

export default NavBarRegistry;
