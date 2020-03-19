import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  background: #fff;
  padding: 0 1em;
  a {
    text-decoration: none;
    color: black;
    font-size: 0.8em;
    font-weight: 300;
    margin: 1em;
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
