export const startSession = (dataSession) => {
  return {
    type: "START_SESSION",
    payload: dataSession
  }
}

export const logout = () => {
  return {
    type: "LOGOUT",
    payload: {
      user_id: '',
      user_name: '',
      user_token: ''
    }
  }
}