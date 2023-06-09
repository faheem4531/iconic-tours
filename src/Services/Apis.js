import Axios from "axios";

const api = Axios.create({
  baseURL: "http://iconic-tours-env.us-east-1.elasticbeanstalk.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorCode = error?.response?.status;
    if (errorCode === 401 && localStorage.getItem("token")) {
      localStorage.removeItem("token");
      window.location.href = "/login?returnUrl=" + window.location.pathname;
    }
    return Promise.reject(error);
  }
);

export default api;
