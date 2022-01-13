import axios from "axios";

// eslint-disable-next-line no-undef
const baseUrl = `https://api.nasa.gov/planetary`;
// axios.defaults.baseURL = baseUrl;

export const ApiInstance = axios.create({
  baseURL: baseUrl,
});
