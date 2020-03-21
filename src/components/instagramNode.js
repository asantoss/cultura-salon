import React, { useState } from "react"
import Modal from "./Modal"
import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton"
import CloseSharpIcon from "@material-ui/icons/CloseSharp"
const IGPostContainer = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  border-radius: 10px;
  animation: fadeIn 0.5s ease-in;
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  .mainContainer {
    flex-direction: column;
    display: flex;
    background-color: white;
  }
  .imageContainer {
    height: 50%;
    width: 100%;
    cursor: pointer;
    .gatsby-image-container {
      margin: 0;
    }
  }
  .caption {
    color: black;
    margin: 1em 0;
    padding: 0 1em;
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    font-weight: 400;
  }
  .close {
    display: flex;
    justify-content: flex-end;
    background-color: #f8f8f8;
    font-size: 25px;
    color: grey;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #dee0e1;
  }
  @media screen and (min-width: 960px) {
    position: relative;
    margin: auto;
    width: 960px;
    transform: translateY(20%);
    .mainContainer {
      margin: auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 50px 2fr;
    }
    .imageContainer {
      grid-row: 1 / span 3;
      grid-column: 1;
    }
    .caption {
      grid-column: 2;
    }
    .close {
      grid-column: 2;
      grid-row: 1;
    }
  }
`
export default function InstagramNode({
  fluid,
  thumbnail,
  id,
  caption,
  children,
  timeStamp,
}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <img
        onClick={() => setIsOpen(true)}
        src={thumbnail}
        loading="lazy"
        alt={caption}
        width="240px"
        height="240px"
      />
      {isOpen && (
        <Modal isScrollable={true}>
          <IGPostContainer>
            <div className="mainContainer">
              <div className="close">
                <IconButton onClick={() => setIsOpen(!isOpen)}>
                  <CloseSharpIcon />
                </IconButton>
              </div>
              <div className="imageContainer">
                <a target="__blank" href={`https://instagram.com/p/${id}`}>
                  {children}
                </a>
              </div>
              <div className="caption">
                {timeStamp}
                <br />
                {caption}
              </div>
            </div>
          </IGPostContainer>
        </Modal>
      )}
    </>
  )
}
