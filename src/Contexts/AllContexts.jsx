import React from "react";
import ProtectRoutes from "../Providers/ProtectRoutes";
import AuthCtx from "./AuthCtx";

const AllContexts = ({ children }) => {
  return (
    <AuthCtx>
      <ProtectRoutes>{children}</ProtectRoutes>
    </AuthCtx>
  );
};

export default AllContexts;
