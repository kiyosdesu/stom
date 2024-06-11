import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d2abfb4c219544aa9d3e06d32b54065e",
  },
});
