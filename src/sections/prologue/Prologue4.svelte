<script>
	import BookCover from '$lib/assets/book/book_cover.jpg';
	import BookIntro from '$lib/assets/book/book_intro.jpg';
	import BookCalendar from '$lib/assets/book/book_calendar.jpg';
	import BookLaughs from '$lib/assets/book/book_laughs.jpg';
	import BookScatterplot from '$lib/assets/book/book_scatterplot.jpg';
	import BookQuotes from '$lib/assets/book/book_quotes.jpg';
	import BookCatalog1 from '$lib/assets/book/book_catalog1.png';
	import BookCatalog2 from '$lib/assets/book/book_catalog2.png';
</script>

<div class="flex h-screen flex-col justify-between">
	<div class="container grid grid-cols-1 lg:grid-cols-2" style="margin-top: 15%;">
		<div class="col-span-1 flex h-full items-center px-4">
			<p>This project, prolonging the portfolio book published in 2020, explores both.</p>
		</div>
		<div class="col-span-1 px-4">
			<img src={BookCover} alt="Cover of the book The Seinfeld Chronicles." />
		</div>
	</div>
	<div class="flex">
		<img class="mx-4 h-80" src={BookIntro} alt="Introduction of the book." />
		<img class="mx-4 h-80" src={BookCalendar} alt="Calendar of the nine seasons of Seinfeld." />
		<img
			class="mx-4 h-80"
			src={BookLaughs}
			alt="Data visualizations of the laughs caused by the four main characters."
		/>
		<img
			class="mx-4 h-80"
			src={BookScatterplot}
			alt="Data visualizations of the peak performances of the four main characters."
		/>
		<img class="mx-4 h-80" src={BookQuotes} alt="Famous quotes from each episode." />
		<img
			class="mx-4 h-80"
			src={BookCatalog1}
			alt="Data visualization of season 4 episode 11 'The Contest'."
		/>
		<img
			class="mx-4 h-80"
			src={BookCatalog2}
			alt="Data visualization of season 7 episode 6 'The Soup Nazi'."
		/>
	</div>
</div>
