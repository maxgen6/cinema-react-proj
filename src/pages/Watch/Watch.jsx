import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'

import { AboutFilm, BigPromo } from "../../components/ui";
import { Like, Friends } from "../../components/icons";
import './Watch.scss'

export default function Watch({ fetchSpecialMovie, movie, setToLS, setWatchLaterToLS, movieWatchLater  }) {

  const { slug } = useParams()
  const history  = useHistory()

  const [buttonFill, setButtonFill] = useState(false)

  useEffect(() => fetchMovie(slug), [slug])
  useEffect(() => movie && setToLS(movie), [movie])

  const fetchMovie = id => id ? fetchSpecialMovie(id) : history.push('/')

  useEffect(() => setButtonFill(movieWatchLater?.find(c => c.id === movie?.id)), [movie])

  const setWatchLaterFilm = () => {
    setButtonFill(!buttonFill)
    setWatchLaterToLS(movie)
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
                <button onClick={setWatchLaterFilm}>
                  <span>
                    <Like fill={buttonFill ? '#f31414' : '#fff'} />
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