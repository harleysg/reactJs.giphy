import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

import Header from "components/Header.js";
import Search from "components/Search.js";
import GifList from "components/GIfList.js";

import { useGifs } from "hooks/index.js";

export default function GifResultPage({ params }) {
	const { KEYWORD } = params;
	const { loading, gifs } = useGifs({ keyWord: KEYWORD });
	const [newWord, setkeyWord] = useState(KEYWORD);
	const [, pushLocation] = useLocation();

	useEffect(() => {
		newWord !== KEYWORD && pushLocation(`/search/${newWord}`);
	}, [KEYWORD, newWord, pushLocation]);
	
	function handleFilterChange(value) {
		setkeyWord(value);
	}

	return (
		<>
			<Header>
				<div className="App-header_block">
					<Search handleOutput={handleFilterChange} />
				</div>
				<div className="App-header_block">
					<Link to="/">Return</Link>
				</div>
			</Header>
			<div className="App-wrapper">
				{loading ? <span>loading...</span> : <GifList gifs={gifs} />}
			</div>
		</>
	);
}
