import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Subscription from "../components/Subscription/Subscription";
import SubsData from "../components/Subscription/SubsData";
import MainPosts from "../containers/MainPosts/MainPosts";

import "./Homepage.css";

const HomePage = () => {
  return (
    <div>
      <div className="home">
        <MainPosts />
        <Sidebar />
      </div>
      <SubsData />
    </div>
  );
};

export default HomePage;
