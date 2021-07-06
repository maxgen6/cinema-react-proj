import React from "react";

import './BurgerMenu.scss'
import Sidebar from "../Sidebar";

export default function BurgerMenu({handlerShowMenu}) {
  return (
    <div className="burger-menu">
      <Sidebar handlerShowMenu={handlerShowMenu} />
    </div>
  )
}