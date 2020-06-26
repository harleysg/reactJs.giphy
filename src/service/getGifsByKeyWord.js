import { URL_GIFs_KEYWORD } from "shared/index.js";

export async function getGifsByKeyWord({ keyWord, limit, page }) {
	const URLAPI = URL_GIFs_KEYWORD({ keyWord, limit, page });
	const FetchAPI = await fetch(URLAPI);
	const resAPI = await FetchAPI.json();
	const { data = [] } = resAPI;
	const filtered = data.map((image) => ({
		url: image.images.preview_webp.url,
		title: image.title,
		id: image.id,
	}));
	return filtered;
}
