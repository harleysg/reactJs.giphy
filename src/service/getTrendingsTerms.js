import { URL_TRANDINGS } from "shared/index.js";

export default async function getTrendingsTerms() {
	const URLAPI = URL_TRANDINGS();
	const FetchAPI = await fetch(URLAPI);
	const { data = [] } = await FetchAPI.json();
	return data;
}
