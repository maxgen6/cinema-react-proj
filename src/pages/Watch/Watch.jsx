import React from "react";

import './Watch.scss'
import {BigPromo} from "../../components/ui";

export default function Watch() {
  return (
    <section className="watch">
      <div className="container">
        <h1 className="watch-title">Watch</h1>

        <div className="watch-content">
          <BigPromo />
        </div>
      </div>
    </section>
  )
}