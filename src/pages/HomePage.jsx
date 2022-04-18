import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Subscription from "../components/Subscription/Subscription";
import MainPosts from "../containers/MainPosts/MainPosts";

const HomePage = () => {
  return (
    <div>
      <div style={{ display: "flex" }} className="home">
        <MainPosts />
        <Sidebar />
      </div>
      <Subscription />
    </div>
  );
};

export default HomePage;
