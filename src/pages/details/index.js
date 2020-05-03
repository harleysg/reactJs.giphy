import React, { useContext } from "react";
import { Link } from "wouter";

import Header from "../../components/Header.js";
import Gif from "../../components/Gif.js";

import GisfContext from "./../../context/gifs.context.js";

export default function GifDetailPage({ params }) {
	const { ID } = params;
	const { gifs, keyWord } = useContext(GisfContext);
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
