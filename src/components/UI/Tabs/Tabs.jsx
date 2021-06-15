import React, { useState } from "react";
import cl from 'classnames'

import './Tabs.scss'

export default function Tabs({
    content
  }) {

  const [activeTab, setActiveTab] = useState(0)
  //
  // let tabRef = useRef()
  //
  // const handlerTabsSwitch = e => {
  //   const activeClass = 'tabs-item__active'
  //   const allTabs = tabRef.current.querySelectorAll('.tabs-item')
  //   handlerSelectTab(e.target.textContent.toLowerCase())
  //   allTabs.forEach(item => item.classList.remove(activeClass))
  //   e.target.classList.add(activeClass)
  // }

  const Content = () => content[activeTab].content

  return (
    <>
      <div className="tabs"  >
        {content.map((item, key) => (
          <span
            key={key}
            className={cl({
              "tabs__item": true,
              "tabs__item--active": key === activeTab
            })}
            onClick={() => setActiveTab(key)}
          >{item.title}</span>
        ))}
      </div>
      <Content />
    </>
  )
}