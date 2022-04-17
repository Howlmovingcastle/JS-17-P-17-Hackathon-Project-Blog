import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        style={{ width: "100vw", height: "100vh" }}
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
        alt="error 404"
      />
      <div className="text">
        <h1>Page is not found</h1>
        <Button
          onClick={() => navigate("/")}
          variant="outlined"
          sx={{
            color: "black",
            border: "2px solid white",
          }}
        >
          BACK HOME
        </Button>
      </div>
    </div>
  );
};

export default Error404;
