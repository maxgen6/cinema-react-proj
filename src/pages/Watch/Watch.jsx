import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'

import { AboutFilm, BigPromo } from "../../components/ui";
import { Like, Friends } from "../../components/icons";
import './Watch.scss'
import {getById} from "../../services/api/movies";

export default function Watch() {

  const { slug } = useParams()
  const history  = useHistory()

  const [movie, setMovie] = useState(null)

  useEffect(() => fetchSpecialMovie(slug), [])

  const fetchSpecialMovie = async (id ) => {
    try {
      const res = await getById(id)

      if(res.data?.title) {
        setMovie(res.data)
      } else {
        history.push('/')
      }
    } catch (e) {
      history.push('/')
    }
  }

  return (
    <section className="watch">
      <div className="container">
        <h1 className="watch-title">Watch</h1>

        <article className="watch-content">
          <BigPromo backdrop={movie?.backdrop} />

          <div className="film-info">
            <div className="film-info__header">
              <h2>{movie?.title}</h2>
              <div className="button-block">
                <span className="button-block__point">IMDb {movie?.imdb_rating}</span>
                <button>
                  <span>
                    <Like />
                  </span> Watch Later
                </button>
                <button>
                  <span>
                    <Friends />
                  </span> Invite Friends
                </button>
              </div>
            </div>
            <AboutFilm movie={movie} />
          </div>

        </article>
      </div>
    </section>
  )
}