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
  /* display: flex;
  justify-content: center; */
  position: fixed;
  overflow: ${({ isScrollable }) => (isScrollable ? "scroll" : "hidden")};
`

const Modal = ({ children, closeFunc, isScrollable }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    const div = document.createElement("div")
    div.addEventListener("click", function(e) {
      closeFunc(false)
    })
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
    <ModalStyled className="modal-open" isScrollable={isScrollable}>
      {children}
    </ModalStyled>,
    elRef.current
  )
}

export default Modal
