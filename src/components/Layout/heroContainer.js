import React, { useContext } from "react"
import styled from "styled-components"
import Image from "./heroImage"
import { Button } from "../../styled-components/button"
import { FrameContext } from "../Frames/index"
const HeroContainerStyled = styled.div`
  text-align: left;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  #call-to-action {
    width: 100%;
    padding: 2em;
    font-family: "Butler", sans-serif;
    p {
      line-height: 1.125;
      font-weight: 500;
      font-size: 1.8em;
      letter-spacing: -0.8px;
      margin: 0.5em 0;
    }
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
    height: fit-content;
    #hero {
      width: 50%;
      flex-basis: 50%;
      img {
        width: 100%;
      }
    }
    #call-to-action {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: baseline;
      div {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .action-btn {
          width: 100%;
          flex-direction: row;
        }
        button {
          margin: 1em 0;
        }
      }
      h1 {
        font-size: 2.5rem;
      }
    }
  }
`

export default function HeroContainer({ mission, bookingSite, saleSite }) {
  const { dispatch } = useContext(FrameContext)
  const handleClick = (url, name) => {
    dispatch({
      type: "OPEN",
      payload: {
        url: url,
        name: name,
      },
    })
  }
  return (
    <HeroContainerStyled>
      <div id="hero">
        <Image />
      </div>
      <div id="call-to-action">
        <div>
          <p>{mission}</p>
          <div className="action-btn">
            <Button onClick={() => handleClick(bookingSite, "booking")}>
              Book Now
            </Button>
            <Button onClick={() => handleClick(saleSite, "GiftCards")}>
              e-Gift Card
            </Button>
          </div>
        </div>
      </div>
    </HeroContainerStyled>
  )
}
