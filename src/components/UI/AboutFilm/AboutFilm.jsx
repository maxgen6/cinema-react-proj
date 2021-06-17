import React from "react";

import avatar from '../../../img/756115367772455.jpeg'
import './AboutFilm.scss'
import {Music, Star, View} from "../../icons";

export default function AboutFilm({ movie }) {

  return (
    <div className="about-film">
      <div className="about-film__content">
        <div className="about-film__poster">
          <img src={movie?.poster} alt="poster"/>
        </div>
        <div className="about-film__description">
          <h2 className="film-title">{movie?.title}</h2>
          <p className="film-description">{movie?.overview}</p>
          <div className="film-rating">
            <p className="view">
              <View /> 334,503
            </p>
            <div className="star">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="information">
              {movie?.classification} | {movie?.length} | {movie?.genres.join(', ')} | {movie?.released_on}
            </p>
          </div>
          <div className="film-actors">
            <div className="film-details">
              <h3>Details</h3>
              <ul>
                <li>Director: <span>{movie?.director}</span></li>
                <li>Writers: <span>{movie?.director}</span></li>
                <li>Country: <span>USA | UK | China</span> </li>
                <li>Language: <span>English</span></li>
              </ul>
            </div>
            <div className="film-cast">
              <h3>Cast</h3>
              <ul>
                {movie?.cast.map((item, key) => (
                  <li key={key}>
                    <img src={avatar} alt="avatar"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="about-film__gallery">
          <h2>Gallery</h2>
          <a href="/#" className="gallery-trailer">
            <img src={movie?.poster} alt="poster"/>
            <div className="gallery-trailer__blur">Trailer</div>
          </a>
          <a href="/#" className="soundtracks">
            <Music />
            <span>Soundtracks</span>
          </a>
        </div>
      </div>
    </div>
  )
}