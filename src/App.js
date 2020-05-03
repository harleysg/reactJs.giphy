import React from "react";

import Routes from "./pages/index.js";

import "./App.css";
import { GifsContextProvider } from "./context/gifs.context.js";
import { AppContextProvider } from "./context/app.context.js";
import { APP_CONTEXT } from "./shared/index.js";

export default function App() {
	return (
		<AppContextProvider value={APP_CONTEXT}>
			<div className={"App"}>
				<GifsContextProvider>
					<Routes />
				</GifsContextProvider>
			</div>
		</AppContextProvider>
	);
}
