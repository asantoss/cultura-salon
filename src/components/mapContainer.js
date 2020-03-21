import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import styled from "styled-components"

const AnyReactComponent = ({ text }) => <div className="marker"></div>
const MapContainer = styled.div`
  width: 250px;
  height: 300px;
  .marker {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    background-color: blue;
    border: 2px solid #fff;
    border-radius: 100%;
    user-select: none;
    transform: translate(-50%, -50%);
    &:hover {
      z-index: 1;
    }
  }
  @media screen and (min-width: 700px) {
    width: 600px;
    height: 300px;
  }
`

function encodeAddress(address) {
  return `https://www.google.com/maps/place/${address
    .split(" ")
    .map(piece => {
      return piece + "+"
    })
    .join("")}`
}

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.753746,
      lng: -84.38633,
    },
    zoom: 11,
  }
  state = {
    center: {
      lat: null,
      lng: null,
    },
    zoom: null,
    directionsLink: null,
  }
  componentDidMount() {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.address}&key=${process.env.GATSBY_GOOGLE_API_KEY}`
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        const { location } = res.results[0].geometry
        debugger
        const zoom = 16
        const directionsLink = encodeAddress(res.results[0].formatted_address)
        this.setState(state => ({
          ...state,
          center: { ...location },
          zoom,
          directionsLink,
        }))
      })
      .catch(e => {
        console.error("Could not reach google for your business address")
      })
  }

  render() {
    return (
      // Important! Always set the container height explicitly

      <MapContainer>
        <a href={this.state.directionsLink}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API_KEY }}
            defaultCenter={this.props.center}
            center={this.state.center}
            zoom={this.state.zoom}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={this.state.center.lat}
              lng={this.state.center.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </a>
      </MapContainer>
    )
  }
}

export default Map
