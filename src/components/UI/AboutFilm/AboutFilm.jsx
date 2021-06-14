import React from "react";

import avatar from '../../../img/756115367772455.jpeg'
import poster from '../../../img/odnazhdy-v-gollivude-kakie-ochki-nosyat-zvezdy-vesternov.jpeg'
import './AboutFilm.scss'
import {Music, Star, View} from "../../icons";

export default function AboutFilm() {
  return (
    <div className="about-film">
      <div className="about-film__content">
        <div className="about-film__poster">
          <img src={poster} alt="poster"/>
        </div>
        <div className="about-film__description">
          <h2 className="film-title">Once Upon a Time in Hollywood</h2>
          <p className="film-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus
            doloribus eius ex excepturi ipsa mollitia officiis quo reiciendis totam?
          </p>
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
              18 | 2h 41min | Comedy, Drama | 14 August 2019 (UK)
            </p>
          </div>
          <div className="film-actors">
            <div className="film-details">
              <h3>Details</h3>
              <ul>
                <li>Director: <span>Tarantino</span></li>
                <li>Writers: <span>Tarantino</span></li>
                <li>Country: <span>USA | UK | China</span> </li>
                <li>Language: <span>English</span></li>
              </ul>
            </div>
            <div className="film-cast">
              <h3>Cast</h3>
              <ul>
                <li>
                  <img src={avatar} alt="avatar"/>
                  <span>Leonardo Dicaprio</span>
                </li>
                <li>
                  <img src={avatar} alt="avatar"/>
                  <span>Leonardo Dicaprio</span>
                </li>
                <li>
                  <img src={avatar} alt="avatar"/>
                  <span>Leonardo Dicaprio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-film__gallery">
          <h2>Gallery</h2>
          <a href="/#" className="gallery-trailer">
            <img src={poster} alt="poster"/>
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