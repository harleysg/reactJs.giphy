import React, { useEffect, useRef } from "react";
import { Link } from "wouter";

import Header from "components/Header/index.js";
import Search from "components/Search/index.js";
import GifList, { GifListSkeleton } from "components/GifList/index.js";
import Spinner from "components/Spinner/index";

import { useGifs, useNearScreen } from "hooks/index.js";

export default function GifResultPage({ params }) {
	const { KEYWORD } = params;
	const { loading, gifs, setPage } = useGifs({ keyWord: KEYWORD });
	const extRef = useRef();
	const { isNearScreen } = useNearScreen({extRef: loading ? null : extRef, once: false})
	
	
	useEffect(() => {
		isNearScreen && setPage((prevPage) => prevPage + 1)
	}, [setPage, isNearScreen])

	return (
		<>
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
