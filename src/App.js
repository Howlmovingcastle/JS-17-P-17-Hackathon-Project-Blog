import React from "react";
import MainRoutes from "./MainRoutes";
import "antd/dist/antd.css";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
import PostsContextProvider from "./contexts/PostsContext";
const App = () => {
  return (
    <AuthContextProvider>
    <PostsContextProvider>
      <MainRoutes />
      </PostsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
