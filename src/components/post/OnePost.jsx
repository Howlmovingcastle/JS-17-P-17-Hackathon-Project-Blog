import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MoreOutlined } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

import "./post.css";
import { favoriteContext } from "../../contexts/favoriteContext";

const OnePost = ({ item }) => {
  const { addProductToFavorites, checkItemInFavorites } =
    useContext(favoriteContext);
  const [checkItem1, setCheckItem1] = useState(checkItemInFavorites(item.id));

  return (
    <div className="post">
      <img className="postImg" src={item.img} alt="post img" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              {item.category}
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {item.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">15.04.2022 posted</span>
      </div>
      <p className="postDesc">{item.descr}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "12px",
          cursor: "pointer",
        }}
      >
        <ThumbUpOutlinedIcon fontSize="large" />

        <FavoriteBorderOutlinedIcon
          fontSize="large"
          style={{ color: checkItem1 ? "blue" : "black" }}
          onClick={() => {
            addProductToFavorites(item);
            setCheckItem1(checkItemInFavorites(item.id));
          }}
        />

        <MoreOutlined fontSize="large" />
      </div>
    </div>
  );
};

export default OnePost;
