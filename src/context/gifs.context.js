import React, { createContext, useState } from "react";

const Context = createContext({});

export function GifsContextProvider({ children }) {
	const [gifs, setGifs] = useState([]);
	const [keyWord, setKeyWord] = useState("");
	return (
		<Context.Provider value={{ gifs, setGifs, keyWord, setKeyWord }}>
			{children}
		</Context.Provider>
	);
}

export default Context;
