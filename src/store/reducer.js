import initialState from "./initial-state";
import { setState } from "../utils/persistedState";

const reducer = (state = initialState, action) => {
  if(action.type === "START_SESSION") {
    setState('hublocal-challenge', {...state, ...action.payload})

    return {
      ...state,
      ...action.payload
    }
  }

  if(action.type === "LOGOUT") {
    setState('hublocal-challenge', {...state, ...action.payload})

    return {
      ...state,
      ...action.payload
    }
  }

  return state;
};

export default reducer;
