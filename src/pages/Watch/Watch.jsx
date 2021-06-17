import React, {useContext, useEffect, useState} from "react";

import { AboutFilm, BigPromo } from "../../components/ui";
import { Like, Friends } from "../../components/icons";
import './Watch.scss'
import {Context} from "../../context";
import {getById} from "../../services/api/movies";

export default function Watch() {

  const {  movieId } = useContext(Context)

  const [movie, setMovie] = useState(null)

  useEffect(() => fetchSpecialMovie(movieId), [])

  const fetchSpecialMovie = async (id) => {
    const res = await getById(id)
    setMovie(res.data)
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