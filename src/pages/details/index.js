import React from "react";
import { Link } from "wouter";

import Header from "components/Header/index.js";
import Gif from "components/Gif/index.js";

import { useGlobalGifs } from "hooks/useGlobalGifs";


export default function GifDetailPage({ params }) {
	const { ID } = params;
	const { gifs, keyWord } = useGlobalGifs();

	const GetGifById = gifs.find((gif) => gif.id === ID);
	return (
		<>
			<Header>
				<div className="App-header_block">
					<Link to={`/search/${keyWord}`} className="c-link">
						Regresar
					</Link>
				</div>
			</Header>
			<div className="App-wrapper">
				<Gif {...GetGifById} />
			</div>
		</>
	);
}
