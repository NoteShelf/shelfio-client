import axios from "axios";

import { BASE_URL } from "../Config/Config";
import { useAuthCtx } from "../Contexts/AuthCtx";
import { useState } from "react";
import { toast } from "react-toastify";

const useAxios = () => {
  const { token, logoutHandler } = useAuthCtx();

  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
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

  const handleError = (error, needToast = true) => {
    if (error.response?.status === 401) {
      logoutHandler();
    }

    let errorMessage;

    if (error.response?.data?.error) {
      setErrorMsg(error.response.data.error);

      errorMessage = error.response.data.error;
    } else {
      setErrorMsg("Something went wrong, please try again later");
      console.error(error.message);
      errorMessage = error.message;
    }

    if (needToast) {
      toast.error(errorMessage);
    }
  };

  return {
    axiosInstance,
    handleError,
    errorMsg,
    setErrorMsg,
    isLoading,
    setIsLoading,
  };
};

export default useAxios;
