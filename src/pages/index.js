import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import InstagramFeed from "../components/Frames/Instagram/instagramFeed"
import { useStaticQuery, graphql } from "gatsby"
import BusinessInfo from "../components/businessInfo"
import ContactForm from "../components/contactForm"
import FrameContextProvider from "../components/Frames/Context"
import HeroContainer from "../components/Layout/heroContainer"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query siteData {
      site {
        siteMetadata {
          address
          author
          description
          title
          mission
          bookingSite
          saleSite
          igHandle
          imagesToPull
        }
      }
    }
  `)
  const {
    address,
    mission,
    bookingSite,
    saleSite,
    igHandle,
    imagesToPull,
  } = data.site.siteMetadata
  return (
    <FrameContextProvider>
      <Layout>
        <SEO title="Home" />
        <HeroContainer {...{ mission, bookingSite, saleSite }} />
        <InstagramFeed {...{ igHandle, imagesToPull }} />
        <BusinessInfo {...{ address }} />
        <ContactForm />
      </Layout>
    </FrameContextProvider>
  )
}
export default IndexPage
