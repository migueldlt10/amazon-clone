import * as axios from "axios";

const instance = axios.create({
  baseURL: "#", // API (cloud function) URL
});

export default instance;

// http://localhost:5001/clone-5029e/us-central1/api
