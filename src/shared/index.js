// Giphy API Key - Get yours at https://developers.giphy.com/dashboard/
export const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const APP_CONTEXT = {
	name: "reactGiphy ❤️",
	author: "Harley Santos Garzón",
};

// URL for giphy search API
export const API_URL = "https://api.giphy.com/v1";
export const API_SEARCH_URL = `${API_URL}/gifs/search`;

// Initial search values
export const DEFAULT_SEARCH_TERM = "";
export const REGEX_TERM = "([a-zA-Z0-9]{2,})";
export const DEFAULT_SEARCH_LIMIT = 25;
export const DEFAULT_SEARCH_OFFSET = 0;

// Results limits
export const LIMIT_LOW = 5;
export const LIMIT_MEDIUM = 25;
export const LIMIT_HIGH = 100;
export const LIMITS = [LIMIT_LOW, LIMIT_MEDIUM, LIMIT_HIGH];

export function URL_GIFs_KEYWORD({
	keyWord = DEFAULT_SEARCH_TERM,
	limit = LIMIT_MEDIUM,
	offset = DEFAULT_SEARCH_OFFSET,
}) {
	return `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyWord}&limit=${limit}&offset=${offset}&rating=G&lang=en`;
}
export function URL_GIFs_ID({ ID }) {
	return `${API_URL}/${ID}?api_key=${API_KEY}`;
}
export function URL_TRANDINGS() {
	return `${API_URL}/trending/searches?api_key=${API_KEY}`;
}
