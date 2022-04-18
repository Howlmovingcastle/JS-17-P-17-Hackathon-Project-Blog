import React, { useContext, useState } from "react";
import { cartContext } from "../../contexts/cartContext";
import "./Subscription.css";

const Subscription = ({ item }) => {
  // const { addProductToCart, checkItemInCart } = useContext(cartContext);
  // const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));

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
            <a
              // onClick={() => {
              //   addProductToCart(item);
              //   setCheckItem(checkItemInCart(item.id));
              // }}
              // style={{ fontSize: "25px", color: checkItem ? "red" : "black" }}

              id="first-b"
            >
              add to cart
            </a>
          </div>
        </div>
        <div className="card" data-aos-offset="3">
          <div className="circle">
            <h2>Standart</h2>
            <h5>$5.99</h5>
          </div>
          <div className="content">
            <p>
              Subscribe for a month, you will have the opportunity to be on
              trend for <b>MONTH</b>
            </p>
            <a
              // onClick={() => {
              //   addProductToCart(item);
              //   setCheckItem(checkItemInCart(item.id));
              // }}
              // style={{ fontSize: "25px", color: checkItem ? "red" : "black" }}

              id="second-b"
            >
              add to cart
            </a>
          </div>
        </div>
        <div className="card">
          <div className="circle">
            <h2>Premium</h2>
            <h5>$9.99</h5>
          </div>
          <div className="content">
            <p>
              Subscribe for a year, you will have the opportunity to be on trend
              for <b>1 YEAR</b>
            </p>
            <a
              // onClick={() => {
              //   addProductToCart(item);
              //   setCheckItem(checkItemInCart(item.id));
              // }}
              // style={{ fontSize: "25px", color: checkItem ? "red" : "black" }}

              id="third-b"
            >
              add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
