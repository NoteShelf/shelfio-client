import React from "react";

import { useAuthCtx } from "../Contexts/AuthCtx";
import Login from "../Pages/Login";

const ProtectRoutes = ({ children }) => {
  const { isAuthenticated } = useAuthCtx();

  let screen = null;

  if (isAuthenticated) {
    screen = <div>{children}</div>;
  } else {
    screen = <Login />;
  }

  return screen;
};

export default ProtectRoutes;
