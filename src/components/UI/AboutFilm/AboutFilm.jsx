import React from "react";

import avatar from '../../../img/756115367772455.jpeg'
import './AboutFilm.scss'
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
          <img src={movie?.poster} alt="poster"/>
        </AboutFilmPoster>
        <AboutFilmDescription >
          <h2 className="film-title">{movie?.title}</h2>
          <p className="film-description">{movie?.overview}</p>
          <div className="film-rating">
            <p className="view">
              <View/> 334,503
            </p>
            <div className="star">
              { renderRating() }
            </div>
            <p className="information">
              {movie?.classification} | {movie?.length} | {movie?.genres.join(', ')} | {movie?.released_on}
            </p>
          </div>
          <div className="film-actors">
            <FilmDetails>
              <h3>Details</h3>
              <ul>
                <li>Director: <span>{movie?.director}</span></li>
                <li>Writers: <span>{movie?.director}</span></li>
                <li>Country: <span>USA | UK | China</span></li>
                <li>Language: <span>English</span></li>
              </ul>
            </FilmDetails>
            <FilmCast >
              <h3>Cast</h3>
              <ul>
                {movie?.cast.map((item, key) => (
                  <li key={key}>
                    <img src={avatar} alt="avatar"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FilmCast>
          </div>
        </AboutFilmDescription>
        <AboutFimGallery>
          <h2>Gallery</h2>
          <Modal
            trigger={
              <GalleryTrailer >
                <img src={movie?.poster} alt="poster"/>
                <div >Trailer</div>
              </GalleryTrailer>
            }
            children={<Player url={'https://www.youtube.com/watch?v=MG-S05stTv8'} />}
          />
          <SoundtracksBlock href="/#" className="soundtracks">
            <Music/>
            <span>Soundtracks</span>
          </SoundtracksBlock>
        </AboutFimGallery>
      </AboutFilmContent>
    </AboutFilmBLock>
  )
}