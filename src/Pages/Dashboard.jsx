import React from "react";

import MainPage from "../Components/MainPage/MainPage";
import Header from "../Components/Header/Header";
import MenuBar from "../Components/Sidebar/MenuBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen grow-0 bg-gradient-to-r from-violet-200 to-pink-200 ">
      <Header />
      <div className="flex h-full">
        <MenuBar />
        <MainPage />
      </div>
    </div>
  );
};

export default Dashboard;
