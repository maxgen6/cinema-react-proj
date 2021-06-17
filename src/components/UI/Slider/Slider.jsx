import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { Context } from "../../../context";
import './Slider.scss'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default function Slider() {

  const { allMovies, fetchSpecialMovie } = useContext(Context)

  const movies = allMovies?.movies

  const [genres, setGenres] = useState([])
  const [disabledBtnLeft, setDisabledBtnLeft] = useState(true)
  const [disabledBtnRight, setDisabledBtnRight] = useState(false)

  const handlerDisabledBtn = () => {
    const slides = document.querySelectorAll('.swiper-slide')
    setDisabledBtnLeft(false)

    slides[slides.length - 5].classList.contains('swiper-slide-active')
      ? setDisabledBtnRight(true)
      : setDisabledBtnRight(false)

    if (slides[1].classList.contains('swiper-slide-active')) {
      setDisabledBtnLeft(true)
    }
  }

  const handlerRightSlider = () => setDisabledBtnLeft(false)
  const handlerLeftSlider = () => setDisabledBtnRight(false)

  const sortsGenres = () => {
    const obj = {
      action: [], crime: [], drama: [], animation: [], adventure: [], family: [], thriller: [], biography: [],
      history: [], scifi: [], romance: [], war: [], mystery: []
    }

    movies?.map(item => {
      for (let i = 0; i < item.genres.length; i++) {
        item.genres[i] = item.genres[i].toLowerCase().replace(/-/g,"")
         obj[`${item.genres[i]}`].push(item)
      }
      return obj
    })

    const genres = []
    // for (let key in obj) {
    //   let newObj = {}
    //   newObj[`${key}`] = obj[key]
    //   genres.push(newObj)
    // }
    genres.push(obj)
    setGenres(genres)
  }
  useEffect(() => sortsGenres(), [allMovies])

  const spanLeftArrowClass = classNames({
    span: true,
    'material-icons arrow-left disabled': disabledBtnLeft,
    'material-icons arrow-left': !disabledBtnLeft
  })
  const spanRightArrowClass = classNames({
    span: true,
    'material-icons arrow-right disabled': disabledBtnRight,
    'material-icons arrow-right': !disabledBtnRight
  })

  return (
    <>
      {genres?.map((item, index) => (
        <>
          {Object.values(item).map((val, index) => (
            <div className="slider" key={index}>
              <div className="slider-header">
                <h4 className="slider-title">{Object.keys(item)[index]}</h4>
                <div className="slider-arrows">
                <span
                  className={spanLeftArrowClass}
                  onClick={handlerLeftSlider}
                >keyboard_arrow_left</span>
                  <span
                    className={spanRightArrowClass}
                    onClick={handlerRightSlider}
                  >keyboard_arrow_right</span>
                </div>
              </div>
              <div className="slider-block">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  navigation={{
                    nextEl: `.arrow-right`,
                    prevEl: `.arrow-left`
                  }}
                  onSwiper={(swiper) => true}
                  onSlideChange={() => handlerDisabledBtn()}
                  breakpoints={{
                    992: {
                      slidesPerView: 4,
                      spaceBetween: 10
                    }
                  }}
                >
                  {Object.values(item)[index].map((value, index) => (
                    <SwiperSlide
                      className="card-item"
                      key={value.id + index}
                      onClick={() => fetchSpecialMovie(value.slug)}
                    >
                      <Link
                        to="/watch"
                      >
                        <img src={value.backdrop} alt="img"/>
                        <p className="card-item__title">{value.title}</p>
                        <p className="card-item__genres">{value.genres.join(', ')} <span>{value.imdb_rating} / 10</span></p>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </>
      ))}
    </>
  )
}