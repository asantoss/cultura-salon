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
          cancelPolicy
          igAccessToken
          schedule {
            friday {
              available
              from
              to
            }
            monday {
              available
              from
              to
            }
            saturday {
              available
              from
              to
            }
            sunday {
              available
              from
              to
            }
            thursday {
              available
              from
              to
            }
            tuesday {
              available
              from
              to
            }
            wednesday {
              available
              from
              to
            }
          }
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
    cancelPolicy,
    schedule,
    igAccessToken,
  } = data.site.siteMetadata
  return (
    <FrameContextProvider>
      <Layout>
        <SEO title="Home" />
        <HeroContainer {...{ mission, bookingSite, saleSite }} />
        <InstagramFeed {...{ igHandle, imagesToPull, igAccessToken }} />
        <BusinessInfo {...{ address, cancelPolicy, schedule }} />
        <ContactForm />
      </Layout>
    </FrameContextProvider>
  )
}
export default IndexPage
