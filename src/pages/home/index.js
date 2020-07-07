import React, { useContext } from "react";
import { Title, Meta } from "react-head";

import { Head, Header, Search, GifList, Spinner, TrendingSearches } from "components/index";

import { useGifs } from "hooks/index.js";
import Context from "context/app.context";

import css from "./Home.module.css";

export default function GifHomePage() {
	const { name } = useContext(Context);
	const { loading, gifs } = useGifs();
	
	return (
		<>
			<Head>
				<Title>{loading ? "loading..." : name}</Title>
				<Meta name="description" content={`welcome to ${name}`} />
			</Head>
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
					<Search />
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
