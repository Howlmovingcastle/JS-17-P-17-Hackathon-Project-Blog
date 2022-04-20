import React from "react";
import "./SideBar.css";

//*     SideBar

const ToolBar = ({ toolbar }) => {
  return (
    <div className={toolbar ? "sidebar .toolbar" : "sidebar"}>
      <li>
        <ion-icon name="create-outline"></ion-icon>POSTS
      </li>
      <li>
        <ion-icon name="cart-outline"></ion-icon> CART
      </li>
      <li>
        <ion-icon name="heart-outline"></ion-icon>Favorites
      </li>
      <li>
        <ion-icon name="log-in-outline"></ion-icon> Sign Up
      </li>
      <li>
        <ion-icon name="log-out-outline"></ion-icon> Log Out
      </li>
    </div>
  );
};

export default ToolBar;
