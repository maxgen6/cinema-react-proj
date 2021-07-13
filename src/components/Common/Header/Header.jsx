import React, { useState } from "react";

import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";
import { Search } from "../../ui";
import {SearchIcon} from "../../icons";
import {
  BurgerMenuAction,
  BurgerMenuClose, BurgerMenuContent,
  BurgerMenuOpen,
  HeaderBlock,
  HeaderList,
  HeaderListItem,
  SubmenuList,
  SubmenuListItem
} from "./styles";

export default function Header() {

  const [openBurger, setOpenBurger] = useState(false)
  const [activeSearch, setActiveSearch] = useState(false)

  const handlerShowMenu = () => {
    setOpenBurger(!openBurger)
    return !openBurger ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }

  const handlerSetSearchPanel = () => setActiveSearch(!activeSearch)
  const closeSearchPanel = item => setActiveSearch(item)


  return (
    <HeaderBlock>
      <HeaderList >
        <HeaderListItem>
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

        <BurgerMenuAction>
          <BurgerMenuOpen onClick={handlerShowMenu}></BurgerMenuOpen>
        </BurgerMenuAction>

        <BurgerMenuContent  _active={openBurger}>
          <BurgerMenuClose onClick={handlerShowMenu}  _active={openBurger}></BurgerMenuClose>
          <BurgerMenu handlerShowMenu={handlerShowMenu} />
        </BurgerMenuContent>

      </HeaderList>
    </HeaderBlock>
  )
}