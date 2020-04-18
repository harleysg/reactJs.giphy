import React, { useState, useEffect } from "react";
import getGifsService from "../service/index.js";
import { Gif } from "./Gif.js";

import "./GifList.css";

export default function GifList({ keyWord }) {
	const [gifs, setGifs] = useState([]);
	useEffect(
		function () {
			getGifsService({ keyWord }).then((gifs) => setGifs(gifs));
		},
		[keyWord]
	);
	return (
		<div className="gif-grid">
			{gifs.map(({ title, id, url }) => (
				<Gif url={url} id={id} title={title} key={id} />
			))}
		</div>
	);
}
