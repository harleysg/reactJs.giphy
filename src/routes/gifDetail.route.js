import React, { useState, useEffect } from "react";

import { Link } from "wouter";

import { getGifsById } from "../service/index.js";
import Header from "../components/Header.js";

export default function GifDetailRouter({ params }) {
	const { ID } = params;
	const [gifData, setGifData] = useState({});
	useEffect(
		function () {
			getGifsById({ ID }).then(({ data }) => {
				setGifData(data);
				console.log(`GifDetailRouter -> res`, data);
				// console.log(`GifDetailRouter -> gifData`, gifData);
			});
		},
		[ID]
	);
	return (
		<>
			<Header>
				<div className="App-header_block">
					<Link to="/" className="c-link">
						Regresar
					</Link>
				</div>
			</Header>
			<div className="App-wrapper">{gifData.title}</div>
		</>
	);
}
