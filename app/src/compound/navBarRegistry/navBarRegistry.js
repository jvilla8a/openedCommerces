import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Bar,
  Logo,
  Redes,
  Social,
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
        <Link to="/registro">Logo</Link>
      </Logo>
      <Redes>
        <Social>
          {/* <a href="https://www.facebook.com" target="_blank"> */}
            <i class="fab fa-facebook-square"></i>
          {/* </a> */}
        </Social>
        <Social>
          {/* <a href="https://www.facebook.com" target="_blank"> */}
            <i href="" class="fab fa-instagram" ></i>
          {/* </a> */}
        </Social>
        <Social>
          {/* <a href="https://www.facebook.com" target="_blank"> */}
            <i href="" class="fab fa-twitter-square"></i>
          {/* </a> */}
        </Social>
      </Redes>
    </Bar>
  );
};

export default NavBarRegistry;
