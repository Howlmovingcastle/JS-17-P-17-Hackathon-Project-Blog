import React, { useState } from "react";
import "./Navbar.css";
import $ from "jquery";
import { Button } from "antd";
import { ButtonBase } from "@mui/material";
import {
  HeartBrokenOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header class="header">
      <div class="container-nav">
        <div class="header__body">
          <a href="#" class="header__logo">
            <img
              onClick={() => navigate("/")}
              src="https://tse1.mm.bing.net/th?id=OIP.ZqiRVBDXk780cVLwdH60eAHaGP&pid=Api"
              alt=""
            />
          </a>

          <div class="header__burger">
            <span></span>
          </div>
          <nav class="header__menu">
            <ul class="header__list">
              <li>
                <a href="" class="header__link">
                  Posts
                </a>
              </li>

              <li>
                <a href="" class="header__link">
                  Get In Touch
                </a>
              </li>

              <li style={{ marginRight: "200px" }}>
                <a href="" class="header__link">
                  Partners
                </a>
              </li>

              <li>
                <Link class="header__link" to="/favorites">
                  <HeartBrokenOutlined />
                </Link>
              </li>

              <li>
                <Link class="header__link" to="/cart">
                  <ShoppingCartCheckoutOutlined />
                </Link>
              </li>

              <li>
                <a href="" class="header__link">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="" class="header__link">
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
