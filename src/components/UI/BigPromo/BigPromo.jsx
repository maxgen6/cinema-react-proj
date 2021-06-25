import React from "react";

import { Modal } from "../index";
import './BigPromo.scss'

export default function BigPromo({ backdrop }) {

  return (
    <div className="big-promo">
      <img src={backdrop} alt="bg"/>
      <Modal
        trigger={
          <div className="big-promo__play">
            <span className="play"></span>
            <div className="play-text">
              <p>Watch Now</p>
              <span>Start your free month</span>
            </div>
          </div>
        }
        children={backdrop}
      />
    </div>
  )
}