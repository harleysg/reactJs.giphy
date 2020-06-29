import React from "react";
import "./Limit.css";
import { LIMITS, LIMIT_MEDIUM } from "shared/index.js";

export default function LimitGifs({ outputLimit = () => {} }) {
	function emitChange(e) {
		outputLimit(e.target.value);
	}
	return (
		<label className="gif-filter_field" htmlFor="selectLimit">
			<select
				onChange={emitChange}
				defaultValue={LIMIT_MEDIUM}
				id="selectLimit"
			>
				{LIMITS.map((limit) => (
					<option value={limit} key={limit}>
						{limit}
					</option>
				))}
			</select>
		</label>
	);
}
