import React from "react";

import {Cards, Promo, Slider, Tabs} from "../../components/ui";
import './Home.scss'


export default function Home() {

  return (
    <section className="content">
      <article className="content-main">
        <Promo />
        <div className="content-main__block">
          <Tabs />
          <Slider />
        </div>
      </article>
      <article className="content-sidebar">
        <div className="content-sidebar__header">
          <h4 className="content-sidebar__title">Now Playing (Box Office)</h4>
          <a href="/#">Show more</a>
        </div>
        <div className="content-sidebar__block">
          <Cards sidebar={true}/>
        </div>
      </article>
    </section>

  )
}