import React from "react";
import ReactPlayer from "react-player";

import './Player.scss'
import { PLayerBlock } from "./styles";

export default function Player({ url }) {
  return (
    <PLayerBlock>
        <ReactPlayer controls url={url} width="100%" height="100%" />
    </PLayerBlock>
  )
}