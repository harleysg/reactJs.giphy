import React from "react";
import { Link } from "wouter";
import "./Gif.css";

export function Gif({ title, id, url }) {
	return (
		<Link to={id}>
			<a href className="gif-card">
				<header className="gif-card_description">
					<h4 className="gif-card_title">{title}</h4>
					<h5 className="gif-card_title">
						<small>{id}</small>
					</h5>
				</header>
				<figure className="gif-card_figure">
					<img
						className="gif-card_image"
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
