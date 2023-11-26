import axios from "axios";


const axiosIns = axios.create({
  baseURL: process.env.BASE_URL,
});

axiosIns.interceptors.request.use(
  function (config) {
    config.headers = {
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
      // "Content-Type": "application/json",
    };
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