import React, { useState, useContext } from "react";
import { useLocation } from "wouter";

import { DEFAULT_SEARCH_TERM } from "shared/index.js";

import { Header, Search } from "components/index";

import Context from "context/app.context";

export default function GifHomePage() {
	const { name } = useContext(Context);
	const [, setkeyWord] = useState(DEFAULT_SEARCH_TERM);
	const [, pushLocation] = useLocation();

	function handleFilterChange(value) {
		setkeyWord(value);
		pushLocation(`/search/${value}`);
	}
	return (
		<>
			<Header>
				<div className="App-header_block">
					<div className="o-brand">
						<img
							alt={name}
							src={"assets/images/giffy-150x150_w.png"}
						/>
						{name}
					</div>
				</div>
				<div className="App-header_block">
					<Search handleOutput={handleFilterChange} />
				</div>
			</Header>
			<div className="App-home"></div>
		</>
	);
}
