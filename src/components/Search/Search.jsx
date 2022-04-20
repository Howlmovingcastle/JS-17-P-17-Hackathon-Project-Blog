import { Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { postsContext } from "../../contexts/PostsContext";

const Search = () => {
  const { getPosts } = useContext(postsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    setSearchParams({
      q: searchValue,
    });
  }, [searchValue]);

  useEffect(() => {
    getPosts();
  }, [searchParams]);

  useEffect(() => getPosts(), [searchParams]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Input.Search
        placeholder="Search..."
        style={{ width: "30%" }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
