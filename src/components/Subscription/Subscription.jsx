import { Card } from "antd";
import React from "react";
import "./Subscription.css";
const Subscription = () => {
  return (
    <div>
      <div className="mein container">
        <div className="card">
          <div className="circle">
            <h2>Basic</h2>
            <h5>$2.99</h5>
          </div>
          <div className="content">
            <p>
              Subscribe for a week, you will have the opportunity to be on trend
              for <b>1 WEEK</b>
            </p>
            <a id="first-b">add cart</a>
          </div>
        </div>
        <div className="card" data-aos-offset="3">
          <div className="circle">
            <h2>Standart</h2>
            <h5>$5.99</h5>
          </div>
          <div className="content">
            <p>
              Subscribe for a week, you will have the opportunity to be on trend
              for <b>MONTH</b>
            </p>
            <a id="second-b">add cart</a>
          </div>
        </div>
        <div className="card">
          <div className="circle">
            <h2>Premium</h2>
            <h5>$9.99</h5>
          </div>
          <div className="content">
            <p>
              Subscribe for a week, you will have the opportunity to be on trend
              for <b>1 YEAR</b>
            </p>
            <a id="third-b">add cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
