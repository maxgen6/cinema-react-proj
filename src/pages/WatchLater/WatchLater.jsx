import React from "react";

import {Cards} from "../../components/ui";
import './WatchLater.scss'

export default function WatchLater({ movieWatchLater }) {
  return (
    <div className="watch-later">
      <h1>Watch Later</h1>
      <div className="films">
        <Cards movieFromLS={movieWatchLater} />
      </div>
    </div>
  )
}