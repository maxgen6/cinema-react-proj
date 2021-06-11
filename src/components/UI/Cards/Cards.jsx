import React, { useContext } from "react";

import { Context } from "../../../context";
import './Cards.scss'


export default function Cards({sidebar}) {

  const cardInfo = useContext(Context)

  return (
    <>
      {cardInfo.map((item, index, arr) => (
        <a href="/#" className="card-item" key={item.id + index} >
          <img src={item.img} alt="img"/>
          <p className="card-item__title">{item.title}</p>
          <p className="card-item__genres">{item.genres} <span>{item.score}</span></p>
        </a>
      ))}
    </>
  )
}