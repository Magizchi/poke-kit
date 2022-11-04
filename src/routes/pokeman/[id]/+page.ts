/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: { id: string } }) {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const item = await res.json();
	return { post: { ...item } };
}
