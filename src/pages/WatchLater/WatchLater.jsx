import React from "react";

import {Cards} from "../../components/ui";
import './WatchLater.scss'
import {LaterBlock} from "./styles";

export default function WatchLater({ movieWatchLater }) {
  return (
    <LaterBlock className="watch-later">
      <h1>Watch Later</h1>
      <div className="films">
        <Cards movieFromLS={movieWatchLater} />
      </div>
    </LaterBlock>
  )
}