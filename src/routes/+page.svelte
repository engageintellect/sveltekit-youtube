<script lang="ts">
	let YOUTUBE_API_KEY = 'AIzaSyCSis_YjZDjyGgNvXSZPaYiZ-3oZ165SNo';
	let max_result = '25';
	let term: string;
	let response;
	let data: any;

	const getData = async () => {
		const res = await fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&type=video&key=${YOUTUBE_API_KEY}&maxResults=${max_result}&order=date`
		);
		response = await res.json();
		console.log(response);
		data = response;
	};
</script>

<div class="">
	<div
		class="bg-neutral-800 min-h-72 py-10  text-white flex flex-col justify-center items-center rounded-md"
	>
		<div class="capitalize font-bold text-5xl text-center">{term || 'YouTube API'}</div>
		<div class="flex justify-center pt-4">
			<div>
				<!-- {#if term}
					<div><span class="font-bold">You're search: </span>{term}</div>
				{/if} -->
				<div>
					<div>
						<input
							class="shadow-md px-2 bg-neutral-700 focus:bg-neutral-600 outline-none text-white"
							placeholder="Search..."
							type="text"
							bind:value={term}
						/>

						<button
							class="bg-neutral-500 text-white px-2 shadow-md outline-none"
							on:click={() => getData()}>search</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if data}
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-4">
		{#each data.items as item}
			<a
				href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
				target="_blank"
				rel="noreferrer"
			>
				<div class="w-full h-full transition-all group duration-200 rounded-lg">
					<div
						class="overflow-hidden shadow-md hover:shadow-lg relative rounded-md h-full flex-col flex justify-center"
					>
						<img
							src={item.snippet.thumbnails.high.url}
							alt=""
							class="group-hover:scale-105 group-hover:blur-sm object-cover group-hover:opacity-20 transition-all duration-200"
						/>

						<div
							class="absolute top-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
						>
							<div class="text-lg">{item.snippet.description}</div>
						</div>
						<div class="h-full p-4">
							<div class="neutral-500 rounded-md font-bold">
								{item.snippet.channelTitle}
							</div>
							<div class="">{item.snippet.title}</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
{/if}
