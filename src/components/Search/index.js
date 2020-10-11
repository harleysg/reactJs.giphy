import React, { useCallback } from "react";

import { RATINGS } from "shared/index.js";
import { useForm } from "./hook.js";

import "./Search.css";

function Search() {
  const {
    searched,
    rating,
    value,
    updateValue,
    updateRating,
    handleSubmit,
    keyWord,
  } = useForm();

  const handleSeachChange = useCallback(function (e) {
    updateValue(e.target.value);
  }, [updateValue]);

  const handleSelectRating = useCallback((e) => {
    updateRating(e.target.value);
  }, [updateRating]);

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
          <select value={rating} onChange={handleSelectRating}>
            {RATINGS.map((rating) => (
              <option key={rating}>{rating}</option>
            ))}
          </select>
        </label>
        <label className="gif-search_field">
          <span className="gif-searched">
            {keyWord && (
              <>
                {" "}
                Results of:
                <strong> {searched || decodeURI(keyWord)}</strong>
              </>
            )}
          </span>
        </label>
      </form>
    </div>
  );
}

export default React.memo(Search);
