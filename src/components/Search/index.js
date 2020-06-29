import React, { useContext, useState, useCallback } from "react";
import { useLocation } from "wouter";

import { REGEX_TERM, DEFAULT_SEARCH_TERM } from "shared/index.js";

import GifsContext from "context/gifs.context";

import "./Search.css";

function Search() {
  const [value, sendValue] = useState("");
  const { keyWord, setKeyWord } = useContext(GifsContext);
  const [searched, resetSearch] = useState(DEFAULT_SEARCH_TERM);
  const [, pushLocation] = useLocation();
  
  const handleSeachChange = useCallback(function (e) {
    sendValue(e.target.value);
    resetSearch("");
  }, [sendValue, resetSearch])
  
  const handleSubmit = useCallback(function (e) {
    const regx = new RegExp(REGEX_TERM);
    e.preventDefault();
    if (regx.test(value)) {
      setKeyWord(value);
      resetSearch(value);
      pushLocation(`/search/${value}`);
      sendValue("");
    } else {
      console.log(`${value} isn´t validate`);
    }
  }, [pushLocation, setKeyWord, value, sendValue, resetSearch])

  return (
    <div className="gif-search">
      <form onSubmit={handleSubmit} className="gif-search_form">
        <label className="gif-search_field">
          <input
            className="gif-search_input"
            name="search"
            type="search"
            value={value}
            placeholder="Search all the GIFs and Stickers + Enter"
            onChange={handleSeachChange}
          />
        </label>
        <span className="gif-searched">
          {keyWord && (
            <>
              {" "}
              Results of:
              <strong> {searched || decodeURI(keyWord)}</strong>
            </>
          )}
        </span>
      </form>
    </div>
  );
}

export default  React.memo(Search)