import { Button, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { postsContext } from "../../contexts/PostsContext";
import AddPost from "../AddPost/AddPost";
import Search from "../Search/Search";

import "./PostsList.css";
const PostsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );
  const [limit, setLimit] = useState(4);
  const navigate = useNavigate();
  const location = useLocation();

  const { getPosts, posts, postsCount, deletePost } = useContext(postsContext);
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);

  useEffect(() => {
    setSearchParams({
      // cotegory: location.pathname.slice(1, location.pathname.length),
      page: page,
      _limit: limit,
    });
  }, [page, limit]);

  return (
    <>
      <Search />
      <AddPost />
      <div style={{ display: "flex", flexWrap: "wrap-reverse" }}>
        {posts.map((item) => (
          <div className="post">
            <img className="postImg" src={item.image} alt="post img" />
            <div className="postInfo">
              <div className="postCats">
                <span className="postCat">
                  <Link className="link" to="/posts?cat=Music">
                    <h3>{item.category.slug}</h3>
                  </Link>
                </span>
              </div>
              <span className="postTitle">
                <Link to="/post/abc" className="link">
                  {item.title}
                </Link>
              </span>
              <hr />
              <span className="postDate">{item.created_at}</span>
            </div>
            <p className="postDesc">{item.text}</p>

            <Button onClick={() => deletePost(item.id)}>Delete</Button>

            <Button onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
            <Button onClick={() => navigate(`/details/${item.id}`)}>Details</Button>

            {/* <div
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
              
            </div> */}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          total={+postsCount}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </>
  );
};

export default PostsList;
