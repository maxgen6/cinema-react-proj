import React from "react";

import {Link} from "react-router-dom";
import './Cards.scss'
// import {LinkBlock} from "./styles";


export default function Cards({ sidebar, movieFromLS }) {


  return (
    <>
      {movieFromLS ?
        movieFromLS?.map((item, index) => (
          <Link to={`/${item?.slug}`} className="card-item" key={item.id + index} >
            <img src={item?.poster} alt="img"/>
            <p className="card-item__title">{item?.title}</p>
            <p className="card-item__genres">{item?.genres?.join(', ')} <span>{item?.imdb_rating} / 10</span></p>
          </Link>
        ))
        : <p style={{color: 'white'}}>No films watched</p>
      }
    </>
  )
}