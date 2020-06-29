import { useContext, useEffect, useState } from "react";
import { getGifsByKeyWord } from "service/index.js";
import GifsContext from "context/gifs.context";
import { INITIAL_PAGE } from "shared/index";

export default function useGifs({ keyWord } = { keyWord: null }) {
	const [loading, setLoading] = useState(false);
	const [loadingNextPage, setLoadingnextPage] = useState(false);
	const { gifs, setGifs, setKeyWord } = useContext(GifsContext);
	const [page, setPage] = useState(INITIAL_PAGE);

	const keyWordUsed =
		keyWord || localStorage.getItem("lastKeyword") || "random";

	useEffect(() => {
		setLoading(true);
		getGifsByKeyWord({ keyWord: keyWordUsed }).then((gifs) => {
			setLoading(false);
            (typeof setGifs == "function") && setGifs(gifs);
			(typeof setKeyWord == "function") && setKeyWord(keyWordUsed);
			localStorage.setItem("lastKeyword", keyWordUsed);
		});
	}, [keyWordUsed, setGifs, setKeyWord]);

	useEffect(() => {
		if (page === INITIAL_PAGE) return;
		setLoadingnextPage(true);
		getGifsByKeyWord({ keyWord: keyWordUsed, page }).then((nextGifs) => {
			setGifs((prevGifs) => prevGifs.concat(nextGifs));
			setLoadingnextPage(false);
		});
	}, [keyWordUsed, page, setGifs]);

	return {
		loading,
		gifs,
		loadingNextPage,
		keyWordUsed,
		setPage,
	};
}
