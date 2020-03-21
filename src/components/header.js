import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: #fff;
  padding: 0 0.625em;
  margin: auto;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: baseline;
  a {
    text-decoration: none;
    color: black;
    font-size: 0.8em;
    font-weight: 300;
  }
  h2 {
    font-weight: 500;
    margin: 0;
    line-height: 32.5px;
    font-size: 1.625rem;
  }
  @media screen and (min-width: 700px) {
    text-align: center;
    margin: 1.5em;
    h2 {
      font-weight: 500;
    }
    a {
      font-size: 1em;
    }
  }
`
const Header = ({ siteTitle }) => {
  return (
    <Container>
      <div>
        <Link to="/">
          <h2>{siteTitle}</h2>
        </Link>
      </div>
    </Container>
  )
}

export default Header
