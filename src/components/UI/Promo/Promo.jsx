import React from "react";
import {Link} from "react-router-dom";

import './Promo.scss'

export default function Promo({ promo }) {
  return (
    <div className="promo">
      <div className="promo-bg">
        <img src={promo?.backdrop} alt="bg"/>
      </div>
      <div className="promo-info">
        <h1 className="promo-filmname">{promo?.title}</h1>
        <p className="promo-genre">{promo?.genres.join(', ')}  {promo?.imdb_rating}/10</p>
        <p className="promo-description">{promo?.overview}</p>
        <div className="promo-actions">
          <Link to={`/${promo?.slug}`}>Learn More</Link>
          <span> <span className="material-icons play">play_circle_filled</span> Play Trailer</span>
        </div>
      </div>
    </div>
  )
}