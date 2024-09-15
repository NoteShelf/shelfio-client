import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainPage from "../Components/MainPage/MainPage";
import Header from "../Components/Header/Header";
import MenuBar from "../Components/Sidebar/MenuBar";
import { useBookCtx } from "../Contexts/BookCtx";

const Dashboard = () => {
  const { showOverlayLoading } = useBookCtx();

  return (
    <div className="flex flex-col h-screen  bg-gradient-to-r from-violet-200 to-pink-200 ">
      <Header />
      <div className="flex h-full w-full grow-0 overflow-hidden">
        <MenuBar />
        <MainPage />
      </div>
      <ToastContainer position="bottom-right" />

      {showOverlayLoading && (
        <div className="fixed inset-0 backdrop-contrast-50 z-10 flex justify-center items-center">
          <span className="material-symbols-outlined animate-spin text-3xl">
            progress_activity
          </span>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
