import axios from "axios";
import { BASE_URL } from "./http.service.conf";

export const http = axios.create();

http.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem('token');
  config.baseURL = BASE_URL;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
})

