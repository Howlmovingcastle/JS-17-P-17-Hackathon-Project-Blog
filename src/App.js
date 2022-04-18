import React from "react";
import MainRoutes from "./MainRoutes";
import "antd/dist/antd.css";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
const App = () => {
  return (
    <AuthContextProvider>
      <MainRoutes />
    </AuthContextProvider>
  );
};

export default App;
