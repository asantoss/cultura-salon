import React, { useState } from "react"
import Modal from "../Modal"
import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton"
import CloseSharpIcon from "@material-ui/icons/CloseSharp"
import CaptionTags from "./hashtags"
import { useRef } from "react"
import { useOnClickOutside } from "../../../hooks/clickOutside"
const IGPostContainer = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  width: 100%;
  border-radius: 10px;
  animation: fadeIn 0.5s ease-in;
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Karla", sans-serif;
  .mainContainer {
    max-width: 75%;
    background-color: #f8f8f8;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    flex-direction: column;
    display: flex;
  }
  .imageContainer {
    display: block;
    height: 100%;
    max-width: 100%;
    cursor: pointer;
  }
  .caption {
    background-color: white;
    color: black;
    margin: 1.5em 0;
    padding: 0 1.5em;
    white-space: pre-line;
    display: flex;
    font-size: 1em;
    flex-direction: column;
    font-weight: 300;
    line-height: 1.31;
    a {
      display: inline;
      text-decoration: none;
      color: #003569;
    }
  }
  .close {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    justify-content: flex-end;
    background-color: #f8f8f8;
    font-size: 25px;
    color: grey;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #dee0e1;
  }
  @media screen and (min-width: 750px) {
    position: relative;
    margin: auto;
    width: 960px;
    transform: translateY(20%);
    .mainContainer {
      margin: auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 50px 2fr;
      grid-gap: 0;
    }
    .imageContainer {
      grid-row: 2 / span 3;
      grid-column: 1;
      height: 100%;
      img {
        width: 100%;
      }
    }
    .caption {
      grid-column: 2 / span 3;
    }
    .close {
      grid-column: 2;
      grid-row: 1;
    }
  }
`
export default function InstagramNode({
  thumbnail,
  url,
  caption,
  children,
  timeStamp,
}) {
  const node = useRef()
  const [isOpen, setIsOpen] = useState(false)
  useOnClickOutside(node, () => setIsOpen(false))
  return (
    <>
      <img onClick={() => setIsOpen(true)} src={thumbnail} alt={caption} />
      {isOpen && (
        <Modal isScrollable={true}>
          <IGPostContainer ref={node}>
            <div className="mainContainer">
              <div className="close">
                <IconButton onClick={() => setIsOpen(!isOpen)}>
                  <CloseSharpIcon />
                </IconButton>
              </div>

              <a className="imageContainer" target="__blank" href={url}>
                {children}
              </a>
              <div className="caption">
                <p>{timeStamp}</p>
                <CaptionTags {...{ caption }} />
              </div>
            </div>
          </IGPostContainer>
        </Modal>
      )}
    </>
  )
}
