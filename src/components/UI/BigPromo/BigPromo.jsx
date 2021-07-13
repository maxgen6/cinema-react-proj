import React from "react";

import {Modal, Player} from "../index";
import { BigPromoBlock, BigPromoPlay } from "./styles";
import {useTranslation} from "react-i18next";

export default function BigPromo({ backdrop }) {
  const { t } = useTranslation()

  return (
    <BigPromoBlock >
      <BigPromoBlock.Image src={backdrop} alt="bg"/>

      <Modal
        trigger={
          <BigPromoPlay>
            <BigPromoPlay.Play />

            <BigPromoPlay.TextBlock>
              <p>{t('BigPromo.Now')}</p>
              <span>{t('BigPromo.Free')}</span>
            </BigPromoPlay.TextBlock>

          </BigPromoPlay>
        }
        children={<Player url={'https://www.youtube.com/watch?v=MG-S05stTv8'} />}
      />

    </BigPromoBlock>
  )
}