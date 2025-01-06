<script>
	import { quotes } from '../../data/quotes';
	import { seasons } from '../../data/seasons';

	/**
	 * @param {any[]} arr
	 * @param {number} n
	 */
	function getRandom(arr, n) {
		var result = new Array(n),
			len = arr.length,
			taken = new Array(len);
		if (n > len) throw new RangeError('getRandom: more elements taken than available');
		while (n--) {
			var x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
		}
		return result;
	}

	const numQuotes = 3;
	/**
	 * @type {any[]}
	 */
	const quotesToDisplay = [];

	seasons.forEach((season) => {
		const allQuotes = quotes.filter((quote) => quote.season === season.seasonNum);
		const randomQuotes = getRandom(allQuotes, numQuotes).sort((a, b) => a.episode - b.episode);
		quotesToDisplay.push(...randomQuotes);
	});
	console.log(quotesToDisplay);
</script>

<div class="bg-black text-white">
	<div class="container flex h-screen items-center">
		<ul class="quotes-list">
			{#each quotesToDisplay as quote, i}
				<li class="inline">
					{#if i > 0}
						<span class="px-4">{'•'}</span>
					{/if}
					<span>
						{#if quote.revised_quote_text.length > 0}
							{quote.revised_quote_text}
						{:else}
							{quote.quote}
						{/if}
					</span>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.quotes-list {
		line-height: 2.5;
	}
</style>
