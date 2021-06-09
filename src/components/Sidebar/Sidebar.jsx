import React from "react";

import './Sidebar.scss'
import {NavLink} from "react-router-dom";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <nav>
        <ul className="sidebar-navigation__list">
          <li className="sidebar-navigation__item">
            <NavLink to="/" exact  className="sidebar-logo">IMDb</NavLink>
          </li>
          <li className="sidebar-navigation__item">
            <NavLink to="/" className="sidebar-logo">
              <span className="material-icons movie">movie</span>
            </NavLink>
          </li>
          <li className="sidebar-navigation__item">
            <NavLink to="/" className="sidebar-logo">
              <span className="material-icons tv">live_tv</span>
            </NavLink>
          </li>
          <li className="sidebar-navigation__item">
            <NavLink to="/" className="sidebar-logo">
              <span className="material-icons sports">sports_esports</span>
            </NavLink>
          </li>
          <li className="sidebar-navigation__item">
            <NavLink to="/" className="sidebar-logo">
              <span className="material-icons radio">radio</span>
            </NavLink>
          </li>
          <li className="sidebar-navigation__item">
            <NavLink to="/" className="sidebar-logo">
              <span className="material-icons cup">emoji_events</span>

            </NavLink>
          </li>
          <li className="sidebar-navigation__item">
            <NavLink to="/" className="sidebar-logo">
              <span className="material-icons favorite">favorite</span>
            </NavLink>
          </li>
          <li className="sidebar-navigation__item">
            <NavLink to="/" className="sidebar-logo">
              <span className="material-icons schedule">schedule</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  )
}