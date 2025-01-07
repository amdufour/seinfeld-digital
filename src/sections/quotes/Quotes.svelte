<script>
	import { quotes } from '../../data/quotes';
	import { seasons } from '../../data/seasons';
	import { soundIsAuth } from '../../stores/soundAuthStore';

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

	/**
	 * @type {number}
	 */
	let innerWidth = $state(1600);
	const numQuotes = $derived.by(() => {
		switch (true) {
			case innerWidth >= 1700:
				return 4;
			case innerWidth >= 1024:
				return 3;
			case innerWidth >= 768:
				return 2;
			default:
				return 1;
		}
	});

	const quotesToDisplay = $derived.by(() => {
		/**
		 * @type {any[]}
		 */
		const quotesToKeep = [];

		seasons.forEach((season) => {
			const allQuotes = quotes.filter((quote) => quote.season === season.seasonNum);
			const randomQuotes = getRandom(allQuotes, numQuotes).sort((a, b) => a.episode - b.episode);
			quotesToKeep.push(...randomQuotes);
		});

		return quotesToKeep;
	});

	let canPlayQuote = $state(true);
	const playQuote = (/** @type {number} */ id) => {
		console.log(id, canPlayQuote);
		if (canPlayQuote) {
			canPlayQuote = false;
			var quote = document.getElementsByClassName(`quote-${id}`);
			quote[0].classList.add('playing');

			const audio = new Audio(`https://amdufour.github.io/hosted-data/apis/audio_quotes/${id}.m4a`);
			audio.muted = !$soundIsAuth;
			audio.play();

			setTimeout(() => {
				canPlayQuote = true;
				quote[0].classList.remove('playing');
			}, 5000);
		}
	};
</script>

<svelte:window bind:innerWidth />

<div class="bg-black text-white">
	<div class="container flex h-screen items-center">
		<ul class="quotes-list">
			{#each quotesToDisplay as quote, i}
				<li class="inline">
					{#if i > 0}
						<span class="px-4">{'•'}</span>
					{/if}
					<div
						class={`quote quote-${quote.audio_clip_id} relative inline cursor-default`}
						style={`color: ${seasons.find((s) => s.seasonNum === quote.season)?.color}`}
					>
						{#if quote.revised_quote_text.length > 0}
							{quote.revised_quote_text}
						{:else}
							{quote.quote}
						{/if}
						<span
							class="quote-info small absolute left-0 top-7 w-96"
							role="contentinfo"
							onmouseenter={() => playQuote(quote.audio_clip_id)}
							onfocus={() => {}}
							>{`s${quote.season}e${quote.episode} ${quote.episode_title}, ${quote.who}`}</span
						>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.quotes-list {
		line-height: 2.5;
	}
	.quote {
		transition: color 250ms ease-out;
	}
	.quote.playing {
		color: #e71d80 !important;
	}
	.quote-info {
		transform: translateY(-10px);
		opacity: 0;
		transition: all 250ms ease-out;
	}
	.quote:hover .quote-info,
	.quote.playing .quote-info {
		transform: translateY(0);
		opacity: 1;
	}
</style>
