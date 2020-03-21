import styled from "styled-components"

export const Button = styled.button`
  padding: 1em 3em;
  border: 1px solid black;
  font-size: 1rem;
  background-color: inherit;
  font-weight: 500;
  width: 100%;
  margin: 1em;
  @media screen and (min-width: 700px) {
    max-width: 200px;
  }
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`
