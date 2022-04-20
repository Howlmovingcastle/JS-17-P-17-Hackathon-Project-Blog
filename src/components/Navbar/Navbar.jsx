import React, { useEffect } from "react";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

const Navbar = () => {
  const { user, checkAuth, logout, loading } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  console.log(user);

  return user ? (
    <span>
      User: {user}{" "}
      <Button variant="outlined" onClick={logout}>
        Logout
      </Button>
    </span>
  ) : null;

  //  loading ? (
  //   <h1>Loading</h1>
  // ) : (
  //   <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "flex-end",
  //       alignItems: "center",
  //       marginRight: "10vw",
  //     }}
  //   >
};

export default Navbar;
