import React, { useState, useEffect, useContext } from "react";

import { Cards, Promo, Slider, Tabs } from "../../components/ui";
import './Home.scss'
import {Context} from "../../context";
import {get} from "../../services/api/movies";



export default function Home() {

  const { getFilmId } = useContext(Context)
  const [allMovies, setAllMovies] = useState(null)
  const [genres, setGenres] = useState([])

  const movies = allMovies?.movies

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

  useEffect(() => {
    const fetchData = async () => {
      const res = await get()
      setAllMovies(res.data)
    }
    fetchData()
  }, [])

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
        <Promo />
        <div className="content-main__block">
          <Tabs
            content={tabContent}
          />
          <Slider
            genres={genres}
            getFilmId={getFilmId}
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
