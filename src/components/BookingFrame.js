import React from "react"
import Modal from "./Modal"
import { useState } from "react"

export default function IFrame({ closeFunction, url, title }) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <Modal closeFunc={closeFunction}>
      <button onClick={() => closeFunction(false)} className="close">
        X
      </button>
      <div
        className="frame"
        style={{
          backgroundColor: "white",
          display: isLoading ? "flex" : "none",
          alignItems: "center",
        }}
      >
        <div className="loader"></div>
      </div>
      <iframe
        className="frame"
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1 }}
        title={title}
        src={url}
      />
    </Modal>
  )
}
