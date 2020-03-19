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
  margin: 2em 0;
  padding: 1em;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #adadaf;
  .social {
    display: flex;
    flex-wrap: wrap;
    margin: 0.5em;
    width: 35%;
    justify-content: space-evenly;
    font-size: 1.5em;
    flex-direction: row;
    svg {
      display: inline-block;
    }
  }
  @media screen and (min-width: 700px) {
    flex-direction: row;
    .social {
      flex-direction: row;
    }
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
