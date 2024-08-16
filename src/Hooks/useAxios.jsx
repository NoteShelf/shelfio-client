import axios from "axios";

import { BASE_URL } from "../Config/Config";
import { useAuthCtx } from "../Contexts/AuthCtx";

const useAxios = () => {
  const { token } = useAuthCtx();

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      throw error;
    }
  );

  return { axiosInstance };
};

export default useAxios;
