import React from "react";
import {useTranslation} from "react-i18next";

import avatar from '../../../img/756115367772455.jpeg'
import { Music, Star, View } from "../../icons";
import {Modal, Player} from "../index";
import {
  AboutFilmBLock,
  AboutFilmContent,
  AboutFilmDescription,
  AboutFilmPoster,
  AboutFimGallery, FilmCast, FilmDetails,
  GalleryTrailer, SoundtracksBlock
} from "./styles";

export default function AboutFilm({ movie }) {
  console.log(movie)
  const { t } = useTranslation()

  const renderRating = () => {
    const rating = Math.round(Math.floor(+movie?.imdb_rating) / 2)
    const arrStar = [<Star fill="#808080"/>, <Star fill="#808080"/>, <Star fill="#808080"/>, <Star fill="#808080"/>, <Star fill="#808080"/>]
    for (let i = 0; i < rating; i++) {
      arrStar[i] = {...arrStar[i],  props: {fill: '#fff'}}
    }

    return arrStar.map((item, key) => (
      <>
        {item}
      </>
    ))
  }

  return (
    <AboutFilmBLock>
      <AboutFilmContent>

        <AboutFilmPoster>
          <AboutFilmPoster.Image src={movie?.poster} alt="poster"/>
        </AboutFilmPoster>

        <AboutFilmDescription >
          <AboutFilmDescription.H2>{movie?.title}</AboutFilmDescription.H2>
          <AboutFilmDescription.Description>{movie?.overview}</AboutFilmDescription.Description>
          <AboutFilmDescription.FilmRating>
            <p className="view">
              <View/> 334,503
            </p>
            <div className="star">
              { renderRating() }
            </div>
            <p className="information">
              {movie?.classification} | {movie?.length} | {movie?.genres.join(', ')} | {movie?.released_on}
            </p>
          </AboutFilmDescription.FilmRating>
          <AboutFilmDescription.FilmActors>
            <FilmDetails>
              <h3>{t('AboutFilm.Details')}</h3>
              <ul>
                <li>{t('AboutFilm.Director')}: <span>{movie?.director}</span></li>
                <li>{t('AboutFilm.Writers')}: <span>{movie?.director}</span></li>
                <li>{t('AboutFilm.Country')}: <span>USA | UK | China</span></li>
                <li>{t('AboutFilm.Language')}: <span>English</span></li>
              </ul>
            </FilmDetails>
            <FilmCast >
              <h3>{t('AboutFilm.Cast')}</h3>
              <ul>
                {movie?.cast.map((item, key) => (
                  <li key={key}>
                    <img src={avatar} alt="avatar"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FilmCast>
          </AboutFilmDescription.FilmActors>
        </AboutFilmDescription>

        <AboutFimGallery>
          <h2>{t('AboutFilm.Gallery')}</h2>
          <Modal
            trigger={
              <GalleryTrailer >
                <img src={movie?.poster} alt="poster"/>
                <div >{t('AboutFilm.Trailer')}</div>
              </GalleryTrailer>
            }
            children={<Player url={'https://www.youtube.com/watch?v=MG-S05stTv8'} />}
          />
          <SoundtracksBlock href="/#" className="soundtracks">
            <Music/>
            <span>{t('AboutFilm.Soundtracks')}</span>
          </SoundtracksBlock>
        </AboutFimGallery>

      </AboutFilmContent>
    </AboutFilmBLock>
  )
}