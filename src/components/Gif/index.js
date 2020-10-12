import React from "react";
import { Link } from "wouter";

import { Fav } from "components/index";

import useUser from "hooks/useUser";

import css from "./Gif.module.css";

function Gif({ title, id, url }) {
  const { isLogged } = useUser();
  return (
    <div className={css["gif-card"]}>
      {isLogged && <Fav id={id} />}
      <Link to={`/gif/${id}`} className={css["gif-link"]}>
        <header className={css["gif-card_description"]}>
          <h5 className={css["gif-card_title"]}>
            <small>{id}</small>
          </h5>
          <h4 className={css["gif-card_title"]}>{title}</h4>
        </header>
        <figure className={css["gif-card_figure"]}>
          <img className={css["gif-card_image"]} src={url} id={id} alt={title} key={id} />
        </figure>
      </Link>
    </div>
  );
}

export default React.memo(Gif);
