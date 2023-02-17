import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_END_URL}`,
  timeout: 9999,
});

export default api;