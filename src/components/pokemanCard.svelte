<script>
	/**
	 * @type {{ name: string;id:number; image:string }}
	 */
	export let pokeman;
</script>

<a
	href={`/pokeman/${pokeman.id}`}
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
	<img src={pokeman.image} alt={pokeman.name} class="h-40 w-40" />
	<h2 class="uppercase">{pokeman.id}. {pokeman.name}</h2>
</a>
