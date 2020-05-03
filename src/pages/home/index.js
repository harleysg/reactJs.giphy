import React, { useState, useContext } from "react";
import { useLocation } from "wouter";

import { DEFAULT_SEARCH_TERM } from "../../shared/index.js";

import Header from "../../components/Header.js";
import Search from "../../components/Search.js";

import Context from "./../../context/app.context";

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
				<div className="App-header_block">{name}</div>
			</Header>
			<div className="App-wrapper">
				<Search handleOutput={handleFilterChange} />
			</div>
		</>
	);
}
