import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import InstagramNode from "./instagramNode"
import Img from "gatsby-image"
import timeStampParse from "../../../utils/timeStampParse"
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp"
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp"
import axios from "axios"

const Feed = styled.div`
  flex-grow: 2;
  display: flex;
  overflow-x: scroll;
  max-width: 100%;
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
  align-items: flex-start;
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
const instagramRegExp = new RegExp(
  /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
)

const fetchInstagramPhotos = async (accountUrl, amount) => {
  const response = await axios.get(accountUrl)
  const json = JSON.parse(response.data.match(instagramRegExp)[1])
  const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
    0,
    amount
  )
  const photos = edges.map(({ node }) => {
    return {
      url: `https://www.instagram.com/p/${node.shortcode}/`,
      timestamp: node.taken_at_timestamp,
      thumbnailUrl: node.thumbnail_src,
      displayUrl: node.display_url,
      caption:
        node.edge_media_to_caption.edges.length > 0
          ? node.edge_media_to_caption.edges[0].node.text
          : "",
    }
  })
  return photos
}

export default function InstagramFeed({ igHandle, imagesToPull }) {
  const carouselRef = useRef()
  const [state, setstate] = useState({ loading: false, photos: [] })

  useEffect(() => {
    fetchInstagramPhotos(
      `https://www.instagram.com/${igHandle}`,
      imagesToPull
    ).then(photos => {
      setstate(s => ({ loading: false, photos }))
      console.log(photos)
    })
  }, [igHandle])

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
      <div>
        <Feed ref={carouselRef}>
          {state.photos.map((photo, i) => {
            const { thumbnailUrl, url, displayUrl, caption, timestamp } = photo
            const date = timeStampParse(timestamp)
            return (
              <InstagramNode
                thumbnail={thumbnailUrl}
                id={i}
                caption={caption}
                timeStamp={date}
              >
                <img src={displayUrl} />
              </InstagramNode>
            )
          })}
        </Feed>
      </div>
    </InstagramFeedStyled>
  )
}
