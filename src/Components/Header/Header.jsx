import React, { useState } from "react";

import { useAuthCtx } from "../../Contexts/AuthCtx";
import useOutsideClick from "../../Hooks/useOutsideClick";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { logoutHandler, user } = useAuthCtx();
  const { ref } = useOutsideClick(() => setShowMenu(false));

  const userName = user.name;

  const splitName = userName.split("");
  const firstTwoLeters =
    splitName[0].charAt(0) +
    (splitName[1] ? splitName[1].charAt(0).toUpperCase() : "");

  return (
    <header className="flex flex-col w-full px-5 bg-gray-900 text-white border_b ">
      <div className="flex flex-row justify-between items-center px-5 h-12 text-white">
        <h3 className="text-lg font-bold">Shelf io</h3>

        <div ref={ref} className="relative">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-sm bg-gradient-to-r from-violet-200 to-pink-200 w-8 h-8 rounded-full text-black"
          >
            {firstTwoLeters}
          </button>

          {showMenu && (
            <div className="flex flex-col absolute z-30 top-9 shadow-lg p-3 space-y-2 w-72 border-2 rounded-lg bg-white right-0 text-black">
              <div className="flex w-full text-sm gap-1 flex-wrap">
                <span className="material-symbols-outlined">person</span>
                <span>{user.name}</span>
              </div>
              <div className="flex w-full text-sm gap-1 flex-wrap">
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
                <span>{user.email}</span>
              </div>
              <div
                onClick={logoutHandler}
                role="button"
                className="flex  text-sm space-x-1 cursor-pointer"
              >
                <span className="material-symbols-outlined">logout</span>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
