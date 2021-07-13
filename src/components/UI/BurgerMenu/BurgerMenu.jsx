import React from "react";

import Sidebar from "../Sidebar";
import {BurgerMenuBlock} from "./styles";

export default function BurgerMenu({handlerShowMenu}) {
  return (
    <BurgerMenuBlock>
      <Sidebar handlerShowMenu={handlerShowMenu} />
    </BurgerMenuBlock>
  )
}