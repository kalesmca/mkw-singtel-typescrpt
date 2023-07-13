import axios from "axios";
import * as CONSTANTS from "../../config/constants";

const http = axios.create({
  baseURL: CONSTANTS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": CONSTANTS.API_KEY
  },
  validateStatus(status) {
    return status >= 200 && status < 300;
  }
});

export default http;
