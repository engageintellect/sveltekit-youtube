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
	<div class="bg-neutral-800 py-10  text-white flex flex-col justify-center items-center">
		<div class="capitalize font-bold text-5xl text-center">YouTube API</div>
		<div class="flex justify-center pt-4">
			<div>
				{#if term}
					<div><span class="font-bold">You're search: </span>{term}</div>
				{/if}
				<div>
					<input
						class="border shadow-md px-2 text-neutral-900"
						placeholder="Search..."
						type="text"
						bind:value={term}
					/>
					<button class="bg-neutral-500 text-white px-2 shadow-md" on:click={() => getData()}
						>search</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

{#if data}
	<div class="grid grid-cols-3 gap-4 pt-4">
		{#each data.items as item}
			<div
				class="w-full border shadow-md hover:shadow-lg transition-all duration-200 h-64 rounded-lg"
			>
				<div class="p-4">
					<div class="font-thin text-md">{item.snippet.channelTitle}</div>
					<div class="font-semibold text-sm">{item.snippet.title}</div>
					<div>
						<img src={item.snippet.thumbnails.default.url} alt="" />
					</div>
					<div class="text-xs">{item.snippet.description}</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
