import React from "react";
import { Link } from "react-router-dom";
import { MoreOutlined } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

import "./post.css";

const OnePost = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://media.graphcms.com/jrNuMFc5TPWr6huhDtId"
        alt="post img"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Programming
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              LifeStyle
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
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
          // onClick={() => {
          //   addProductToFavorites(item);
          //   setCheckItem1(checkItemInFavorites(item.id));
          // }}
        />

        <MoreOutlined fontSize="large" />
      </div>
    </div>
  );
};

export default OnePost;
