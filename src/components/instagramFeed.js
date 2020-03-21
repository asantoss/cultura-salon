import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import InstagramNode from "./instagramNode"
import Img from "gatsby-image"
import timeStampParse from "../utils/timeStampParse"
const Feed = styled.div`
  flex-grow: 2;
  display: flex;
  overflow-x: scroll;
  max-width: 100%;
  img {
    margin: 1em;
    cursor: pointer;
    width: 230px;
    height: 230px;
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
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  .feed-header {
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    h2 {
      font-size: 1.5rem;
    }
    a {
      display: block;
      color: inherit;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .action {
    font-size: 1.5em;
    font-weight: bold;
    color: #70767c;
    width: 40px;
    padding: 0 0.2em;
    margin: 0.2em;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  @media screen and (min-width: 700px) {
    width: 70%;
    margin: 2em auto;
    .feed-header {
      flex-direction: row;
    }
  }
`
export default function InstagramFeed() {
  const carouselRef = useRef()
  const data = useStaticQuery(graphql`
    query IGQuery {
      allInstaNode {
        edges {
          node {
            id
            timestamp
            username
            caption
            thumbnails {
              src
            }
            localFile {
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
  console.log(data.allInstaNode.edges)
  const images = data.allInstaNode.edges
    .sort((a, b) => b.node.timestamp - a.node.timestamp)
    .map(({ node }, i) => {
      const { fluid } = node.localFile.childImageSharp
      const { src } = node.thumbnails[1]
      const { caption, id, timestamp } = node
      const date = timeStampParse(timestamp)
      console.log(date)
      if (src) {
        return (
          <InstagramNode
            thumbnail={src}
            id={id}
            caption={caption}
            timeStamp={date}
          >
            <Img fluid={fluid} />
          </InstagramNode>
        )
      }
      return null
    })
  const handleScroll = direction => {
    const carousel = carouselRef.current
    if (direction) {
      return (carousel.scrollLeft += 708)
    } else {
      return (carousel.scrollLeft -= 708)
    }
  }
  const igName = data.allInstaNode.edges[0].node.username
  return (
    <InstagramFeedStyled>
      <div className="feed-header">
        <h2>
          Explore our Instagram
          <a target="__blank" href={`https://www.instagram.com/${igName}/`}>
            @{igName}
          </a>
        </h2>
        <div>
          <button className="action" onClick={() => handleScroll(0)}>
            {"<"}
          </button>
          <button className="action" onClick={() => handleScroll(1)}>
            >
          </button>
        </div>
      </div>
      <div>
        <Feed ref={carouselRef}>{images}</Feed>
      </div>
    </InstagramFeedStyled>
  )
}
