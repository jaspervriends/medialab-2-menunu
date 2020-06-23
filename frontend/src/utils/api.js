import Axios from "axios";

export default function api(endpoint, body, customData = {}, headers = {}) {
  return Axios({
    url: `http://localhost:8080/${endpoint}`,
    method: body ? "POST" : "GET",
    data: body,
    headers: {
      'Accept': 'application/vnd.api+json',
      ...headers,
    },
    ...customData,
  });
}