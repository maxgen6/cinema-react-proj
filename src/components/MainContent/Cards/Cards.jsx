import React, {useContext} from "react";
import './Cards.scss'
import {Context} from "../../../context";

export default function Cards({sidebar}) {

  const cardInfo = useContext(Context)
  const width = (Math.floor(100 / cardInfo?.length) - 1)

  return (
    <>
      {cardInfo.map((item, index, arr) => (
        <div className="card-item" key={item.id + index} style={{width: `${sidebar ? 100 : width}%`}}>
          <img src={item.img} alt="img"/>
          <p className="card-item__title">{item.title}</p>
          <p className="card-item__genres">{item.genres} <span>{item.score}</span></p>
        </div>
      ))}
    </>
  )
}