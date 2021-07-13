import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";
import { Search } from "../../ui";
import {Language, SearchIcon} from "../../icons";
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

  const { t, i18n } = useTranslation()
  const [openBurger, setOpenBurger] = useState(false)
  const [activeSearch, setActiveSearch] = useState(false)

  const handlerChangeLanguage = lang => {
    i18n.changeLanguage(lang)
  }

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
                {t('Header.1')}
                <span className="material-icons arrow-down">keyboard_arrow_down</span>
              </p>
              <ul className="drop-down-menu">
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
                <li><a href="/#">example</a></li>
              </ul>
            </SubmenuListItem>

            <SubmenuListItem >
              <Language />
                <span className="material-icons arrow-down" style={{color: 'white'}}>keyboard_arrow_down</span>
              <ul className="drop-down-menu">
                <li onClick={() => handlerChangeLanguage('ru')}>Русский</li>
                <li onClick={() => handlerChangeLanguage('en')}>English</li>
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