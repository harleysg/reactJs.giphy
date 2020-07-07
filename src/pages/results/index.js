import React, { useEffect, useRef, useContext } from "react";
import { Title, Meta } from "react-head";
import { Link } from "wouter";

import { Head, Header, Search, Spinner, GifList } from "components/index";
import { GifListSkeleton } from "components/GifList/index.js";

import Context from "context/app.context";

import { useGifs, useNearScreen } from "hooks/index.js";

export default function GifResultPage({ params }) {
	const { KEYWORD } = params;
	const { name } = useContext(Context);
	const { loading, gifs, setPage } = useGifs({ keyWord: KEYWORD });
	const extRef = useRef();
	const { isNearScreen } = useNearScreen({extRef: loading ? null : extRef, once: false})

	useEffect(() => {
		isNearScreen && setPage((prevPage) => prevPage + 1)
	}, [setPage, isNearScreen])

	return (
		<>
			<Head>
				<Title>{loading ? "loading..." : `${gifs.length} results of ${decodeURI(KEYWORD)} | ${name}`}</Title>
				<Meta name="description" content={`${gifs.length} results of ${decodeURI(KEYWORD)}`} />
			</Head>
			<Header>
				<div className="App-header_block">
					<Search  />
				</div>
				<div className="App-header_block">
					<Link to="/">Return</Link>
				</div>
			</Header>
			<div className="App-wrapper">
				{
					loading
						? <>
							<Spinner />
							<GifListSkeleton />
						</>
						: <>
							<GifList gifs={gifs} />
							<div id="trackIsNearScreen" ref={extRef}></div>
						</>
				}
			</div>
		</>
	);
}
