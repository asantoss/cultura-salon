import React from "react"
import styled from "styled-components"
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const FooterContainer = styled.footer`
  height: 160px;
  width: 100%;
  margin: 2em 0.5em;
  padding: 1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #adadaf;
  .social {
    display: flex;
    flex-wrap: wrap;
    width: 15%;
    justify-content: space-evenly;
    font-size: 1.5em;
  }
`

export default function Footer({ name }) {
  const date = new Date()

  return (
    <FooterContainer>
      <div className="business-name">
        <h1>{name}</h1>
      </div>
      <div className="copyright">Copyright {date.getFullYear()} &copy;</div>
      <div className="social">
        <FontAwesomeIcon icon={faFacebook} className="icon-class" />
        <FontAwesomeIcon icon={faInstagram} className="icon-class" />
        <FontAwesomeIcon icon={faTwitter} className="icon-class" />
      </div>
    </FooterContainer>
  )
}
