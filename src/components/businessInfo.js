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
    padding: 2em;
    justify-content: space-between;

    .address,
    .hours,
    .policy {
      line-height: 2;
      font-size: 1rem;
      flex-basis: 33%;
      margin: 0 2rem;
    }
    .address {
      display: flex;
      flex-direction: column;
    }
    .days {
      text-transform: capitalize;
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
export default function BusinessInfo({ address, cancelPolicy, schedule }) {
  const sorter = {
    // "sunday": 0, // << if sunday is first day of week
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
  }
  function sortByDay(a, b) {
    let day1 = a.toLowerCase()
    let day2 = b.toLowerCase()
    return sorter[day1] - sorter[day2]
  }
  return (
    <BusinessInfoContainer>
      <Map address={address} />
      <div className="location-hours">
        <div className="address">
          <h3>Address</h3>
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
        <div className="policy">
          <h3>Cancellation Policy</h3>
          <p>{cancelPolicy}</p>
        </div>
        <div className="hours">
          <h3>Hours</h3>
          <p className="days">
            {Object.keys(schedule)
              .sort(sortByDay)
              .map(day => {
                const { available, from, to } = schedule[day]
                if (available) {
                  return (
                    <span key={day}>
                      {day} {from} - {to} <br />
                    </span>
                  )
                } else {
                  return (
                    <span key={day}>
                      {day} Closed <br />
                    </span>
                  )
                }
              })}
          </p>
        </div>
      </div>
    </BusinessInfoContainer>
  )
}
