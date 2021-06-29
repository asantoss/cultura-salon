/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled, { createGlobalStyle } from "styled-components"
import Footer from "./footer"

const Main = styled.main`
  min-width: 100%;
  overflow-x: hidden;
`
const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Butler', sans-serif;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer name={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
