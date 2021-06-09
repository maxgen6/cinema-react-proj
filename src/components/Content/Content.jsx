import React from "react";
import './Content.scss'
import MainContent from "../MainContent/MainContent";
import MainSidebar from "../MainSidebar/MainSidebar";


export default function Content() {

  return (
    <section className="content">
      <article className="content-main">
        <MainContent/>
      </article>
      <article className="content-sidebar">
        <MainSidebar/>
      </article>
    </section>

  )
}