import { writable } from 'svelte/store';
export const pokemon = writable([]);
const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const response = await fetch(url);
	const data = await response.json();
	const loadedPokemon = data.results.map((data: any, index: number) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	pokemon.set(loadedPokemon);
};
fetchPokemon();
