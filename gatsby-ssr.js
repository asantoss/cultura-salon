/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// You can delete this file if you're not using it
import React from "react"

const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="modal" id="modal" />])
}

export { onRenderBody }
