import React from "react";
import OnePost from "../../components/post/OnePost";

import "./MainPosts.css";

const MainPosts = () => {
  return (
    <div className="posts">
      <OnePost />
      <OnePost />
      <OnePost />
      <OnePost />
      <OnePost />
    </div>
  );
};

export default MainPosts;
