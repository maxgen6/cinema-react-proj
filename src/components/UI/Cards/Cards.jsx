import React from "react";

import './Cards.scss'
import {LinkBlock} from "./styles";

export default function Cards({ sidebar, movieFromLS }) {

  return (
    <>
      {movieFromLS ?
        movieFromLS?.map((item, index) => (
          <LinkBlock to={`/${item?.slug}`}  key={item.id + index} >
            <LinkBlock.Image src={item?.poster} alt="img"/>
            <LinkBlock.Title>{item?.title}</LinkBlock.Title >
            <LinkBlock.Genres>{item?.genres?.join(', ')} <span>{item?.imdb_rating} / 10</span></LinkBlock.Genres >
          </LinkBlock>
        ))
        : <p style={{color: 'white'}}>No films watched</p>
      }
    </>
  )
}