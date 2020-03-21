import React, { useState } from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button } from "../styled-components/button"
import InstagramFeed from "../components/instagramFeed"
import { useStaticQuery, graphql } from "gatsby"
import BusinessInfo from "../components/businessInfo"
import ContactForm from "../components/contactForm"
import IFrame from "../components/BookingFrame"

const HeroContainer = styled.div`
  text-align: left;
  margin-bottom: 2em;
  width: 100%;
  #hero {
    margin-bottom: 1em;
    img {
      width: 100%;
    }
  }
  #call-to-action {
    width: 100%;
    padding: 2em;
    h1 {
      line-height: 1.125;
      font-weight: 500;
      letter-spacing: -0.8px;
    }
  }
  @media screen and (min-width: 700px) {
    display: flex;
    width: 100%;
    align-items: center;
    height: fit-content;
    #hero {
      display: inline-block;
      width: 50%;
      flex-basis: 50%;
      img {
        width: 100%;
      }
    }
    #call-to-action {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: baseline;
      div {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        button {
          margin: 1em 0;
        }
      }
      h1 {
        font-size: 2.5rem;
      }
    }
  }
`
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
          <div>
            <h1>
              Our mission at Cultura Salon is creating confidence with
              simplicity and authenticity.
            </h1>
            <Button onClick={() => setIsBooking(!isBooking)}>Book Now</Button>
            {isBooking && (
              <IFrame
                title="Booking"
                url="https://squareup.com/appointments/buyer/widget/fi2fsgd0yw00y2/VB5J8A254VE01"
                closeFunction={setIsBooking}
              />
            )}
          </div>
        </div>
      </HeroContainer>
      <InstagramFeed />
      <BusinessInfo address={data.site.siteMetadata.address} />
      <ContactForm />
    </Layout>
  )
}
export default IndexPage
