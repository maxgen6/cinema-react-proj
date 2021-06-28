import React, {useState} from "react";
import cl from "classnames";

import './Modal.scss'
import { Player } from "../index";

export default function Modal({ trigger, children }) {

  const [openModal, setOpenModal] = useState(false)

  const handlerOpenModal = () => {
    setOpenModal(true)
    document.body.style.overflow = 'hidden'
  }
  const handlerCloseModal = () => {
    setOpenModal(false)
    document.body.style.overflow = 'auto'
  }

  document.addEventListener('click', e => {
    e.target.classList.contains('modal-active') && handlerCloseModal()
  })

  const modalClassnames = cl({
    "modal": !openModal,
    "modal modal-active": openModal
  })

  return (
    <>
      <div className="trigger" onClick={handlerOpenModal}>{trigger}</div>
      <div className={modalClassnames}>
        <div className="modal-content">
          <span className="modal-close" onClick={handlerCloseModal}></span>
          {children}
        </div>
      </div>
    </>
  )
}