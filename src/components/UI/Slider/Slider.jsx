import React, {useState, useContext} from "react";
import './Slider.scss'
import Cards from "../Cards/Cards";
import {Context} from "../../../context";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default function Slider() {

  const cardInfo = useContext(Context)

  // const [counter, setCounter] = useState(1)
  //
  // const handlerRunSlider= () => {
  //   const allSlides = document.querySelectorAll('.slider-block .card-item')
  //
  //   if (counter > allSlides.length - 1) {
  //     setCounter(0)
  //   } else if (counter < 0) {
  //     setCounter(allSlides.length - 1)
  //   }
  //
  //   allSlides.forEach((item, index) => {
  //     item.style.transform = `translateX(${-(counter * 100)}%)`;
  //   })
  // }
  //
  // const handlerNextSlide = () => {
  //
  //   setCounter(counter + 1)
  //   console.log('as', counter)
  //   handlerRunSlider()
  // }
  //
  // const handlerPrevSlide = () => {
  //   setCounter(counter - 1)
  //   console.log('wer', counter)
  //   handlerRunSlider()
  // }

  return (
    <div className="slider">
      <div className="slider-header">
        <h4 className="slider-title">TV Series</h4>
        <p className="slider-arrows">
          <span className="material-icons arrow-left">keyboard_arrow_left</span>
          <span className="material-icons arrow-right">keyboard_arrow_right</span>
        </p>
      </div>
      <div className="slider-block">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            nextEl: `.arrow-right`,
            prevEl: `.arrow-left`
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
            {cardInfo.map((item, index, arr) => (
              <SwiperSlide className="card-item" key={item.id + index} >
                <img src={item.img} alt="img"/>
                <p className="card-item__title">{item.title}</p>
                <p className="card-item__genres">{item.genres} <span>{item.score}</span></p>
                <div className="blur">
                  <span className="play"></span>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}