import React from "react";

import './Tabs.scss'

export default function Tabs({ handlerSelectTab }) {

  const handlerTabsSwitch = e => {
    handlerSelectTab(e.target.textContent.toLowerCase())
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