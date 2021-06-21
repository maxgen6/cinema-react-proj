import React from "react";
import {Link} from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import './Slider.scss'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export default function Slider({ genres }) {

  return (
    <>
      {genres?.map((item, index) => (
        <>
          {Object.values(item).map((val, index) => (
            <div className="slider" key={index}>
              <div className="slider-header">
                <h4 className="slider-title">{Object.keys(item)[index]}</h4>
                <div className="slider-arrows">
                  <span className="material-icons arrow-left ">keyboard_arrow_left</span>
                  <span className="material-icons arrow-right">keyboard_arrow_right</span>
                </div>
              </div>
              <div className="slider-block">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={2}
                  navigation
                  onSwiper={swiper => true}
                  onSlideChange={() => true}
                  breakpoints={{
                    992: {
                      slidesPerView: 'auto',
                      spaceBetween: 8
                    }
                  }}
                >
                  {Object.values(item)[index].map((value, index) => (
                    <SwiperSlide
                      className="card-item"
                      key={value.id}
                    >
                      <Link
                        to={`/${value.slug}`}
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