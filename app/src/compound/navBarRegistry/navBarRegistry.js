import React from "react";

import { Bar, Logo, Img } from "./navBarRegistry.styles";

const NavBarRegistry = () => (
  <Bar>
    <Logo>
      <Img src={`${window.location.origin}/assets/images/logo2.png`} alt="" />
    </Logo>
  </Bar>
);

export default NavBarRegistry;
