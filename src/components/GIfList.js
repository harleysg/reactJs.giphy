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

export function GifListSkeleton() {
	function setId() {
		const arrayOpts = new Uint32Array(30);
		crypto.getRandomValues(arrayOpts);

		return `_${arrayOpts[0]}`;
	}
	return (
		<div className="gif-grid">
			{"12345432123454321234543212345".split("").map((e, i) => (
				<div
					className="gif-card"
					style={{ backgroundColor: `var(--brand-color_${e})` }}
					key={`${e}-${i}${setId()}`}
					data-foo={setId()}
				></div>
			))}
		</div>
	);
}
