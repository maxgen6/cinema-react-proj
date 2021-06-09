import React from "react";
import './Promo.scss'
import background from '../../../img/hype-ru-1525010432-RkyRMrDIDLNgunw.jpeg'

export default function Promo() {
  return (
    <div className="promo">
      <div className="promo-bg">
        <img src={background} alt="bg"/>
      </div>
      <div className="promo-info">
        <h1 className="promo-filmname">Game of Thrones</h1>
        <p className="promo-genre">TV-MA Action, Adventure, Drama 9.4/10</p>
        <p className="promo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius mollitia odio
          perferendis praesentium repellendus. Ipsum molestiae nam officiis repellendus ullam.</p>
        <div className="promo-actions">
          <a href="/#">Learn More</a>
          <span> <span className="material-icons play">play_circle_filled</span> Play Trailer</span>
        </div>
      </div>
    </div>
  )
}