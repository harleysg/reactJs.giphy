import React, { useContext } from "react";
import { Title, Meta } from "react-head";
import { Link } from "wouter";

import {NotFound, Head, Header} from "components/index.js";

import Context from "context/app.context";

export default function NotFoundPage() {
	const { name } = useContext(Context);
	return (
		<>
			<Head>
				<Title>{`Error de navegación | ${name}`}</Title>
				<Meta name="description" content={`Error de navegación`} />
			</Head>
			<Header>
				<div className="App-header_block">
					<Link to="/" className="c-link">
						Go to Home
					</Link>
				</div>
			</Header>
			<NotFound></NotFound>
		</>
	);
}
