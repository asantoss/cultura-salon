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
  width: 100%;
  [class=" gatsby-image-wrapper"] {
    height: 500px;
  }
  #hero {
    height: 60%;
    margin-bottom: 1em;
    img {
      width: 100%;
      height: 60%;
    }
  }
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
  @media screen and (min-width: 900px) {
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
  const handleClick = () => {
    dispatch({
      type: "OPEN",
      payload: {
        url: bookingSite,
        name: "Booking",
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
          <div class="action-btn">
            <Button onClick={handleClick}>Book Now</Button>
            <Button>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href={saleSite}
              >
                e-Gift Card
              </a>
            </Button>
          </div>
        </div>
      </div>
    </HeroContainerStyled>
  )
}
