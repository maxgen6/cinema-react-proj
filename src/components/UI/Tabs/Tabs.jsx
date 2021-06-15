import React, {useRef} from "react";

import './Tabs.scss'

export default function Tabs({ handlerSelectTab }) {

  let tabRef = useRef()

  const handlerTabsSwitch = e => {
    const activeClass = 'tabs-item__active'
    const allTabs = tabRef.current.querySelectorAll('.tabs-item')
    handlerSelectTab(e.target.textContent.toLowerCase())
    allTabs.forEach(item => item.classList.remove(activeClass))
    e.target.classList.add(activeClass)
  }

  return (
    <div className="tabs" ref={tabRef} >
      <span className="tabs-item" onClick={handlerTabsSwitch}>top rated(100)</span>
      <span className="tabs-item" onClick={handlerTabsSwitch}>most popular</span>
      <span className="tabs-item tabs-item__active" onClick={handlerTabsSwitch}>recomended</span>
      <span className="tabs-item" onClick={handlerTabsSwitch}>imd tv</span>
    </div>
  )
}