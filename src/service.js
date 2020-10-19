import axios from "axios";

export const getMethod = (url) => {
  return axios.get(url);
};
