import React from "react";
import { Switch, Route } from "wouter";

import GifHomePage from "./home/index.js";
import GifDetailPage from "./details/index.js";
import GifResultPage from "./results/index.js";
import NotFoundPage from "./notFound/index.js";

export default function Routes() {
	return (
		<Switch>
			<Route component={GifHomePage} path="/" />
			<Route component={GifResultPage} path="/search/:KEYWORD" />
			<Route component={GifDetailPage} path="/gif/:ID" />
			<Route component={NotFoundPage} path="/:rest*" />
		</Switch>
	);
}
