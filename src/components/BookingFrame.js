import React from "react"
import Modal from "./Modal"
import { useState } from "react"
import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton"
import CloseSharpIcon from "@material-ui/icons/CloseSharp"

const BookingFrame = styled.div`
  height: 90%;
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: auto;
    animation: spin 2s linear infinite;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
    background-color: #f8f8f8;
    font-size: 25px;
    text-align: right;
    color: grey;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #dee0e1;
    animation: fadeIn 1s ease-in;
  }
  .frame {
    border: none;
    width: 100%;
    height: 100%;
    animation: fadeIn 1s ease-in;
    position: relative;
    margin: auto;
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
  .loadingContainer {
    animation: fadeIn 1s ease-in;
    top: 50%;
    position: relative;
  }
  @media screen and (min-width: 700px) {
    .frame,
    .close {
      background-color: white;
      width: 75%;
    }
  }
`

export default function IFrame({ closeFunction, url, title }) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <Modal isScrollable={false}>
      <BookingFrame>
        <div
          className="close"
          style={{ display: isLoading ? "none" : "block" }}
        >
          <IconButton onClick={() => closeFunction(false)}>
            <CloseSharpIcon />
          </IconButton>
        </div>
        <div
          className="loadingContainer"
          style={{
            display: isLoading ? "block" : "none",
            alignItems: "center",
          }}
        >
          <div className="loader"></div>
        </div>
        <iframe
          className="frame"
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? "none" : "block" }}
          title={title}
          src={url}
        />
      </BookingFrame>
    </Modal>
  )
}
