import React from "react";
import { Link, Redirect } from "wouter";

import Header from "components/Header/index.js";
import Gif from "components/Gif/index.js";

import { useSingleGif, useGlobalGifs } from "hooks/index.js";
import { Spinner } from "components/index";

export default function GifDetailPage({ params }) {
	const { id } = params;
	const { keyWord } = useGlobalGifs();
	const { gif, isLoading, isError } = useSingleGif({id});
	
	if(isLoading) return <Spinner/>
	if(isError) return <Redirect to="/404"/>
	if(!gif) return null

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
				<Gif id={gif.id} title={gif.title} url={gif.original} />
			</div>
		</>
	);
}
