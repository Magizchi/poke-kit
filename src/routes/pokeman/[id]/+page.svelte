<script>
	/**
	 * @type {{ post: {types:{type:{name:string}}[];weight:string;height:string; name: string;sprites:{'front_default':string}}; }}
	 */
	export let data;
	let pokeman = data.post;

	console.log('ite', data.post);
</script>

<svelte:head>
	<title>{pokeman.name}</title>
</svelte:head>
<section class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{pokeman.types[0].type.name}</strong> | Height: <strong>{pokeman.height}</strong>
		| Weight: <strong>{pokeman.weight}</strong>
	</p>
	<img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</section>
