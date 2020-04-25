import React, { useState } from "react";

import Header from "../components/Header.js";
import Search from "../components/Search.js";
import LimitGifs from "../components/Limit.js";
import GifList from "../components/GIfList.js";

import { DEFAULT_SEARCH_TERM } from "../shared/index.js";

export default function GifListRouter() {
	const [keyWord, setkeyWord] = useState(DEFAULT_SEARCH_TERM);
	function handleFilterChange(value) {
		console.log(value);
	}
	return (
		<>
			<Header>
				<div className="App-header_block">
					<Search handleOutput={setkeyWord} />
				</div>
				<div className="App-header_block">
					<LimitGifs outputLimit={handleFilterChange} />
					<div>Offset: 0</div>
				</div>
			</Header>
			<div className="App-wrapper">
				<GifList keyWord={keyWord} />
			</div>
		</>
	);
}
