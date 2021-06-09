import React from "react";
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-list__item">
          <input type="text" placeholder="Search movies, tv shows..." />
          <span className="material-icons search"> search </span>
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
      </ul>
    </header>
  )
}