import Axios from "axios";
import Cookies from "js-cookie";

function authRequestInterceptor(config) {
  const token = Cookies.get("Tag_master_admin");

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  config.headers.Accept = "application/json";

  return config;
}

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !window.location.href.includes("signin")
    ) {
      Cookies.remove("Tag_master_admin");
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  },
);
