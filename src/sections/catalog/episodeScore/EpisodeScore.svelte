<script>
	import Characters from './characters/Characters.svelte';
	import Timeline from './Timeline.svelte';
	import Locations from './locations/Locations.svelte';

	let {
		width,
		statsWidth,
		labelsWidth,
		scenes,
		xScale,
		episodeData,
		isPlaying,
		playingScene,
		sonificationCharactersData,
		sonificationLocationData
	} = $props();

	let episodeDuration = $derived(+episodeData[episodeData.length - 1].eventTimeSeconds);

	let isHover = $state(false);
	let hoveredPosition = $state(0);
	let hoveredTime = $state(0);

	const handleMouseEnter = () => {
		isHover = true;
	};
	const handleMouseLeave = () => {
		isHover = false;
	};
	const handleMouseOver = (/** @type {MouseEvent} */ e) => {
		const x = e.clientX - 198;
		hoveredPosition = x >= 0 ? x : 0;
		hoveredTime = xScale.invert(hoveredPosition);
	};
</script>

<div
	style="width: {width + statsWidth}px"
	role="document"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onmousemove={handleMouseOver}
>
	<Characters
		{width}
		{statsWidth}
		{labelsWidth}
		{scenes}
		{xScale}
		{episodeData}
		{episodeDuration}
		{isHover}
		{hoveredPosition}
		{hoveredTime}
		{isPlaying}
		{playingScene}
		{sonificationCharactersData}
	/>
	<Timeline {labelsWidth} {xScale} {episodeDuration} {isHover} {hoveredTime} {hoveredPosition} />
	<Locations
		{width}
		{statsWidth}
		{labelsWidth}
		{scenes}
		{xScale}
		{episodeData}
		{episodeDuration}
		{isHover}
		{hoveredPosition}
		{hoveredTime}
	/>
</div>
