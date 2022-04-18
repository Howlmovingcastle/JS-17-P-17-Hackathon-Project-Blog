import React, { useReducer } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
import { CASE_GET_FAVORITES } from "../helpers/cases";

export const favoriteContext = React.createContext();

const INIT_STATE = {
  favorite: {},
  favoriteLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_FAVORITES:
      return {
        ...state,
        favorite: action.payload,
        favoriteLength: action.payload.products.length,
      };

    default:
      return state;
  }
};

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    favorites.totalPrice = calcTotalPrice(favorites.products);

    dispatch({
      type: CASE_GET_FAVORITES,
      payload: favorites,
    });
  }

  function addProductToFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInFavorites = favorites.products.some(
      (item) => item.item.id == newProduct.item.id
    );
    if (isProductInFavorites) {
      favorites.products = favorites.products.filter(
        (item) => item.item.id != newProduct.item.id
      );
    } else {
      favorites.products.push(newProduct);
    }

    favorites.totalPrice = calcTotalPrice(favorites.products);

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  function checkItemInFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
    }
    let isProductInFavorites = favorites.products.some(
      (item) => item.item.id == id
    );
    return isProductInFavorites;
  }

  function deleteFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
    }

    favorites.products = favorites.products.filter(
      (item) => item.item.id != id
    );
    localStorage.setItem("favorites", JSON.stringify(favorites));

    getFavorites();
  }

  function changeProductCountFavorites(count, id) {
    if (count <= 0) {
      count = 1;
    }

    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    favorites.products = favorites.products.map((item) => {
      if (item.item.id == id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    favorites.totalPrice = calcTotalPrice(favorites.products);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    getFavorites();
  }

  return (
    <favoriteContext.Provider
      value={{
        favorite: state.favorite,
        favoriteLength: state.favoriteLength,
        getFavorites,
        addProductToFavorites,
        checkItemInFavorites,
        deleteFromFavorites,
        changeProductCountFavorites,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
