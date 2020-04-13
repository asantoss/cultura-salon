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
        }
      }
    }
  `)
  const { address, mission, bookingSite, saleSite } = data.site.siteMetadata
  return (
    <FrameContextProvider>
      <Layout>
        <SEO title="Home" />
        <HeroContainer {...{ mission, bookingSite, saleSite }} />
        <InstagramFeed />
        <BusinessInfo {...{ address }} />
        <ContactForm />
      </Layout>
    </FrameContextProvider>
  )
}
export default IndexPage
