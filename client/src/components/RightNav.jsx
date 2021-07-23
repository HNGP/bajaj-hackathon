import React from "react";
import * as S from "./styles.ts";
import Logo from "../img/logo.svg";

import { BrowserRouter as Router, NavLink } from "react-router-dom";

type Props = {
  open: boolean,
};

function RightNav(props: Props) {
  return (
    <Router>
      <S.Ul open={props.open}>
        <S.LogoUl src={Logo} alt={"Gustavo Scarpim"} />

        <NavLink
          to=""
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          <li>Appointments</li>
        </NavLink>
        <NavLink
          to="/menu2"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          <li>Covid-19</li>
        </NavLink>
        <NavLink
          to="/menu3"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          <li>Services</li>
        </NavLink>
      </S.Ul>
    </Router>
  );
}

export default RightNav;
