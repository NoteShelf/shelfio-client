import React from "react";

import { useAuthCtx } from "../../Contexts/AuthCtx";

const Header = () => {
  const { logoutHandler } = useAuthCtx();

  return (
    <header className="flex flex-col w-full px-5 bg-gray-900 text-white border_b ">
      <div className="flex flex-row justify-between items-center px-5 h-12 text-white">
        <h3 className="text-lg font-bold">Shelf io</h3>

        <button onClick={logoutHandler} className="text-sm">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
