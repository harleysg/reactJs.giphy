import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Search.css";

export default function Search({ handleOutput }) {
	const [value, sendValue] = useState("");
	const [searched, resetSearch] = useState("");
	const regx = new RegExp("^([a-zA-Z0-9]{4,})$");

	function handleChange(e) {
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
						onChange={handleChange}
					/>
				</label>
			</form>
			{searched && (
				<span className="gif-searched">
					Results of: <strong>{searched}</strong>
				</span>
			)}
		</div>
	);
}

Search.propTypes = {
	handleOutput: PropTypes.func.isRequired,
};
