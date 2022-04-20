import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  FileSyncOutlined,
  DesktopOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import "./Navbar.css";
import img from "../image/icons8-bt21-rj (1).svg";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSerach] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    // getMovie();
  }, []);
  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
  useEffect(() => {
    // getMovie();
  }, [searchParams]);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <Link to="/">
          <img style={{ width: "90px", margin: " 0  5%" }} src={img} alt="" />
        </Link>
      </a>
      <ul id="ul-t" className={active}>
        <li className="nav__item">
          <Link to="/all">
            <a href="#" className="nav__link">
              <FileSyncOutlined className="icon-antd" />
              <h1 className="nav__title" style={{ marginTop: "15px" }}>
                POSTS
              </h1>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/favorites">
            <a href="#" className="nav__link">
              <HeartOutlined className="icon-antd" />
              <h1 className="nav__title" style={{ marginTop: "15px" }}>
                Favorites
              </h1>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/cart">
            <a href="#" className="nav__link">
              <ShoppingOutlined className="icon-antd" />
              <h1 className="nav__title" style={{ marginTop: "15px" }}>
                Cart
              </h1>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <input
              className="input-search"
              value={search}
              onChange={(e) => console.log(e.target.va)}
              type="text"
              placeholder="search"
            />
          </a>
        </li>
        {/* <li className="nav__item">
          <a className="nav__link">
            {currentUser === ADMIN_EMAIL ? (
              <Link to="/admin">
                <MehOutlined
                  style={{ color: "white", marginTop: "10px" }}
                  className="icon-antd"
                />
              </Link>
            ) : null}
          </a>
        </li> */}
      </ul>

      {/* <div className="user-main">
        <div className="user">
          {currentUser ? (
            <span className="user-email">
              <LogoutOutlined
                style={{ color: "white", marginLeft: "150px" }}
                className="icon-antd"
                onClick={out}
              />
            </span>
          ) : (
            <UserOutlined
              className="icon-antd"
              style={{ color: "white", marginLeft: "150px" }}
              onClick={() => navigate("/auth")}
            />
          )}
        </div> */}
      {/* </div> */}
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
