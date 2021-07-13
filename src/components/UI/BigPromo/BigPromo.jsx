import React from "react";

import {Modal, Player} from "../index";
import { BigPromoBlock, BigPromoPlay } from "./styles";

export default function BigPromo({ backdrop }) {

  return (
    <BigPromoBlock >
      <BigPromoBlock.Image src={backdrop} alt="bg"/>

      <Modal
        trigger={
          <BigPromoPlay>
            <BigPromoPlay.Play />

            <BigPromoPlay.TextBlock>
              <p>Watch Now</p>
              <span>Start your free month</span>
            </BigPromoPlay.TextBlock>

          </BigPromoPlay>
        }
        children={<Player url={'https://www.youtube.com/watch?v=MG-S05stTv8'} />}
      />

    </BigPromoBlock>
  )
}