import React, { lazy } from "react";
import { Switch, Route } from "wouter";

const LoginPage =  lazy(() => import("./login/index.js"));
const HomePage =  lazy(() => import("./home/index.js"));
const DetailPage =  lazy(() => import("./details/index.js"));
const ResultPage =  lazy(() => import("./results/index.js"));
const NotFoundPage =  lazy(() => import("./notFound/index.js"));

export default function Routes() {
	return (
		<Switch>
			<Route component={HomePage} path="/" />
			<Route component={LoginPage} path="/login" />
			<Route component={ResultPage} path="/search/:keyWord/:rating?" />
			<Route component={DetailPage} path="/gif/:id" />
			<Route component={NotFoundPage} path="/:rest*" />
		</Switch>
	);
}
