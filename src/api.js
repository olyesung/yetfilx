import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "7bdcf3bdcf24644363062c0c18f3c812",
    language: "en-us",
  },
});

export default api;
