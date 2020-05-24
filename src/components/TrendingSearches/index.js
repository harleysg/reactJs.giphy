import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrends() {
	const { isNearScreen, fromRef } = useNearScreen();
	return (
		<Suspense fallback={false}>
			<div ref={fromRef}>
				{isNearScreen ? <TrendingSearches /> : null}
			</div>
		</Suspense>
	);
}
