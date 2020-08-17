import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Bar,
  Logo,
  Nav,
  Menu,
  Option,
  Redes,
  Social,
  Img,
} from "./navBar.styles";
import CommercesMenu from "../../shared/CommercesMenu";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const commercesClickHandler = () => {
    setOpen(!open);
  };

  return (
    <Bar>
      <Logo>
        <Link to="/">
          <Img
            src={`${window.location.origin}/assets/images/logo2.png`}
            alt="EncuentraK Logo"
          />
        </Link>
      </Logo>
      <Nav>
        <Menu>
          <Option>
            <Link to="/">Inicio</Link>
          </Option>
          <Option onClick={commercesClickHandler}>Comercios</Option>
          <Option>
            <Link to="/registro">Registro</Link>
          </Option>
        </Menu>
      </Nav>
      <Redes>
        <Social>
          {/* <a href="https://www.facebook.com" target="_blank"> */}
          <i className="fab fa-facebook-square" />
          {/* </a> */}
        </Social>
        <Social>
          {/* <a href="https://www.facebook.com" target="_blank"> */}
          <i href="" className="fab fa-instagram" />
          {/* </a> */}
        </Social>
        <Social>
          {/* <a href="https://www.facebook.com" target="_blank"> */}
          <i href="" className="fab fa-twitter-square" />
          {/* </a> */}
        </Social>
      </Redes>
      {open && <CommercesMenu openHandler={commercesClickHandler} />}
    </Bar>
  );
};

export default NavBar;
