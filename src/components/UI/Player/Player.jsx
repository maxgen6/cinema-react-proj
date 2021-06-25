import React from "react";
import ReactPlayer from "react-player";

import './Player.scss'

export default function Player() {
  return (
    <ReactPlayer controls url='https://www.youtube.com/watch?v=MG-S05stTv8' width="100%" height="500px" />
  )
}