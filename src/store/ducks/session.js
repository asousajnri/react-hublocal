import { createActions, createReducer } from "reduxsauce";

/**
 * Actions Types and Creator
 */

 export const { Types, Creators } = createActions({
  sign_in: ["data"],
  sign_out: [""]
 })

 /**
  * Handlers
  */

const INITIAL_STATE = {
  user_id: null,
  user_name: null,
  user_token: null
};

const signin = (state = INITIAL_STATE, action) => ({...state, ...action.data});

const signout = (state = INITIAL_STATE, action) => ({ ...state, ...INITIAL_STATE})

/**
 * Reducer
 */

 export default createReducer(INITIAL_STATE, {
   [Types.SIGN_IN]: signin,
   [Types.SIGN_OUT]: signout
 });