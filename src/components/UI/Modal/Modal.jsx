import React, {useState} from "react";
import cl from "classnames";

import './Modal.scss'

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

  // document.addEventListener('click', e => {
  //   e.target.classList.contains('modal-active') && handlerCloseModal()
  // })

  return (
    <>
      <div className="trigger" onClick={handlerOpenModal}>{trigger}</div>
      <div className={cl({
        "modal": true,
        "modal_active": openModal
      })} onClick={handlerCloseModal}>
        <div className="modal-content">
          <span className="modal-close" onClick={handlerCloseModal}></span>
          {children}
        </div>
      </div>
    </>
  )
}