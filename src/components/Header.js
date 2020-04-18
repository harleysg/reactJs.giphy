import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import Search from "./Search.js";

export default function Header({ handleOutput }) {
	return (
		<header className="App-header">
			<Search handleOutput={handleOutput} />
		</header>
	);
}

Header.propTypes = {
	handleOutput: PropTypes.func.isRequired,
};
