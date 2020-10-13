import { getState } from "../utils/persistedState";

const initialState = getState("hublocal-challenge") || {
  user_id: '',
  user_name: '',
  user_token: ''
};

export default initialState;
