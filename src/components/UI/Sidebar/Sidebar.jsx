import React from "react";
import { NavLink } from "react-router-dom";

import './Sidebar.scss'

export default function Sidebar() {


  const sidebarInfo = [
    {title: `movie`,classname: '', href: '/1' },
    {title: `live_tv`,classname: 'tv', href: '/2' },
    {title: `sports_esports`,classname: 'sports', href: '/' },
    {title: `radio`,classname: 'radio', href: '/4' },
    {title: `emoji_events`,classname: 'cup', href: '/5' },
    {title: `favorite`,classname: 'favorite', href: '/watch-later' },
    {title: `schedule`,classname: 'schedule', href: '/7' }
  ]


  return (
    <section className="sidebar">
      <nav>
        <ul className="sidebar-navigation__list">
          <li className="sidebar-navigation__item">
            <NavLink  to="/"  className="sidebar-logo">IMDb</NavLink>
          </li>
          {sidebarInfo.map((item, index) => (
            <li className="sidebar-navigation__item" key={index}>
              <NavLink to={item.href} exact={item.href === '/'} className="sidebar-logo">
               <span className={`material-icons ${item.classname}`}>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}