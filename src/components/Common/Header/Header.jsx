import React, { useState } from "react";

import './Header.scss'
import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";
import classNames from "classnames";
import {Search} from "../../ui";
import {SearchIcon} from "../../icons";
import {HeaderBlock, HeaderList, HeaderListItem, SubmenuList, SubmenuListItem} from "./styles";

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
    <HeaderBlock >
      <HeaderList >
        <HeaderListItem >
          { activeSearch
          ?
            <div className="search-panel">
              <Search closeSearchPanel={closeSearchPanel}/>
              <span className="close-search-panel" onClick={handlerSetSearchPanel}></span>
            </div>
          : <span className="open-search-panel" onClick={handlerSetSearchPanel}>
              <SearchIcon />
            </span>
          }
        </HeaderListItem>
        <HeaderListItem >
          <SubmenuList >
            <SubmenuListItem >
              <p>
                IMDb<span>Pro</span>
                <span className="material-icons arrow-down">keyboard_arrow_down</span>
              </p>
              <ul className="drop-down-menu">
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
              </ul>
            </SubmenuListItem>
            <SubmenuListItem >
              <span className="material-icons avatar">account_circle</span>
              <p className="user">
                Username
                <span className="material-icons arrow-down">keyboard_arrow_down</span>
              </p>
              <ul className="drop-down-menu">
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
              </ul>
            </SubmenuListItem>
          </SubmenuList>
        </HeaderListItem>
        <li className="burger-menu__action burger-menu__item">
          <span className="burger-menu__action_open" onClick={handlerShowMenu}></span>
        </li>
        <li className={liOpenBurgerClass}>
          <span className="burger-menu__action_close" onClick={handlerShowMenu}></span>
          <BurgerMenu handlerShowMenu={handlerShowMenu} />
        </li>
      </HeaderList>
    </HeaderBlock>
  )
}