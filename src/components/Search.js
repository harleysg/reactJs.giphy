import React, { useState } from "react";
import PropTypes from "prop-types";

import { REGEX_TERM, DEFAULT_SEARCH_TERM } from "../shared/index.js";

import "./Search.css";

export default function Search({ handleOutput }) {
	const [value, sendValue] = useState("");
	const [searched, resetSearch] = useState(DEFAULT_SEARCH_TERM);
	const regx = new RegExp(REGEX_TERM);

	function handleSeachChange(e) {
		sendValue(e.target.value);
		resetSearch("");
	}

	function handleForm(e) {
		e.preventDefault();
		if (regx.test(value)) {
			handleOutput(value);
			resetSearch(value);
			sendValue("");
		} else {
			console.log(`${value} isn´t validate`);
		}
	}
	return (
		<div className="gif-search_field">
			<form onSubmit={handleForm} className="gif-search_form">
				<label className="gif-search_field">
					<input
						className="gif-search_input"
						type="search"
						value={value}
						placeholder="Search all the GIFs and Stickers + Enter"
						onChange={handleSeachChange}
					/>
				</label>
				{searched && (
					<span className="gif-searched">
						Results of: <strong>{searched}</strong>
					</span>
				)}
			</form>
		</div>
	);
}

Search.propTypes = {
	handleOutput: PropTypes.func.isRequired,
};
