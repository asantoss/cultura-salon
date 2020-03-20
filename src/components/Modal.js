import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

export const ModalStyled = styled.div`
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-bottom: 56px;
  background-color: rgb(0, 0, 0, 0.8);
  position: absolute;
  .close {
    position: absolute;
    margin: 1em;
    top: 0;
    right: 50px;
    color: white;
    font-weight: 300;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  iframe {
    margin: 5em auto;
    width: 80%;
    height: 80%;
    display: block;
    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
      border-radius: 10px;
    }
    &::-webkit-scrollbar {
      width: 1em;
    }
    &::-webkit-scrollbar-track {
      background-color: none;
    }
  }
`

const Modal = ({ children, closeFunc }) => {
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
    return () => modalRoot.removeChild(elRef.current)
  }, [])
  return createPortal(<ModalStyled>{children}</ModalStyled>, elRef.current)
}

export default Modal
