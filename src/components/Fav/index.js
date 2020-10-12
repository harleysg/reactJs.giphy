import React, { useCallback } from "react";

import useUser from "hooks/useUser";

import "./index.css";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();

  const isFaved = favs.some((favId) => favId === id);

  const handleClick = useCallback(() => {
    if (!isLogged) return console.log(true);
    addFav({ id });
  }, [addFav, isLogged, id]);

  const [label, emoji] = isFaved ? ["Remove Gif from favorites", "❌"] : ["Add Gif to favorites", "❤️"];

  return (
    <>
      <button className="gf-Fav" onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
    </>
  );
}
