import React, { useState, useEffect } from "react"
import axios from "axios"
import Modal from "../Modal"
import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton"
import CloseSharpIcon from "@material-ui/icons/CloseSharp"
import CaptionTags from "./hashtags"
import { useRef } from "react"
import useClickOutside from "../../../hooks/clickOutside"
const IGPostContainer = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  iframe {
    & > body {
      overflow: scroll !important;
    }
    border: 1px solid black;
  }
  .mainContainer {
    width: 50%;
    height: 50%;
  }
  @media screen and (min-width: 750px) {
    position: fixed;
    margin: 1rem auto;
  }
`
export default function InstagramNode({ thumbnail, caption, id }) {
  const node = useRef()
  const [isOpen, setIsOpen] = useState(false)
  useClickOutside(node, () => setIsOpen(false))
  return (
    <>
      <img onClick={() => setIsOpen(true)} src={thumbnail} alt={caption} />
      {isOpen && (
        <Modal isScrollable={true}>
          <IGPostContainer>
            <iframe
              ref={node}
              src={id + `embed`}
              frameborder="0"
              allowfullscreen
              scrolling="yes"
              allowtransparency
              height="620px"
            ></iframe>
          </IGPostContainer>
        </Modal>
      )}
    </>
  )
}
