import React from "react";
import './Tabs.scss'

export default function Tabs() {
  return (
    <div className="tabs">
      <span className="tabs-item">top rated(100)</span>
      <span className="tabs-item">most popular</span>
      <span className="tabs-item tabs-item__active">recomended</span>
      <span className="tabs-item">imd tv</span>
    </div>
  )
}