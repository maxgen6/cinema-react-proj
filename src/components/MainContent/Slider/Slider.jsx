import React from "react";
import './Slider.scss'
import Cards from "../Cards/Cards";

export default function Slider() {

  return (
    <div className="slider">
      <div className="slider-header">
        <h4 className="slider-title">TV Series</h4>
        <p className="slider-arrows">
          <span className="material-icons arrow-left">keyboard_arrow_left</span>
          <span className="material-icons arrow-right">keyboard_arrow_right</span>
        </p>
      </div>
      <div className="slider-block">
        <Cards />
      </div>
    </div>
  )
}