import React from "react";
import * as S from "./styles.ts";

import Logo from "../img/logo.svg";
import Burger from "./Burger";

type Props = {
  children?: any,
};

export default function Navbar(props: Props) {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo} width="50px" height="50px" alt="Bajaj Logo" />
      </S.Nav>
      <Burger />
      {props.children}
    </>
  );
}
