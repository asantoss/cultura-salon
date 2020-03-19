import React from "react"
import { GoogleApiWrapper } from "google-map-react"
import styled from "styled-components"

const GoogleMapsContainer = styled.div`
  height: 400px;
  width: 300px;
`

export default function BusinessInfo() {
  return (
    <div>
      <GoogleMapsContainer>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GOOGLE_API_KEY,
          }}
        ></GoogleMapReact>
      </GoogleMapsContainer>
    </div>
  )
}
