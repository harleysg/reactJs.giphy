import React from "react";
import { Link } from "wouter";
import css from "./Gif.module.css";

export default function Gif({ title, id, url }) {
	return (
		<Link to={`/gif/${id}`}>
			<a href className={css["gif-card"]}>
				<header className={css["gif-card_description"]}>
					<h5 className={css["gif-card_title"]}>
						<small>{id}</small>
					</h5>
					<h4 className={css["gif-card_title"]}>{title}</h4>
				</header>
				<figure className={css["gif-card_figure"]}>
					<img
						className={css["gif-card_image"]}
						src={url}
						id={id}
						alt={title}
						key={id}
					/>
				</figure>
			</a>
		</Link>
	);
}
