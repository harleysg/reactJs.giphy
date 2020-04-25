import React from "react";
import { Switch, Route } from "wouter";

import { GifListRoute, GifDetailRouter, NotFound } from "./routes/index.js";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<Switch>
				<Route component={GifListRoute} path="/" />
				<Route component={GifDetailRouter} path="/:ID" />
				<Route component={NotFound} path="/:rest*" />
			</Switch>
		</div>
	);
}
