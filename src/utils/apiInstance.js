import axios from "axios";

// eslint-disable-next-line no-undef
const baseUrl = `https://api.nasa.gov`;
// axios.defaults.baseURL = baseUrl;

const apiInstance = axios.create({
  baseURL: baseUrl,
});

export default apiInstance;
