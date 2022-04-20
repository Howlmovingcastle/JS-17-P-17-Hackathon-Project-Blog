import React from "react";
import "./404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="body-404">
      <h1 className="h1_404">404</h1>
      <div class="cloak__wrapper">
        <div class="cloak__container">
          <div class="cloak"></div>
        </div>
      </div>
      <div class="info">
        <h2>We can't find that page</h2>
        <p className="p_404">
          We can't find this page We're pretty sure this page was here, but it
          seems to be gone. We apologize on behalf of the administrator.
        </p>
        <Link className="href_404" to="/" rel="noreferrer noopener">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
