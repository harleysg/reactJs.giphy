import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import GifList from "./components/GIfList.js";

export default function App() {
	const [keyWord, setkeyWord] = useState("morty");
	return (
		<div className="App">
			<Header handleOutput={setkeyWord} />
			<div className="App-wrapper">
				<GifList keyWord={keyWord} />
			</div>
		</div>
	);
}
