import React from "react";
import {useTranslation} from "react-i18next";

import {Cards} from "../../components/ui";
import {LaterBlock} from "./styles";

export default function WatchLater({ movieWatchLater }) {
  const { t } = useTranslation()

  return (
    <LaterBlock>
      <LaterBlock.H1>{t('WatchLater.Later')}</LaterBlock.H1>
      <LaterBlock.Films>
        <Cards movieFromLS={movieWatchLater} />
      </LaterBlock.Films>
    </LaterBlock>
  )
}