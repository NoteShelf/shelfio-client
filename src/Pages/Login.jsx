import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Components/Inputs/Input";
import Button from "../Components/Buttons/Button";
import useAxios from "../Hooks/useAxios";
import { LOGIN_API_ENDPOINT } from "../Config/UserApiEndPoints";
import { useAuthCtx } from "../Contexts/AuthCtx";
import { DASHBOARD_ROUTE_POINT } from "../Config/Routes";
import SignupBlock from "../Components/Login/SignupBlock";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "12" });
  const [isSignUp, setIsSignUp] = useState(false);

  const {
    axiosInstance,
    handleError,
    errorMsg,
    setErrorMsg,
    setIsLoading,
    isLoading,
  } = useAxios();

  const { handleToken } = useAuthCtx();
  const navigate = useNavigate();

  const onChangeHandler = (type, value) => {
    setErrorMsg("");

    setLoginData((prevData) => {
      return { ...prevData, [type]: value };
    });
  };

  const loginBtnHandler = async () => {
    try {
      setIsLoading(true);
      setErrorMsg("");
      const { data } = await axiosInstance.post(LOGIN_API_ENDPOINT, loginData);

      handleToken(data.token);

      navigate(DASHBOARD_ROUTE_POINT);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickSignUpBtnHandler = () => {
    setErrorMsg("");
    setIsSignUp(true);
  };

  const loginHtml = (
    <>
      <h1 className="text-lg font-bold">Sign in</h1>

      <Input
        label="Email"
        onChange={(e) => onChangeHandler("email", e.target.value)}
      />
      <Input
        label="Password"
        onChange={(e) => onChangeHandler("password", e.target.value)}
      />
      <Button isLoading={isLoading} onClick={loginBtnHandler} name="SIGN IN" />

      <div className="flex space-x-1 text-xs">
        <span>Don't have an account?</span>
        <button
          onClick={onClickSignUpBtnHandler}
          className="text-xs text-violet-600"
        >
          Sign up
        </button>
      </div>
    </>
  );

  return (
    <section className="h-screen bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="flex w-full h-full justify-center items-center ">
        <div className="flex flex-col border rounded-lg p-10 space-y-5 min-w-96  bg-white shadow-md">
          {isSignUp ? <SignupBlock setIsSignUp={setIsSignUp} /> : loginHtml}
          {errorMsg && <p className="text-xs text-red-600">{errorMsg}</p>}
        </div>
      </div>
    </section>
  );
};

export default Login;
