import React, { useState, useRef } from "react"
import styled from "styled-components"
import { Button } from "../styled-components/button"

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    input,
    textarea {
      width: 100%;
      min-height: 48px;
      border: 1px solid grey;
      border-radius: 5px;
      padding: 1em;
      margin: 0.5em;
      resize: none;
    }
    @media screen and (min-width: 700px) {
      width: 700px;
    }
  }
`
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactForm() {
  const [state, setState] = useState({})
  const formRef = useRef()
  const handleSubmit = e => {
    const form = e.target
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        alert("Success!")
      })
      .catch(error => alert(error))

    console.log({ name, email, message })
    setState({})
  }
  const handleChange = e => {
    return setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  return (
    <ContactFormContainer>
      <h2>Contact Form</h2>
      <p>
        Reach out to us and let us know if there is anything we can do for you.
      </p>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="name" />
        <input type="text" onChange={handleChange} placeholder="Full Name" />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Email *"
          required
        />
        <textarea
          onChange={handleChange}
          required
          minLength="20"
          name=""
          id=""
          cols="20"
          rows="3"
          placeholder="Message"
        ></textarea>
        <Button type="submit">Submit</Button>
      </form>
    </ContactFormContainer>
  )
}
