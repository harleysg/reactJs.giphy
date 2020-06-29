import { URL_GIFs_ID, FILTER_GIF_RESPONSE } from "shared/index.js";

export async function getSingleGifById({ id }) {
	const URLAPI = URL_GIFs_ID({ id });
	const FetchAPI = await fetch(URLAPI);
	const { data = [] } = await FetchAPI.json();
	const gif = FILTER_GIF_RESPONSE(data);
	return gif
}
