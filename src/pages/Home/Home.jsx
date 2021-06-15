import React from "react";

import { Cards, Promo, Slider, Tabs } from "../../components/ui";
import './Home.scss'



export default function Home() {

  const tabContent= [
    {
      title: 'tab 1',
      content: <div style={{color: "white"}}>tab 1</div>
    },
    {
      title: 'tab 2',
      content: <div style={{color: "white"}}>tab 2</div>
    },
    {
      title: 'tab 3',
      content: <Slider />
    },
    {
      title: 'tab 4',
      content: <div style={{color: "white"}}>tab 4</div>
    }
  ]

  return (
    <section className="content">
      <article className="content-main">
        <Promo />
        <div className="content-main__block">
          <Tabs
            content={tabContent}
          />
        </div>
        <div className="content-main__block">
          <Tabs
            content={tabContent}
          />
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
