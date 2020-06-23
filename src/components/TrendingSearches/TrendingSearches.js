import React, { useEffect, useState } from "react";

import Category from "components/Categories/index";
import { getTrendingsTerms } from "service/index";

export default function TrendingSearches() {
	const [trends, setTrends] = useState([]);
	useEffect(() => {
		getTrendingsTerms().then(setTrends);
	}, []);
	return <Category name="tendencias" options={trends}></Category>;
}
