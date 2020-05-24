import {
	DEFAULT_SEARCH_TERM,
	DEFAULT_SEARCH_LIMIT,
	DEFAULT_SEARCH_OFFSET,
	URL_GIFs_KEYWORD,
} from "shared/index.js";

export async function getGifsByKeyWord({
	keyWord = DEFAULT_SEARCH_TERM,
	limit = DEFAULT_SEARCH_LIMIT,
	offset = DEFAULT_SEARCH_OFFSET,
}) {
	const URLAPI = URL_GIFs_KEYWORD({ keyWord, limit, offset });
	const FetchAPI = await fetch(URLAPI);
	const resAPI = await FetchAPI.json();
	const { data = [] } = resAPI;
	const filtered = data.map((image) => ({
		url: image.images.preview_gif.url,
		title: image.title,
		id: image.id,
	}));
	return filtered;
}
