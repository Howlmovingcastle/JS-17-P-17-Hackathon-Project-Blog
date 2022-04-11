import React from "react";
import PostsContextProvider from "./contexts/PostsContext";

import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <PostsContextProvider>
      <MainRoutes />
    </PostsContextProvider>
  );
};

export default App;
