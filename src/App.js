import React from "react";
import CartContextProvider from "./contexts/cartContext";
import FavoriteContextProvider from "./contexts/favoriteContext";

import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <CartContextProvider>
      <FavoriteContextProvider>
        <MainRoutes />
      </FavoriteContextProvider>
    </CartContextProvider>
  );
};

export default App;
