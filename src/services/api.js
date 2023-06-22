import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-u1v7.onrender.com",
});

