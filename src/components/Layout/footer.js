import React from "react"
import styled from "styled-components"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
const FooterContainer = styled.footer`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgb(246, 247, 249);
  .business-name {
    margin: 0.5em;
    h3 {
      font-family: "Butler", sans-serif;
      font-size: 1.25em;
    }
  }
  .social {
    #fb {
      color: #3b5998;
    }
    #ig {
      color: #e95950;
    }
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
        <h3>{name}</h3>
      </div>
      <div className="copyright">
        <p>Copyright {date.getFullYear()} &copy;</p>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/culturasalonatl/" id="fb">
          <FacebookIcon />
        </a>
        <a
          target="__blank"
          href="https://www.instagram.com/cultura.salon.atl/"
          id="ig"
        >
          <InstagramIcon />
        </a>
      </div>
    </FooterContainer>
  )
}
