import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import useAxios from "../../Hooks/useAxios";
import { CREATE_ACCOUNT_API_ENDPOINT } from "../../Config/UserApiEndPoints";
import { useAuthCtx } from "../../Contexts/AuthCtx";
import { DASHBOARD_ROUTE_POINT } from "../../Config/Routes";

const SignupBlock = ({ setIsSignUp }) => {
  const [regDetails, setRegDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValidationError, setIsValidationError] = useState(false);

  const {
    axiosInstance,
    handleError,
    errorMsg,
    setErrorMsg,
    isLoading,
    setIsLoading,
  } = useAxios();
  const { handleToken } = useAuthCtx();
  const navigate = useNavigate();

  const onChangeHandler = (type, value) => {
    setErrorMsg("");

    setRegDetails((prevData) => {
      return { ...prevData, [type]: value };
    });
  };

  const validationHandler = () => {
    for (const field in regDetails) {
      let result = false;

      if (!regDetails[field]) {
        setIsValidationError(true);
        result = true;
      }

      return result;
    }
  };

  const signUp = async () => {
    try {
      setIsLoading(true);
      setErrorMsg("");
      setIsValidationError(false);

      const { data } = await axiosInstance.post(
        CREATE_ACCOUNT_API_ENDPOINT,
        regDetails
      );

      handleToken(data.token);
      navigate(DASHBOARD_ROUTE_POINT);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signUpBtnHandler = () => {
    if (!validationHandler()) {
      signUp();
    }
  };

  const onClickSignInBtnHandler = () => {
    setErrorMsg("");
    setIsSignUp(false);
  };

  return (
    <>
      <h1 className="text-lg font-bold">Create your account</h1>
      <Input
        label="Full name"
        onChange={(e) => onChangeHandler("name", e.target.value)}
        showError={isValidationError && !regDetails.name}
        error="FullName is required"
      />

      <Input
        label="Email"
        type="email"
        onChange={(e) => onChangeHandler("email", e.target.value)}
        showError={isValidationError && !regDetails.email}
        error="Email required"
      />

      <Input
        label="Password"
        onChange={(e) => onChangeHandler("password", e.target.value)}
        showError={isValidationError && !regDetails.password}
        error="Password Required"
      />

      <Button isLoading={isLoading} onClick={signUpBtnHandler} name="SIGN UP" />

      <div className="flex space-x-1 text-xs">
        <span>Don't have an account?</span>
        <button
          onClick={onClickSignInBtnHandler}
          className="text-xs text-violet-600"
        >
          Sign in
        </button>
      </div>

      {errorMsg && <p className="text-xs text-red-600">{errorMsg}</p>}
    </>
  );
};

export default SignupBlock;
