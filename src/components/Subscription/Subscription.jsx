import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cartContext } from "../../contexts/cartContext";

const Subscription = ({ item }) => {
  const { addProductToCart, checkItemInCart } = React.useContext(cartContext);
  const [checkItem, setCheckItem] = React.useState(checkItemInCart(item.id));

  return (
    <div
      className="container"
      style={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "15px 0",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={item.type}
          height="330"
          image={item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.type}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.descr}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              addProductToCart(item);
              setCheckItem(checkItemInCart(item.id));
            }}
            style={{
              width: "100%",
              color: checkItem ? "blue" : "black",
            }}
            size="large"
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Subscription;

{
  /* <div className="mein container">
<div className="card">
  <div className="circle">
    <h2>{item.type}</h2>
    <h5>${item.price}</h5>
  </div>
  <div className="content">
    <p>{item.descr}</p>
    <a
      onClick={() => {
        addProductToCart(item);
        setCheckItem(checkItemInCart(item.id));
      }}
      style={{ fontSize: "25px", color: checkItem ? "white" : "blue" }}
      id="first-b"
    >
      add to cart
    </a>
  </div>
</div>
</div> */
}
