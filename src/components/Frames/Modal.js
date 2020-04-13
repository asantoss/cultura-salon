import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

export const ModalStyled = styled.div`
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-bottom: 56px;
  background-color: rgb(0, 0, 0, 0.8);
  position: fixed;
`

const Modal = ({ children }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    const div = document.createElement("div")
    elRef.current = div
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal")
    modalRoot.appendChild(elRef.current)
    return () => {
      modalRoot.removeChild(elRef.current)
    }
  }, [])
  return createPortal(
    <ModalStyled className="modal-open">{children}</ModalStyled>,
    elRef.current
  )
}

export default Modal
