import React from "react";
import './MainContent.scss'
import Promo from "./Promo/Promo";
import Tabs from "./Tabs/Tabs";
import Slider from "./Slider/Slider";


export default function MainContent() {
  return (
    <div className="main-content">
      <Promo />
      <div className="main-content__block">
        <Tabs />
        <Slider />
      </div>
    </div>
  )
}