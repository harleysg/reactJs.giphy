import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import { REGEX_TERM, DEFAULT_SEARCH_TERM } from "../shared/index.js";

import GifsContext from "./../context/gifs.context";

import "./Search.css";

export default function Search({ handleOutput }) {
	const [value, sendValue] = useState("");
	const { keyWord, setKeyWord } = useContext(GifsContext);
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
			setKeyWord(value);
			sendValue("");
		} else {
			console.log(`${value} isn´t validate`);
		}
	}
	return (
		<div className="gif-search">
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
				<span className="gif-searched">
					{keyWord && (
						<>
							{" "}
							Results of:
							<strong> {searched || keyWord}</strong>
						</>
					)}
				</span>
			</form>
		</div>
	);
}

Search.propTypes = {
	handleOutput: PropTypes.func.isRequired,
};
