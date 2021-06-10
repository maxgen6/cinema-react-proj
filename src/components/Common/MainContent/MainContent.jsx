import React from "react";
import './MainContent.scss'
import Promo from "../../UI/Promo/Promo";
import Tabs from "../../UI/Tabs/Tabs";
import Slider from "../../UI/Slider/Slider";


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