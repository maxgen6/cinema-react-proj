import React, {useState} from "react";

import {Cards, Promo, Slider, Tabs} from "../../components/ui";
import './Home.scss'


export default function Home() {

  const [shawTabContent, setShawTabContent] = useState('recomended')

  const handlerSelectTab = item => setShawTabContent(item)


  const shawTabs = () => {
    switch (shawTabContent) {
      case 'top rated(100)':
        return (<div style={{color: "white"}}>top rated(100)</div>);
      case 'most popular':
        return (<div style={{color: "white"}}>most popular</div>);
      case 'recomended':
        return (<Slider />);
      case 'imd tv':
        return (<div style={{color: "white"}}>imd tv</div>);
      break;
    }
  }

  return (
    <section className="content">
      <article className="content-main">
        <Promo />
        <div className="content-main__block">
          <Tabs handlerSelectTab={handlerSelectTab} />
          {shawTabs()}
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