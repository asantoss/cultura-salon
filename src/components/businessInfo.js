import React from "react"
import Map from "./mapContainer"
import styled from "styled-components"

const BusinessInfoContainer = styled.div`
  width: 100%;
  padding: 5.3em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Karla", sans-serif;
  h3 {
    margin: 1em 0;
    font-weight: 400;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .location-hours {
    display: flex;
    flex-direction: column;
    margin: 2em 2em;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .address,
    .hours {
      line-height: 2;
      font-size: 1rem;
    }
  }
  .directionsLink {
    margin: 1em 0;
    font-weight: 400;
  }
  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    .directionsLink {
      display: inline;
      margin: 1em 0;
      font-weight: 400;
    }
    .location-hours {
      margin: 0 2em;
      width: 50%;
      div {
        flex-direction: row;
      }
      .hours {
        flex-direction: column;
      }
    }
  }
`
function encodeAddress(address) {
  return `https://www.google.com/maps/place/${address
    .replace(" ", ",")
    .split(",")
    .map(piece => {
      return piece + "+"
    })
    .join("")}`
}
export default function BusinessInfo({ address }) {
  return (
    <BusinessInfoContainer>
      <Map address={address} />
      <div className="location-hours">
        <h3>Location & Hours</h3>
        <div>
          <div className="hours">
            <p>
              Cultura Salon
              <br /> 2570 Blackmon Dr. ,Suite 440, <br /> Decatur, GA 30033
              <br />
              located inside Salon Lofts
              <br /> Loft #15
              <br /> (404) 585-0795
            </p>
            <h3 className="directionsLink">
              <a href={encodeAddress(address)}>Get Directions</a>
            </h3>
          </div>
          <div className="address">
            <p>
              Monday Closed
              <br /> Tuesday 10:00am - 6:00pm <br /> Wednesday 10:00am - 6:00pm
              <br />
              Thursday Closed
              <br /> Friday 10:00am - 5:00pm
              <br /> Saturday 9:00am - 4:00pm <br />
              Sunday Closed
            </p>
          </div>
        </div>
      </div>
    </BusinessInfoContainer>
  )
}
