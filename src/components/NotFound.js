import React from "react";

import { Link } from "wouter";

import Header from "./Header.js";

export default function NotFound() {
	return (
		<>
			<Header>
				<div className="App-header_block">
					<Link to="/" className="c-link">
						Go to Home
					</Link>
				</div>
			</Header>
			<div className="App-wrapper">404, not found!</div>
		</>
	);
}
