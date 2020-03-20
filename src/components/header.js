import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: #fff;
  padding: 0 1em;
  a {
    text-decoration: none;
    color: black;
    font-size: 0.8em;
    font-weight: 300;
    margin: 2em;
  }
  @media screen and (min-width: 700px) {
    text-align: center;
    margin: 1em;
    a {
      font-size: 1em;
    }
  }
`
const Header = ({ siteTitle }) => {
  return (
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  )
}

export default Header
