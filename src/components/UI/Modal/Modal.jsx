import React, {useState} from "react";

import {ModalBlock} from "./styles";

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

  return (
    <>
      <div className="trigger" onClick={handlerOpenModal}>{trigger}</div>
      <ModalBlock _active={openModal} onClick={handlerCloseModal}>
        <ModalBlock.Content >
          <ModalBlock.Close onClick={handlerCloseModal}></ModalBlock.Close>
          {children}
        </ModalBlock.Content>
      </ModalBlock>
    </>
  )
}