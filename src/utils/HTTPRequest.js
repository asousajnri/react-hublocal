import api from "../api";

const HTTPRequest = (verbHTTP) => ({ resource, body, token }) => {
  return api({
    method: verbHTTP,
    url: resource,
    data: body ? body : null,
    headers: {
      "Access-Control-Allow-Origin":
        process.env.REACT_APP_ACCESS_CONTROLS_AALLOW_ORIGIN,
      "content-type": "application/json",
      "content-length": "200",
      Authorization: token ? `Bearer ${token}` : null,
    },
  });
};

export default HTTPRequest;
