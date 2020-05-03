import React from "react";
import Gif from "./Gif.js";

import "./GifList.css";

export default function GifList({ gifs }) {
	return (
		<div className="gif-grid">
			{gifs.map(({ title, id, url }) => (
				<Gif url={url} id={id} title={title} key={id} />
			))}
		</div>
	);
}
