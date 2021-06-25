import React from "react";
import './Modal.scss'

export default function Modal({ trigger, children }) {


  const handlerOpenModal = () => {
    document.querySelector('.modal').classList.add('modal-active')
    document.body.style.overflow = 'hidden'
  }
  const handlerCloseModal = () => {
    document.querySelector('.modal').classList.remove('modal-active')
    document.body.style.overflow = 'auto'
  }

  document.addEventListener('click', e => {
    e.target.classList.contains('modal-active') && handlerCloseModal()
  })

  return (
    <>
      <div className="trigger" onClick={handlerOpenModal}>{trigger}</div>
      <div className="modal">
        <div className="modal-content">
          <span className="modal-close" onClick={handlerCloseModal}></span>
          <img src={children} alt="promo"/>
        </div>
      </div>
    </>
  )
}