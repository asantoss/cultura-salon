import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Feed = styled.div`
  flex-grow: 2;
  margin: 1em;
  display: flex;
  overflow-x: scroll;
  img {
    margin: 0 0.5em;
  }
  transition: all 2s ease-in;
  scroll-behavior: smooth;
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 1em;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  @media screen and (min-width: 700px) {
    width: 70%;
    margin: auto;
  }
`
const InstagramFeedStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;
  justify-content: center;
  align-items: flex-start;
  .action {
    font-size: 1.5em;
    font-weight: bold;
    color: black;
    width: 25px;
    padding: 0 0.2em;
    margin: 0.2em;
    :hover {
      background-color: rgb(0, 0, 0, 0.2);
    }
  }
`
export default function InstagramFeed() {
  const carouselRef = useRef()
  const data = useStaticQuery(graphql`
    query MyQuery {
      instaUserNode {
        username
      }
    }
  `)
  const images = Array.from({ length: 12 }, x => (
    <img
      src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com
  C/O https://placeholder.com/"
    />
  ))
  const handleScroll = direction => {
    const carousel = carouselRef.current
    if (direction) {
      return (carousel.scrollLeft += 158)
    } else {
      return (carousel.scrollLeft -= 158)
    }
  }
  return (
    <InstagramFeedStyled>
      <div>
        <h3>
          Explore our Instagram
          <p>@{data.instaUserNode.username}</p>
        </h3>
      </div>
      <div style={{ alignSelf: "center" }}>
        <span className="action" onClick={() => handleScroll(0)}>
          {"<"}
        </span>
        <span className="action" onClick={() => handleScroll(1)}>
          >
        </span>
      </div>
      <Feed ref={carouselRef}>{images}</Feed>
    </InstagramFeedStyled>
  )
}
