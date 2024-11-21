<script>
	import { formatTime } from '../../../utils/formatTime';
	import { scaleLinear } from 'd3-scale';

	const { scenesData, width, height } = $props();

	const lastSceneNumber = +scenesData[scenesData.length - 2].sceneNumber;
	/**
	 * @type {{ sceneNum: number, startTime: number; endTime: number }[]}
	 */
	const scenes = [];
	for (let i = 1; i <= lastSceneNumber; i++) {
		const sceneData = scenesData.filter((/** @type { any } */ d) => +d.sceneNumber === i);
		const startTime = sceneData[0].eventTime;
		const endTime = sceneData[sceneData.length - 1].eventTime;
		scenes.push({
			sceneNum: i,
			startTime: formatTime(startTime),
			endTime: formatTime(endTime) + 5
		});
	}
	console.log('scenes', scenes);

	// TODO: Pass scale as prop to reuse between components
	const xScale = scaleLinear()
		.domain([0, scenes[scenes.length - 1].endTime])
		.range([0, width]);
</script>

<g>
	{#each scenes as scene, j}
		<rect
			x={xScale(scene.startTime)}
			y={0}
			width={xScale(scene.endTime) - xScale(scene.startTime)}
			{height}
			fill={j % 2 ? '#DDDBDC' : '#EEECED'}
			fill-opacity={0.7}
		/>
		<text
			class="number"
			x={xScale(scene.startTime) + (xScale(scene.endTime) - xScale(scene.startTime)) / 2}
			y={8}
			text-anchor="middle"
			dominant-baseline="hanging"
		>
			{scene.sceneNum}
		</text>
	{/each}
</g>
