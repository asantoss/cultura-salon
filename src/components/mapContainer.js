import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import styled from "styled-components"

const AnyReactComponent = ({ text }) => <div className="marker"></div>
const MapContainer = styled.div`
  width: 250px;
  height: 300px;
  margin: auto;
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
`

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
  }
  componentDidMount() {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.address}&key=${process.env.GOOGLE_API_KEY}`
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        const { location } = res.results[0].geometry
        const zoom = 16
        console.log(location)
        this.setState(state => ({ ...state, center: { ...location }, zoom }))
      })
    // .catch(e => {
    //   console.error("Could not reach google for your business address")
    // })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
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
      </MapContainer>
    )
  }
}

export default Map
