import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'

import { AboutFilm, BigPromo } from "../../components/ui";
import { Like, Friends } from "../../components/icons";
import {ButtonBlock, WatchBlock, WatchContent, WatchFilmInfoHeader} from "./styles";
import {useTranslation} from "react-i18next";

export default function Watch({ fetchSpecialMovie, movie, setToLS, setWatchLaterToLS, movieWatchLater  }) {
  const { t } = useTranslation()
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
    <WatchBlock>
      <WatchBlock.Container>
        <WatchBlock.Title>{t('Watch.Title')}</WatchBlock.Title>

        <WatchContent>
          <BigPromo backdrop={movie?.backdrop} />

          <WatchContent.FilmInfo>
            <WatchFilmInfoHeader>
              <h2>{movie?.title}</h2>

              <ButtonBlock>
                <ButtonBlock.Point>{t('Watch.Rating')} {movie?.imdb_rating}</ButtonBlock.Point>
                <button onClick={setWatchLaterFilm}>
                  <span>
                    <Like fill={buttonFill ? '#f31414' : '#fff'} />
                  </span> {t('Watch.Later')}
                </button>
                <button>
                  <span>
                    <Friends />
                  </span> {t('Watch.Invite')}
                </button>
              </ButtonBlock>

            </WatchFilmInfoHeader>

            <AboutFilm movie={movie} />
          </WatchContent.FilmInfo >

        </WatchContent>
      </WatchBlock.Container >

    </WatchBlock>
  )
}