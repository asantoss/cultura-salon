import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button } from "../styled-components/button"
import InstagramFeed from "../components/instagramFeed"
import Map from "../components/mapContainer"
import { useStaticQuery, graphql } from "gatsby"
import BusinessInfo from "../components/businessInfo"
import ContactForm from "../components/contactForm"
import Footer from "../components/footer"

const HeroContainer = styled.div`
  margin-bottom: 2em;
  width: 100%;
  #hero {
    margin-bottom: 1em;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }
  #call-to-action {
    width: 100%;
    padding: 2em;
    text-align: center;
    h1 {
      font-size: 2.5rem;
    }
  }
  @media screen and (min-width: 700px) {
    display: flex;
    width: 100%;
    align-items: center;
    #hero {
      min-width: 700px;
      min-height: 700px;
      flex-basis: 50%;
    }
    #call-to-action {
      padding: 5.25em;
      width: 50%;
      text-align: left;
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
          <h1>
            Our mission at Cultura Salon is creating confidence with simplicity
            and authenticity.
          </h1>
          <Button>Book Now</Button>
        </div>
      </HeroContainer>
      <InstagramFeed />
      <BusinessInfo address={data.site.siteMetadata.address} />
      <ContactForm />
    </Layout>
  )
}
export default IndexPage
