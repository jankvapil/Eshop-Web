import React from "react"
import useGlobalHook from "use-global-hook"
import * as actions from "../actions"

const initialState = {
  isLogged: false,
  user: {
    id: undefined,
    email: undefined
  },
}

const useGlobal = useGlobalHook(React, initialState, actions)

export default useGlobal