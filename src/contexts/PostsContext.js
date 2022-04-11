import React from "react";
import axios from "axios";

export const postsContext = React.createContext();

const PostsContextProvider = ({ children }) => {
  return <postsContext.Provider>{children}</postsContext.Provider>;
};

export default PostsContextProvider;
