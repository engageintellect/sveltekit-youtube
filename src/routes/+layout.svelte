<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="">
	<Nav />
	<main class="max-w-5xl px-2 mx-auto min-h-screen py-10">
		<slot />
	</main>
	<Footer />
</div>
