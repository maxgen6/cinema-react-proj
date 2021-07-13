import React from "react";

import {Cards} from "../../components/ui";
import {LaterBlock} from "./styles";

export default function WatchLater({ movieWatchLater }) {
  return (
    <LaterBlock>
      <LaterBlock.H1>Watch Later</LaterBlock.H1>
      <LaterBlock.Films>
        <Cards movieFromLS={movieWatchLater} />
      </LaterBlock.Films>
    </LaterBlock>
  )
}