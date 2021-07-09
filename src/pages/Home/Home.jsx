import React, { useState, useEffect } from "react";

import { Cards, Promo, Slider, Tabs } from "../../components/ui";
import {ContentHome, ContentMain, ContentSidebar, ContentSidebarHeader} from "./styles";


export default function Home({ fetchMovies, movies, movieFromLS }) {

  const [genres, setGenres] = useState([])

  const allMovies = movies?.movies
  let randomNumber = Math.floor(Math.random() * (allMovies?.length - 1));

  const tabContent = [
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
      content: <div style={{color: "white"}}>tab 3</div>
    },
    {
      title: 'tab 4',
      content: <div style={{color: "white"}}>tab 4</div>
    }
  ]

  useEffect(() => fetchMovies(), [fetchMovies])

  const sortsGenres = () => {
    const obj = {}
    let genresArr = []

    allMovies?.map(item => {
      item.genres.map(val => genresArr.push(val))

      genresArr = genresArr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
      return genresArr.map(i => obj[`${i}`] = [])
    })

    allMovies?.map(item => {
      for (let i = 0; i < item.genres.length; i++) {
        obj[`${item.genres[i]}`].push(item)
      }
      return obj
    })

    const genres = []
    genres.push(obj)
    setGenres(genres)
  }

  useEffect(() => sortsGenres(), [movies])

  return (
    <ContentHome className="content">
      <ContentMain className="content-main">
        <Promo promo={randomNumber ? allMovies[randomNumber] : null} />
        <div className="content__block">
          <Tabs
            content={tabContent}
          />
          <Slider
            genres={genres}
          />
        </div>
      </ContentMain>
      <ContentSidebar>
        <ContentSidebarHeader>
          <h4>Now Playing (Box Office)</h4>
          <a href="/#">Show more</a>
        </ContentSidebarHeader>
        <div className="content-sidebar__block">
          <Cards
            sidebar={true}
            movieFromLS={movieFromLS}
          />
        </div>
      </ContentSidebar>
    </ContentHome>

  )
}
