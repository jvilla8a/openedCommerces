import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Bar,
  Logo,
  Nav,
  Menu,
  Option,
  ContextMenu,
  MenuC,
  OptionC,
} from "./navBar.styles";
import InputText from "../../shared/InputText";

const NavBar = () => {
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
        <Link to="/">Logo</Link>
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
      <InputText placeholder="Buscar Comercios" />
      {open && (
        <ContextMenu
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={commercesClickHandler}
        >
          <MenuC>
            <OptionC>
              <Link to="/">Category 0</Link>
            </OptionC>
            <OptionC>
              <Link to="/comercios">Category 1</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 2</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 3</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 4</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 5</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 6</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 7</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 8</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 9</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 10</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 11</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 12</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 13</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 14</Link>
            </OptionC>
            <OptionC>
              <Link to="/registro">Category 15</Link>
            </OptionC>
          </MenuC>
        </ContextMenu>
      )}
    </Bar>
  );
};

export default NavBar;
