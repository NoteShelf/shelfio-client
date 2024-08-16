import React from "react";

import MainPage from "../Components/MainPage/MainPage";
import Header from "../Components/Header/Header";
import MenuBar from "../Components/Sidebar/MenuBar";
import NotesBar from "../Components/Sidebar/NotesBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen grow-0 ">
      <Header />
      <div className="flex h-full">
        <MenuBar />
        <NotesBar />
        <MainPage />
      </div>
    </div>
  );
};

export default Dashboard;
