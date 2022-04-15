import React from "react";
import SotialMedia from "../components/SocialMedia/SotialMedia";
import Subscription from "../components/Subscription/Subscription";
import TrendingPost from "../components/TrendingPost/TrendingPost";

const HomePage = () => {
  return <div>
  <TrendingPost />
  <SotialMedia/>
  <Subscription/>
  </div>;
};

export default HomePage;
