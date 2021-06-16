import React from "react";

import './BigPromo.scss'

export default function BigPromo({backdrop}) {


  return (
    <div className="big-promo">
      <img src={backdrop} alt="bg"/>
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