import React from "react";
import './Tabs.scss'

export default function Tabs() {

  const handlerTabsSwitch = e => {
    const allTabs = document.querySelectorAll('.tabs-item');
    allTabs.forEach(item => item.classList.contains('tabs-item__active')
      ? item.classList.remove('tabs-item__active')
      : ''
    )
    e.target.classList.add('tabs-item__active')
  }

  return (
    <div className="tabs">
      <span className="tabs-item" onClick={handlerTabsSwitch}>top rated(100)</span>
      <span className="tabs-item" onClick={handlerTabsSwitch}>most popular</span>
      <span className="tabs-item tabs-item__active" onClick={handlerTabsSwitch}>recomended</span>
      <span className="tabs-item" onClick={handlerTabsSwitch}>imd tv</span>
    </div>
  )
}