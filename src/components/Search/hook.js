import { useContext, useCallback, useReducer } from "react";
import { useLocation } from "wouter";

import { DEFAULT_SEARCH_TERM, REGEX_TERM, RATINGS } from "shared/index.js";
import GifsContext from "context/gifs.context";

const INITIAL_STATE = {
  value: "",
  searched: DEFAULT_SEARCH_TERM,
  rating: RATINGS[0],
};

const ACTIONS = {
  update_value: "update_value",
  update_search: "update_search",
  update_rating: "update_rating",
};

const ACTIONS_REDUCER = {
  [ACTIONS.update_value]: (state, action) => ({
    ...state,
    value: action.payload,
  }),
  [ACTIONS.update_search]: (state, action) => ({
    ...state,
    searched: action.payload,
  }),
  [ACTIONS.update_rating]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
};

function REDUCER(state, action) {
  const actionReducer = ACTIONS_REDUCER[action.type];
  return actionReducer ? actionReducer(state, action) : state;
}

export function useForm() {
  const [, pushLocation] = useLocation();
  const { keyWord, setKeyWord } = useContext(GifsContext);
  const [state, dispatch] = useReducer(REDUCER, INITIAL_STATE);

  const updateValue = useCallback(
    (value) => dispatch({ type: ACTIONS.update_value, payload: value }),
    []
  );
  const updateRating = useCallback(
    (rating) => dispatch({ type: ACTIONS.update_rating, payload: rating }),
    []
  );
  const updateSearch = useCallback(
    (searched) => ({ type: ACTIONS.update_search, payload: searched }),
    []
  );

  const { searched, rating, value } = state;

  const handleSubmit = useCallback(
    function (e) {
      const regx = new RegExp(REGEX_TERM);
      e.preventDefault();
      if (regx.test(value)) {
        setKeyWord(value);
        updateSearch(value);
        pushLocation(`/search/${value}/${rating}`);
      } else {
        console.log(`${value} isn´t validate`);
      }
    },
    [pushLocation, setKeyWord, value, rating, updateSearch]
  );

  return {
    keyWord,
    setKeyWord,
    handleSubmit,
    searched,
    rating,
    value,
    updateValue,
    updateRating,
    updateSearch,
  };
}
