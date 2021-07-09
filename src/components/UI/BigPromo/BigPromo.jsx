import React from "react";

import {Modal, Player} from "../index";
import { BigPromoBlock, BigPromoPlay } from "./styles";

export default function BigPromo({ backdrop }) {

  return (
    <BigPromoBlock >
      <img src={backdrop} alt="bg"/>
      <Modal
        trigger={
          <BigPromoPlay>
            <span className="play"></span>
            <div className="play-text">
              <p>Watch Now</p>
              <span>Start your free month</span>
            </div>
          </BigPromoPlay>
        }
        children={<Player url={'https://www.youtube.com/watch?v=MG-S05stTv8'} />}
      />
    </BigPromoBlock>
  )
}