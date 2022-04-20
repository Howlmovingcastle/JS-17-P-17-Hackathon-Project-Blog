import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { postsContext } from "../../contexts/PostsContext";
import "./Details.css";
const Details = () => {
  const { getOnePost, onePosts } = useContext(postsContext);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    getOnePost(params.id);
  }, []);
  console.log(onePosts);

  if (onePosts) {
    return <h1>error</h1>;
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={onePosts.image} alt="" />
        <h1 className="singlePostTitle">
          {onePosts.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>{onePosts.category}</span>
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Aziz">
                {onePosts.author}
              </Link>
            </b>
          </span>
          <span>{onePosts.created_at}</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
      </div>
    </div>
  );
};

export default Details;
