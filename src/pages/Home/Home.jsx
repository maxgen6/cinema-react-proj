import React, { useState, useEffect } from "react";

import { Cards, Promo, Slider, Tabs } from "../../components/ui";
import './Home.scss'
import {get} from "../../services/api/movies";


export default function Home() {

  const [allMovies, setAllMovies] = useState(null)
  const [genres, setGenres] = useState([])

  const movies = allMovies?.movies
  let randomNumber = Math.floor(Math.random() * (movies?.length - 1));

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

  const fetchData = async () => {
    try {
      const res = await get()
      setAllMovies(res.data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => fetchData(), [])

  const sortsGenres = () => {
    const obj = {}

    let genresArr = []

    movies?.map(item => {
      item.genres.map(val => genresArr.push(val))

      genresArr = genresArr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
      return genresArr.map(i => obj[`${i}`] = [])
    })

    movies?.map(item => {
      for (let i = 0; i < item.genres.length; i++) {
        obj[`${item.genres[i]}`].push(item)
      }
      return obj
    })

    const genres = []
    genres.push(obj)
    setGenres(genres)
  }

  useEffect(() => sortsGenres(), [allMovies])

  return (
    <section className="content">
      <article className="content-main">
        <Promo promo={randomNumber ? movies[randomNumber] : null} />
        <div className="content-main__block">
          <Tabs
            content={tabContent}
          />
          <Slider
            genres={genres}
          />
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
