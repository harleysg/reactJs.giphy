import { URL_GIFs_KEYWORD, FILTER_GIF_RESPONSE } from "shared/index.js";

export async function getGifsByKeyWord({ keyWord, limit, page, rating }) {
	const URLAPI = URL_GIFs_KEYWORD({ keyWord, limit, page, rating });
	const FetchAPI = await fetch(URLAPI);
	const { data = [] } = await FetchAPI.json();;
	const gifs = data.map(FILTER_GIF_RESPONSE);
	return gifs;
}
