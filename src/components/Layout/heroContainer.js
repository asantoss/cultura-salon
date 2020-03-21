import React from "react"
import styled from "styled-components"
import Image from "./image"
import { Button } from "../../styled-components/button"
import { IFrame } from "../Frames/index"

const HeroContainerStyled = styled.div`
  text-align: left;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  width: 100%;
  #hero {
    height: 60%;
    margin-bottom: 1em;
    img {
      width: 100%;
      height: 100%;
    }
    .gastby-image-wrapper {
      height: 100%;
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

export default function HeroContainer({ isBooking, setIsBooking, mission }) {
  return (
    <HeroContainerStyled>
      <div id="hero">
        <Image />
      </div>
      <div id="call-to-action">
        <div>
          <p>{mission}</p>
          <Button onClick={() => setIsBooking(!isBooking)}>Book Now</Button>
          {isBooking && (
            <IFrame
              title="Booking"
              url="https://squareup.com/appointments/buyer/widget/fi2fsgd0yw00y2/VB5J8A254VE01"
              closeFunction={setIsBooking}
            />
          )}
        </div>
      </div>
    </HeroContainerStyled>
  )
}
