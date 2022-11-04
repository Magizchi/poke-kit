<script>
	import PokemanCard from '../components/pokemanCard.svelte';
	import { pokemon } from '../stores/poke';
	let searchTerm = '';
	/**
	 * @type {any[]}
	 */
	let filteredPokeman = [];

	$: {
		if (searchTerm) {
			filteredPokeman = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokeman = [...$pokemon];
		}
	}
</script>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit POKEDE!!!!</h1>

<p class="bg-red-500">
	jean Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<input
	type="text"
	class="w-full rounded-md text-lg p-4 border-2"
	placeholder="search pokemon"
	bind:value={searchTerm}
/>
<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokeman as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
