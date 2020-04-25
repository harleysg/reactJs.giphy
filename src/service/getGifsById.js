import { URL_GIFs_ID } from "../shared/index.js";

export async function getGifsById({ ID }) {
	const URLAPI = URL_GIFs_ID({ ID });
	const FetchAPI = await fetch(URLAPI);
	const Data = await FetchAPI.json();
	return Data;
}
