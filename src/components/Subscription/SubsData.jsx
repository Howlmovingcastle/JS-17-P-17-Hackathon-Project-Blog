import React from "react";
import Subscription from "./Subscription";
import { subsItem } from "../../data";

const SubsData = () => {
  return (
    <div>
      {subsItem.map((item) => (
        <Subscription item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SubsData;
