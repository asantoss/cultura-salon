import styled from "styled-components"

export const Button = styled.button`
  padding: 0.5em 3em;
  border: 1px solid black;
  font-size: 1rem;
  margin: 1em 0;
  background-color: inherit;
  font-weight: normal;
  width: 100%;
  font-family: "Karla", sans-serif;
  @media screen and (min-width: 700px) {
    max-width: 200px;
  }
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`
