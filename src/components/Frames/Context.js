import React, { createContext, useReducer } from "react"
import IFrame from "./Booking/BookingFrame"

const initialState = {
  isOpen: false,
  url: "",
  name: "",
}

export const FrameContext = createContext()

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "OPEN":
      return {
        ...state,
        isOpen: !state.isOpen,
        url: payload.url,
        name: payload.name,
      }
    case "CLOSE":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

function FrameContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <FrameContext.Provider value={{ state, dispatch }}>
      {children}
      {state.isOpen && (
        <IFrame
          title={state.name}
          url={state.url}
          closeFunction={() => dispatch({ type: "CLOSE" })}
        />
      )}
    </FrameContext.Provider>
  )
}

export default FrameContextProvider
