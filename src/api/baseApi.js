import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://dummyjson.com/",
});

export default baseApi;
