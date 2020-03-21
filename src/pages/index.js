import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import InstagramFeed from "../components/Frames/Instagram/instagramFeed"
import { useStaticQuery, graphql } from "gatsby"
import BusinessInfo from "../components/businessInfo"
import ContactForm from "../components/contactForm"

import HeroContainer from "../components/Layout/heroContainer"

const IndexPage = () => {
  const [isBooking, setIsBooking] = useState(false)
  const data = useStaticQuery(graphql`
    query siteData {
      site {
        siteMetadata {
          address
          author
          description
          title
          mission
        }
      }
    }
  `)
  const { address, mission } = data.site.siteMetadata
  return (
    <Layout>
      <SEO title="Home" />
      <HeroContainer {...{ isBooking, setIsBooking, mission }} />
      <InstagramFeed />
      <BusinessInfo {...{ address }} />
      <ContactForm />
    </Layout>
  )
}
export default IndexPage
