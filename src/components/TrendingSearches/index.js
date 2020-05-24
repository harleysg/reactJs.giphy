import React from "react";
import useNearScreen from "hooks/useNearScreen";
import { TrendingSearches } from "./TrendingSearches";

export default function LadyTrends() {
	const { isNearScreen, fromRef } = useNearScreen();
	return (
		<div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
	);
}
