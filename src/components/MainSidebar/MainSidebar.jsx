import React from "react";
import './MainSidebar.scss'
import Cards from "../MainContent/Cards/Cards";

export default function MainSidebar() {


  return (
    <div className="main-sidebar">
      <div className="main-sidebar__header">
        <h4 className="main-sidebar__title">Now Playing (Box Office)</h4>
        <a href="/#">Show more</a>
      </div>
      <div className="main-sidebar__block">
        <Cards sidebar={true}/>
      </div>
    </div>
  )
}