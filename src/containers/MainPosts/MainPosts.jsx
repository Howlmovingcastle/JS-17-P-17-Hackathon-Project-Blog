import React from "react";
import OnePost from "../../components/post/OnePost";
import { mainPosts } from "../../data";

import "./MainPosts.css";

const MainPosts = () => {
  return (
    <div className="posts">
      {mainPosts.map((item) => (
        <OnePost item={item} key={item.id} />
      ))}
    </div>
  );
};

export default MainPosts;
