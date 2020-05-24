import React from "react";
import { Link } from "wouter";

import NotFound from "components/NotFound.js";
import Header from "components/Header.js";

export default function NotFoundPage() {
	return (
		<>
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
