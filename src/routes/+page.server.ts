// import { YOUTUBE_API_KEY } from '$env/static/private';
// import term from './+page.svelte';

// let url = '';

// async function searchYoutube() {
// 	const response = await fetch(url);
// 	const data = await response.json();

// 	console.log(term);
// 	console.log(term);
// 	console.log(term);
// 	console.log(term);

// 	console.log(data);

// 	return data;
// }

// /** @type {import('./$types').PageLoad} */
// export async function load({ fetch }: { fetch: any }) {
// 	url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&type=video&key=${YOUTUBE_API_KEY}&maxResults=25&order=date`;
// 	return { data: await searchYoutube(term) };
// }
