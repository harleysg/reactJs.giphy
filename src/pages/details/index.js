import React, { useContext } from "react";
import { Title, Meta } from "react-head";
import { Link, Redirect } from "wouter";

import { Head, Header, Gif, Spinner } from "components/index";

import { useSingleGif, useGlobalGifs } from "hooks/index.js";
import Context from "context/app.context";

export default function GifDetailPage({ params }) {
	const { id } = params;
	const { name } = useContext(Context);
	const { keyWord } = useGlobalGifs();
	const { gif, isLoading, isError } = useSingleGif({id});
	
	if(isLoading) return (
		<>
			<Head>
				<Title>{`Loading... | ${name}`}</Title>
			</Head>
			<Spinner/>
		</>
	)
	if(isError) return <Redirect to="/404"/>
	if(!gif) return null

	return (
		<>
			<Head>
				<Title>{`${decodeURI(keyWord)} | ${name}`}</Title>
				<Meta name="description" content={`Detail of ${gif.title}`} />
			</Head>
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
