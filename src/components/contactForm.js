import React, { useState, useRef } from "react"
import styled from "styled-components"
import { Button } from "../styled-components/button"

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2em;
  margin: 1em 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  p {
    font-weight: normal;
    font-family: "Karla", sans-serif;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: "Karla", sans-serif;
    input,
    textarea {
      color: rgba(2, 1, 1, 0.3);
      width: 100%;
      height: 48px;
      border: 1px solid grey;
      border-color: rgba(2, 1, 1, 0.3);
      border-radius: 2px;
      padding: 1em;
      margin: 0.5em 0;
      resize: none;
    }
    textarea {
      min-height: 96px;
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
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
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
        name,
        email,
        message,
      }),
    })
      .then(() => {
        alert("Success!")
        form.reset()
      })
      .catch(error => alert(error))
  }
  return (
    <ContactFormContainer>
      <h3>Contact Us</h3>
      <p>
        Reach out to us and let us know if there is anything we can do for you.
      </p>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="name" />
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email *"
          name="email"
          required
        />
        <textarea
          onChange={e => setMessage(e.target.value)}
          required
          minLength="20"
          name="message"
          id=""
          cols="20"
          rows="3"
          placeholder="Message"
        ></textarea>
        <Button style={{ width: "50%", height: "48px" }} type="submit">
          Submit
        </Button>
      </form>
    </ContactFormContainer>
  )
}
