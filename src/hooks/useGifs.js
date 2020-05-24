import { useContext, useEffect, useState } from "react";
import { getGifsByKeyWord } from "service/index.js";
import GifsContext from "context/gifs.context";

export default function useGifs({ keyWord } = { keyWord: null }) {
	const [loading, setLoading] = useState(false);
	const { gifs, setGifs, setKeyWord } = useContext(GifsContext);

	const keyWordToUse =
		keyWord || localStorage.getItem("lastKeyword") || "random";

	useEffect(() => {
		setLoading(true);
		getGifsByKeyWord({ keyWord: keyWordToUse }).then((gifs) => {
			setLoading(false);
			setGifs(gifs);
			setKeyWord(keyWordToUse);
			localStorage.setItem("lastKeyword", keyWordToUse);
		});
	}, [keyWordToUse, setGifs, setKeyWord]);

	return { loading, gifs, keyWordUsed: keyWordToUse };
}
