import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const HeroContainer = styled.div``
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Hero
    <div style={{ maxWidth: `350px` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
