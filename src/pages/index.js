import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button } from "../styled-components/button"
import InstagramFeed from "../components/instagramFeed"
import Map from "../components/mapContainer"
import { useStaticQuery, graphql } from "gatsby"

const HeroContainer = styled.div`
  margin-bottom: 1em;
  #hero {
    margin-bottom: 1em;
    img {
      border-radius: 8px;
    }
  }
  #call-to-action {
    width: 50%;
    padding: 2em;
    text-align: center;
  }
  @media screen and (min-width: 700px) {
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    #hero {
      min-width: 500px;
    }
  }
`
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query siteData {
      site {
        siteMetadata {
          address
          author
          description
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <HeroContainer>
        <div id="hero">
          <Image />
        </div>
        <div id="call-to-action">
          <h2>
            Our mission at Cultura Salon is creating confidence with simplicity
            and authenticity.
          </h2>
          <Button>Book Now</Button>
        </div>
      </HeroContainer>
      <InstagramFeed />
      <Map address={data.site.siteMetadata.address} />
    </Layout>
  )
}
export default IndexPage
