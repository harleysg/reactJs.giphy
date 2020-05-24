import React, { useState, useContext } from "react";
import { useLocation } from "wouter";

import { DEFAULT_SEARCH_TERM } from "shared/index.js";

import { Header, Search, GifList, Spinner } from "components/index";
import TrendingSearches from "components/TrendingSearches/index";

import { useGifs } from "hooks/index.js";
import Context from "context/app.context";

import css from "./Home.module.css";

export default function GifHomePage() {
	const { name } = useContext(Context);
	const [, setkeyWord] = useState(DEFAULT_SEARCH_TERM);
	const [, pushLocation] = useLocation();
	const { loading, gifs } = useGifs();

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
			<div className="App-home">
				<div className={`App-wrapper ${css["App-home_wrapper"]}`}>
					<div className={css["sectionScroller"]}>
						<TrendingSearches />
					</div>
					<aside className={css["aside"]}>
						{loading ? <Spinner /> : <GifList gifs={gifs} />}
					</aside>
				</div>
			</div>
		</>
	);
}
