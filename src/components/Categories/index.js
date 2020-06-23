
import React from "react";
import { Link } from "wouter";

import css from "./Categories.module.css";

export default function Category({ name, options = [] }) {
  return (
    <div className={css['Category']}>
      <h3 className={css["Category-title"]}>{name}</h3>
      <ul className={css["Category-list"]}>
        {options.map((singleOption) => (
          <li className={css["Category-list-item"]} key={singleOption}>
            <Link className={css["Category-link"]} to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}