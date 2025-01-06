<script>
	/**
	 * @type {number}
	 */
	$: innerWidth = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	id="timeline-container"
	class="container relative mt-20 grid h-screen grid-cols-2"
	style="border: 2px solid pink;"
>
	<div
		id="timeline"
		class="absolute bottom-0 col-span-1 px-4"
		style="height: {innerHeight - 300}px"
	>
		<div
			id="timeline-line"
			class="absolute bg-white"
			style={`width: 2px; height: ${innerHeight - 300}px; border-radius: 1px; bottom: 30px;`}
		></div>
		<div
			id="date-1"
			class="absolute w-full"
			style={`bottom: ${((innerHeight - 300) * 2) / 3 + 30}px; left: 0`}
		>
			<div id="date-us" class="flex items-center">
				<div id="year-us" class="year" style={`width: 176px; margin-right: 24px`}>1989</div>
				<div id="circle-us" class="circle bg-white"></div>
				<div
					id="desc-us"
					class="text-sm"
					style="margin-left: 24px; min-width: {innerWidth / 2 - 40}px;"
				>
					Seinfeld first aired on NBC in the USA
				</div>
			</div>
		</div>
		<div
			id="date-2"
			class="absolute w-full"
			style={`bottom: ${(innerHeight - 300) / 3 + 30}px; left: 0`}
		>
			<div id="date-uk" class="flex items-center">
				<div id="year-uk" class="year" style={`width: 176px; margin-right: 24px`}>1993</div>
				<div id="circle-uk" class="circle bg-white"></div>
				<div
					id="desc-uk"
					class="text-sm"
					style="margin-left: 24px; min-width: {innerWidth / 2 - 40}px;"
				>
					Seinfeld first aired on BBC2 in the UK
				</div>
			</div>
		</div>
		<div id="date-3" class="absolute w-full" style={`top: ${innerHeight - 120 + 30}px; left: 0`}>
			<div id="date-andy" class="flex items-center" style="opacity: 0">
				<div id="year-andy" class="year">2012</div>
				<div id="circle-andy" class="pulse circle bg-accent"></div>
				<div
					id="desc-andy"
					class="text-sm"
					style="margin-left: 24px; min-width: {innerWidth / 2 - 40}px;"
				>
					Seinfeld returns to prime-time on Sky TV in the UK
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#timeline-line {
		left: 137px;
	}
	.year {
		width: 100px;
		min-width: 100px;
		margin-right: 24px;
		text-align: right;
		font-size: 1.5rem;
		font-weight: 600;
	}
	@media screen and (min-width: 996px) {
		#timeline-line {
			left: 213px;
		}
		.year {
			width: 176px;
			min-width: 176px;
		}
	}
	.circle {
		width: 28px;
		min-width: 28px;
		height: 28px;
		border-radius: 50%;
	}
	.pulse {
		animation: pulse-animation 2s infinite;
	}

	@keyframes pulse-animation {
		0% {
			box-shadow: 0 0 0 0px rgba(231, 29, 128, 0.5);
		}
		100% {
			box-shadow: 0 0 0 20px rgba(231, 29, 128, 0);
		}
	}
</style>
