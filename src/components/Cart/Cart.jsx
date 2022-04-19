import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { Button } from "@mui/material";

const Cart = () => {
  const { getCart, cart, deleteFromCart } = useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container" style={{ margin: "20px" }}>
      <List
        itemLayout="vertical"
        dataSource={cart.products}
        footer={<h2>Total: {cart.totalPrice}$</h2>}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.item.img}
                    alt="image1"
                    style={{ width: "180px" }}
                  />
                </div>
              }
              description={
                <>
                  <div style={{ marginTop: "10px" }}>
                    <h2>{item.item.type}</h2>
                    <h3>{"$" + item.item.price}</h3>
                  </div>

                  <div style={{ width: "40vw" }}>{item.item.description}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "40%",
                      marginTop: "20px",
                    }}
                  ></div>
                  {/* <Button onClick={() => deleteFromCart(item.item.id)}>
                    Remove from cart
                  </Button> */}
                  <Button onClick={() => deleteFromCart(item.item.id)}>
                    {" "}
                    Remove from cart
                  </Button>

                  <Link to="/payment">
                    <Button
                      style={{
                        margin: "35px",
                      }}
                    >
                      {" "}
                      Shop Now
                    </Button>
                  </Link>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;

// Добавить на кнопку эти события и принять пропсами item

// const { addProductToCart, checkItemInCart } = useContext(cartContext);
// const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));

{
  /* <ShoppingOutlined
key="icon-cart"
onClick={() => {
  addProductToCart(item);
  setCheckItem(checkItemInCart(item.id));
}}
style={{ fontSize: "25px", color: checkItem ? "red" : "black" }}
/>, */
}
