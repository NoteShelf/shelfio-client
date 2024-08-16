import React from "react";

import ProtectRoutes from "../Providers/ProtectRoutes";
import AuthCtx from "./AuthCtx";
import BookCtx from "./BookCtx";

const AllContexts = ({ children }) => {
  return (
    <AuthCtx>
      <ProtectRoutes>
        <BookCtx>{children}</BookCtx>
      </ProtectRoutes>
    </AuthCtx>
  );
};

export default AllContexts;
