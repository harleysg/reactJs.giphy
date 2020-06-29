import React from "react";

import "./Header.css";

export default function Header({ children }) {
	return (
		<header className="App-header">
			<div className="App-wrapper App-header_wrapper">{children}</div>
		</header>
	);
}
