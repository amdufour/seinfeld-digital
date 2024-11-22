<script>
	import SoundIconWhite from '../../../icons/SoundIconWhite.svelte';

	let { scenesWidth, scenes, xScale } = $props();
</script>

<div class="relative">
	<svg width={scenesWidth} height="96px">
		<line x1={0} y1="48" x2={scenesWidth} y2="48" stroke="#BEBABC" />
		<g transform="translate(0, 48)">
			{#each scenes as scene}
				<line
					x1={xScale(scene.startTime)}
					y1={-5}
					x2={xScale(scene.startTime)}
					y2={5}
					stroke="#BEBABC"
				/>
			{/each}
		</g>
		<line x1={scenesWidth} y1={-5} x2={scenesWidth} y2={5} stroke="#BEBABC" />
	</svg>
	<div class="play-ref absolute flex h-9 w-9 items-center justify-center rounded-full">
		<SoundIconWhite />
	</div>
</div>

<style>
	.play-ref {
		top: 50%;
		left: -18px;
		transform: translateY(-50%);
		background-color: #bebabc;
	}
</style>
