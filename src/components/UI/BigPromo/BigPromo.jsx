import React from "react";

import './BigPromo.scss'
import background from '../../../img/1-bigTopImage_2019_08_06_21_28_46.jpeg'

export default function BigPromo() {
  return (
    <div className="big-promo">
      <img src={background} alt="bg"/>
      <a href="/#" className="big-promo__play">
        <span className="play"></span>
        <div className="play-text">
          <p>Watch Now</p>
          <span>Start your free month</span>
        </div>
      </a>
    </div>
  )
}