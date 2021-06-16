import React, {useState, useContext} from "react";
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

  const {cardInfo} = useContext(Context)

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
    <div className="slider">
      <div className="slider-header">
        <h4 className="slider-title">TV Series</h4>
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
          {cardInfo.map((item, index, arr) => (
            <SwiperSlide className="card-item" key={item.id + index} tag="a" href="/#">
              <img src={item.img} alt="img"/>
              <p className="card-item__title">{item.title}</p>
              <p className="card-item__genres">{item.genres} <span>{item.score}</span></p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}