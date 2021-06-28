import React from "react";
import ReactPlayer from "react-player";

import './Player.scss'

export default function Player({ url }) {
  return (
    <div className="player-container">
        <ReactPlayer controls url={url} width="100%" height="100%" />
    </div>
  )
}