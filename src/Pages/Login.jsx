import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Components/Inputs/Input";
import Button from "../Components/Buttons/Button";
import useAxios from "../Hooks/useAxios";
import { LOGIN_API_ENDPOINT } from "../Config/UserApiEndPoints";
import { useAuthCtx } from "../Contexts/AuthCtx";
import { DASHBOARD_ROUTE_POINT } from "../Config/Routes";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { axiosInstance } = useAxios();
  const { handleToken } = useAuthCtx();
  const navigate = useNavigate();

  const onChangeHandler = (type, value) => {
    setLoginData((prevData) => {
      return { ...prevData, [type]: value };
    });
  };

  const loginBtnHandler = async () => {
    try {
      const { data } = await axiosInstance.post(LOGIN_API_ENDPOINT, loginData);

      handleToken(data.token);

      navigate(DASHBOARD_ROUTE_POINT);
    } catch (error) {}
  };

  return (
    <section className="h-screen bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="flex w-full h-full justify-center items-center ">
        <div className="flex flex-col border rounded-lg p-10 space-y-5 min-w-96  bg-white shadow-md">
          <h1 className="text-lg font-bold">Log In</h1>
          <Input
            label="Email"
            onChange={(e) => onChangeHandler("email", e.target.value)}
          />
          <Input
            label="Password"
            onChange={(e) => onChangeHandler("password", e.target.value)}
          />
          <Button onClick={loginBtnHandler} name="Login" />
        </div>
      </div>
    </section>
  );
};

export default Login;
