import Sidebar from "../../components/Sidebar/Sidebar";
import React from "react";

import "./Single.css";
import SinglePost from "../../components/singlePost/SinglePost";
const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
