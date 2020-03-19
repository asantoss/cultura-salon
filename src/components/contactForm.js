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

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const formRef = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    console.log({ name, email, message })
    setName("")
    setEmail("")
    setMessage("")
  }
  return (
    <ContactFormContainer>
      <h2>Contact Form</h2>
      <p>
        Reach out to us and let us know if there is anything we can do for you.
      </p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Full Name"
          value={name}
        />
        <input
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email *"
          required
          value={email}
        />
        <textarea
          onChange={e => setMessage(e.target.value)}
          value={message}
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
