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
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: auto;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .close {
    position: absolute;
    margin: 1em;
    top: 25px;
    right: 0;
    color: white;
    font-weight: 300;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .frame {
    transition: all 1s ease-in;
    margin: 5em auto;
    width: 100%;
    height: 100%;
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
  @media screen and (min-width: 700px) {
    .frame {
      width: 75%;
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
