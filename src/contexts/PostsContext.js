import React, { useReducer } from "react";
import axios from "axios";
import { CASE_GET_ONE_POSTS, CASE_GET_POSTS } from "../helpers/cases";

export const postsContext = React.createContext();

const API = "http://44.203.113.151/api/v1";

const INIT_STATE = {
  posts: [],
  onePosts: null,
  postsCount: 0,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_POSTS:
      console.log(action);
      return {
        ...state,
        posts: action.payload.data.results,
        postsCount: action.payload.data.count,
      };
    case CASE_GET_ONE_POSTS:
      return {
        ...state,
        onePosts: action.payload.data,
      };
    default:
      return state;
  }
};

const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getPosts = async () => {
    let result = await axios(`${API}/posts/${window.location.search}`, {
      headers: {
        Authorization:
          "Token " + JSON.parse(localStorage.getItem("token")).access,
      },
    });

    console.log(result, "res");

    dispatch({
      type: CASE_GET_POSTS,
      payload: result,
    });
  };

  const createPost = async (newPost) => {
    console.log(newPost);
    let formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("category", newPost.category);
    formData.append("text", newPost.text);
    formData.append("image", newPost.image);
    await axios.post(`${API}/posts/`, formData, {
      headers: {
        Authorization:
          "Token " + JSON.parse(localStorage.getItem("token")).access,
      },
    });
    getPosts();
  };

  async function deletePost(id) {
    await axios.delete(`${API}/posts/${id}/`, {
      headers: {
        Authorization:
          "Token " + JSON.parse(localStorage.getItem("token")).access,
      },
    });
    console.log(id);
    getPosts();
  }

  const getOnePost = async (id) => {
    let result = await axios(`${API}/posts/${id}/`, {
      headers: {
        Authorization:
          "Token " + JSON.parse(localStorage.getItem("token")).access,
      },
    });
    console.log("res", result);
    dispatch({
      type: CASE_GET_ONE_POSTS,
      payload: result,
    });
    getPosts();
  };

  const upDatePost = async (id, editedPost) => {
    console.log(editedPost);
    let formData = new FormData();
    formData.append("title", editedPost.title);
    formData.append("category", editedPost.category.name);
    formData.append("text", editedPost.text);
    console.log(formData);
    await axios.patch(`${API}/posts/${id}/`, formData, {
      headers: {
        Authorization:
          "Token " + JSON.parse(localStorage.getItem("token")).access,
      },
    });
    getPosts();
  };
  return (
    <postsContext.Provider
      value={{
        posts: state.posts,
        onePosts: state.onePosts,
        postsCount: state.postsCount,
        getPosts,
        createPost,
        deletePost,
        getOnePost,
        upDatePost,
      }}
    >
      {children}
    </postsContext.Provider>
  );
};
export default PostsContextProvider;
