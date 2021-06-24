import React, { useState } from "react";

import './Header.scss'
import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";
import classNames from "classnames";
import {Search} from "../../ui";
import {SearchIcon} from "../../icons";

export default function Header() {

  const [openBurger, setOpenBurger] = useState(false)
  const [activeSearch, setActiveSearch] = useState(false)

  const handlerShowMenu = () => {
    setOpenBurger(!openBurger)
    return !openBurger ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }

  const liOpenBurgerClass = classNames({
    "header-burger-menu header-burger-menu__active burger-menu__item": openBurger,
    "header-burger-menu burger-menu__item": !openBurger,
  })

  const handlerSetSearchPanel = () => setActiveSearch(!activeSearch)
  const closeSearchPanel = item => setActiveSearch(item)


  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-list__item" >
          { activeSearch
          ?
            <>
              <Search closeSearchPanel={closeSearchPanel}/>
              <span className="close-search-panel" onClick={handlerSetSearchPanel}></span>
            </>
          : <span className="open-search-panel" onClick={handlerSetSearchPanel}>
              <SearchIcon />
            </span>
          }
        </li>
        <li className="header-list__item">
          <ul className="submenu-list">
            <li className="submenu-list__item">
              <p className="submenu-title">
                IMDb<span>Pro</span>
                <span className="material-icons arrow-down">keyboard_arrow_down</span>
              </p>
              <ul className="drop-down-menu">
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
              </ul>
            </li>
            <li className="submenu-list__item">
              <span className="material-icons avatar">account_circle</span>
              <p className="submenu-title submenu-title__user">
                Username
                <span className="material-icons arrow-down">keyboard_arrow_down</span>
              </p>
              <ul className="drop-down-menu">
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="burger-menu__action burger-menu__item">
          <span className="burger-menu__action_open" onClick={handlerShowMenu}></span>
        </li>
        <li className={liOpenBurgerClass}>
          <span className="burger-menu__action_close" onClick={handlerShowMenu}></span>
          <BurgerMenu />
        </li>
      </ul>
    </header>
  )
}