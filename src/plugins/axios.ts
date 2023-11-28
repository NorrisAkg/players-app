import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";

interface CustomHeaders {
  "Access-Control-Allow-Origin": string;
  "X-Requested-With": string;
  Accept: string;
  "Content-Type": string;
}

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

axiosIns.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axiosIns.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axiosIns.defaults.headers.common["Accept"] = "application/json";

axiosIns.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<CustomHeaders>) {
    // config.headers = {
    // ...config.headers,
    // "Access-Control-Allow-Origin": "*",
    // "X-Requested-With": "XMLHttpRequest",
    // Accept: "application/json",
    // "Content-Type": "application/json",
    // };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosIns.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error.response?.status) {
      case 401:
        localStorage.clear();
        window.location.replace("/auth/login");
        break;
    }

    return Promise.reject(error);
  }
);

export default axiosIns;
