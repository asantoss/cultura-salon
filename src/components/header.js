import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: #fff;
  padding: 0 0.625em;
  margin: 1em;
  a {
    text-decoration: none;
    color: black;
    font-size: 0.8em;
    font-weight: 300;
  }
  h2 {
    font-weight: 600;
    margin: 0;
    font-size: 1.375rem;
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
      <Link to="/">
        <h2>{siteTitle}</h2>
      </Link>
    </Container>
  )
}

export default Header
