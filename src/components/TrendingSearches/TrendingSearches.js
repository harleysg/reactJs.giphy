import React, { useEffect, useState } from "react";

import Category from "../Categories";
import { getTrendingsTerms } from "service/index";

export function TrendingSearches() {
	const [trends, setTrends] = useState([]);
	useEffect(() => {
		getTrendingsTerms().then(setTrends);
	}, []);
	return <Category name="tendencias" options={trends}></Category>;
}
