import hashtagRegex from "hashtag-regex"
import React from "react"

const regex = hashtagRegex()
export default function CaptionTag({ caption }) {
  let match
  const tags = []
  while ((match = regex.exec(caption))) {
    const hashtag = match[0]
    tags.push(hashtag)
  }
  const firstTag = caption.indexOf(tags[0])
  return (
    <>
      <p>
        {caption.slice(0, firstTag)}
        {tags.map((tag, i) => (
          <a
            key={i}
            href={`https://www.instagram.com/explore/tags/${
              tag.split("#")[1]
            }/`}
          >
            {tag + " "}
          </a>
        ))}
      </p>
    </>
  )
}
