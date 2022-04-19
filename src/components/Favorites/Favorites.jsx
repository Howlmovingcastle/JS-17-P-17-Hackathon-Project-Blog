import { Button } from "@mui/material";
import { List } from "antd";
import React, { useContext, useEffect } from "react";
import { favoriteContext } from "../../contexts/favoriteContext";

import "./Favorites.css";

const Favorites = () => {
  const { getFavorites, favorite, deleteFromFavorites } =
    useContext(favoriteContext);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="animated-background">
      <div className="container-fav">
        <List
          itemLayout="vertical"
          dataSource={favorite.products}
          renderItem={(item) => (
            <List.Item
            // extra={<img src={item.item.image1} alt="image1" width={272} />}
            >
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
                      style={{ width: "272px" }}
                      alt=""
                    />
                  </div>
                }
                description={
                  <>
                    <div>
                      <h3>{item.item.category}</h3>
                      <h4>{item.item.title}</h4>
                    </div>
                    <div
                      style={{
                        color: "#030303",
                        width: "60vw",
                        marginTop: "35px",
                      }}
                    >
                      {item.item.descr}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "40%",
                        marginTop: "20px",
                      }}
                    ></div>
                    <Button onClick={() => deleteFromFavorites(item.item.id)}>
                      Remove from favorites
                    </Button>

                    <Button
                      style={{
                        margin: "35px",
                      }}
                    >
                      Read more
                    </Button>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Favorites;
