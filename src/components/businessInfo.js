import React from "react"
import Map from "./mapContainer"
import styled from "styled-components"

const BusinessInfoContainer = styled.div`
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .location-hours {
    display: flex;
    flex-direction: column;
    margin: 0 2em;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &.address {
        margin: 1em;
      }
      &.hours {
        margin: 1em;
      }
    }
  }
  @media screen and (min-width: 700px) {
    flex-direction: row;
    align-items: flex-start;
    .location-hours {
      div {
        flex-direction: row;
      }
    }
  }
`

export default function BusinessInfo({ address }) {
  console.log(address)
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
              located inside Salon Lofts Loft #15
              <br /> (404) 585-0795
            </p>
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
