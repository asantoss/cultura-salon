import React, { useRef, useState } from "react"
import styled from "styled-components"
import InstagramNode from "./instagramNode"
import timeStampParse from "../../../utils/timeStampParse"
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp"
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Feed = styled.div`
  flex-grow: 2;
  display: flex;
  overflow-x: scroll;
  width: 100%;
  img {
    margin: 1em;
    cursor: pointer;
    width: 180px;
    height: 180px;
    &:hover {
      filter: opacity(65%);
    }
  }
  transition: all 2s ease-in;
  scroll-behavior: smooth;
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 1em;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  @media screen and (min-width: 700px) {
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 10px;
      width: 50px;
    }
  }
`
const InstagramFeedStyled = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  .feed-header {
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
    }
    a {
      font-size: 0.7em;
      display: block;
      color: inherit;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .action {
    font-weight: bold;
    color: #70767c;
    padding: 0 0.2em;
    margin: 0.2em;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  @media screen and (min-width: 900px) {
    width: 100%;
    margin: 2em auto;
    .feed-header {
      flex-direction: row;
    }
  }
`

export default function InstagramFeed({ igHandle, igAccessToken }) {
  const carouselRef = useRef()
  const [state] = useState({ loading: false, photos: [] })
  const data = useStaticQuery(graphql`
    query IGQuery {
      allInstagramContent {
        edges {
          node {
            id
            timestamp
            media_url
            caption
            permalink
            localImage {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const images = data.allInstagramContent.edges
    .sort((a, b) => a.node.timestamp - b.node.timestamp)
    .slice(0, 15)
    .map(({ node }) => {
      const { fluid } = node.localImage.childImageSharp
      const { caption, permalink, timestamp, media_url } = node
      const date = timeStampParse(timestamp)
      if (media_url) {
        return (
          <InstagramNode
            thumbnail={media_url}
            igAccessToken={igAccessToken}
            id={permalink}
            caption={caption}
            timeStamp={date}
          >
            <Img fluid={fluid} />
          </InstagramNode>
        )
      }
      return null
    })

  if (state.loading) {
    return <div className="loader"></div>
  }

  const handleScroll = direction => {
    const carousel = carouselRef.current
    if (direction) {
      return (carousel.scrollLeft += 708)
    } else {
      return (carousel.scrollLeft -= 708)
    }
  }
  return (
    <InstagramFeedStyled>
      <div className="feed-header">
        <h2>
          Explore our Instagram
          <a target="__blank" href={`https://www.instagram.com/${igHandle}/`}>
            @{igHandle}
          </a>
        </h2>
        <div>
          <IconButton className="action" onClick={() => handleScroll(0)}>
            <ArrowBackIosSharpIcon />
          </IconButton>
          <IconButton className="action" onClick={() => handleScroll(1)}>
            <ArrowForwardIosSharpIcon />
          </IconButton>
        </div>
      </div>

      <Feed ref={carouselRef} id="feed_carousel">
        {images}
      </Feed>
    </InstagramFeedStyled>
  )
}
