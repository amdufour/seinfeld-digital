import { G as attr, I as store_get, J as attr_style, K as unsubscribe_stores, M as stringify, B as pop, z as push, N as ensure_array_like, O as attr_class, F as escape_html, P as bind_props, Q as copy_payload, R as assign_payload, S as await_block } from "../../chunks/index.js";
import { json, csv } from "d3-fetch";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import "clsx";
import { w as writable } from "../../chunks/index2.js";
import { scaleLinear, scaleTime, scaleBand } from "d3-scale";
import { sum, max, range, mean } from "d3-array";
import "tone";
Promise.resolve();
const navBarColor = writable("white");
const soundIsAuth = writable(false);
const soundAuthModaleIsOpen = writable(false);
function AudioOn($$payload, $$props) {
  let { color } = $$props;
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.5"${attr("stroke", color)}><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"></path></svg>`;
}
function AudioOff($$payload, $$props) {
  let { color } = $$props;
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.5"${attr("stroke", color)}><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"></path></svg>`;
}
function Burger($$payload, $$props) {
  let { color } = $$props;
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.5"${attr("stroke", color)}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>`;
}
function Navbar($$payload) {
  var $$store_subs;
  let showMenu = false;
  let color = (() => {
    switch (true) {
      case store_get($$store_subs ??= {}, "$navBarColor", navBarColor) === "white":
        return "#F9F5F7";
      default:
        return "#E71D80";
    }
  })();
  $$payload.out += `<div class="fixed right-6 top-0 flex h-14 items-center"${attr_style(`height: 56px; z-index: ${stringify(10)};`)}><div class="flex"><button>`;
  if (store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth)) {
    $$payload.out += "<!--[-->";
    AudioOn($$payload, { color });
  } else {
    $$payload.out += "<!--[!-->";
    AudioOff($$payload, { color });
  }
  $$payload.out += `<!--]--></button> <button class="ml-4"${attr("disabled", showMenu, true)}>`;
  Burger($$payload, { color });
  $$payload.out += `<!----></button></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function DownIcon($$payload) {
  $$payload.out += `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.77639 14.2072C9.8292 14.1551 9.89193 14.1138 9.961 14.0856C10.0301 14.0575 10.1041 14.043 10.1789 14.043C10.2537 14.043 10.3277 14.0575 10.3968 14.0856C10.4658 14.1138 10.5286 14.1551 10.5814 14.2072L17.0008 20.519L23.4203 14.2072C23.4731 14.1552 23.5359 14.114 23.6049 14.0859C23.674 14.0577 23.748 14.0433 23.8228 14.0433C23.8975 14.0433 23.9715 14.0577 24.0406 14.0859C24.1097 14.114 24.1724 14.1552 24.2253 14.2072C24.2781 14.2591 24.3201 14.3208 24.3487 14.3887C24.3773 14.4566 24.392 14.5293 24.392 14.6028C24.392 14.6763 24.3773 14.7491 24.3487 14.817C24.3201 14.8849 24.2781 14.9465 24.2253 14.9985L17.4033 21.7049C17.3505 21.7569 17.2878 21.7982 17.2187 21.8264C17.1496 21.8546 17.0756 21.8691 17.0008 21.8691C16.9261 21.8691 16.852 21.8546 16.7829 21.8264C16.7139 21.7982 16.6511 21.7569 16.5983 21.7049L9.77639 14.9985C9.72345 14.9466 9.68145 14.8849 9.65279 14.817C9.62413 14.7491 9.60938 14.6763 9.60938 14.6028C9.60938 14.5293 9.62413 14.4565 9.65279 14.3886C9.68145 14.3207 9.72345 14.2591 9.77639 14.2072Z" fill="#F9F5F7"></path><circle cx="17" cy="17" r="16.25" stroke="#F9F5F7" stroke-width="1.5"></circle></svg>`;
}
function PrologueLateArrival($$payload, $$props) {
  push();
  $$payload.out += `<div class="relative flex h-screen items-center"><div class="container"><div id="prologue-1" class="svelte-136tb6d">I was a late arrival to Seinfeld fandom.</div></div> <div class="down-icon-container mask svelte-136tb6d"><div id="down-icon" class="svelte-136tb6d">`;
  DownIcon($$payload);
  $$payload.out += `<!----></div></div></div>`;
  pop();
}
function PrologueTimeline($$payload, $$props) {
  push();
  let innerHeight = 800;
  $$payload.out += `<div id="timeline-container" class="container mt-20 grid grid-cols-3 md:grid-cols-2 svelte-1j30q02"><div class="col-span-2 px-4 md:col-span-1 svelte-1j30q02"><div class="flex h-screen flex-col justify-center svelte-1j30q02"><p id="prologue-1" class="svelte-1j30q02">Though the first episode was aired in the US in 1989, there would be a four-year delay until
				it was broadcast in the UK. As a teenager, and with the show lurking in the shadows of BBC’s
				late-night schedules, it passed me by.</p></div> <div class="flex h-screen flex-col justify-center svelte-1j30q02"><p id="prologue-2" class="svelte-1j30q02">It wasn't until I was in my 30s when Seinfeld reappeared on UK TV in a prime-time slot.
				Fully aware of the show's standing in the canon of popular culture this was my best
				opportunity to tune in.</p></div></div> <div id="timeline" class="relative col-span-1 px-4 svelte-1j30q02"><div id="timeline-line" class="absolute bg-white svelte-1j30q02"${attr_style(`left: ${stringify(213)}px; width: 2px; height: ${stringify(innerHeight - 120)}px; border-radius: 1px; top: 60px;`)}></div> <div id="date-1" class="absolute w-full svelte-1j30q02"${attr_style(`top: ${(innerHeight - 120) / 3 + 30}px; left: 0`)}><div id="date-us" class="flex items-center svelte-1j30q02"><div id="year-us" class="year svelte-1j30q02"${attr_style(`width: ${stringify(176)}px;`)}>1989</div> <div id="circle-us" class="circle bg-white svelte-1j30q02"></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="desc-us"${attr_style(`margin-left: 24px`)} class="svelte-1j30q02">Seinfeld first aired on NBC in the USA</div>`;
  }
  $$payload.out += `<!--]--></div></div> <div id="date-2" class="absolute w-full svelte-1j30q02"${attr_style(`top: ${(innerHeight - 120) / 3 * 2 + 30}px; left: 0`)}><div id="date-uk" class="flex items-center svelte-1j30q02"><div id="year-uk" class="year svelte-1j30q02"${attr_style(`width: ${stringify(176)}px;`)}>1993</div> <div id="circle-uk" class="circle bg-white svelte-1j30q02"></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="desc-uk"${attr_style(`margin-left: 24px`)} class="svelte-1j30q02">Seinfeld first aired on BBC2 in the UK</div>`;
  }
  $$payload.out += `<!--]--></div></div> <div id="date-3" class="absolute w-full svelte-1j30q02"${attr_style(`top: ${innerHeight - 120 + 30}px; left: 0`)}><div id="date-andy" class="flex items-center svelte-1j30q02" style="opacity: 0"><div id="year-andy" class="year svelte-1j30q02"${attr_style(`width: ${stringify(176)}px;`)}>2012</div> <div id="circle-andy" class="pulse circle bg-accent svelte-1j30q02"></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="desc-andy"${attr_style(`margin-left: 24px`)} class="svelte-1j30q02">Seinfeld returns to prime-time on Sky TV in the UK</div>`;
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
  pop();
}
const tv_noise = "/_app/immutable/assets/tv_noise.CynwfRsk.png";
function PrologueTheShow($$payload, $$props) {
  push();
  let innerWidth = 1600;
  let sideSpacing = (innerWidth - 1280) / 2;
  $$payload.out += `<section id="the-show"><div class="container"><div id="the-show-1" class="grid grid-cols-12 gap-4 mb-24" role="presentation"><div class="col-span-7 md:col-span-4 mask"><div class="text">It only took a handful of episodes for me to find myself completely hooked. Seinfeld was written in a different key, deviating from the traditional rules of sitcoms, focusing on - and amplifying of - the minutiae of daily life, earning its reputation as <a href="https://www.latimes.com/archives/la-xpm-1993-03-04-ca-474-story.html" target="_blank">the show about nothing</a>.</div></div> <div class="col-span-5"><div class="relative video-container"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/6c.ShowAboutNothing.mp4" type="video/mp4"/></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute z-10 bottom-0 left-0 right-0 top-0"${attr_style(`background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2">S4E3 - The Pitch</h5></div></div></div> <div id="the-show-2" class="grid grid-cols-12 gap-4 mb-52" role="presentation"${attr_style(`margin-left: -${stringify(sideSpacing)}px;`)}><div class="col-span-5 md:col-span-7"><div class="relative video-container"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/32.Minutiae.mp4" type="video/mp4"/></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr_style(`background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2 ml-2">S8E3 - The Bizzaro Jerry</h5></div></div> <div class="col-span-7 md:col-span-3 mask"><div class="text">I loved the irreverent characters - with their absurd obsessions and neurotic tendencies - and the hilariously avoidable situations they found themselves in.</div></div></div> <div id="the-show-3" class="grid grid-cols-12 gap-4 mb-52" role="presentation"${attr_style(`margin-left: ${stringify(-160)}px;`)}><div class="col-auto md:col-span-2"></div> <div class="col-span-12 md:col-span-8"><div class="mask"><div class="text"><div>It rejected the classic three-act story, sidestepping sentimentality and the pursuit of resolution. With its mantra of <span class="em">no hugging*, no learning</span> the lead characters were insecure and entertainingly flawed, lacking any desire and capability for personal growth.</div> <div class="number mt-2 mb-4">* the earlier clip not withstanding!</div></div></div> <div><div class="relative video-container"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/11a.GoodSamaritan.mp4" type="video/mp4"/></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr_style(`background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2">S9E24 - The Good Samaritan Law</h5></div></div></div></div> <div id="the-show-4" class="grid grid-cols-12 gap-4 mb-44" role="presentation"${attr_style(`margin-right: ${stringify(-160)}px;`)}><div class="col-span-1 md:col-span-2"></div> <div class="col-span-6 md:col-span-5 mask"><div class="text">As with any shows from its time, as <a href="https://www.theguardian.com/culture/2024/oct/16/jerry-seinfeld-tom-papa-breaking-bad-podcast-interview-politics-comedy-extreme-left-pc-crap-#:~:text=%E2%80%9CDoes%20culture%20change,my%20skiing%20analogy.%E2%80%9D" target="_blank">culture and society evolve</a> a contemporary lens exposes negative stereotypes and flashes of chauvinism and sizeism, to name but two isms. The amoral instincts of these <a href="https://www.theguardian.com/tv-and-radio/2018/may/10/no-hugging-no-learning-20-years-on-seinfelds-mantra-still-looms-large" target="_blank">anti-heroes</a> was most on-show in their romantic encounters and when faced with the slightest adversity or irrational annoyance.</div></div> <div class="col-span-5 md:col-span-5"><div class="relative video-container"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/13a.TheNose.mp4" type="video/mp4"/></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr_style(`background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2">S3E9 - The Nose Job</h5></div></div></div> <div id="the-show-5" class="grid grid-cols-12 gap-4 pb-52" role="presentation"${attr_style(`margin-left: ${stringify(-160)}px;`)}><div class="col-auto md:col-span-2"></div> <div class="col-span-12 md:col-span-10"><div class="mb-2 mask"><div class="text">And then there’s the dancing.</div></div> <div><div class="relative video-container"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/14.ElaineDancing.mp4" type="video/mp4"/></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr_style(`background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2">S8E4 - The Little Kicks</h5></div></div></div></div></div></section>`;
  pop();
}
function PrologueVideo($$payload, $$props) {
  push();
  $$payload.out += `<div id="prologue-video" class="relative flex h-screen items-center" role="presentation"><div class="relative"><video playsinline autoplay loop class="svelte-xb5cly"><source src="https://amdufour.github.io/hosted-data/apis/videos/1a.ElaineArrives.mp4" type="video/mp4"/></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr_style(`background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask z-2 absolute left-0"${attr_style(`bottom: ${stringify(0)}px;`)}><h5 id="stroked-title-s4e4" class="p-2">S4E4 - The Wallet</h5></div></div>`;
  pop();
}
function PrologueRythmAndTexture($$payload, $$props) {
  push();
  const videos = [
    {
      id: "parallax-2",
      isMuted: true,
      position: "top: 0px; right: 150px; width: 500px;",
      fileName: "8.KramerCigarette",
      episode: " S5E4 - The Sniffing Accountant"
    },
    {
      id: "parallax-3",
      isMuted: true,
      position: "top: 400px; left: 50px; width: 280px;",
      fileName: "Elaine1b",
      episode: "S8E12 - The Money"
    },
    {
      id: "parallax-4",
      isMuted: true,
      position: "top: 600px; left: 50%; width: 300px;",
      fileName: "26.JerryFriend",
      episode: "S1E4 - Male Unbonding"
    },
    {
      id: "parallax-1",
      isMuted: true,
      position: "top: 800px; left: 50%; transform: translate(-110%); width: 600px;",
      fileName: "24b.Jerrys",
      episode: "S3E2 - The Truth"
    },
    {
      id: "parallax-5",
      isMuted: true,
      position: "top: 1200px; right: 50px; width: 300px;",
      fileName: "KramerJeans2",
      episode: "S7E21 - The Wait Out"
    }
  ];
  const each_array = ensure_array_like(videos);
  $$payload.out += `<div style="padding-bottom: 300px"><div class="relative"><div id="prologue-videos-text" class="relative flex h-screen items-center"><div class="container grid grid-cols-1 lg:grid-cols-2"><div class="col-span-1 px-4"><p>As I progressed through the episodes my fascination with the creative process behind the
						show grew. It was the musicality of the writing and its delivery that I particularly
						loved, orchestrated by the comedic talents of co-creators Jerry Seinfeld and Larry
						David.</p> <p>Like music, situation comedy has rhythm and it has texture: <span class="highlight">rhythm</span> is shaped by a show’s timing, its scene-structures, and its pacing; <span class="highlight">textures</span> are created by the ‘instruments’ of characters and
						their locations, which amalgamate to create the situations from which the comedy manifests.</p></div></div></div> <div id="prologue-videos" class="z-1 absolute" style="height: 1400px; top: 100vh; left: 0; right: 0;"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let video = each_array[$$index];
    $$payload.out += `<div${attr_class(`parallax ${video.id} absolute w-80`, "svelte-10jri6f")}${attr("data-speed", Math.floor(Math.random() * 3 + 1))}${attr_style(video.position)} role="presentation"><video playsinline autoplay loop><source${attr("src", `https://amdufour.github.io/hosted-data/apis/videos/${video.fileName}.mp4`)} type="video/mp4"/></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute z-10 bottom-0 left-0 right-0 top-0"${attr_style(`background-image: url('${stringify(tv_noise)}')`)}></div> <div class="episode svelte-10jri6f">${escape_html(video.episode)}</div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}
const BookCover = "/_app/immutable/assets/book_cover.ChtgR2W8.jpg";
const BookIntro = "/_app/immutable/assets/book_intro.BX710J_b.jpg";
const BookCalendar = "/_app/immutable/assets/book_calendar.BUNIQpig.jpg";
const BookLaughs = "/_app/immutable/assets/book_laughs.kxnFIjOP.jpg";
const BookScatterplot = "/_app/immutable/assets/book_scatterplot.D3uuuCEK.jpg";
const BookQuotes = "/_app/immutable/assets/book_quotes.BEQDFD-q.jpg";
const BookCatalog1 = "/_app/immutable/assets/book_catalog1.DGPkPybi.png";
const BookCatalog2 = "/_app/immutable/assets/book_catalog2.DDVlmLVf.png";
function PrologueBook($$payload, $$props) {
  push();
  let innerHeight = 800;
  $$payload.out += `<div id="book-section-container" class="flex h-screen flex-col justify-between"><div id="book-cover-container" class="container grid grid-cols-1 lg:grid-cols-2"${attr_style(`margin-top: ${stringify(innerHeight / 6)}px;`)}><div class="col-span-1 flex h-full items-center px-4"><div><p>My curiosity transcended just <a href="https://jenniferkarmstrong.com/books/seinfeldia/" target="_blank">reading more about the show</a>, it was now time to go deep. I decided to immerse myself in an entirely unnecessary,
					self-motivated, long-running, data-driven exploration of every episode of Seinfeld. Why
					not!</p> <p>The first product of this work was my 2020 publishing of The Seinfeld Chronicles, a
					limited-edition printed book presenting all my extensive analysis. With 176 copies
					released, matching the number of written episodes, this reached a small but exclusive
					audience. In 2024 I decided it was time to work on a new product, to reach a wider
					audience with a completely new format: The Seinfeld Chronicles digital edition.</p></div></div> <div class="col-span-1 px-4"><img id="book-cover"${attr("src", BookCover)} alt="Cover of the book The Seinfeld Chronicles."/></div></div> <div id="books-outer-container"><div id="accent-line" class="mb-3 h-2 w-full" style="background-color: #E71D80;"></div> <div id="books-inner-container" class="flex"><img class="mx-4"${attr_style(`height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookIntro)} alt="Introduction of the book."/> <img class="mx-4"${attr_style(`height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookCalendar)} alt="Calendar of the nine seasons of Seinfeld."/> <img class="mx-4"${attr_style(`height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookLaughs)} alt="Data visualizations of the laughs caused by the four main characters."/> <img class="mx-4"${attr_style(`height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookScatterplot)} alt="Data visualizations of the peak performances of the four main characters."/> <img class="mx-4"${attr_style(`height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookQuotes)} alt="Famous quotes from each episode."/> <img class="mx-4"${attr_style(`height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookCatalog1)} alt="Data visualization of season 4 episode 11 'The Contest'."/> <img class="mx-4"${attr_style(`height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookCatalog2)} alt="Data visualization of season 7 episode 6 'The Soup Nazi'."/></div></div></div>`;
  pop();
}
function Prologue($$payload, $$props) {
  $$payload.out += `<section>`;
  PrologueLateArrival($$payload);
  $$payload.out += `<!----> `;
  PrologueVideo($$payload);
  $$payload.out += `<!----> `;
  PrologueTimeline($$payload);
  $$payload.out += `<!----> `;
  PrologueTheShow($$payload);
  $$payload.out += `<!----> `;
  PrologueRythmAndTexture($$payload);
  $$payload.out += `<!----> `;
  PrologueBook($$payload);
  $$payload.out += `<!----></section>`;
}
function SoundIcon($$payload, $$props) {
  let { width = 52, height = 42 } = $$props;
  $$payload.out += `<svg${attr("width", width)}${attr("height", height)} viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.7946 23.2461V23.1307C48.7946 17.0662 46.4168 11.3488 42.0993 7.03135C37.7818 2.71387 32.0645 0.335938 26 0.335938C19.9355 0.335938 14.2182 2.71377 9.90068 7.03125C5.5832 11.3487 3.20537 17.0662 3.20537 23.1305V23.2461C2.5868 23.36 2.02762 23.6868 1.6248 24.1699C1.22198 24.6529 1.00093 25.2618 1 25.8907V34.7793C1.00083 35.4923 1.28442 36.1758 1.78857 36.68C2.29272 37.1842 2.97627 37.4678 3.68926 37.4687H5.35117V37.8528C5.35241 38.8633 5.75439 39.832 6.46893 40.5465C7.18347 41.261 8.15222 41.6629 9.16269 41.6641H10.6392C11.2583 41.6633 11.8518 41.4171 12.2896 40.9793C12.7274 40.5415 12.9736 39.9479 12.9743 39.3288V21.3405C12.9736 20.7214 12.7274 20.1278 12.2896 19.6901C11.8518 19.2523 11.2583 19.006 10.6392 19.0053H9.16269C8.15217 19.0064 7.18335 19.4083 6.4688 20.1229C5.75424 20.8375 5.35231 21.8063 5.35117 22.8168V23.2011H4.76787V23.1301C4.76787 11.4231 14.2926 1.89844 26 1.89844C37.7074 1.89844 47.2321 11.4231 47.2321 23.1305V23.2015H46.6488V22.8172C46.6477 21.8067 46.2458 20.8378 45.5312 20.1233C44.8167 19.4087 43.8478 19.0068 42.8373 19.0057H41.3613C40.7422 19.0064 40.1487 19.2527 39.7109 19.6904C39.2731 20.1282 39.0269 20.7218 39.0262 21.3409V39.3292C39.027 39.9482 39.2733 40.5417 39.711 40.9794C40.1488 41.4171 40.7423 41.6633 41.3613 41.6641H42.8378C43.8483 41.6629 44.8171 41.2609 45.5317 40.5464C46.2462 39.8318 46.6482 38.863 46.6493 37.8524V37.4683H48.3112C49.0241 37.4673 49.7074 37.1837 50.2115 36.6796C50.7155 36.1755 50.9991 35.4921 51 34.7793V25.8907C50.9991 25.2618 50.778 24.6529 50.3752 24.1699C49.9724 23.6868 49.4132 23.36 48.7946 23.2461ZM6.91367 22.8174C6.91434 22.2211 7.15151 21.6495 7.57314 21.2278C7.99477 20.8062 8.56642 20.569 9.16269 20.5684H10.6392C10.844 20.5686 11.0404 20.6501 11.1853 20.795C11.3301 20.9398 11.4116 21.1362 11.4118 21.3411V39.3294C11.4116 39.5343 11.3301 39.7307 11.1853 39.8756C11.0404 40.0204 10.844 40.1019 10.6392 40.1021H9.16269C8.56641 40.1015 7.99473 39.8643 7.5731 39.4426C7.15147 39.021 6.91432 38.4493 6.91367 37.853V22.8174ZM5.35117 35.906H3.68926C3.39055 35.9056 3.10418 35.7868 2.89295 35.5756C2.68173 35.3644 2.56289 35.078 2.5625 34.7793V25.8907C2.56284 25.592 2.68166 25.3056 2.89289 25.0944C3.10413 24.8831 3.39053 24.7643 3.68926 24.764H5.35117V35.906ZM45.0863 37.8526C45.0857 38.4489 44.8485 39.0206 44.4269 39.4423C44.0053 39.8639 43.4336 40.1011 42.8373 40.1018H41.3613C41.1565 40.1015 40.9601 40.02 40.8152 39.8752C40.6703 39.7303 40.5889 39.5339 40.5887 39.329V21.3407C40.5889 21.1359 40.6703 20.9394 40.8152 20.7946C40.9601 20.6497 41.1565 20.5682 41.3613 20.568H42.8378C43.4341 20.5686 44.0057 20.8058 44.4274 21.2274C44.849 21.6491 45.0861 22.2207 45.0868 22.817L45.0863 37.8526ZM49.4375 34.7793C49.4372 35.078 49.3183 35.3644 49.1071 35.5757C48.8959 35.7869 48.6095 35.9058 48.3107 35.9062H46.6488V24.764H48.3107C48.6095 24.7643 48.8959 24.8831 49.1071 25.0944C49.3183 25.3056 49.4372 25.592 49.4375 25.8907V34.7793ZM34.8941 28.9612C35.1597 28.9612 35.3749 29.1763 35.3749 29.4418V31.2206C35.3749 31.4863 35.1598 31.7014 34.8941 31.7014C34.6285 31.7014 34.4134 31.4862 34.4134 31.2206V29.4418C34.4134 29.1763 34.6286 28.9612 34.8941 28.9612ZM33.114 27.5045C33.3795 27.5045 33.5949 27.7198 33.5949 27.9853V32.9109C33.5949 33.1766 33.3795 33.3917 33.114 33.3917C32.8486 33.3917 32.6332 33.1766 32.6332 32.9109V27.9853C32.6332 27.7198 32.8486 27.5045 33.114 27.5045ZM31.3364 25.0477C31.6018 25.0477 31.8173 25.2627 31.8173 25.5283V35.4898C31.8173 35.7553 31.6019 35.9707 31.3364 35.9707C31.071 35.9707 30.8556 35.7553 30.8556 35.4898V25.5283C30.8556 25.2627 31.0711 25.0477 31.3364 25.0477ZM29.5576 26.8265C29.8231 26.8265 30.0385 27.0416 30.0385 27.3074V33.3553C30.0385 33.6207 29.8231 33.8361 29.5576 33.8361C29.2922 33.8361 29.0768 33.6207 29.0768 33.3553V27.3074C29.0768 27.0416 29.2922 26.8265 29.5576 26.8265ZM24.1864 25.9651C24.452 25.9651 24.6671 26.1804 24.6671 26.446V34.4502C24.6671 34.7157 24.4519 34.9308 24.1864 34.9308C23.9211 34.9308 23.7056 34.7158 23.7056 34.4502V26.446C23.7056 26.1803 23.921 25.9651 24.1864 25.9651ZM20.6634 26.4706C20.9289 26.4706 21.1443 26.6859 21.1443 26.9514V34.0666C21.1443 34.3324 20.9289 34.5475 20.6634 34.5475C20.3979 34.5475 20.1828 34.3323 20.1828 34.0666V26.9514C20.1828 26.686 20.3979 26.4706 20.6634 26.4706ZM18.8846 28.2495C19.1501 28.2495 19.3655 28.4648 19.3655 28.7303V32.2879C19.3655 32.5534 19.1501 32.7688 18.8846 32.7688C18.6191 32.7688 18.404 32.5533 18.404 32.2879V28.7303C18.404 28.4649 18.6191 28.2495 18.8846 28.2495ZM22.4423 23.6245C22.708 23.6245 22.9231 23.8399 22.9231 24.1054V36.9128C22.9231 37.1785 22.7079 37.3937 22.4423 37.3937C22.1767 37.3937 21.9616 37.1784 21.9616 36.9128V24.1054C21.9616 23.84 22.1767 23.6245 22.4423 23.6245ZM27.7789 29.3169C28.0444 29.3169 28.2595 29.5323 28.2595 29.7977V31.2207C28.2595 31.4863 28.0444 31.7015 27.7789 31.7015C27.5134 31.7015 27.298 31.4864 27.298 31.2207V29.7977C27.298 29.5323 27.5134 29.3169 27.7789 29.3169ZM17.1058 29.1977C17.3712 29.1977 17.5867 29.4128 17.5867 29.6784V31.2178C17.5867 31.4832 17.3713 31.6986 17.1058 31.6986C16.8403 31.6986 16.625 31.4832 16.625 31.2178V29.6784C16.625 29.4128 16.8404 29.1977 17.1058 29.1977ZM26.0334 28.5194C26.2991 28.5194 26.5143 28.7345 26.5143 29V31.896C26.5143 32.1614 26.2992 32.3769 26.0334 32.3769C25.7679 32.3769 25.5528 32.1614 25.5528 31.896V29C25.5528 28.7345 25.768 28.5194 26.0334 28.5194Z" fill="url(#paint0_linear_429_210706)"></path><path d="M48.7946 23.2461H48.5446V23.4543L48.7493 23.492L48.7946 23.2461ZM3.20537 23.2461L3.25065 23.492L3.45537 23.4543V23.2461H3.20537ZM1.6248 24.1699L1.8168 24.33L1.6248 24.1699ZM1 25.8907L0.75 25.8904V25.8907H1ZM1 34.7793H0.75L0.75 34.7796L1 34.7793ZM3.68926 37.4687L3.68896 37.7187H3.68926V37.4687ZM5.35117 37.4687H5.60117V37.2187H5.35117V37.4687ZM5.35117 37.8528H5.10117V37.8531L5.35117 37.8528ZM9.16269 41.6641L9.16241 41.9141H9.16269V41.6641ZM10.6392 41.6641V41.9141H10.6395L10.6392 41.6641ZM12.9743 39.3288L13.2243 39.3291V39.3288H12.9743ZM12.9743 21.3405H13.2243V21.3402L12.9743 21.3405ZM10.6392 19.0053L10.6395 18.7553H10.6392V19.0053ZM9.16269 19.0053V18.7553H9.16241L9.16269 19.0053ZM5.35117 22.8168L5.10117 22.8165V22.8168H5.35117ZM5.35117 23.2011V23.4511H5.60117V23.2011H5.35117ZM4.76787 23.2011H4.51787V23.4511H4.76787V23.2011ZM47.2321 23.2015V23.4515H47.4821V23.2015H47.2321ZM46.6488 23.2015H46.3988V23.4515H46.6488V23.2015ZM46.6488 22.8172H46.8988V22.8169L46.6488 22.8172ZM42.8373 19.0057L42.8376 18.7557H42.8373V19.0057ZM41.3613 19.0057V18.7557H41.361L41.3613 19.0057ZM39.0262 21.3409L38.7762 21.3406V21.3409H39.0262ZM39.0262 39.3292H38.7762V39.3295L39.0262 39.3292ZM41.3613 41.6641L41.361 41.9141H41.3613V41.6641ZM42.8378 41.6641V41.9141H42.8381L42.8378 41.6641ZM46.6493 37.8524L46.8993 37.8527V37.8524H46.6493ZM46.6493 37.4683V37.2183H46.3993V37.4683H46.6493ZM48.3112 37.4683V37.7183H48.3116L48.3112 37.4683ZM51 34.7793L51.25 34.7796V34.7793H51ZM51 25.8907H51.25V25.8904L51 25.8907ZM6.91367 22.8174L6.66367 22.8171V22.8174H6.91367ZM9.16269 20.5684V20.3184H9.16241L9.16269 20.5684ZM10.6392 20.5684L10.6394 20.3184H10.6392V20.5684ZM11.4118 21.3411H11.6618V21.3409L11.4118 21.3411ZM11.4118 39.3294L11.6618 39.3296V39.3294H11.4118ZM10.6392 40.1021V40.3521H10.6394L10.6392 40.1021ZM9.16269 40.1021L9.16241 40.3521H9.16269V40.1021ZM6.91367 37.853H6.66367V37.8533L6.91367 37.853ZM3.68926 35.906L3.68895 36.156H3.68926V35.906ZM5.35117 35.906V36.156H5.60117V35.906H5.35117ZM2.89295 35.5756L3.06972 35.3988L2.89295 35.5756ZM2.5625 34.7793H2.3125L2.3125 34.7796L2.5625 34.7793ZM2.5625 25.8907L2.3125 25.8904V25.8907H2.5625ZM2.89289 25.0944L3.06967 25.2711L2.89289 25.0944ZM3.68926 24.764V24.514H3.68898L3.68926 24.764ZM5.35117 24.764H5.60117V24.514H5.35117V24.764ZM45.0863 37.8526L45.3363 37.8529V37.8526L45.0863 37.8526ZM42.8373 40.1018V40.3518H42.8376L42.8373 40.1018ZM41.3613 40.1018L41.361 40.3518H41.3613V40.1018ZM40.5887 39.329H40.3387V39.3293L40.5887 39.329ZM40.5887 21.3407L40.3387 21.3405V21.3407H40.5887ZM41.3613 20.568V20.318H41.361L41.3613 20.568ZM42.8378 20.568L42.8381 20.318H42.8378V20.568ZM45.0868 22.817L45.3368 22.817V22.8167L45.0868 22.817ZM49.4375 34.7793L49.6875 34.7796V34.7793H49.4375ZM48.3107 35.9062V36.1562H48.311L48.3107 35.9062ZM46.6488 35.9062H46.3988V36.1562H46.6488V35.9062ZM46.6488 24.764V24.514H46.3988V24.764H46.6488ZM48.3107 24.764L48.311 24.514H48.3107V24.764ZM49.4375 25.8907H49.6875V25.8904L49.4375 25.8907ZM48.5446 23.1307V23.2461H49.0446V23.1307H48.5446ZM41.9225 7.20812C46.1935 11.4791 48.5446 17.133 48.5446 23.1307H49.0446C49.0446 16.9994 46.6401 11.2186 42.2761 6.85457L41.9225 7.20812ZM26 0.585938C31.9976 0.585938 37.6516 2.93716 41.9225 7.20812L42.2761 6.85457C37.9121 2.49057 32.1313 0.0859375 26 0.0859375V0.585938ZM10.0775 7.20803C14.3484 2.93707 20.0024 0.585938 26 0.585938V0.0859375C19.8687 0.0859375 14.0879 2.49047 9.72391 6.85447L10.0775 7.20803ZM3.45537 23.1305C3.45537 17.133 5.8065 11.479 10.0775 7.20803L9.72391 6.85447C5.35991 11.2185 2.95537 16.9994 2.95537 23.1305H3.45537ZM3.45537 23.2461V23.1305H2.95537V23.2461H3.45537ZM1.8168 24.33C2.18223 23.8918 2.6895 23.5953 3.25065 23.492L3.16009 23.0002C2.4841 23.1247 1.87301 23.4819 1.4328 24.0098L1.8168 24.33ZM1.25 25.8911C1.25085 25.3205 1.45137 24.7682 1.8168 24.33L1.4328 24.0098C0.992583 24.5377 0.751019 25.203 0.75 25.8904L1.25 25.8911ZM1.25 34.7793V25.8907H0.75V34.7793H1.25ZM1.96535 36.5032C1.50801 36.0459 1.25075 35.4258 1.25 34.779L0.75 34.7796C0.750904 35.5588 1.06083 36.3058 1.61179 36.8568L1.96535 36.5032ZM3.68956 37.2187C3.04277 37.2179 2.42269 36.9606 1.96535 36.5032L1.61179 36.8568C2.16276 37.4078 2.90977 37.7177 3.68896 37.7187L3.68956 37.2187ZM5.35117 37.2187H3.68926V37.7187H5.35117V37.2187ZM5.60117 37.8528V37.4687H5.10117V37.8528H5.60117ZM6.6457 40.3697C5.97797 39.7021 5.60233 38.7968 5.60117 37.8525L5.10117 37.8531C5.10249 38.9298 5.53081 39.962 6.29216 40.7233L6.6457 40.3697ZM9.16298 41.4141C8.21871 41.413 7.31343 41.0374 6.6457 40.3697L6.29216 40.7233C7.05351 41.4846 8.08573 41.9128 9.16241 41.9141L9.16298 41.4141ZM10.6392 41.4141H9.16269V41.9141H10.6392V41.4141ZM12.1128 40.8025C11.7219 41.1935 11.1918 41.4134 10.6389 41.4141L10.6395 41.9141C11.3248 41.9133 11.9818 41.6407 12.4664 41.1561L12.1128 40.8025ZM12.7243 39.3285C12.7237 39.8814 12.5038 40.4115 12.1128 40.8025L12.4664 41.1561C12.951 40.6714 13.2235 40.0144 13.2243 39.3291L12.7243 39.3285ZM12.7243 21.3405V39.3288H13.2243V21.3405H12.7243ZM12.1128 19.8668C12.5038 20.2578 12.7237 20.7879 12.7243 21.3408L13.2243 21.3402C13.2235 20.6549 12.951 19.9979 12.4664 19.5133L12.1128 19.8668ZM10.6389 19.2553C11.1918 19.2559 11.7219 19.4759 12.1128 19.8668L12.4664 19.5133C11.9818 19.0287 11.3248 18.7561 10.6395 18.7553L10.6389 19.2553ZM9.16269 19.2553H10.6392V18.7553H9.16269V19.2553ZM6.64557 20.2997C7.31331 19.6319 8.21865 19.2563 9.16298 19.2553L9.16241 18.7553C8.08568 18.7565 7.05339 19.1848 6.29202 19.9461L6.64557 20.2997ZM5.60117 22.8171C5.60223 21.8728 5.97784 20.9674 6.64557 20.2997L6.29202 19.9461C5.53065 20.7075 5.10238 21.7398 5.10117 22.8165L5.60117 22.8171ZM5.60117 23.2011V22.8168H5.10117V23.2011H5.60117ZM4.76787 23.4511H5.35117V22.9511H4.76787V23.4511ZM4.51787 23.1301V23.2011H5.01787V23.1301H4.51787ZM26 1.64844C14.1545 1.64844 4.51787 11.2851 4.51787 23.1301H5.01787C5.01787 11.5612 14.4306 2.14844 26 2.14844V1.64844ZM47.4821 23.1305C47.4821 11.2851 37.8455 1.64844 26 1.64844V2.14844C37.5694 2.14844 46.9821 11.5612 46.9821 23.1305H47.4821ZM47.4821 23.2015V23.1305H46.9821V23.2015H47.4821ZM46.6488 23.4515H47.2321V22.9515H46.6488V23.4515ZM46.3988 22.8172V23.2015H46.8988V22.8172H46.3988ZM45.3544 20.3001C46.0222 20.9678 46.3978 21.8731 46.3988 22.8175L46.8988 22.8169C46.8976 21.7402 46.4693 20.7079 45.708 19.9465L45.3544 20.3001ZM42.837 19.2557C43.7813 19.2567 44.6867 19.6323 45.3544 20.3001L45.708 19.9465C44.9466 19.1851 43.9143 18.7569 42.8376 18.7557L42.837 19.2557ZM41.3613 19.2557H42.8373V18.7557H41.3613V19.2557ZM39.8877 19.8672C40.2786 19.4762 40.8087 19.2563 41.3616 19.2557L41.361 18.7557C40.6757 18.7565 40.0187 19.0291 39.5341 19.5137L39.8877 19.8672ZM39.2762 21.3412C39.2768 20.7883 39.4967 20.2582 39.8877 19.8672L39.5341 19.5137C39.0495 19.9983 38.7769 20.6553 38.7762 21.3406L39.2762 21.3412ZM39.2762 39.3292V21.3409H38.7762V39.3292H39.2762ZM39.8878 40.8026C39.4968 40.4117 39.2769 39.8817 39.2762 39.3289L38.7762 39.3295C38.7771 40.0148 39.0497 40.6717 39.5343 41.1562L39.8878 40.8026ZM41.3616 41.4141C40.8088 41.4134 40.2787 41.1935 39.8878 40.8026L39.5343 41.1562C40.0188 41.6407 40.6758 41.9133 41.361 41.9141L41.3616 41.4141ZM42.8378 41.4141H41.3613V41.9141H42.8378V41.4141ZM45.3549 40.3696C44.6872 41.0374 43.7818 41.413 42.8375 41.4141L42.8381 41.9141C43.9148 41.9128 44.9471 41.4845 45.7085 40.7231L45.3549 40.3696ZM46.3993 37.8522C46.3983 38.7965 46.0227 39.7018 45.3549 40.3696L45.7085 40.7231C46.4698 39.9618 46.8981 38.9295 46.8993 37.8527L46.3993 37.8522ZM46.3993 37.4683V37.8524H46.8993V37.4683H46.3993ZM48.3112 37.2183H46.6493V37.7183H48.3112V37.2183ZM50.0347 36.5028C49.5774 36.9601 48.9575 37.2174 48.3109 37.2183L48.3116 37.7183C49.0906 37.7172 49.8374 37.4072 50.3882 36.8564L50.0347 36.5028ZM50.75 34.779C50.7492 35.4256 50.4919 36.0456 50.0347 36.5028L50.3882 36.8564C50.9391 36.3055 51.249 35.5586 51.25 34.7796L50.75 34.779ZM50.75 25.8907V34.7793H51.25V25.8907H50.75ZM50.1832 24.33C50.5486 24.7682 50.7492 25.3205 50.75 25.8911L51.25 25.8904C51.249 25.203 51.0074 24.5377 50.5672 24.0098L50.1832 24.33ZM48.7493 23.492C49.3105 23.5953 49.8178 23.8918 50.1832 24.33L50.5672 24.0098C50.127 23.4819 49.5159 23.1247 48.8399 23.0002L48.7493 23.492ZM7.39636 21.051C6.92792 21.5195 6.66442 22.1546 6.66367 22.8171L7.16367 22.8177C7.16427 22.2876 7.3751 21.7794 7.74991 21.4046L7.39636 21.051ZM9.16241 20.3184C8.49993 20.3191 7.8648 20.5826 7.39636 21.051L7.74991 21.4046C8.12473 21.0298 8.63291 20.819 9.16298 20.8184L9.16241 20.3184ZM10.6392 20.3184H9.16269V20.8184H10.6392V20.3184ZM11.3621 20.6182C11.1704 20.4265 10.9105 20.3187 10.6394 20.3184L10.6389 20.8184C10.7775 20.8185 10.9105 20.8737 11.0085 20.9717L11.3621 20.6182ZM11.6618 21.3409C11.6615 21.0698 11.5537 20.8099 11.3621 20.6182L11.0085 20.9717C11.1065 21.0698 11.1617 21.2027 11.1618 21.3414L11.6618 21.3409ZM11.6618 39.3294V21.3411H11.1618V39.3294H11.6618ZM11.3621 40.0523C11.5537 39.8606 11.6615 39.6007 11.6618 39.3296L11.1618 39.3291C11.1617 39.4678 11.1065 39.6007 11.0085 39.6988L11.3621 40.0523ZM10.6394 40.3521C10.9105 40.3518 11.1704 40.244 11.3621 40.0523L11.0085 39.6988C10.9105 39.7968 10.7775 39.852 10.6389 39.8521L10.6394 40.3521ZM9.16269 40.3521H10.6392V39.8521H9.16269V40.3521ZM7.39632 39.6194C7.86477 40.0879 8.49992 40.3514 9.16241 40.3521L9.16298 39.8521C8.63289 39.8516 8.1247 39.6407 7.74988 39.2659L7.39632 39.6194ZM6.66367 37.8533C6.66439 38.5158 6.92788 39.151 7.39632 39.6194L7.74988 39.2659C7.37507 38.891 7.16425 38.3828 7.16367 37.8528L6.66367 37.8533ZM6.66367 22.8174V37.853H7.16367V22.8174H6.66367ZM3.68926 36.156H5.35117V35.656H3.68926V36.156ZM2.71618 35.7524C2.97422 36.0104 3.32405 36.1555 3.68895 36.156L3.68956 35.656C3.45705 35.6557 3.23414 35.5632 3.06972 35.3988L2.71618 35.7524ZM2.3125 34.7796C2.31297 35.1445 2.45815 35.4943 2.71618 35.7524L3.06972 35.3988C2.90531 35.2344 2.8128 35.0115 2.8125 34.779L2.3125 34.7796ZM2.3125 25.8907V34.7793H2.8125V25.8907H2.3125ZM2.71611 24.9176C2.45806 25.1756 2.31291 25.5255 2.3125 25.8904L2.8125 25.891C2.81276 25.6585 2.90525 25.4356 3.06967 25.2711L2.71611 24.9176ZM3.68898 24.514C3.32404 24.5144 2.97416 24.6595 2.71611 24.9176L3.06967 25.2711C3.23409 25.1067 3.45701 25.0142 3.68954 25.014L3.68898 24.514ZM5.35117 24.514H3.68926V25.014H5.35117V24.514ZM5.60117 35.906V24.764H5.10117V35.906H5.60117ZM44.6037 39.619C45.0721 39.1506 45.3356 38.5154 45.3363 37.8529L44.8363 37.8524C44.8358 38.3825 44.6249 38.8907 44.2501 39.2655L44.6037 39.619ZM42.8376 40.3518C43.5001 40.351 44.1352 40.0875 44.6037 39.619L44.2501 39.2655C43.8753 39.6403 43.3671 39.8512 42.837 39.8518L42.8376 40.3518ZM41.3613 40.3518H42.8373V39.8518H41.3613V40.3518ZM40.6384 40.0519C40.8301 40.2436 41.09 40.3514 41.361 40.3518L41.3616 39.8518C41.223 39.8516 41.09 39.7964 40.992 39.6984L40.6384 40.0519ZM40.3387 39.3293C40.3389 39.6003 40.4467 39.8602 40.6384 40.0519L40.992 39.6984C40.894 39.6003 40.8388 39.4674 40.8387 39.3288L40.3387 39.3293ZM40.3387 21.3407V39.329H40.8387V21.3407H40.3387ZM40.6384 20.6178C40.4467 20.8095 40.3389 21.0694 40.3387 21.3405L40.8387 21.341C40.8388 21.2023 40.894 21.0694 40.992 20.9713L40.6384 20.6178ZM41.361 20.318C41.09 20.3183 40.8301 20.4261 40.6384 20.6178L40.992 20.9713C41.09 20.8733 41.223 20.8181 41.3616 20.818L41.361 20.318ZM42.8378 20.318H41.3613V20.818H42.8378V20.318ZM44.6041 21.0507C44.1357 20.5822 43.5006 20.3187 42.8381 20.318L42.8375 20.818C43.3676 20.8186 43.8758 21.0294 44.2506 21.4042L44.6041 21.0507ZM45.3368 22.8167C45.3361 22.1542 45.0726 21.5191 44.6041 21.0507L44.2506 21.4042C44.6254 21.779 44.8362 22.2872 44.8368 22.8173L45.3368 22.8167ZM45.3363 37.8526L45.3368 22.817L44.8368 22.817L44.8363 37.8526L45.3363 37.8526ZM49.2839 35.7525C49.5419 35.4944 49.6871 35.1445 49.6875 34.7796L49.1875 34.779C49.1872 35.0116 49.0947 35.2345 48.9303 35.3989L49.2839 35.7525ZM48.311 36.1562C48.676 36.1557 49.0259 36.0105 49.2839 35.7525L48.9303 35.3989C48.7659 35.5634 48.543 35.6559 48.3104 35.6562L48.311 36.1562ZM46.6488 36.1562H48.3107V35.6562H46.6488V36.1562ZM46.3988 24.764V35.9062H46.8988V24.764H46.3988ZM48.3107 24.514H46.6488V25.014H48.3107V24.514ZM49.2839 24.9176C49.0258 24.6595 48.676 24.5144 48.311 24.514L48.3105 25.014C48.543 25.0142 48.7659 25.1067 48.9303 25.2711L49.2839 24.9176ZM49.6875 25.8904C49.6871 25.5255 49.5419 25.1756 49.2839 24.9176L48.9303 25.2711C49.0948 25.4356 49.1872 25.6585 49.1875 25.891L49.6875 25.8904ZM49.6875 34.7793V25.8907H49.1875V34.7793H49.6875ZM35.6249 29.4418C35.6249 29.0381 35.2977 28.7112 34.8941 28.7112V29.2112C35.0217 29.2112 35.1249 29.3144 35.1249 29.4418H35.6249ZM35.6249 31.2206V29.4418H35.1249V31.2206H35.6249ZM34.8941 31.9514C35.2978 31.9514 35.6249 31.6243 35.6249 31.2206H35.1249C35.1249 31.3482 35.0217 31.4514 34.8941 31.4514V31.9514ZM34.1634 31.2206C34.1634 31.6242 34.4904 31.9514 34.8941 31.9514V31.4514C34.7667 31.4514 34.6634 31.3483 34.6634 31.2206H34.1634ZM34.1634 29.4418V31.2206H34.6634V29.4418H34.1634ZM34.8941 28.7112C34.4905 28.7112 34.1634 29.0382 34.1634 29.4418H34.6634C34.6634 29.3144 34.7667 29.2112 34.8941 29.2112V28.7112ZM33.8449 27.9853C33.8449 27.5817 33.5176 27.2545 33.114 27.2545V27.7545C33.2414 27.7545 33.3449 27.8579 33.3449 27.9853H33.8449ZM33.8449 32.9109V27.9853H33.3449V32.9109H33.8449ZM33.114 33.6417C33.5174 33.6417 33.8449 33.3148 33.8449 32.9109H33.3449C33.3449 33.0385 33.2415 33.1417 33.114 33.1417V33.6417ZM32.3832 32.9109C32.3832 33.3148 32.7106 33.6417 33.114 33.6417V33.1417C32.9866 33.1417 32.8832 33.0385 32.8832 32.9109H32.3832ZM32.3832 27.9853V32.9109H32.8832V27.9853H32.3832ZM33.114 27.2545C32.7105 27.2545 32.3832 27.5817 32.3832 27.9853H32.8832C32.8832 27.8579 32.9866 27.7545 33.114 27.7545V27.2545ZM32.0673 25.5283C32.0673 25.1245 31.7397 24.7977 31.3364 24.7977V25.2977C31.464 25.2977 31.5673 25.401 31.5673 25.5283H32.0673ZM32.0673 35.4898V25.5283H31.5673V35.4898H32.0673ZM31.3364 36.2207C31.74 36.2207 32.0673 35.8934 32.0673 35.4898H31.5673C31.5673 35.6172 31.4639 35.7207 31.3364 35.7207V36.2207ZM30.6056 35.4898C30.6056 35.8934 30.9329 36.2207 31.3364 36.2207V35.7207C31.209 35.7207 31.1056 35.6172 31.1056 35.4898H30.6056ZM30.6056 25.5283V35.4898H31.1056V25.5283H30.6056ZM31.3364 24.7977C30.9332 24.7977 30.6056 25.1245 30.6056 25.5283H31.1056C31.1056 25.401 31.2089 25.2977 31.3364 25.2977V24.7977ZM30.2885 27.3074C30.2885 26.9035 29.961 26.5765 29.5576 26.5765V27.0765C29.6851 27.0765 29.7885 27.1798 29.7885 27.3074H30.2885ZM30.2885 33.3553V27.3074H29.7885V33.3553H30.2885ZM29.5576 34.0861C29.9612 34.0861 30.2885 33.7588 30.2885 33.3553H29.7885C29.7885 33.4827 29.6851 33.5861 29.5576 33.5861V34.0861ZM28.8268 33.3553C28.8268 33.7588 29.1541 34.0861 29.5576 34.0861V33.5861C29.4302 33.5861 29.3268 33.4827 29.3268 33.3553H28.8268ZM28.8268 27.3074V33.3553H29.3268V27.3074H28.8268ZM29.5576 26.5765C29.1542 26.5765 28.8268 26.9035 28.8268 27.3074H29.3268C29.3268 27.1798 29.4302 27.0765 29.5576 27.0765V26.5765ZM24.9171 26.446C24.9171 26.0424 24.5901 25.7151 24.1864 25.7151V26.2151C24.3138 26.2151 24.4171 26.3183 24.4171 26.446H24.9171ZM24.9171 34.4502V26.446H24.4171V34.4502H24.9171ZM24.1864 35.1808C24.59 35.1808 24.9171 34.8537 24.9171 34.4502H24.4171C24.4171 34.5776 24.3139 34.6808 24.1864 34.6808V35.1808ZM23.4556 34.4502C23.4556 34.854 23.7832 35.1808 24.1864 35.1808V34.6808C24.0589 34.6808 23.9556 34.5775 23.9556 34.4502H23.4556ZM23.4556 26.446V34.4502H23.9556V26.446H23.4556ZM24.1864 25.7151C23.783 25.7151 23.4556 26.0421 23.4556 26.446H23.9556C23.9556 26.3184 24.059 26.2151 24.1864 26.2151V25.7151ZM21.3943 26.9514C21.3943 26.5479 21.067 26.2206 20.6634 26.2206V26.7206C20.7909 26.7206 20.8943 26.824 20.8943 26.9514H21.3943ZM21.3943 34.0666V26.9514H20.8943V34.0666H21.3943ZM20.6634 34.7975C21.0669 34.7975 21.3943 34.4705 21.3943 34.0666H20.8943C20.8943 34.1942 20.7909 34.2975 20.6634 34.2975V34.7975ZM19.9328 34.0666C19.9328 34.4702 20.2597 34.7975 20.6634 34.7975V34.2975C20.5361 34.2975 20.4328 34.1943 20.4328 34.0666H19.9328ZM19.9328 26.9514V34.0666H20.4328V26.9514H19.9328ZM20.6634 26.2206C20.2596 26.2206 19.9328 26.5482 19.9328 26.9514H20.4328C20.4328 26.8239 20.5361 26.7206 20.6634 26.7206V26.2206ZM19.6155 28.7303C19.6155 28.3268 19.2882 27.9995 18.8846 27.9995V28.4995C19.012 28.4995 19.1155 28.6029 19.1155 28.7303H19.6155ZM19.6155 32.2879V28.7303H19.1155V32.2879H19.6155ZM18.8846 33.0188C19.2882 33.0188 19.6155 32.6915 19.6155 32.2879H19.1155C19.1155 32.4153 19.012 32.5188 18.8846 32.5188V33.0188ZM18.154 32.2879C18.154 32.6912 18.4808 33.0188 18.8846 33.0188V32.5188C18.7573 32.5188 18.654 32.4154 18.654 32.2879H18.154ZM18.154 28.7303V32.2879H18.654V28.7303H18.154ZM18.8846 27.9995C18.4808 27.9995 18.154 28.3271 18.154 28.7303H18.654C18.654 28.6028 18.7573 28.4995 18.8846 28.4995V27.9995ZM23.1731 24.1054C23.1731 23.7019 22.8462 23.3745 22.4423 23.3745V23.8745C22.5698 23.8745 22.6731 23.9779 22.6731 24.1054H23.1731ZM23.1731 36.9128V24.1054H22.6731V36.9128H23.1731ZM22.4423 37.6437C22.846 37.6437 23.1731 37.3166 23.1731 36.9128H22.6731C22.6731 37.0404 22.5699 37.1437 22.4423 37.1437V37.6437ZM21.7116 36.9128C21.7116 37.3164 22.0386 37.6437 22.4423 37.6437V37.1437C22.3149 37.1437 22.2116 37.0405 22.2116 36.9128H21.7116ZM21.7116 24.1054V36.9128H22.2116V24.1054H21.7116ZM22.4423 23.3745C22.0384 23.3745 21.7116 23.7021 21.7116 24.1054H22.2116C22.2116 23.9778 22.315 23.8745 22.4423 23.8745V23.3745ZM28.5095 29.7977C28.5095 29.3945 28.1827 29.0669 27.7789 29.0669V29.5669C27.9062 29.5669 28.0095 29.6702 28.0095 29.7977H28.5095ZM28.5095 31.2207V29.7977H28.0095V31.2207H28.5095ZM27.7789 31.9515C28.1826 31.9515 28.5095 31.6243 28.5095 31.2207H28.0095C28.0095 31.3484 27.9062 31.4515 27.7789 31.4515V31.9515ZM27.048 31.2207C27.048 31.6246 27.3754 31.9515 27.7789 31.9515V31.4515C27.6514 31.4515 27.548 31.3483 27.548 31.2207H27.048ZM27.048 29.7977V31.2207H27.548V29.7977H27.048ZM27.7789 29.0669C27.3753 29.0669 27.048 29.3942 27.048 29.7977H27.548C27.548 29.6703 27.6514 29.5669 27.7789 29.5669V29.0669ZM17.8367 29.6784C17.8367 29.2745 17.5091 28.9477 17.1058 28.9477V29.4477C17.2333 29.4477 17.3367 29.5511 17.3367 29.6784H17.8367ZM17.8367 31.2178V29.6784H17.3367V31.2178H17.8367ZM17.1058 31.9486C17.5094 31.9486 17.8367 31.6213 17.8367 31.2178H17.3367C17.3367 31.3452 17.2332 31.4486 17.1058 31.4486V31.9486ZM16.375 31.2178C16.375 31.6213 16.7023 31.9486 17.1058 31.9486V31.4486C16.9784 31.4486 16.875 31.3452 16.875 31.2178H16.375ZM16.375 29.6784V31.2178H16.875V29.6784H16.375ZM17.1058 28.9477C16.7026 28.9477 16.375 29.2745 16.375 29.6784H16.875C16.875 29.5511 16.9783 29.4477 17.1058 29.4477V28.9477ZM26.7643 29C26.7643 28.5963 26.437 28.2694 26.0334 28.2694V28.7694C26.1611 28.7694 26.2643 28.8727 26.2643 29H26.7643ZM26.7643 31.896V29H26.2643V31.896H26.7643ZM26.0334 32.6269C26.4373 32.6269 26.7643 32.2994 26.7643 31.896H26.2643C26.2643 32.0235 26.161 32.1269 26.0334 32.1269V32.6269ZM25.3028 31.896C25.3028 32.2993 25.6296 32.6269 26.0334 32.6269V32.1269C25.9061 32.1269 25.8028 32.0235 25.8028 31.896H25.3028ZM25.3028 29V31.896H25.8028V29H25.3028ZM26.0334 28.2694C25.6299 28.2694 25.3028 28.5965 25.3028 29H25.8028C25.8028 28.8726 25.906 28.7694 26.0334 28.7694V28.2694Z" fill="url(#paint1_linear_429_210706)"></path><defs><linearGradient id="paint0_linear_429_210706" x1="1" y1="21" x2="51" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="#FDE824"></stop><stop offset="0.12" stop-color="#B8CE32"></stop><stop offset="0.24" stop-color="#7DBA57"></stop><stop offset="0.365" stop-color="#4CB278"></stop><stop offset="0.47" stop-color="#1DA388"></stop><stop offset="0.59" stop-color="#228A8D"></stop><stop offset="0.72" stop-color="#2F708E"></stop><stop offset="0.865" stop-color="#39578D"></stop><stop offset="1" stop-color="#453782"></stop></linearGradient><linearGradient id="paint1_linear_429_210706" x1="1" y1="21" x2="51" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="#FDE824"></stop><stop offset="0.12" stop-color="#B8CE32"></stop><stop offset="0.24" stop-color="#7DBA57"></stop><stop offset="0.365" stop-color="#4CB278"></stop><stop offset="0.47" stop-color="#1DA388"></stop><stop offset="0.59" stop-color="#228A8D"></stop><stop offset="0.72" stop-color="#2F708E"></stop><stop offset="0.865" stop-color="#39578D"></stop><stop offset="1" stop-color="#453782"></stop></linearGradient></defs></svg>`;
}
function SoundAuthPopup($$payload) {
  $$payload.out += `<div class="sound-auth bg-white text-black svelte-ss9vkl"><div class="m-auto flex flex-col justify-between md:flex-row md:items-center" style="max-width: 1400px"><div class="flex items-center"><div class="shrink-0">`;
  SoundIcon($$payload, { width: 100, height: 165 / 2 });
  $$payload.out += `<!----></div> <div class="ml-4 mt-2"${attr_style(`max-width: ${stringify("none")}`)}><p class="svelte-ss9vkl">This project is an immersive audio experience. Turn your sound on!</p></div></div> <div class="mt-8 flex leading-5 md:ml-4 md:mt-0 md:justify-end"><button class="btn btn-secondary">No, thanks</button> <button class="btn btn-primary ml-4">Allow sound</button></div></div></div>`;
}
const seasons = [
  { id: "s1", seasonNum: 1, years: "1989-90", color: "#FDE824", numEpisodes: 5 },
  { id: "s2", seasonNum: 2, years: "1990-91", color: "#B8CE32", numEpisodes: 12 },
  { id: "s3", seasonNum: 3, years: "1991-92", color: "#7DBA57", numEpisodes: 23 },
  { id: "s4", seasonNum: 4, years: "1992-93", color: "#4CB278", numEpisodes: 24 },
  { id: "s5", seasonNum: 5, years: "1993-94", color: "#1DA388", numEpisodes: 22 },
  { id: "s6", seasonNum: 6, years: "1994-95", color: "#228A8D", numEpisodes: 24 },
  { id: "s7", seasonNum: 7, years: "1995-96", color: "#2F708E", numEpisodes: 24 },
  { id: "s8", seasonNum: 8, years: "1996-97", color: "#39578D", numEpisodes: 22 },
  { id: "s9", seasonNum: 9, years: "1997-98", color: "#453782", numEpisodes: 24 }
];
const totalNumEpisodes = sum(seasons, (d) => d.numEpisodes);
function Title($$payload, $$props) {
  push();
  let innerWidth = 1600;
  const gridContainer = (() => {
    switch (true) {
      case innerWidth >= 1536:
        return 1536;
      case innerWidth >= 1280:
        return 1280;
      case innerWidth >= 1024:
        return 1024;
      case innerWidth >= 768:
        return 768;
      default:
        return 640;
    }
  })();
  const padding = 30;
  let svgWidth = innerWidth >= gridContainer ? gridContainer + (innerWidth - gridContainer) / 2 : innerWidth - 2 * padding;
  let seasonScale = scaleLinear().domain([
    0,
    max(seasons, (d) => d.numEpisodes)
  ]).range([0, svgWidth]);
  const each_array = ensure_array_like(seasons);
  $$payload.out += `<section id="title-screen" class="h-screen mb-80 svelte-pfon2u" style="margin-top: 1200px;"><svg${attr("width", svgWidth)} height="132"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let season = each_array[i];
    $$payload.out += `<rect class="season-rect"${attr("x", 0)}${attr("y", i * 12)}${attr("width", seasonScale(season.numEpisodes))}${attr("height", 8)}${attr("fill", season.color)}></rect>`;
  }
  $$payload.out += `<!--]--></svg> <div class="container h-full"><div style="margin-top: -25px; max-width: 940px;"><h1>The Seinfield Chronicles</h1></div> <div><p id="subtitle" class="subtitle svelte-pfon2u" style="max-width: 840px;">An unnecessary data exploration by <span class="name svelte-pfon2u"><span class="highlight">Andy Kirk</span> <img id="portrait-andy" class="portrait svelte-pfon2u" alt="Portrait of Andy Kirk" src="https://amdufour.github.io/hosted-data/apis/portraits/andy.jpg"/></span>, <br/> <span class="name svelte-pfon2u"><span class="highlight">Anne-Marie Dufour</span> <img id="portrait-am" class="portrait svelte-pfon2u" alt="Portrait of Anne-Marie Dufour" src="https://amdufour.github.io/hosted-data/apis/portraits/annemarie_square_closeup.jpg"/></span>, and <span class="name svelte-pfon2u"><span class="highlight">Loud Numbers</span> <img id="portrait-ln" class="portrait svelte-pfon2u" alt="Loud Numbers logo" src="https://amdufour.github.io/hosted-data/apis/portraits/loud_numbers.jpg"/></span></p></div></div></section>`;
  pop();
}
const episodesInfo = [
  {
    "season": 1,
    "episode": 1,
    "order": 1,
    "episode_code": 1.1,
    "title": "Good News, Bad News",
    "description": "Jerry and George argue whether an overnight visitor Jerry is expecting is coming with romantic intentions.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOGExNTY0YzctZGE2NC00ZDEwLTk1NDMtZTkxNzJkNDQzNzVmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,99,1000,563_.jpg",
    "date_aired": "July 5 1989",
    "description_length": 106,
    "overall_order": 1,
    "data_order": 1,
    "dvd_order": 1,
    "amazon_order": 1,
    "wikipedia_airing_order": 1,
    "title_length": 19,
    "include": "Yes",
    "IMDB_rating": "7,6",
    "IMDB_raters": 3053,
    "rating_rank": 170,
    "viewers": "15,4",
    "Date_1stSpace": 5,
    "Date_2ndSpace": 7,
    "MonthPart": "July",
    "DayPart": 5,
    "YearPart": 1989,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 1,
    "episode": 2,
    "order": 2,
    "episode_code": 1.2,
    "title": "The Stakeout",
    "description": "Jerry and George stake out the lobby of an office building to find a woman Jerry met at a party but whose name and phone number he didn't get.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZDQ0ZTgwZWQtNTRkMS00NzZhLWIzYWUtNzMxZDY5YmMxYjk1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 31 1990",
    "description_length": 142,
    "overall_order": 2,
    "data_order": 2,
    "dvd_order": 3,
    "amazon_order": 2,
    "wikipedia_airing_order": 2,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "7,7",
    "IMDB_raters": 2399,
    "rating_rank": 167,
    "viewers": "22,5",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 31,
    "YearPart": 1990,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 1,
    "episode": 3,
    "order": 3,
    "episode_code": 1.3,
    "title": "The Robbery",
    "description": "After Jerry's apartment is robbed, Jerry starts to look for other apartments. But Jerry and George both want the same apartment, and Elaine wants the apartment of whomever loses out.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMmNhZDFhYWItZGFlZS00Y2MwLWE2NzMtZmQwMWM4NzY1MTc3XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "June 7 1990",
    "description_length": 182,
    "overall_order": 3,
    "data_order": 3,
    "dvd_order": 4,
    "amazon_order": 3,
    "wikipedia_airing_order": 3,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "7,6",
    "IMDB_raters": 2152,
    "rating_rank": 170,
    "viewers": "19,7",
    "Date_1stSpace": 5,
    "Date_2ndSpace": 7,
    "MonthPart": "June",
    "DayPart": 7,
    "YearPart": 1990,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 1,
    "episode": 4,
    "order": 4,
    "episode_code": 1.4,
    "title": "Male Unbonding",
    "description": "Jerry tries various excuses to avoid meeting with an old friend with whom he no longer shares any interests.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNGM1M2Q2MDQtYjNkNC00N2YyLWEwYTUtNWQ5MGZjODFiZjgyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "June 14 1990",
    "description_length": 108,
    "overall_order": 4,
    "data_order": 4,
    "dvd_order": 2,
    "amazon_order": 4,
    "wikipedia_airing_order": 4,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "7,5",
    "IMDB_raters": 2158,
    "rating_rank": 177,
    "viewers": "19,1",
    "Date_1stSpace": 5,
    "Date_2ndSpace": 8,
    "MonthPart": "June",
    "DayPart": 14,
    "YearPart": 1990,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 1,
    "episode": 5,
    "order": 5,
    "episode_code": 1.5,
    "title": "The Stock Tip",
    "description": "Jerry becomes apprehensive when he and George buy stock and the price falls while the person who suggested the stock is in a coma and can't tell them when to sell.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMTIzOThmMzctYzczNC00MTk4LTk4MmQtZWY1Mjg3ODkwNzYzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "June 21 1990",
    "description_length": 163,
    "overall_order": 5,
    "data_order": 5,
    "dvd_order": 5,
    "amazon_order": 5,
    "wikipedia_airing_order": 5,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "7,6",
    "IMDB_raters": 2040,
    "rating_rank": 170,
    "viewers": "19,4",
    "Date_1stSpace": 5,
    "Date_2ndSpace": 8,
    "MonthPart": "June",
    "DayPart": 21,
    "YearPart": 1990,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 1,
    "order": 6,
    "episode_code": 2.1,
    "title": "The Ex-Girlfriend",
    "description": "After George breaks up with his girlfriend, Jerry decides that he wants to see her.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BODY0NjIzNTQtYTI2MS00ODE5LTgwYjYtMmYzYjY3OGZiYWMxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 23 1991",
    "description_length": 83,
    "overall_order": 6,
    "data_order": 1,
    "dvd_order": 1,
    "amazon_order": 1,
    "wikipedia_airing_order": 1,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "7,7",
    "IMDB_raters": 1976,
    "rating_rank": 167,
    "viewers": "15,6",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 23,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 2,
    "order": 7,
    "episode_code": 2.2,
    "title": "The Pony Remark",
    "description": "Jerry fears that an inappropriate comment he made at a dinner party caused his relative's subsequent death.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BN2FiMjNhZTMtYjVmNS00NTliLTkyZmYtNTc4ZWQwYWZhZTJlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 30 1991",
    "description_length": 107,
    "overall_order": 7,
    "data_order": 2,
    "dvd_order": 2,
    "amazon_order": 2,
    "wikipedia_airing_order": 2,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "8,0",
    "IMDB_raters": 2086,
    "rating_rank": 156,
    "viewers": "15,2",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 30,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 3,
    "order": 8,
    "episode_code": 2.3,
    "title": "The Jacket",
    "description": "Jerry wears an expensive jacket when he meets Elaine's father, but an argument ensues when Jerry is reluctant to wear it outside during a snowfall.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOWU5YjU2M2UtNmI0MC00ZTVmLWJhYTgtZjM2MWJiM2RjODY0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 6 1991",
    "description_length": 147,
    "overall_order": 8,
    "data_order": 3,
    "dvd_order": 5,
    "amazon_order": 6,
    "wikipedia_airing_order": 3,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 2024,
    "rating_rank": 88,
    "viewers": "14,8",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 6,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 4,
    "order": 9,
    "episode_code": 2.4,
    "title": "The Phone Message",
    "description": "George leaves several awkward messages on a girlfriend's answering machine, then decides to steal the tape.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZDVlOWI0MzUtMTE4NC00N2RiLTgwMzgtNjVmZGExYzkwMTJlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "February 13 1991",
    "description_length": 107,
    "overall_order": 9,
    "data_order": 4,
    "dvd_order": 7,
    "amazon_order": 8,
    "wikipedia_airing_order": 4,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 2030,
    "rating_rank": 67,
    "viewers": "13,6",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 13,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 5,
    "order": 10,
    "episode_code": 2.5,
    "title": "The Apartment",
    "description": "When an apartment becomes available in Jerry's building, he helps Elaine get it, only to regret his decision to do so. George starts wearing a wedding ring because he's heard that it helps single guys pick up women.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNDUzMDI5YWMtYTcwNC00NGU4LTkzYzctZWMyYzg4MjRkNDhjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 4 1991",
    "description_length": 215,
    "overall_order": 10,
    "data_order": 5,
    "dvd_order": 8,
    "amazon_order": 9,
    "wikipedia_airing_order": 5,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "7,9",
    "IMDB_raters": 1819,
    "rating_rank": 160,
    "viewers": "24,7",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 8,
    "MonthPart": "April",
    "DayPart": 4,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 6,
    "order": 11,
    "episode_code": 2.6,
    "title": "The Statue",
    "description": "A statue wanted by George is stolen from Jerry's apartment by the boyfriend of a writer Elaine is working with.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMWYwNzA4NWQtMzZjMi00NDRjLTgzMWEtNTUwNmFkNDg3OTc1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 11 1991",
    "description_length": 111,
    "overall_order": 11,
    "data_order": 6,
    "dvd_order": 10,
    "amazon_order": 10,
    "wikipedia_airing_order": 6,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1825,
    "rating_rank": 142,
    "viewers": "23,3",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 11,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 7,
    "order": 12,
    "episode_code": 2.7,
    "title": "The Revenge",
    "description": "George takes revenge on his boss for not hiring him back after he quit and was rude to him, and Jerry and Kramer take revenge on a dry cleaner after Jerry accuses him of stealing $1,500 from his laundry bag.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNjRkZTEzNGYtYzA0YS00NTA4LWIwNWItNTkwMGVmM2VkYzJlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 18 1991",
    "description_length": 207,
    "overall_order": 12,
    "data_order": 7,
    "dvd_order": 12,
    "amazon_order": 12,
    "wikipedia_airing_order": 7,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1840,
    "rating_rank": 88,
    "viewers": "19,6",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 18,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 8,
    "order": 13,
    "episode_code": 2.8,
    "title": "The Heart Attack",
    "description": "After suffering what he thinks is a heart attack, George discovers he has inflamed tonsils and seeks alternative medicine to heal.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMGNiMTgxNmUtMzFlOS00MjY3LTliMjgtZTEyMTgyYzc4MDk5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 25 1991",
    "description_length": 130,
    "overall_order": 13,
    "data_order": 8,
    "dvd_order": 11,
    "amazon_order": 11,
    "wikipedia_airing_order": 8,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "8,0",
    "IMDB_raters": 1852,
    "rating_rank": 156,
    "viewers": "20,6",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 25,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 9,
    "order": 14,
    "episode_code": 2.9,
    "title": "The Deal",
    "description": "Jerry and Elaine believe that they have found a foolproof way to start having sex again yet still remain just friends, but they quickly start encountering problems.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOTAzMDI4ZGQtMTkyOC00Zjk1LWJkZTYtODVlODRjNTM0MzU5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 2 1991",
    "description_length": 164,
    "overall_order": 14,
    "data_order": 9,
    "dvd_order": 13,
    "amazon_order": 13,
    "wikipedia_airing_order": 9,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1819,
    "rating_rank": 105,
    "viewers": "22,9",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 2,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 10,
    "order": 15,
    "episode_code": 2.1,
    "title": "The Baby Shower",
    "description": "Kramer convinces Jerry to get illegal cable. Elaine holds a baby shower for a former girlfriend of George, on whom he wants revenge for a callous incident.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZGRmZjYyNmMtZThkOC00YzhmLWE0NjEtNWQ5Nzc0ZWU2ZDljXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 16 1991",
    "description_length": 155,
    "overall_order": 15,
    "data_order": 10,
    "dvd_order": 4,
    "amazon_order": 5,
    "wikipedia_airing_order": 10,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "7,6",
    "IMDB_raters": 1813,
    "rating_rank": 170,
    "viewers": "17,2",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 16,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 11,
    "order": 16,
    "episode_code": 2.11,
    "title": "The Chinese Restaurant",
    "description": 'Jerry, Elaine and George stop for a quick Chinese dinner before seeing "Plan 9 From Outer Space," but circumstances at the eatery make them miss the movie.',
    "img_src": "https://m.media-amazon.com/images/M/MV5BYzIxYmNmZmItMTY0NS00NjhkLWEwMmMtOTBlMGFkMTVmNGYwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 23 1991",
    "description_length": 155,
    "overall_order": 16,
    "data_order": 11,
    "dvd_order": 6,
    "amazon_order": 7,
    "wikipedia_airing_order": 11,
    "title_length": 22,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 2337,
    "rating_rank": 26,
    "viewers": "16,8",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 23,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 2,
    "episode": 12,
    "order": 17,
    "episode_code": 2.12,
    "title": "The Busboy",
    "description": "George tries to apologize to a busboy after one of his comments got him fired, but he only makes things worse. Elaine tries to get one of her male friends out of her house.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOTg4ZDhmZWMtYTQ2NC00NmYxLTlmZmQtYzk4M2M1NmViMjRiXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "June 26 1991",
    "description_length": 172,
    "overall_order": 17,
    "data_order": 12,
    "dvd_order": 3,
    "amazon_order": 3,
    "wikipedia_airing_order": 12,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "7,8",
    "IMDB_raters": 1787,
    "rating_rank": 163,
    "viewers": "12,5",
    "Date_1stSpace": 5,
    "Date_2ndSpace": 8,
    "MonthPart": "June",
    "DayPart": 26,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 1,
    "order": 18,
    "episode_code": 3.1,
    "title": "The Note",
    "description": "Physical therapy proves painful for Jerry when his small talk with the therapist leads to a misunderstanding; Jerry uses a dentist note to cover his therapy.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BN2NmZjYyZjItM2EyNC00Nzk3LWFhNzUtZjlhMzhjOTQ5NDM2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "September 18 1991",
    "description_length": 157,
    "overall_order": 18,
    "data_order": 1,
    "dvd_order": 1,
    "amazon_order": 1,
    "wikipedia_airing_order": 1,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1856,
    "rating_rank": 105,
    "viewers": "21,7",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 18,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 2,
    "order": 19,
    "episode_code": 3.2,
    "title": "The Truth",
    "description": "A bad breakup between George and his girlfriend leads to tax troubles for Jerry.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNTk5MGNkYjMtMjE1NS00ZmZhLWJkMDEtMTAyNTc3OGI5NjhjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "September 25 1991",
    "description_length": 80,
    "overall_order": 19,
    "data_order": 2,
    "dvd_order": 2,
    "amazon_order": 2,
    "wikipedia_airing_order": 2,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "7,8",
    "IMDB_raters": 1701,
    "rating_rank": 163,
    "viewers": "16,7",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 25,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 3,
    "order": 20,
    "episode_code": 3.3,
    "title": "The Pen",
    "description": 'Jerry and Elaine travel to Florida for a dinner in honor of his father. Jerry gets into an argument with a neighbor of his parents over an "astronaut pen.',
    "img_src": "https://m.media-amazon.com/images/M/MV5BNjU1NGJmNmMtNDZkOC00MGQxLWE5MjYtNDdjNzdkMDdhNTlkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "October 2 1991",
    "description_length": 155,
    "overall_order": 20,
    "data_order": 3,
    "dvd_order": 5,
    "amazon_order": 5,
    "wikipedia_airing_order": 3,
    "title_length": 7,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1886,
    "rating_rank": 105,
    "viewers": "15,1",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "October",
    "DayPart": 2,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 4,
    "order": 21,
    "episode_code": 3.4,
    "title": "The Dog",
    "description": "Jerry is forced to care for the disobedient dog of a man he met on a plane.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNWQ4YWFjZGMtYzcxZS00MDU3LTgyMGEtNGJiMGZlM2Y4YjhhXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "October 9 1991",
    "description_length": 75,
    "overall_order": 21,
    "data_order": 4,
    "dvd_order": 3,
    "amazon_order": 3,
    "wikipedia_airing_order": 4,
    "title_length": 7,
    "include": "Yes",
    "IMDB_rating": "7,3",
    "IMDB_raters": 2037,
    "rating_rank": 178,
    "viewers": "17,2",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "October",
    "DayPart": 9,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 5,
    "order": 22,
    "episode_code": 3.5,
    "title": "The Library",
    "description": "The library asks Jerry about a book he checked out in 1971 and never returned, so Jerry looks up an old girlfriend for his defense against a library cop.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BM2NkNGIyMDktOWNlNS00ZWEwLTlhZDctNTgxMGFhZjA5Y2ZmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "October 16 1991",
    "description_length": 153,
    "overall_order": 22,
    "data_order": 5,
    "dvd_order": 4,
    "amazon_order": 4,
    "wikipedia_airing_order": 5,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 2083,
    "rating_rank": 37,
    "viewers": "16,4",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 16,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 6,
    "order": 23,
    "episode_code": 3.6,
    "title": "The Parking Garage",
    "description": "The four get stuck in a parking garage for hours when they forget where they parked.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYmYxYjAxODgtYWQyYi00NmYyLWI2OTAtNTQ1NzUwNmE2MTA4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "October 30 1991",
    "description_length": 84,
    "overall_order": 23,
    "data_order": 6,
    "dvd_order": 6,
    "amazon_order": 6,
    "wikipedia_airing_order": 6,
    "title_length": 18,
    "include": "Yes",
    "IMDB_rating": "8,9",
    "IMDB_raters": 2418,
    "rating_rank": 22,
    "viewers": "17,0",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 30,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 7,
    "order": 24,
    "episode_code": 3.7,
    "title": "The Cafe",
    "description": "Jerry tries to help a new immigrant restaurant owner across the street from him. George, afraid of embarrassment, asks Elaine to take an IQ test for him.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYWIzNGQ4ZjMtY2RlNi00ZDNiLTg5YjgtMzBlYzg5Y2FiY2I0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "November 6 1991",
    "description_length": 153,
    "overall_order": 24,
    "data_order": 7,
    "dvd_order": 7,
    "amazon_order": 7,
    "wikipedia_airing_order": 7,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1724,
    "rating_rank": 67,
    "viewers": "16,4",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "November",
    "DayPart": 6,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 8,
    "order": 25,
    "episode_code": 3.8,
    "title": "The Tape",
    "description": "George orders hair growing cream from China. Jerry is mesmerized by a dirty message left on a tape recorder from his last performance. George becomes infatuated with Elaine.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNGEyYWZlYTktMDdlMi00OTRkLTlmYmMtNDhiMTYwYTc1ODQyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,215,1000,563_.jpg",
    "date_aired": "November 13 1991",
    "description_length": 173,
    "overall_order": 25,
    "data_order": 8,
    "dvd_order": 8,
    "amazon_order": 8,
    "wikipedia_airing_order": 8,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 1855,
    "rating_rank": 26,
    "viewers": "15,8",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 13,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 9,
    "order": 26,
    "episode_code": 3.9,
    "title": "The Nose Job",
    "description": "Jerry dates a vacuous actress and struggles with overcoming his sexual desire for her. George dates a woman with a large nose, who decides to get a nose job after a careless comment from Kramer.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMzMzZTU4N2YtODc5Yy00OGY2LWI2NGItN2NlMjVlYjNmYTA1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "November 20 1991",
    "description_length": 194,
    "overall_order": 26,
    "data_order": 9,
    "dvd_order": 9,
    "amazon_order": 9,
    "wikipedia_airing_order": 9,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1715,
    "rating_rank": 142,
    "viewers": "16,3",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 20,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 10,
    "order": 27,
    "episode_code": 3.1,
    "title": "The Stranded",
    "description": "Jerry and Elaine join George for a special party, where they send signals to each other to get out of bad party conversations; George had an office romance.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZWNhYzE5ZDAtYjQzMy00MTdiLWE1ZjItZjk5ODU0MGY5YzRmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "November 27 1991",
    "description_length": 156,
    "overall_order": 27,
    "data_order": 10,
    "dvd_order": "",
    "amazon_order": "",
    "wikipedia_airing_order": 10,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "7,6",
    "IMDB_raters": 1747,
    "rating_rank": 170,
    "viewers": "18,6",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 27,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 11,
    "order": 28,
    "episode_code": 3.11,
    "title": "The Alternate Side",
    "description": "Jerry's car is stolen. Elaine dates an older man. Kramer gets a small role in a Woody Allen movie filmed on his and Jerry's block. George must deal with the commotion of the movie filming as he gets a job parking cars on the block.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNjRkMzkzM2YtMDBlOS00YjE2LTgzY2EtZmYwZWZkZDQzYTVlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "December 4 1991",
    "description_length": 231,
    "overall_order": 28,
    "data_order": 11,
    "dvd_order": 10,
    "amazon_order": 10,
    "wikipedia_airing_order": 11,
    "title_length": 18,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1730,
    "rating_rank": 88,
    "viewers": "18,0",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "December",
    "DayPart": 4,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 12,
    "order": 29,
    "episode_code": 3.12,
    "title": "The Red Dot",
    "description": "George gets a job at Elaine's office and gets involved with the cleaning woman. Elaine's boyfriend is a recovering alcoholic who falls off the wagon because of Jerry's carelessness. George buys Elaine a marked-down cashmere sweater.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOWI4ZGNiZWItMjUxMC00ZWU4LTk4NWEtNDE0NzlmZWQ1MTc4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "December 11 1991",
    "description_length": 232,
    "overall_order": 29,
    "data_order": 12,
    "dvd_order": 11,
    "amazon_order": 11,
    "wikipedia_airing_order": 12,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1761,
    "rating_rank": 67,
    "viewers": "17,9",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "December",
    "DayPart": 11,
    "YearPart": 1991,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 13,
    "order": 30,
    "episode_code": 3.13,
    "title": "The Subway",
    "description": "Everyone has an uncommon experience while going their separate ways on the subway; Kramer overheard a hot tip on a horse on his way to pay a traffic violation.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMjE3YjllNjMtZGRkYy00ODZkLWE5OTUtMWQxYjY1ZGU2NzhkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 8 1992",
    "description_length": 159,
    "overall_order": 30,
    "data_order": 13,
    "dvd_order": 13,
    "amazon_order": 13,
    "wikipedia_airing_order": 13,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 2165,
    "rating_rank": 26,
    "viewers": "18,7",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "January",
    "DayPart": 8,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 14,
    "order": 31,
    "episode_code": 3.14,
    "title": "The Pez Dispenser",
    "description": "Jerry's Pez dispenser makes Elaine laugh during George's girlfriend's piano recital and puts their relationship in jeopardy; Kramer joins the Polar Bear Club.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BODFkZTAxZjgtMWJjYi00YmViLWFiM2UtZmM5OTlhYzVmYzYxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 15 1992",
    "description_length": 158,
    "overall_order": 31,
    "data_order": 14,
    "dvd_order": 14,
    "amazon_order": 14,
    "wikipedia_airing_order": 14,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1772,
    "rating_rank": 67,
    "viewers": "19,2",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 15,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 15,
    "order": 32,
    "episode_code": 3.15,
    "title": "The Suicide",
    "description": "After a suicide attempt by Jerry's neighbor lands him in a coma, Jerry begins a relationship with his girlfriend. George visits a psychic who predicts trouble on his upcoming trip. Elaine agonizes over having to fast before surgery.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMmI5ZmNiZTAtY2I3My00NDZlLTlmYjktYTU2ZTA5OWVlOGNkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 29 1992",
    "description_length": 232,
    "overall_order": 32,
    "data_order": 15,
    "dvd_order": 12,
    "amazon_order": 12,
    "wikipedia_airing_order": 15,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "7,7",
    "IMDB_raters": 1578,
    "rating_rank": 167,
    "viewers": "16,9",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 29,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 16,
    "order": 33,
    "episode_code": 3.16,
    "title": "The Fix-Up",
    "description": "Against their better judgment, Jerry and Elaine decide to play matchmaker for the jobless, dateless and possibly hopeless George, setting him up with a single friend of Elaine's.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNGMzMWU4NmItZGU4OC00ODBhLWJlMDQtODRjYzBmYThlNTAxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 5 1992",
    "description_length": 178,
    "overall_order": 33,
    "data_order": 16,
    "dvd_order": 17,
    "amazon_order": 16,
    "wikipedia_airing_order": 16,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1730,
    "rating_rank": 67,
    "viewers": "18,5",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 5,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 17,
    "order": 34,
    "episode_code": 3.17,
    "title": "The Boyfriend (Part 1)",
    "description": "Jerry meets Keith Hernandez and wants to make a good impression, but after being introduced to Elaine, Keith breaks his date with Jerry to make one with her.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNTQ3YzEwZGEtNzAxZS00NGNiLWE4NjAtMjUzNjY4NWNlNDg1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "February 12 1992",
    "description_length": 157,
    "overall_order": 34,
    "data_order": 17,
    "dvd_order": 15,
    "amazon_order": 15,
    "wikipedia_airing_order": 17,
    "title_length": 22,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1784,
    "rating_rank": 37,
    "viewers": "17,0",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 12,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 18,
    "order": 35,
    "episode_code": 3.18,
    "title": "The Boyfriend (Part 2)",
    "description": `Jerry becomes increasingly jealous of Elaine's relationship with Keith Hernandez. The unemployed George Constanza schemes to collect unemployment checks, while the illustrated JFK "second spitter theory" is further investigated.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BNTQ3YzEwZGEtNzAxZS00NGNiLWE4NjAtMjUzNjY4NWNlNDg1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "February 12 1992",
    "description_length": 228,
    "overall_order": 35,
    "data_order": 18,
    "dvd_order": 16,
    "amazon_order": 15,
    "wikipedia_airing_order": 18,
    "title_length": 22,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1784,
    "rating_rank": 37,
    "viewers": "17,0",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 12,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 19,
    "order": 36,
    "episode_code": 3.19,
    "title": "The Limo",
    "description": "Jerry and George take a limo from a passenger that Jerry knows never made it on the plane, but their false identities land them in hot water.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNGIyMmQ5YzctZWUyMy00ZmU1LWIzZWEtOWRjNTQ5YmRhOTAyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 26 1992",
    "description_length": 141,
    "overall_order": 36,
    "data_order": 19,
    "dvd_order": 18,
    "amazon_order": 17,
    "wikipedia_airing_order": 19,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 2402,
    "rating_rank": 11,
    "viewers": "19,5",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 26,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 20,
    "order": 37,
    "episode_code": 3.2,
    "title": "The Good Samaritan",
    "description": "Jerry trails a hit-and-run driver but is attracted to her and begins dating her; he later learns her victim was a longtime quarry and dates the latter as well. Kramer begins having seizures whenever he hears Mary Hart's voice.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYTdiMTQxNTUtZWNhZi00YzBmLTlmYzEtYjQ0NTIxOTgwOWJkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "March 4 1992",
    "description_length": 226,
    "overall_order": 37,
    "data_order": 20,
    "dvd_order": 19,
    "amazon_order": 18,
    "wikipedia_airing_order": 20,
    "title_length": 18,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1562,
    "rating_rank": 142,
    "viewers": "16,1",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 8,
    "MonthPart": "March",
    "DayPart": 4,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 21,
    "order": 38,
    "episode_code": 3.21,
    "title": "The Letter",
    "description": "Jerry learns that his new artist friend, from whom George has been forced to buy a painting, plagiarized a letter to keep him from breaking up with her. Elaine refuses to remove her Baltimore Orioles cap during a New York Yankees game.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYzRmMWIwMDItODQ5OS00NjA1LWEyY2MtY2M1NDllZTI1ODYyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "March 25 1992",
    "description_length": 235,
    "overall_order": 38,
    "data_order": 21,
    "dvd_order": 20,
    "amazon_order": 19,
    "wikipedia_airing_order": 21,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,0",
    "IMDB_raters": 1539,
    "rating_rank": 156,
    "viewers": "22,3",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "March",
    "DayPart": 25,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 22,
    "order": 39,
    "episode_code": 3.22,
    "title": "The Parking Space",
    "description": `Kramer tells Jerry about something his friend Mike said about Jerry being "a phony." After borrowing Jerry's car, Elaine comes up with a wild story, because the car is now making a strange clanking noise. George gets into a confrontation with Mike about a parking space in front of Jerry's apartment. Everyone on the street debates parking etiquette.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BZTg3MTM1Y2QtZmExZi00MDQ0LWIzZGYtMWFlOGQ0MTk0OTYwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "April 22 1992",
    "description_length": 350,
    "overall_order": 39,
    "data_order": 22,
    "dvd_order": 21,
    "amazon_order": 20,
    "wikipedia_airing_order": 22,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1645,
    "rating_rank": 88,
    "viewers": "17,8",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 22,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 3,
    "episode": 23,
    "order": 40,
    "episode_code": 3.23,
    "title": "The Keys",
    "description": "Becoming annoyed at Kramer's invasions of privacy, Jerry takes away his spare key. Kramer, shaken, decides to leave for California to pursue an acting career. As George, Elaine, and Jerry exchange spare key privileges, Jerry and George learn that Elaine is secretly writing a Murphy Brown script; Kramer, later, is hired to play Brown's secretary.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMmIwZGJlMTQtNTc3Yy00ZTYwLTk5ZTMtZjkxODViMTE1MWUxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 6 1992",
    "description_length": 347,
    "overall_order": 40,
    "data_order": 23,
    "dvd_order": 22,
    "amazon_order": 21,
    "wikipedia_airing_order": 23,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1616,
    "rating_rank": 67,
    "viewers": "16,4",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 6,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 1,
    "order": 41,
    "episode_code": 4.1,
    "title": "The Trip (Part 1)",
    "description": "When Jerry is asked to appear on The Tonight Show in Los Angeles, George accompanies him to look for Kramer.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYTQwMzQyMzEtZTAzMS00YjRmLTkwOTQtZTQzMjZiNTQxMzZiXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "August 12 1992",
    "description_length": 108,
    "overall_order": 41,
    "data_order": 1,
    "dvd_order": 1,
    "amazon_order": 1,
    "wikipedia_airing_order": 1,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1623,
    "rating_rank": 105,
    "viewers": "16,3",
    "Date_1stSpace": 7,
    "Date_2ndSpace": 10,
    "MonthPart": "August",
    "DayPart": 12,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 2,
    "order": 42,
    "episode_code": 4.2,
    "title": "The Trip (Part 2)",
    "description": "Kramer is arrested when he is mistaken for a serial killer. After he is exonerated, Jerry, George, and he return to New York.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYmM4MzQ3N2MtZjAyMi00MzRhLWJhNDYtNzAzOTBjNTQ0OTMwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "August 19 1992",
    "description_length": 125,
    "overall_order": 42,
    "data_order": 2,
    "dvd_order": 2,
    "amazon_order": 2,
    "wikipedia_airing_order": 2,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1633,
    "rating_rank": 88,
    "viewers": "15,1",
    "Date_1stSpace": 7,
    "Date_2ndSpace": 10,
    "MonthPart": "August",
    "DayPart": 19,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 3,
    "order": 43,
    "episode_code": 4.3,
    "title": "The Pitch",
    "description": 'NBC executives ask Jerry to come up with an idea for a TV series. George decides he can be a sitcom writer and comes up with "nothing." Kramer trades a radar detector for a helmet, and later Newman receives a speeding ticket.',
    "img_src": "https://m.media-amazon.com/images/M/MV5BMmI3Njk1MDktYjcwMC00ODAyLThjNzUtNDkxZTc3ZDNhNTYwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "September 16 1992",
    "description_length": 225,
    "overall_order": 43,
    "data_order": 3,
    "dvd_order": 3,
    "amazon_order": 3,
    "wikipedia_airing_order": 3,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1660,
    "rating_rank": 37,
    "viewers": "17,6",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 16,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 4,
    "order": 44,
    "episode_code": 4.4,
    "title": "The Ticket",
    "description": "Newman uses Kramer as his witness when the former refuses to pay for a speeding ticket.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYTA1MTc1YjktZjIyYS00OGEyLTgyMzAtNGFmOTgwZGU0ZjAzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "September 16 1992",
    "description_length": 87,
    "overall_order": 44,
    "data_order": 4,
    "dvd_order": 4,
    "amazon_order": 3,
    "wikipedia_airing_order": 4,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1501,
    "rating_rank": 67,
    "viewers": "17,6",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 16,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 5,
    "order": 45,
    "episode_code": 4.5,
    "title": "The Wallet",
    "description": "Jerry is asked to explain to his parents why he does not wear the watch they gave him. Morty Seinfeld thinks his wallet has been stolen from him at his doctor's appointment.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNmJmNTQzOGYtZjVhNi00MDE4LWIzNTQtNGUxZjJlMjM1NGM3XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "September 23 1992",
    "description_length": 173,
    "overall_order": 45,
    "data_order": 5,
    "dvd_order": 5,
    "amazon_order": 4,
    "wikipedia_airing_order": 5,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1491,
    "rating_rank": 142,
    "viewers": "17,6",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 23,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 6,
    "order": 46,
    "episode_code": 4.6,
    "title": "The Watch",
    "description": "Jerry tries to buy his watch back from Uncle Leo, who found it in the garbage, having been thrown there by Jerry. George tries to resurrect the fledgling NBC deal, while Elaine plans a break up from her psychotherapist with Kramer's help.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMDM4ZTBkNmItOTk2Ni00Nzc0LTlmMTYtM2QzZmNiMWMxNDU1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "September 30 1992",
    "description_length": 238,
    "overall_order": 46,
    "data_order": 6,
    "dvd_order": 6,
    "amazon_order": 5,
    "wikipedia_airing_order": 6,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1474,
    "rating_rank": 125,
    "viewers": "15,2",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 30,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 7,
    "order": 47,
    "episode_code": 4.7,
    "title": "The Bubble Boy",
    "description": "On their way to the family cabin, George and Susan visit a boy who lives in a bubble; Kramer and Naomi start a fire that ends up burning down the cabin.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYzQ1MDk3OTYtY2Q4Yi00OWNlLWI3ZTgtN2E5YzBmZjI5NGNhXkEyXkFqcGc@._V1_QL75_UX1000_CR0,117,1000,563_.jpg",
    "date_aired": "October 7 1992",
    "description_length": 152,
    "overall_order": 47,
    "data_order": 7,
    "dvd_order": 7,
    "amazon_order": 6,
    "wikipedia_airing_order": 7,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 2329,
    "rating_rank": 26,
    "viewers": "17,1",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "October",
    "DayPart": 7,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 8,
    "order": 48,
    "episode_code": 4.8,
    "title": "The Cheever Letters",
    "description": "Jerry offends Elaine's assistant. Kramer makes a contact for Cuban cigars. A box of letters from John Cheever is all that remains after Susan's father's cabin burns down.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOTMxZjEyMmUtYzlhMi00ZGQxLWJkOWItY2QwMzUxZTYxNzEzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "October 28 1992",
    "description_length": 170,
    "overall_order": 48,
    "data_order": 8,
    "dvd_order": 8,
    "amazon_order": 7,
    "wikipedia_airing_order": 8,
    "title_length": 19,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1649,
    "rating_rank": 57,
    "viewers": "15,1",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 28,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 9,
    "order": 49,
    "episode_code": 4.9,
    "title": "The Opera",
    "description": "Elaine unknowingly is dating Crazy Joe Davola, who has just left a threatening message on Jerry's recorder.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMGQ4ZTdjNmQtMGEyMi00NDQxLWIxNzMtNTcyNzMzNDA1MGYwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,219,1000,563_.jpg",
    "date_aired": "November 4 1992",
    "description_length": 107,
    "overall_order": 49,
    "data_order": 9,
    "dvd_order": 9,
    "amazon_order": 8,
    "wikipedia_airing_order": 9,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1617,
    "rating_rank": 105,
    "viewers": "16,7",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "November",
    "DayPart": 4,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 10,
    "order": 50,
    "episode_code": 4.1,
    "title": "The Virgin",
    "description": "Jerry finds out his girlfriend is still a virgin; George wants to end his relationship with Susan to exploit his writing profession as a pick-up line.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYzA5Njk3MDYtNzMxNi00MTYwLWFiNDUtYTUwYTQ3YjNmMjQyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "November 11 1992",
    "description_length": 150,
    "overall_order": 50,
    "data_order": 10,
    "dvd_order": 10,
    "amazon_order": 9,
    "wikipedia_airing_order": 10,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1536,
    "rating_rank": 105,
    "viewers": "16,2",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 11,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 11,
    "order": 51,
    "episode_code": 4.11,
    "title": "The Contest",
    "description": "George's mother throws her back out when she falls down after catching George performing a personal act; the gang partakes in a contest of self-denial.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYzNkMzA2ODAtODljYy00YjQ3LWExZTAtOGMwZTdmN2NhMjcxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "November 18 1992",
    "description_length": 151,
    "overall_order": 51,
    "data_order": 11,
    "dvd_order": 11,
    "amazon_order": 10,
    "wikipedia_airing_order": 11,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "9,6",
    "IMDB_raters": 4384,
    "rating_rank": 1,
    "viewers": "18,5",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 18,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 12,
    "order": 52,
    "episode_code": 4.12,
    "title": "The Airport",
    "description": "Jerry and Elaine fly back to New York. Jerry travels on first class while Elaine on coach. George and Kramer run into trouble while trying to arrive on time to pick up Jerry and Elaine at the airport.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZjllNjVlZGMtYWQyNS00ZWViLWEyMDItNDI5ZjEyNzBhNWUyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "November 25 1992",
    "description_length": 200,
    "overall_order": 52,
    "data_order": 12,
    "dvd_order": 12,
    "amazon_order": 11,
    "wikipedia_airing_order": 12,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 2219,
    "rating_rank": 11,
    "viewers": "14,5",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 25,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 13,
    "order": 53,
    "episode_code": 4.13,
    "title": "The Pick",
    "description": 'George lobbies to get Susan back, only to regret the success of his efforts. Tia (the model Jerry met in "The Airport") dumps Jerry after she sees what appears to be Jerry picking his nose while driving. Elaine decides to send out Christmas cards with her picture on them, and accidentally chooses a revealing shot.',
    "img_src": "https://m.media-amazon.com/images/M/MV5BYWYzMWNhODQtMjRjNC00MTY1LTkyMDEtODhiZmExODZjY2VjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "December 16 1992",
    "description_length": 315,
    "overall_order": 53,
    "data_order": 13,
    "dvd_order": 13,
    "amazon_order": 12,
    "wikipedia_airing_order": 13,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1674,
    "rating_rank": 57,
    "viewers": "16,2",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "December",
    "DayPart": 16,
    "YearPart": 1992,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 14,
    "order": 54,
    "episode_code": 4.14,
    "title": "The Movie",
    "description": "Jerry does a set at a comedy club, then goes to meet George, Elaine, and Kramer afterward to see a screening of Checkmate. However, a simple miscommunication causes the four to keep missing each other at two different theaters.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNjdkZmI3OTgtZjM3YS00MWNkLThjODQtOGRhYWQ2ODQ0OThmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "January 6 1993",
    "description_length": 227,
    "overall_order": 54,
    "data_order": 14,
    "dvd_order": 15,
    "amazon_order": 13,
    "wikipedia_airing_order": 14,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1564,
    "rating_rank": 125,
    "viewers": "17,6",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "January",
    "DayPart": 6,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 15,
    "order": 55,
    "episode_code": 4.15,
    "title": "The Visa",
    "description": "George meets an attractive lawyer, Cheryl, who is impressed by his sense of humor. George attempts to keep Elaine and Jerry from meeting Cheryl, believing that Jerry's sense of humor will eclipse him. Babu Bhatt has trouble with the INS because Babu's visa renewal was accidentally delivered to Jerry.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNDkwYzYxYWEtMjk3NC00NDU4LWE0ZDctY2EyMGY5YTE1MGQ2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "January 27 1993",
    "description_length": 395,
    "overall_order": 55,
    "data_order": 15,
    "dvd_order": 14,
    "amazon_order": 14,
    "wikipedia_airing_order": 15,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1475,
    "rating_rank": 125,
    "viewers": "16,5",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 27,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 16,
    "order": 56,
    "episode_code": 4.16,
    "title": "The Shoes",
    "description": "Elaine can't seem to figure out why her shoes are a subject of conversation. Jerry and George pitch their pilot to NBC, but the deal is nearly jinxed when George takes a peek at the cleavage of the NBC president's daughter.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZWExN2M2ZjEtZjBjMi00MDZiLThkNDMtZWU5NjRmN2I2ZjU2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 4 1993",
    "description_length": 223,
    "overall_order": 56,
    "data_order": 16,
    "dvd_order": 17,
    "amazon_order": 15,
    "wikipedia_airing_order": 16,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1536,
    "rating_rank": 105,
    "viewers": "26,9",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 4,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 17,
    "order": 57,
    "episode_code": 4.17,
    "title": "The Outing",
    "description": "A prank by Elaine leads a newspaper journalist to think that Jerry and George are gay.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNTRkODE2MTAtZGViOS00ZjBhLTk0OWItZjdhMDBiYmMyNGVhXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 11 1993",
    "description_length": 86,
    "overall_order": 57,
    "data_order": 17,
    "dvd_order": 16,
    "amazon_order": 16,
    "wikipedia_airing_order": 17,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "9,4",
    "IMDB_raters": 2939,
    "rating_rank": 4,
    "viewers": "28,0",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 11,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 18,
    "order": 58,
    "episode_code": 4.18,
    "title": "The Old Man",
    "description": "After hearing that Elaine has volunteered to help out with the elderly, George and Jerry decide that it sounds like fun and volunteer as well. None of them cope very well. George and Newman meanwhile decide to try and make money by selling old record albums.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BN2M5ZjBhYzktMjk0Yy00NGUwLWI5MzMtMjNhODQ3NDVhMjU3XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "February 18 1993",
    "description_length": 486,
    "overall_order": 58,
    "data_order": 18,
    "dvd_order": 18,
    "amazon_order": 17,
    "wikipedia_airing_order": 18,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1596,
    "rating_rank": 125,
    "viewers": "22,7",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 18,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 19,
    "order": 59,
    "episode_code": 4.19,
    "title": "The Implant",
    "description": `Jerry insists that his new girlfriend has implants. But she keeps insisting that they're "real and spectacular". The mystery goes even deeper when Elaine meets her in the sauna and trips and lands on her breasts.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BZWM0NjFlM2EtNDZmOS00ZjcwLWEwNTgtYzg4ZjYxOGM4ZTliXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 25 1993",
    "description_length": 212,
    "overall_order": 59,
    "data_order": 19,
    "dvd_order": 19,
    "amazon_order": 18,
    "wikipedia_airing_order": 19,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1674,
    "rating_rank": 37,
    "viewers": "27,4",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 25,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 20,
    "order": 60,
    "episode_code": 4.2,
    "title": "The Junior Mint",
    "description": "Elaine decides to visit her former boyfriend, who is in the hospital for a serious operation; Kramer and Jerry have an accident with a Junior Mint; Jerry had a date with a woman whose name rhymes with a female body part.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZjNjNjIwMGMtZGFjYS00ZTY5LThkZDYtYmMxNDMwNTZjYTAzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "March 18 1993",
    "description_length": 220,
    "overall_order": 60,
    "data_order": 20,
    "dvd_order": 21,
    "amazon_order": 19,
    "wikipedia_airing_order": 20,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 2081,
    "rating_rank": 26,
    "viewers": "26,4",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "March",
    "DayPart": 18,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 21,
    "order": 61,
    "episode_code": 4.21,
    "title": "The Smelly Car",
    "description": "Jerry is appalled at the smell in his car. He thinks it's the restaurant valet parking that's responsible but no matter what he tries, he can't get rid of it. Worst of all, the smell has attached itself to him and to Elaine who rode in the car with him. George runs into into his old girlfriend Susan in the video store. She holding hands with her new girlfriend.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYzU5N2NiYmMtMjg2MS00Nzg5LWIxOWQtNWM1NDJiMTY0Y2I0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 15 1993",
    "description_length": 632,
    "overall_order": 61,
    "data_order": 21,
    "dvd_order": 22,
    "amazon_order": 20,
    "wikipedia_airing_order": 21,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1621,
    "rating_rank": 67,
    "viewers": "25,0",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 15,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 22,
    "order": 62,
    "episode_code": 4.22,
    "title": "The Handicap Spot",
    "description": "At Kramer's insistence, George parks his Dad's car in a handicap spot. After a woman is injured because of it, George becomes his Dad's butler while Kramer tries to help the woman.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNzhlNTQzM2YtMmFjMS00NTYxLWJkOTUtYWYwMGZiOGRlNjIyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 13 1993",
    "description_length": 180,
    "overall_order": 62,
    "data_order": 22,
    "dvd_order": 20,
    "amazon_order": 21,
    "wikipedia_airing_order": 22,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1501,
    "rating_rank": 88,
    "viewers": "27,6",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 13,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 23,
    "order": 63,
    "episode_code": 4.23,
    "title": "The Pilot (Part 1)",
    "description": `Jerry," the television pilot, gets cast and finally airs. Elaine tries to discourage Dalrymple's romantic pursuit.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BNWM1MWE4ODQtMDM1Yy00OGQwLWEzZTYtMDAxYzlhZTAxMTE0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 20 1993",
    "description_length": 115,
    "overall_order": 63,
    "data_order": 23,
    "dvd_order": 23,
    "amazon_order": 22,
    "wikipedia_airing_order": 23,
    "title_length": 18,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1712,
    "rating_rank": 37,
    "viewers": "32,8",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 20,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 4,
    "episode": 24,
    "order": 64,
    "episode_code": 4.24,
    "title": "The Pilot (Part 2)",
    "description": `Jerry," the television pilot, gets cast and finally airs. Elaine tries to discourage Dalrymple's romantic pursuit.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BNWM1MWE4ODQtMDM1Yy00OGQwLWEzZTYtMDAxYzlhZTAxMTE0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 20 1993",
    "description_length": 115,
    "overall_order": 64,
    "data_order": 24,
    "dvd_order": 24,
    "amazon_order": 22,
    "wikipedia_airing_order": 24,
    "title_length": 18,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1712,
    "rating_rank": 37,
    "viewers": "32,8",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 20,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 1,
    "order": 65,
    "episode_code": 5.1,
    "title": "The Mango",
    "description": "Elaine makes a startling confession.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZDY2MzU2Y2ItNDVhZS00Y2Y3LWIxOWMtNmRmOWIwMWQ2N2VhXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "September 16 1993",
    "description_length": 36,
    "overall_order": 65,
    "data_order": 1,
    "dvd_order": 1,
    "amazon_order": 1,
    "wikipedia_airing_order": 1,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1692,
    "rating_rank": 37,
    "viewers": "28,2",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 16,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 2,
    "order": 66,
    "episode_code": 5.2,
    "title": "The Puffy Shirt",
    "description": "Kramer and his soft-spoken friend Leslie start a new line of clothing and Jerry accidentally agrees to wear it on the Today show.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNzYyMTNmNTctZWNlYS00Zjg5LWIyYTEtZTNkMGZlMGUzMzc0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,92,1000,563_.jpg",
    "date_aired": "September 23 1993",
    "description_length": 129,
    "overall_order": 66,
    "data_order": 2,
    "dvd_order": 3,
    "amazon_order": 2,
    "wikipedia_airing_order": 2,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 2262,
    "rating_rank": 11,
    "viewers": "29,5",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 23,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 3,
    "order": 67,
    "episode_code": 5.3,
    "title": "The Glasses",
    "description": "George loses his glasses at the health club.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BN2I2Zjc0ODYtNzZmOC00OWUyLWE3ZTEtYTIxZTUwYzI2ZWQ2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "September 30 1993",
    "description_length": 44,
    "overall_order": 67,
    "data_order": 3,
    "dvd_order": 2,
    "amazon_order": 3,
    "wikipedia_airing_order": 3,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1569,
    "rating_rank": 67,
    "viewers": "28,7",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 30,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 4,
    "order": 68,
    "episode_code": 5.4,
    "title": "The Sniffing Accountant",
    "description": "The gang gets suspicious of their accountant.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYjA3YTdhOTEtODE4NS00NGViLWFiMjEtZGU0YmUwNGI0N2M1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "October 7 1993",
    "description_length": 45,
    "overall_order": 68,
    "data_order": 4,
    "dvd_order": 4,
    "amazon_order": 4,
    "wikipedia_airing_order": 4,
    "title_length": 23,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1525,
    "rating_rank": 105,
    "viewers": "28,4",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "October",
    "DayPart": 7,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 5,
    "order": 69,
    "episode_code": 5.5,
    "title": "The Bris",
    "description": "Elaine an Jerry are nervous about the religious duties they must do when they agree to become godparents to a couple's newborn; George nabs great parking spot.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYzM5M2E1ZDUtZDY0NC00MDYwLTkxYWItZWE2ZTQ5MjljMzc0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "October 14 1993",
    "description_length": 159,
    "overall_order": 69,
    "data_order": 5,
    "dvd_order": 5,
    "amazon_order": 5,
    "wikipedia_airing_order": 5,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1628,
    "rating_rank": 125,
    "viewers": "28,7",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 14,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 6,
    "order": 70,
    "episode_code": 5.6,
    "title": "The Lip Reader",
    "description": "George decides to use Jerry's girlfriend to spy on his friends by having her read their lips. Kramer claims he can also read lips and tries to prove it.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOWJiZDgxNmMtOWI4My00YzZjLTg3YzgtODZjN2ZjZjc2NDhmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "October 28 1993",
    "description_length": 152,
    "overall_order": 70,
    "data_order": 6,
    "dvd_order": 6,
    "amazon_order": 6,
    "wikipedia_airing_order": 6,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1543,
    "rating_rank": 57,
    "viewers": "31,0",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 28,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 7,
    "order": 71,
    "episode_code": 5.7,
    "title": "The Non-Fat Yoghurt",
    "description": "Kramer invests in a new non-fat yogurt store.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMDQzZGIzOTItMzg2MC00ZWIzLTk0YWMtZDZjZTA1MTcwM2YwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "November 4 1993",
    "description_length": 45,
    "overall_order": 71,
    "data_order": 7,
    "dvd_order": 7,
    "amazon_order": 7,
    "wikipedia_airing_order": 7,
    "title_length": 19,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1790,
    "rating_rank": 57,
    "viewers": "31,1",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "November",
    "DayPart": 4,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 8,
    "order": 72,
    "episode_code": 5.8,
    "title": "The Barber",
    "description": `With Jerry going to be "sold" at a bachelor auction organized by Elaine, he gives in to her demand that he get a haircut. George thinks he has a job but the interviewer was cut off mid-sentence and he's not sure what to do. He decides to just show up at his new office.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BMTUwNDhkNWYtNDY4Ny00NzZjLTg3MTMtMWU5NmM3MDEwYWQwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "November 11 1993",
    "description_length": 568,
    "overall_order": 72,
    "data_order": 8,
    "dvd_order": 8,
    "amazon_order": 8,
    "wikipedia_airing_order": 8,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1549,
    "rating_rank": 88,
    "viewers": "29,7",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 11,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 9,
    "order": 73,
    "episode_code": 5.9,
    "title": "The Masseuse",
    "description": "Jerry gets mad when he dates a masseuse. Kramer and George get massages while Jerry doesn't. Meanwhile, Elaine's new boyfriend is Joel Rifkin, an innocent man who shares the same name as one of New York's most notorious serial killers.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOGQwMTBkMWQtY2Q1Ni00YmNiLWE2ODQtMDVjMjI5ZjY3Mzg3XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "November 18 1993",
    "description_length": 235,
    "overall_order": 73,
    "data_order": 9,
    "dvd_order": 9,
    "amazon_order": 9,
    "wikipedia_airing_order": 9,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "7,9",
    "IMDB_raters": 1434,
    "rating_rank": 160,
    "viewers": "27,7",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 18,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 10,
    "order": 74,
    "episode_code": 5.1,
    "title": "The Cigar Store Indian",
    "description": "Jerry decides to buy Elaine a gift - a full-sized cigar store Indian. George meanwhile strikes up a friendship with a woman and invites her to the house. Problems ensue when his parents get back home. Kramer pursues his idea of a coffee table book about coffee tables.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZjZhZWI2ZGMtOGJlNS00ZGEyLWExNjEtNjA1ZGMyY2MxOGE2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "December 9 1993",
    "description_length": 586,
    "overall_order": 74,
    "data_order": 10,
    "dvd_order": 10,
    "amazon_order": 10,
    "wikipedia_airing_order": 10,
    "title_length": 22,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1631,
    "rating_rank": 67,
    "viewers": "29,6",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "December",
    "DayPart": 9,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 11,
    "order": 75,
    "episode_code": 5.11,
    "title": "The Conversion",
    "description": "George changes his religion to Latvian Orthodox to keep his girlfriend happy; Jerry becomes curious as to why his girlfriend needs fungus cream.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMDM2NjU0YmEtNDJkYy00M2I4LWFjMWItMGE0ZWI0OTBkNDNhXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "December 16 1993",
    "description_length": 144,
    "overall_order": 75,
    "data_order": 11,
    "dvd_order": 11,
    "amazon_order": 11,
    "wikipedia_airing_order": 11,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1449,
    "rating_rank": 125,
    "viewers": "28,3",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "December",
    "DayPart": 16,
    "YearPart": 1993,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 12,
    "order": 76,
    "episode_code": 5.12,
    "title": "The Stall",
    "description": "Elaine goes to the washroom at the movie theatre but realizes too late there is no toilet paper. She asks the woman in the next stall for some paper but the woman refuses. It turns out the woman is Jerry's new girlfriend Jane. Kramer has taken a liking to phone sex, but the voice at the other end of the line is oddly familiar. George becomes friends with Elaine's new boyfriend Tony.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMjlmYTg0MDktMTkwYy00MGMzLTg2NWMtMTNjZDRmNTQyODg5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "January 6 1994",
    "description_length": 678,
    "overall_order": 76,
    "data_order": 12,
    "dvd_order": 12,
    "amazon_order": 12,
    "wikipedia_airing_order": 12,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1663,
    "rating_rank": 37,
    "viewers": "35,0",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "January",
    "DayPart": 6,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 13,
    "order": 77,
    "episode_code": 5.13,
    "title": "The Dinner Party",
    "description": "Everyone is invited to a party and Elaine insists, much to George's displeasure, that they bring something. She and Jerry decide to get something at the bakery. When they finally get served they realize, too late, that there's a hair in cake. George and Kramer meanwhile head to the liquor store to get a bottle of wine.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNGEwYzM3NTAtMjQyOC00MTE2LTgwZGUtZmMwZjk2MWEzYjk0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "February 3 1994",
    "description_length": 567,
    "overall_order": 77,
    "data_order": 13,
    "dvd_order": 14,
    "amazon_order": 13,
    "wikipedia_airing_order": 13,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1467,
    "rating_rank": 105,
    "viewers": "33,0",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 3,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 14,
    "order": 78,
    "episode_code": 5.14,
    "title": "The Marine Biologist",
    "description": "George starts dating a woman who (told by Jerry) thinks George is a marine biologist. Elaine's electronic organizer injures a person after being launched from a limo by a Russian novelist. Kramer decides to golf on the beach.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNGVlODc4NjEtMWFkZC00NDRlLWEzNmQtODM0MzQ3NmIwMmViXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 10 1994",
    "description_length": 225,
    "overall_order": 78,
    "data_order": 14,
    "dvd_order": 13,
    "amazon_order": 14,
    "wikipedia_airing_order": 14,
    "title_length": 20,
    "include": "Yes",
    "IMDB_rating": "9,3",
    "IMDB_raters": 2743,
    "rating_rank": 5,
    "viewers": "35,0",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 10,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 15,
    "order": 79,
    "episode_code": 5.15,
    "title": "The Pie",
    "description": "While shopping for a new suit for a job interview, George and the others stumble upon a mannequin which scarily resembles Elaine. Meanwhile Jerry tries to figure out why his girlfriend won't try his apple pie at Monks.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYzk4NjMyYWEtOTJiYS00NjkwLWEyMjMtNzFjNDA2YzY1MTMzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 17 1994",
    "description_length": 218,
    "overall_order": 79,
    "data_order": 15,
    "dvd_order": 15,
    "amazon_order": 15,
    "wikipedia_airing_order": 15,
    "title_length": 7,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1537,
    "rating_rank": 57,
    "viewers": "16,5",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 17,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 16,
    "order": 80,
    "episode_code": 5.16,
    "title": "The Stand-In",
    "description": 'Kramer gets a job with Mickey as a TV stand-in. Jerry sets Elaine up with a guy who he says would be perfect for her. At the end of their first date he takes "it" out.',
    "img_src": "https://m.media-amazon.com/images/M/MV5BZDYyMzkxOGEtZWY1MC00YmMyLWI2NjktNDlkNWI2YTY1ZjI4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "February 24 1994",
    "description_length": 167,
    "overall_order": 80,
    "data_order": 16,
    "dvd_order": 16,
    "amazon_order": 16,
    "wikipedia_airing_order": 16,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "7,8",
    "IMDB_raters": 1427,
    "rating_rank": 163,
    "viewers": "25,4",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 24,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 17,
    "order": 81,
    "episode_code": 5.17,
    "title": "The Wife",
    "description": "While Jerry keeps up the pretense of a pretend marriage with new girlfriend, Meryl, so she can share his dry cleaning discount, Elaine tries to decipher whether a guy at the gym likes her and simultaneously tries to keep him from reporting George to the manager for peeing in the shower; and Kramer prepares to meet his girlfriend, Anna's parents.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZGU3NTllMzgtMzY0OC00MmUxLThmYzYtMWE4MjVmNjRjNzUxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "March 17 1994",
    "description_length": 347,
    "overall_order": 81,
    "data_order": 17,
    "dvd_order": 17,
    "amazon_order": 17,
    "wikipedia_airing_order": 17,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1421,
    "rating_rank": 142,
    "viewers": "30,7",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "March",
    "DayPart": 17,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 18,
    "order": 82,
    "episode_code": 5.18,
    "title": "The Raincoats (Part 1)",
    "description": `Jerry and his latest girlfriend finally get alone time when they go on a date to see "Schindler's List", where Newman oversees them making out.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BYTlhOWY4ZGUtZTM5Zi00NzY2LTk1NGEtZDgyNGQ0YTEzZTIzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 28 1994",
    "description_length": 143,
    "overall_order": 82,
    "data_order": 18,
    "dvd_order": 19,
    "amazon_order": 18,
    "wikipedia_airing_order": 18,
    "title_length": 22,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1476,
    "rating_rank": 67,
    "viewers": "29,6",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 28,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 19,
    "order": 83,
    "episode_code": 5.19,
    "title": "The Raincoats (Part 2)",
    "description": `Jerry and his latest girlfriend finally get alone time when they go on a date to see "Schindler's List", where Newman oversees them making out.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BYTlhOWY4ZGUtZTM5Zi00NzY2LTk1NGEtZDgyNGQ0YTEzZTIzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 28 1994",
    "description_length": 143,
    "overall_order": 83,
    "data_order": 19,
    "dvd_order": 20,
    "amazon_order": 18,
    "wikipedia_airing_order": 19,
    "title_length": 22,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1476,
    "rating_rank": 67,
    "viewers": "29,6",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 28,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 20,
    "order": 84,
    "episode_code": 5.2,
    "title": "The Fire",
    "description": "Kramer pitches his idea for a coffee table book about coffee tables and Elaine's co-worker Toby just loves it. Kramer takes Toby to see Jerry's act but she heckle's him from the audience. An outraged Jerry later visits her at the office and gets his revenge. George's new girlfriend has a son and he agrees to help out at his birthday party.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZWUwYTQ3YTktZjgyMS00YzFlLWFlNTUtYmExMTcxZmFjNTBmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,82,1000,563_.jpg",
    "date_aired": "May 5 1994",
    "description_length": 634,
    "overall_order": 84,
    "data_order": 20,
    "dvd_order": 18,
    "amazon_order": 19,
    "wikipedia_airing_order": 20,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 1661,
    "rating_rank": 26,
    "viewers": "27,6",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 5,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 21,
    "order": 85,
    "episode_code": 5.21,
    "title": "The Hamptons",
    "description": "The gang goes to the Hamptons for the weekend to visit Elaine's friends' new baby.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMzMzZTI1ZDktOThlMi00ZDM2LTkzN2MtNjRhMjc1NDE3ZGMzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "May 12 1994",
    "description_length": 82,
    "overall_order": 85,
    "data_order": 21,
    "dvd_order": 21,
    "amazon_order": 20,
    "wikipedia_airing_order": 21,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "9,1",
    "IMDB_raters": 2303,
    "rating_rank": 7,
    "viewers": "24,5",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 12,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 5,
    "episode": 22,
    "order": 86,
    "episode_code": 5.22,
    "title": "The Opposite",
    "description": "George decides to turn his life around by doing the exact opposite of what he would usually do. Elaine is having a lot of bad luck. Jerry keeps breaking even. Kramer gets the coffee table book published.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMGQzMTM0OTUtYzM4Zi00Mjc3LWE5MzAtNDU1Y2RmMWFkNDMyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,88,1000,563_.jpg",
    "date_aired": "May 19 1994",
    "description_length": 203,
    "overall_order": 86,
    "data_order": 22,
    "dvd_order": 22,
    "amazon_order": 21,
    "wikipedia_airing_order": 22,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "9,6",
    "IMDB_raters": 3154,
    "rating_rank": 1,
    "viewers": "30,1",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 19,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 1,
    "order": 87,
    "episode_code": 6.1,
    "title": "The Chaperone",
    "description": "Jerry dates a Miss America contestant. Kramer tags along.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYTgzZjA4YTMtMjYwYy00MTk2LWI5MDAtNjk2MzZmNjgxODU2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "September 22 1994",
    "description_length": 57,
    "overall_order": 87,
    "data_order": 1,
    "dvd_order": 1,
    "amazon_order": 1,
    "wikipedia_airing_order": 1,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1431,
    "rating_rank": 142,
    "viewers": "32,8",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 22,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 2,
    "order": 88,
    "episode_code": 6.2,
    "title": "The Big Salad",
    "description": "George has issues when his girlfriend takes credit for buying Elaine a big salad. Jerry is disturbed to discover that his girlfriend was dumped by Newman. While Kramer feels his argument with a former baseball player may have caused him to kill a dry cleaner.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BY2E2ZmU2ZTctNzBlOC00ZTkxLTlhMzktZjA4OTA2OTg0NThkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "September 29 1994",
    "description_length": 259,
    "overall_order": 88,
    "data_order": 2,
    "dvd_order": 2,
    "amazon_order": 2,
    "wikipedia_airing_order": 2,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1477,
    "rating_rank": 105,
    "viewers": "32,4",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 29,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 3,
    "order": 89,
    "episode_code": 6.3,
    "title": "The Pledge Drive",
    "description": "Kramer finds Jerry's old birthday checks from his grandmother and insists he deposits them, which puts Nana in unexpected debt. Elaine accidentally tells the high talker a secret. Mr Pitt eats a Snickers bar with utensils.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNzk2ZmJlZDQtYmMyMy00YjVmLWE2YzQtMjMwMThkOTZmMmYyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "October 6 1994",
    "description_length": 222,
    "overall_order": 89,
    "data_order": 3,
    "dvd_order": 3,
    "amazon_order": 3,
    "wikipedia_airing_order": 3,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1426,
    "rating_rank": 105,
    "viewers": "29,8",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "October",
    "DayPart": 6,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 4,
    "order": 90,
    "episode_code": 6.4,
    "title": "The Chinese Woman",
    "description": "George's telephone line crosses with that of a woman named Donna Chang. Jerry winds up dating her. Things get worse when Frank and Estelle announce a separation. Jerry and Elaine can't seem to figure out why Frank Costanza is having mysterious business dealings with a man in a cape.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMTQ3YWNmZWYtZTg2My00ZDMwLTkxMjktMjcyN2I1N2M4ZDhmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "October 13 1994",
    "description_length": 357,
    "overall_order": 90,
    "data_order": 4,
    "dvd_order": 4,
    "amazon_order": 4,
    "wikipedia_airing_order": 4,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1410,
    "rating_rank": 105,
    "viewers": "29,2",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 13,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 5,
    "order": 91,
    "episode_code": 6.5,
    "title": "The Couch",
    "description": "Jerry's new couch is completely ruined when Elaine upsets a man with a bladder condition. Kramer decides to start up his own new pizza business. George joins a book club but instead of reading the book he watches the movie.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZTMzYzM1MjItYzU0MS00NGMyLTg0MDItODJhYjNmZGEyNzViXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "October 27 1994",
    "description_length": 223,
    "overall_order": 91,
    "data_order": 5,
    "dvd_order": 5,
    "amazon_order": 5,
    "wikipedia_airing_order": 5,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1391,
    "rating_rank": 125,
    "viewers": "28,0",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 27,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 6,
    "order": 92,
    "episode_code": 6.6,
    "title": "The Gymnast",
    "description": "Jerry's excitement about dating a gymnast diminishes after Bed sex; George's girlfriend's mom catches him eating out of the trash; Kramer passes a kidney stone.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BY2VkY2RjZDAtNDA5Mi00ZmY4LTlmYmMtMWE4YmQyMzVjZmI0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "November 3 1994",
    "description_length": 160,
    "overall_order": 92,
    "data_order": 6,
    "dvd_order": 6,
    "amazon_order": 6,
    "wikipedia_airing_order": 6,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1433,
    "rating_rank": 105,
    "viewers": "30,6",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "November",
    "DayPart": 3,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 7,
    "order": 93,
    "episode_code": 6.7,
    "title": "The Soup",
    "description": "Jerry accepts an Armani suit from Kenny Bania, provided that he will treat him to a meal; Elaine dates a bounder from England; Kramer decides to eat fresh.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNWE4ZjZmNWYtYzg4NS00MWE1LWI2ODAtN2EwMmViNmFhZDlmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "November 10 1994",
    "description_length": 155,
    "overall_order": 93,
    "data_order": 7,
    "dvd_order": 8,
    "amazon_order": 7,
    "wikipedia_airing_order": 7,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1396,
    "rating_rank": 105,
    "viewers": "29,6",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 10,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 8,
    "order": 94,
    "episode_code": 6.8,
    "title": "The Mom and Pop Store",
    "description": "George buys a convertible he thinks was once owned by Jon Voight. Kramer tries to save a small shoe-repair business. Elaine answers a radio quiz, enabling Mr. Pitt to participate in the Macy's Thanksgiving Day Parade. Meanwhile, Jerry tries to solve the mystery of whether or not he's invited to Tim Whatley's annual Pre-Thanksgiving party.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMzJhZTU1NzUtZmJjZS00ODMyLTk3NWQtZTUyMjRmOWJjMTNkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "November 17 1994",
    "description_length": 340,
    "overall_order": 94,
    "data_order": 8,
    "dvd_order": 7,
    "amazon_order": 8,
    "wikipedia_airing_order": 8,
    "title_length": 21,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1355,
    "rating_rank": 125,
    "viewers": "32,4",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 17,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 9,
    "order": 95,
    "episode_code": 6.9,
    "title": "The Secretary",
    "description": "George gets a secretary, saying he will go for efficiency and smarts rather than beauty. He hires a librarian-esque woman, only to find himself falling in love with her.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMTQ5NmI1MjItYWFlZS00MmNjLWE5MjUtZDExZTMwYTY3OWViXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "December 8 1994",
    "description_length": 169,
    "overall_order": 95,
    "data_order": 9,
    "dvd_order": 9,
    "amazon_order": 9,
    "wikipedia_airing_order": 9,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1329,
    "rating_rank": 125,
    "viewers": "29,7",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "December",
    "DayPart": 8,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 10,
    "order": 96,
    "episode_code": 6.1,
    "title": "The Race",
    "description": "A grade school acquaintance puts pressure on Jerry to finally settle an old score in the form of a race; Elaine is blacklisted from a Chinese restaurant.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNjlhMmQzNjUtOTExYy00Yzk3LTk0ZDAtZTI2YTVjZDdkZjE2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "December 15 1994",
    "description_length": 153,
    "overall_order": 96,
    "data_order": 10,
    "dvd_order": 11,
    "amazon_order": 10,
    "wikipedia_airing_order": 10,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 2168,
    "rating_rank": 11,
    "viewers": "26,8",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "December",
    "DayPart": 15,
    "YearPart": 1994,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 11,
    "order": 97,
    "episode_code": 6.11,
    "title": "The Switch",
    "description": "Elaine lets a potential employer borrow Mr. Pitt's tennis racket. Jerry's girlfriend never laughs but he meets her roommate who does. George's model girlfriend may be bulimic. He needs proof so he meets Kramer's mother, who's a bathroom matron. While there he finds out Kramer's first name. Kramer decides it is time to be himself and begins to use his first name.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYTZmY2JjNjItOWIwOC00NmNhLThlNDQtM2QwNzc5OGZmMDdkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 5 1995",
    "description_length": 580,
    "overall_order": 97,
    "data_order": 11,
    "dvd_order": 10,
    "amazon_order": 11,
    "wikipedia_airing_order": 11,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 2064,
    "rating_rank": 11,
    "viewers": "36,6",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "January",
    "DayPart": 5,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 12,
    "order": 98,
    "episode_code": 6.12,
    "title": "The Label Maker",
    "description": "Tim Whatley gives Jerry a label maker as a thank you for his Super Bowl tickets. George is uncomfortable with his girlfriend's male roommate. Kramer and Newman play a game of Risk.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZjc2MmFmYmItYjdlYi00NWRjLTg2MTAtMGRlZTcwMmJiZjEyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 19 1995",
    "description_length": 180,
    "overall_order": 98,
    "data_order": 12,
    "dvd_order": 12,
    "amazon_order": 12,
    "wikipedia_airing_order": 12,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1415,
    "rating_rank": 37,
    "viewers": "36,2",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 19,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 13,
    "order": 99,
    "episode_code": 6.13,
    "title": "The Scofflaw",
    "description": "When George learns that their friend Gary never had cancer as he claimed, he promises to keep it a secret from Jerry. Elaine gets all tied up in knots when she learns that someone said hi to her ex-boyfriend on her behalf. Kramer has a run-in with the local beat cop who tells him there's someone in the neighborhood who has amassed parking tickets for years.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZjQ5OTk4NjQtMjJjMS00ODM0LWFmMjgtYWE2MWMyOWZhYTkxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 26 1995",
    "description_length": 550,
    "overall_order": 99,
    "data_order": 13,
    "dvd_order": 13,
    "amazon_order": 13,
    "wikipedia_airing_order": 13,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1324,
    "rating_rank": 125,
    "viewers": "33,4",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 26,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 14,
    "episode_code": 6.14,
    "title": "The Highlights of 100 (Part 1)",
    "description": "For the series' 100th episode, Jerry Seinfeld hosts a one hour retrospective with clips from previous episodes: the idea for a show about nothing; the smelly car; the puffy shirt; the astronaut pen; Jerry's hair; George's lack of hair; Mulva; Jerry's virgin girlfriend; the Hernandez incident; the outing; the masters of their domain; the bubble boy - are only a few of the episodes included.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYjBkZjAyNjEtOTdiMi00N2U2LTgzNGItMjRlMTA1ZjJhMTZhXkEyXkFqcGc@._V1_QL75_UY563_CR57,0,1000,563_.jpg",
    "date_aired": "February 2 1995",
    "IMDB_rating": "7,2",
    "isSpecial": true
  },
  {
    "season": 6,
    "episode": 15,
    "episode_code": 6.15,
    "title": "The Highlights of 100 (Part 2)",
    "description": "For the series' 100th episode, Jerry Seinfeld hosts a one hour retrospective with clips from previous episodes: the idea for a show about nothing; the smelly car; the puffy shirt; the astronaut pen; Jerry's hair; George's lack of hair; Mulva; Jerry's virgin girlfriend; the Hernandez incident; the outing; the masters of their domain; the bubble boy - are only a few of the episodes included.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYjBkZjAyNjEtOTdiMi00N2U2LTgzNGItMjRlMTA1ZjJhMTZhXkEyXkFqcGc@._V1_QL75_UY563_CR57,0,1000,563_.jpg",
    "date_aired": "February 2 1995",
    "IMDB_rating": "7,2",
    "isSpecial": true
  },
  {
    "season": 6,
    "episode": 16,
    "order": 102,
    "episode_code": 6.16,
    "title": "The Beard",
    "description": "Elaine tries to convert a gay man to heterosexuality; George is upset when his blind date turns out to be bald; Jerry braces for a lie detector test",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMjdkNThlYzItOTBlZC00MTEwLWE0NmMtNDZjYWYyZGNhZGEzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 9 1995",
    "description_length": 148,
    "overall_order": 102,
    "data_order": 16,
    "dvd_order": 16,
    "amazon_order": 15,
    "wikipedia_airing_order": 16,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1337,
    "rating_rank": 88,
    "viewers": "32,9",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 9,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 17,
    "order": 103,
    "episode_code": 6.17,
    "title": "The Kiss Hello",
    "description": "Jerry dislikes Elaine's friend Wendy because she gives him a kiss on the cheek every time they meet. Wendy sports a somewhat dated hair style and neither Jerry nor Elaine really have the nerve to tell her. Jerry gets his parents arguing with his uncle Leo after revealing a family secret.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNzMyOWRkODItMDg2MC00MGMzLWE0ZmItZWIyZDVjNGZmNjU0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 16 1995",
    "description_length": 789,
    "overall_order": 103,
    "data_order": 17,
    "dvd_order": 17,
    "amazon_order": 16,
    "wikipedia_airing_order": 17,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1322,
    "rating_rank": 105,
    "viewers": "33,4",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 16,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 18,
    "order": 104,
    "episode_code": 6.18,
    "title": "The Doorman",
    "description": "Jerry is inconvenieced by a tenacious doorman at an apartment building; Kramer robs George on the street to put on a show for a group of German tourists.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYzk2Y2U2OGUtNmQxOC00YTg4LTg5YTQtMGNlNTI0ODJlNjA4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 23 1995",
    "description_length": 153,
    "overall_order": 104,
    "data_order": 18,
    "dvd_order": 18,
    "amazon_order": 17,
    "wikipedia_airing_order": 18,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1401,
    "rating_rank": 88,
    "viewers": "33,4",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 23,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 19,
    "order": 105,
    "episode_code": 6.19,
    "title": "The Jimmy",
    "description": "Elaine dates a man whose habit of speaking in third person causes a wide array of confusion; George is blamed for the theft of Yankees' sports equipment.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYWE0NWVlOWEtMDIyYi00YThmLWEwYTAtYmYwYzNmMTU3ZjFlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "March 16 1995",
    "description_length": 153,
    "overall_order": 105,
    "data_order": 19,
    "dvd_order": 19,
    "amazon_order": 18,
    "wikipedia_airing_order": 19,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 2127,
    "rating_rank": 11,
    "viewers": "31,1",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "March",
    "DayPart": 16,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 20,
    "order": 106,
    "episode_code": 6.2,
    "title": "The Doodle",
    "description": "George dates a girl from Elaine's art class and wonders whether or not her humorous caricature of him is a sign that she likes him or not. Thanks to Newman's fleas, Jerry's visiting parents are forced to stay in Elaine's luxury hotel room. Elaine gets a potential job offer but accidentally leaves the manuscript in Jerry's flea-infested apartment.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNTU3NWEyNWEtODBhMi00MGI5LTgzYmUtNjBlMTVjMjRmOGIwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "April 6 1995",
    "description_length": 348,
    "overall_order": 106,
    "data_order": 20,
    "dvd_order": 20,
    "amazon_order": 19,
    "wikipedia_airing_order": 20,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1306,
    "rating_rank": 88,
    "viewers": "30,7",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 8,
    "MonthPart": "April",
    "DayPart": 6,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 21,
    "order": 107,
    "episode_code": 6.21,
    "title": "The Fusilli Jerry",
    "description": "Frank has an unfortunate accident involving one of Kramer's pasta sculptures; Kramer gets the wrong license plates; Jerry becomes disturbed when he finds out that his mechanic used his personal sex move on Elaine.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZTFiZjMxZjMtYTIyYi00OTMxLWI2MWItNzI2NjM4YzI0NTMxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "April 27 1995",
    "description_length": 213,
    "overall_order": 107,
    "data_order": 21,
    "dvd_order": 21,
    "amazon_order": 20,
    "wikipedia_airing_order": 21,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 1814,
    "rating_rank": 26,
    "viewers": "28,2",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 27,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 22,
    "order": 108,
    "episode_code": 6.22,
    "title": "The Diplomat's Club",
    "description": "Jerry's simple airport meeting turns into a nightmare thanks to his incompetent agent; Kramer gets into hot water when he gambled with a rich Texan.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMjBiYTZmODEtNzRlMi00NTViLWJkMGYtNmJhMGU1MThiNDg0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 4 1995",
    "description_length": 148,
    "overall_order": 108,
    "data_order": 22,
    "dvd_order": 22,
    "amazon_order": 21,
    "wikipedia_airing_order": 22,
    "title_length": 19,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1291,
    "rating_rank": 125,
    "viewers": "28,9",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 4,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 23,
    "order": 109,
    "episode_code": 6.23,
    "title": "The Face Painter",
    "description": "Jerry gets tickets to a Rangers-Devils playoff game from Alec Berg. When George opts not to go Elaine gets to bring her boyfriend Puddy. George didn't go to the game so he could keep a date with his new girlfriend Siena. When Jerry fails to call Berg the next day to thank him, he suddenly finds himself getting the cold shoulder.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNzRmY2NkMDItYjM5MS00ZTYyLTk5ZWQtZjc1MjZlZjAxMTc2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 11 1995",
    "description_length": 549,
    "overall_order": 109,
    "data_order": 23,
    "dvd_order": 23,
    "amazon_order": 22,
    "wikipedia_airing_order": 23,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1404,
    "rating_rank": 67,
    "viewers": "26,5",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 11,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 6,
    "episode": 24,
    "order": 110,
    "episode_code": 6.24,
    "title": "The Understudy",
    "description": "Jerry begins to date a girl who is an understudy for Bette Midler in her new Broadway musical, Rochelle, Rochelle. Jerry, George and Kramer all play on the Improv softball team and happen to be playing against the cast and crew of Rochelle, Rochelle.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BN2UwNGNmNGMtNTYwMS00YTIwLTkyOWYtNjY2MmFmZTc0ZTA5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 18 1995",
    "description_length": 384,
    "overall_order": 110,
    "data_order": 24,
    "dvd_order": 24,
    "amazon_order": 23,
    "wikipedia_airing_order": 24,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1349,
    "rating_rank": 142,
    "viewers": "29,8",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 18,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 1,
    "order": 111,
    "episode_code": 7.1,
    "title": "The Engagement",
    "description": "Elaine has a problem sleeping in her new apartment because of a dog that keeps barking. Meanwhile, George gets back together with Susan Ross, proposes to her, then begins to have seconds thoughts about it. Jerry breaks up with Malanie because of her peculiar eating habits and Kramer's solution to help Elaine includes Newman, a van and a case of dog-napping.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMzNmZWQzNmYtNWFmMy00NzQzLWFlYWUtNGJiNDE4NWYyNTA4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "September 21 1995",
    "description_length": 359,
    "overall_order": 111,
    "data_order": 1,
    "dvd_order": 1,
    "amazon_order": 1,
    "wikipedia_airing_order": 1,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1437,
    "rating_rank": 37,
    "viewers": "37,6",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 21,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 2,
    "order": 112,
    "episode_code": 7.2,
    "title": "The Postponement",
    "description": "George gets cold feet and tries everything he can to postpone the engagement; Elaine is jealous of George's engagement; Kramer spills hot coffee on himself.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMDQ1MmIyOTctOGVlYy00NDI0LWJhNzItZjAwZTZhMGE5ZDY1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,51,1000,563_.jpg",
    "date_aired": "September 28 1995",
    "description_length": 156,
    "overall_order": 112,
    "data_order": 2,
    "dvd_order": 2,
    "amazon_order": 2,
    "wikipedia_airing_order": 2,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1290,
    "rating_rank": 88,
    "viewers": "34,5",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 28,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 3,
    "order": 113,
    "episode_code": 7.3,
    "title": "The Maestro",
    "description": `Elaine's latest boyfriend likes to be known as "The Maestro"; Kramer reaches an unsatisfactory settlement with the coffee company, much to his lawyer's chagrin.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BMjMyNTFkYTEtY2NjNC00MTU0LWE1M2MtZWMzYmI1OWI0N2ZjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "October 5 1995",
    "description_length": 160,
    "overall_order": 113,
    "data_order": 3,
    "dvd_order": 3,
    "amazon_order": 3,
    "wikipedia_airing_order": 3,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1352,
    "rating_rank": 125,
    "viewers": "34,6",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "October",
    "DayPart": 5,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 4,
    "order": 114,
    "episode_code": 7.4,
    "title": "The Wink",
    "description": "Jerry squirts grapefruit into George's eye at breakfast, and for the rest of the day George is misinterpreted because everyone thinks he is winking at them.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYmYwMWVmM2EtOTliMC00NTZhLTkyODYtOGQ5NWU0NTIzMzM0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "October 12 1995",
    "description_length": 156,
    "overall_order": 114,
    "data_order": 4,
    "dvd_order": 4,
    "amazon_order": 4,
    "wikipedia_airing_order": 4,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1489,
    "rating_rank": 37,
    "viewers": "32,3",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 12,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 5,
    "order": 115,
    "episode_code": 7.5,
    "title": "The Hot Tub",
    "description": "George picks up a bad habit from some visiting baseball officials. During the time of the New York City Marathon, Elaine has an out of country runner as her house guest. The runner had overslept and missed the big race at the last Olympics and Jerry obsesses with ensuring that it doesn't happen again. Kramer gets a hot tub from his friend Lomez, and Elaine has writer's block.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNTc1YTZiZmUtNWFiZS00ZDQ0LTk4OGMtM2RkNWI4ZDFhZWU4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "October 19 1995",
    "description_length": 378,
    "overall_order": 115,
    "data_order": 5,
    "dvd_order": 5,
    "amazon_order": 5,
    "wikipedia_airing_order": 5,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1456,
    "rating_rank": 37,
    "viewers": "32,6",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 19,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 6,
    "order": 116,
    "episode_code": 7.6,
    "title": "The Soup Nazi",
    "description": "A soup stand owner obsesses about his customers' ordering procedure, but his soup is so good that people line up down the block for it anyway.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNDk1YjY2OTMtN2I0Ny00MzQ1LTg0MmQtZTY0MjA2MzczYzU5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "November 2 1995",
    "description_length": 142,
    "overall_order": 116,
    "data_order": 6,
    "dvd_order": 6,
    "amazon_order": 6,
    "wikipedia_airing_order": 6,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "9,6",
    "IMDB_raters": 3754,
    "rating_rank": 1,
    "viewers": "33,1",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "November",
    "DayPart": 2,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 7,
    "order": 117,
    "episode_code": 7.7,
    "title": "The Secret Code",
    "description": "Elaine ropes Jerry and George into having dinner with her and her boss Peterman but after she and Jerry get out of it, George is left with him on his own. Meanwhile, Kramer buys a police scanner and is convinced he can help the New York fire department select faster routes as they respond to alarms.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMWRmMDRiNjYtZmVjYy00NmY2LWE5YWYtZTI1NzRkM2VhNGRmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "November 9 1995",
    "description_length": 438,
    "overall_order": 117,
    "data_order": 7,
    "dvd_order": 7,
    "amazon_order": 7,
    "wikipedia_airing_order": 7,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1361,
    "rating_rank": 67,
    "viewers": "33,9",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "November",
    "DayPart": 9,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 8,
    "order": 118,
    "episode_code": 7.8,
    "title": "The Pool Guy",
    "description": "Kramer is seeking sponsors for an upcoming AIDS walk but plays poker all night just before and refuses to wear an AIDS-awareness ribbon. Elaine meanwhile is upset to learn that her preferred contraceptive method, the sponge, had been taken off the market.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMDZmMGUxZDgtZDZhYy00Mzg2LWI0OTAtZDllNmUwYTE0MmY5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "November 16 1995",
    "description_length": 512,
    "overall_order": 118,
    "data_order": 8,
    "dvd_order": 8,
    "amazon_order": 8,
    "wikipedia_airing_order": 8,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1334,
    "rating_rank": 67,
    "viewers": "33,4",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 16,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 9,
    "order": 119,
    "episode_code": 7.9,
    "title": "The Sponge",
    "description": "After learning that her prophylactic of choice is being discontinued, Elaine buys a case of Today sponges and scrutinizes her dates for their sponge-worthiness.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZWY5NDYxY2UtZWEwNS00ZmRiLTlmYWQtZDNiYzNmZTA1OGI5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "December 7 1995",
    "description_length": 160,
    "overall_order": 119,
    "data_order": 9,
    "dvd_order": 9,
    "amazon_order": 9,
    "wikipedia_airing_order": 9,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1414,
    "rating_rank": 88,
    "viewers": "32,3",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "December",
    "DayPart": 7,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 10,
    "order": 120,
    "episode_code": 7.1,
    "title": "The Gum",
    "description": "George is unhappy that Lloyd Braun is back. He takes delight in spreading the news that Lloyd had a breakdown after managing an unsuccessful political campaign. Meanwhile, George has trouble with his car after a former neighbor fiddles with the engine. Kramer gets involved with the restoration of an old theater.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNGM4NmZjNjAtOGQ1Yy00MjdkLWEyMTAtYzNhY2I1ZmI3ODk4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "December 14 1995",
    "description_length": 591,
    "overall_order": 120,
    "data_order": 10,
    "dvd_order": 10,
    "amazon_order": 10,
    "wikipedia_airing_order": 10,
    "title_length": 7,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1585,
    "rating_rank": 37,
    "viewers": "31,4",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "December",
    "DayPart": 14,
    "YearPart": 1995,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 11,
    "order": 121,
    "episode_code": 7.11,
    "title": "The Rye",
    "description": "After George's parents take back the bread they gifted to Susan's parents, George makes Jerry find another loaf and tries to appease Susan's parents by taking them on Kramer's Manhattan horse tours, to disastrous consequences.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNmQzNjYyZWItNDliMC00YWJkLTg2OWUtNTUyNTRiMzc2NTFlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,204,1000,563_.jpg",
    "date_aired": "January 4 1996",
    "description_length": 226,
    "overall_order": 121,
    "data_order": 11,
    "dvd_order": 11,
    "amazon_order": 11,
    "wikipedia_airing_order": 11,
    "title_length": 7,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 1843,
    "rating_rank": 11,
    "viewers": "35,1",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "January",
    "DayPart": 4,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 12,
    "order": 122,
    "episode_code": 7.12,
    "title": "The Caddy",
    "description": "Elaine plots a little revenge against old nemesis Sue Ellen Mishckie who many years before had lured Elaine's boyfriend away by going bra-less. George meanwhile is trying to finagle a promotion at work and leaves his car there to have his bosses think that he's putting in a lot of extra hours. Jerry and Kramer take the car to be washed.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNDlhMTMyZTQtYWU2ZC00MDNkLTkwODctMmJkODNiNGY5YzAzXkEyXkFqcGc@._V1_QL75_UY563_CR0,0,1000,563_.jpg",
    "date_aired": "January 25 1996",
    "description_length": 738,
    "overall_order": 122,
    "data_order": 12,
    "dvd_order": 12,
    "amazon_order": 12,
    "wikipedia_airing_order": 12,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1402,
    "rating_rank": 37,
    "viewers": "32,0",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 25,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 13,
    "order": 123,
    "episode_code": 7.13,
    "title": "The Seven",
    "description": "George becomes upset when Susan's cousin names her baby with the name he planned to use for his first child; Jerry questions his girlfriend's style.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZWI4YzM4N2YtMjYwNC00YjBiLThjZjgtYmRmZTVkYjFlOTliXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 1 1996",
    "description_length": 148,
    "overall_order": 123,
    "data_order": 13,
    "dvd_order": 13,
    "amazon_order": 13,
    "wikipedia_airing_order": 13,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1259,
    "rating_rank": 105,
    "viewers": "37,1",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 1,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 14,
    "order": 124,
    "episode_code": 7.14,
    "title": "The Cadillac (Part 1)",
    "description": "Jerry purchases a new Cadillac for his parents; George questions his relationship with Susan after Elaine's friend sets him up with actress Marisa Tomei. The retirement community impeached Marty over the new Cadillac that Jerry bought him; George bombs with Marisa Tomei after revealing his engagement.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYjIwODM2N2YtMTYwMy00MWJmLWE2OTItNjliY2FhYzIwODdkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,119,1000,563_.jpg",
    "date_aired": "February 8 1996",
    "description_length": 302,
    "overall_order": 124,
    "data_order": 14,
    "dvd_order": 14,
    "amazon_order": 14,
    "wikipedia_airing_order": 14,
    "title_length": 21,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1416,
    "rating_rank": 57,
    "viewers": "35,9",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 8,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 15,
    "order": 125,
    "episode_code": 7.15,
    "title": "The Cadillac (Part 2)",
    "description": "Jerry purchases a new Cadillac for his parents; George questions his relationship with Susan after Elaine's friend sets him up with actress Marisa Tomei. The retirement community impeached Marty over the new Cadillac that Jerry bought him; George bombs with Marisa Tomei after revealing his engagement.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYjIwODM2N2YtMTYwMy00MWJmLWE2OTItNjliY2FhYzIwODdkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,119,1000,563_.jpg",
    "date_aired": "February 8 1996",
    "description_length": 302,
    "overall_order": 125,
    "data_order": 15,
    "dvd_order": 15,
    "amazon_order": 14,
    "wikipedia_airing_order": 15,
    "title_length": 21,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1416,
    "rating_rank": 57,
    "viewers": "35,9",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 8,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 16,
    "order": 126,
    "episode_code": 7.16,
    "title": "The Shower Head",
    "description": "Jerry appears on the Tonight Show with Jay Leno. Jerry's parents are in town and he is desperate to get them to go back to Florida. George decides that he too would like a buffer between himself and his parents. At work, Peterman tells Elaine she can't go to Africa with him. Kramer is upset when the apartment managers begin installing low flow shower heads.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMThlOTNkZTUtNzExZC00MTIzLTkwZjItMTc5MDFjMThkZjkwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "February 15 1996",
    "description_length": 595,
    "overall_order": 126,
    "data_order": 16,
    "dvd_order": 16,
    "amazon_order": 15,
    "wikipedia_airing_order": 16,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1295,
    "rating_rank": 67,
    "viewers": "32,3",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 15,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 17,
    "order": 127,
    "episode_code": 7.17,
    "title": "The Doll",
    "description": "George learns that Frank has converted his old bedroom into a pool room. George freaks out when he sees Susan's doll collection which includes one that is the spitting image of his mother. Jerry meanwhile runs into an old acquaintance, Sally Weaver, who seems to have the knack of ruining his plans for appearing on a talk show.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZDAyZDg1ODYtNzgxZS00NTI3LWIxOTQtZjI1NWY0YzMwMzdlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,51,1000,563_.jpg",
    "date_aired": "February 22 1996",
    "description_length": 533,
    "overall_order": 127,
    "data_order": 17,
    "dvd_order": 17,
    "amazon_order": 16,
    "wikipedia_airing_order": 17,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1272,
    "rating_rank": 105,
    "viewers": "32,9",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 22,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 18,
    "order": 128,
    "episode_code": 7.18,
    "title": "The Friars Club",
    "description": "Jerry is up for membership at the Friars Club. He arrives without a jacket, which the club conveniently provides but he forgets to return it when he leaves, putting his membership at the club in doubt. Elaine meanwhile thinks a new employee at her work, Bob, is faking a hearing impairment.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNDA4OWEzNzYtOWE1Ny00MDg2LWI3OTUtYTVjNWI2MTFkMmJjXkEyXkFqcGc@._V1_QL75_UY563_CR20,0,1000,563_.jpg",
    "date_aired": "March 7 1996",
    "description_length": 530,
    "overall_order": 128,
    "data_order": 18,
    "dvd_order": 18,
    "amazon_order": 17,
    "wikipedia_airing_order": 18,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "7,9",
    "IMDB_raters": 1247,
    "rating_rank": 160,
    "viewers": "32,7",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 8,
    "MonthPart": "March",
    "DayPart": 7,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 19,
    "order": 129,
    "episode_code": 7.19,
    "title": "The Wig Master",
    "description": "George is amazed at having found a relatively inexpensive parking lot. When Kramer finds a used condom in the car however, George check out the lot a little more carefully. Jerry is miffed at a salesman in a high end clothing store but Elaine gets along fabulously with him. George's fiancé Susan has a friend staying with them.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMDFlM2QwY2EtMTYxZS00MmVhLWI0NjctMmFjZTdmN2JhMWU5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "April 4 1996",
    "description_length": 578,
    "overall_order": 129,
    "data_order": 19,
    "dvd_order": 19,
    "amazon_order": 18,
    "wikipedia_airing_order": 19,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1277,
    "rating_rank": 125,
    "viewers": "30,5",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 8,
    "MonthPart": "April",
    "DayPart": 4,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 20,
    "order": 130,
    "episode_code": 7.2,
    "title": "The Calzone",
    "description": "George gets into a bit of trouble however at the restaurant when the server thinks he's stealing money from the tip jar. He tries to get Newman to buy the sandwiches for him since the restaurant is on his mail route. Kramer has taken to warming his clothes before wearing them.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNTUwYTJjMTEtYzliYi00MzhhLWE1NzMtNjYwNjY3MWU4MmQ2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "April 25 1996",
    "description_length": 513,
    "overall_order": 130,
    "data_order": 20,
    "dvd_order": 20,
    "amazon_order": 19,
    "wikipedia_airing_order": 20,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,9",
    "IMDB_raters": 1791,
    "rating_rank": 22,
    "viewers": "28,5",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 25,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 21,
    "order": 131,
    "episode_code": 7.21,
    "title": "The Bottle Deposit (Part 1)",
    "description": "A garage mechanic steals Jerry's car. Elaine tries to win J. Peterman JFK's presidential golf clubs at an auction. George is asked to work on a mysterious assignment. Kramer and Newman run a recycling scam.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNGJjZmU3MTUtZjcxZS00OWQ4LThlN2ItODE0MTk3NDU1NzVkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 2 1996",
    "description_length": 206,
    "overall_order": 131,
    "data_order": 21,
    "dvd_order": 21,
    "amazon_order": 20,
    "wikipedia_airing_order": 21,
    "title_length": 27,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 1737,
    "rating_rank": 26,
    "viewers": "32,4",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 2,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 22,
    "order": 132,
    "episode_code": 7.22,
    "title": "The Bottle Deposit (Part 2)",
    "description": "A garage mechanic steals Jerry's car. Elaine tries to win J. Peterman JFK's presidential golf clubs at an auction. George is asked to work on a mysterious assignment. Kramer and Newman run a recycling scam.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNGJjZmU3MTUtZjcxZS00OWQ4LThlN2ItODE0MTk3NDU1NzVkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 2 1996",
    "description_length": 206,
    "overall_order": 132,
    "data_order": 22,
    "dvd_order": 22,
    "amazon_order": 20,
    "wikipedia_airing_order": 22,
    "title_length": 27,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 1737,
    "rating_rank": 26,
    "viewers": "32,4",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 2,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 23,
    "order": 133,
    "episode_code": 7.23,
    "title": "The Wait Out",
    "description": "A comment from George ends up causing a married couple to get divorced and Jerry and Elaine to date the soon-to-be exes. Kramer tries wearing jeans.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYTRmNmU1NDUtY2UyYS00NTNmLTk3YmYtNmVmZjgxZTkyMmNhXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 9 1996",
    "description_length": 148,
    "overall_order": 133,
    "data_order": 23,
    "dvd_order": 23,
    "amazon_order": 21,
    "wikipedia_airing_order": 23,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1258,
    "rating_rank": 88,
    "viewers": "29,9",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 9,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 7,
    "episode": 24,
    "order": 134,
    "episode_code": 7.24,
    "title": "The Invitations",
    "description": "George is as his wits end - his wedding day is approaching and he just knows he'll be unhappy for the rest of his life if he goes ahead with it. Licking the envelopes for their wedding invitations presents a solution to George's dilemma. Meanwhile, Elaine isn't happy about not being part of the wedding party.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNjgyNjgzZWYtZTYyNC00MmU1LWIzMDUtZGJkZmM3OGIxN2U5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,2,1000,563_.jpg",
    "date_aired": "May 16 1996",
    "description_length": 675,
    "overall_order": 134,
    "data_order": 24,
    "dvd_order": 24,
    "amazon_order": 22,
    "wikipedia_airing_order": 24,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 1757,
    "rating_rank": 26,
    "viewers": "33,2",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 16,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 1,
    "order": 135,
    "episode_code": 8.1,
    "title": "The Foundation",
    "description": "George enjoys the single life. Elaine takes over the catalog when J. Peterman suddenly goes missing. Kramer is taking karate lessons.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZDczM2EwNTItZDU5MS00YzA5LTliYWQtNWY1ZWVkOTAyOTNiXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "September 19 1996",
    "description_length": 133,
    "overall_order": 135,
    "data_order": 1,
    "dvd_order": 1,
    "amazon_order": 1,
    "wikipedia_airing_order": 1,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1287,
    "rating_rank": 105,
    "viewers": "33,7",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 19,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 2,
    "order": 136,
    "episode_code": 8.2,
    "title": "The Soul Mate",
    "description": "George thinks the Board of Directors are talking behind his back. Kramer has a crush on Jerry's new girlfriend. Elaine doesn't see the big deal in having a baby.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZjNiYzA0ZTgtOWUwNi00M2U0LTg4NjEtZjIwNDU5ZDJjYmRkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "September 26 1996",
    "description_length": 161,
    "overall_order": 136,
    "data_order": 2,
    "dvd_order": 2,
    "amazon_order": 2,
    "wikipedia_airing_order": 2,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1249,
    "rating_rank": 142,
    "viewers": "33,2",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 26,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 3,
    "order": 137,
    "episode_code": 8.3,
    "title": "The Bizarro Jerry",
    "description": "George uses Susan's death to pick up women. Elaine's new friend is Jerry's exact opposite. Jerry's new girlfriend has manly hands. Kramer pretends to work for an upscale firm.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNWQzMjU1OGYtNjk2Mi00ZGY3LTkzNDQtN2FiZGQ5YWI2NmQyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,42,1000,563_.jpg",
    "date_aired": "October 3 1996",
    "description_length": 175,
    "overall_order": 137,
    "data_order": 3,
    "dvd_order": 3,
    "amazon_order": 3,
    "wikipedia_airing_order": 3,
    "title_length": 17,
    "include": "Yes",
    "IMDB_rating": "9,2",
    "IMDB_raters": 2236,
    "rating_rank": 6,
    "viewers": "31,6",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "October",
    "DayPart": 3,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 4,
    "order": 138,
    "episode_code": 8.4,
    "title": "The Little Kicks",
    "description": `Jerry is forced to bootleg a movie for Kramer's friend. George tries the "bad boy" image. No one has the heart to tell Elaine that she's a terrible dancer.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BNzM5YjM2NzMtNGI4OC00NmE0LTkwYmItZGIwMzA1ZTU0NDQwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "October 10 1996",
    "description_length": 155,
    "overall_order": 138,
    "data_order": 4,
    "dvd_order": 4,
    "amazon_order": 4,
    "wikipedia_airing_order": 4,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 1955,
    "rating_rank": 11,
    "viewers": "32,2",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 10,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 5,
    "order": 139,
    "episode_code": 8.5,
    "title": "The Package",
    "description": 'A mysterious package arrives for Jerry. Elaine is curious about what the doctors are writing in her records. George tries to hit on the cute girl at the "One Hour Photo" place.',
    "img_src": "https://m.media-amazon.com/images/M/MV5BNWU5OTliNmQtMTgwMi00N2EyLWFhODAtYTcwMmViNmY3MmRkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "October 17 1996",
    "description_length": 176,
    "overall_order": 139,
    "data_order": 5,
    "dvd_order": 5,
    "amazon_order": 5,
    "wikipedia_airing_order": 5,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1362,
    "rating_rank": 37,
    "viewers": "30,1",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 17,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 6,
    "order": 140,
    "episode_code": 8.6,
    "title": "The Fatigues",
    "description": "Jerry's new girlfriend's mentor is dating Bania. Kramer volunteers to host a Jewish singles mixer. George tries to study up on risk management. Elaine promotes a man she is afraid to fire.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOGUwMWRiOTktZTc5MC00NDYwLThkZTItYTJlNThmMzA3NjRjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,3,1000,563_.jpg",
    "date_aired": "October 31 1996",
    "description_length": 188,
    "overall_order": 140,
    "data_order": 6,
    "dvd_order": 6,
    "amazon_order": 6,
    "wikipedia_airing_order": 6,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1257,
    "rating_rank": 125,
    "viewers": "30,3",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 31,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 7,
    "order": 141,
    "episode_code": 8.7,
    "title": "The Checks",
    "description": "Jerry gets hundreds of royalty checks, worth 12 cents each, for appearing on a Japanese TV program and gets writer's cramp. George and Jerry pitch their pilot to Japanese TV executives.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMWI4Y2FlNDEtN2QyZC00ZWVkLWIxN2QtNDFjZmNmY2U2ZjJkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,96,1000,563_.jpg",
    "date_aired": "November 7 1996",
    "description_length": 185,
    "overall_order": 141,
    "data_order": 7,
    "dvd_order": 7,
    "amazon_order": 7,
    "wikipedia_airing_order": 7,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1277,
    "rating_rank": 125,
    "viewers": "32,0",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "November",
    "DayPart": 7,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 8,
    "order": 142,
    "episode_code": 8.8,
    "title": "The Chicken Roaster",
    "description": "Kramer is upset when a Kenny Rogers chicken restaurant opens across the street from the apartment building. The other problem he has is the neon lighting that bathes his apartment in a bright red glow. Elaine gets into trouble with the company accountant. Jerry's old college friend blows off an important meeting to have lunch with Jerry.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNDBjZjFjNDQtMTZkMy00NzczLWI2M2MtNTk0NGUxNTM3Y2UzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "November 14 1996",
    "description_length": 648,
    "overall_order": 142,
    "data_order": 8,
    "dvd_order": 8,
    "amazon_order": 8,
    "wikipedia_airing_order": 8,
    "title_length": 19,
    "include": "Yes",
    "IMDB_rating": "9,1",
    "IMDB_raters": 2078,
    "rating_rank": 7,
    "viewers": "34,1",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 14,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 9,
    "order": 143,
    "episode_code": 8.9,
    "title": "The Abstinence",
    "description": "Abstinence allows George to become a genius, but it turns Elaine into an idiot. Jerry gets bumped from career day at his old Jr. High School. Kramer turns his apartment into a smoking lounge and all the smoke disfigures his face.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNDZhMjUwM2ItYTBlMC00MWQwLWI0OTctNGU3YmQ1NTBhYjVjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "November 21 1996",
    "description_length": 229,
    "overall_order": 143,
    "data_order": 9,
    "dvd_order": 9,
    "amazon_order": 9,
    "wikipedia_airing_order": 9,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "9,1",
    "IMDB_raters": 1883,
    "rating_rank": 7,
    "viewers": "34,4",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 21,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 10,
    "order": 144,
    "episode_code": 8.1,
    "title": "The Andrea Doria",
    "description": "A survivor of a shipwreck beats George out of an apartment, so George decides to tell the landlords the tragedies of his life in hopes of getting it back based on pity.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMzBjMjk4NzctODgyOS00ZGVmLTlkMmUtMjFmMmI0YWI1ODdjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "December 19 1996",
    "description_length": 168,
    "overall_order": 144,
    "data_order": 10,
    "dvd_order": 10,
    "amazon_order": 10,
    "wikipedia_airing_order": 10,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1280,
    "rating_rank": 67,
    "viewers": "29,7",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "December",
    "DayPart": 19,
    "YearPart": 1996,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 11,
    "order": 145,
    "episode_code": 8.11,
    "title": "The Little Jerry",
    "description": "Jerry bounces a check. Kramer buys a live chicken. George dates a female convict. Elaine dates a man who shaves his head.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BM2Q1ZmE1ODQtNzkxYy00MjI0LWFjN2YtM2EzMmE4ODBiNjM4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 9 1997",
    "description_length": 121,
    "overall_order": 145,
    "data_order": 11,
    "dvd_order": 11,
    "amazon_order": 11,
    "wikipedia_airing_order": 11,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1394,
    "rating_rank": 88,
    "viewers": "34,5",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "January",
    "DayPart": 9,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 12,
    "order": 146,
    "episode_code": 8.12,
    "title": "The Money",
    "description": "Jerry's parents believe he is financially unstable. Kramer has trouble sleeping with his girlfriend. Elaine enjoys her position as President of the J. Peterman catalog. George hopes to get his parents' money when they die.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMDEyMWRmYWUtODNjZS00M2JjLWIyYmItNzg0NjA0ZjkwNDUxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "January 16 1997",
    "description_length": 222,
    "overall_order": 146,
    "data_order": 12,
    "dvd_order": 13,
    "amazon_order": 12,
    "wikipedia_airing_order": 12,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "7,8",
    "IMDB_raters": 1200,
    "rating_rank": 163,
    "viewers": "37,3",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 16,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 13,
    "order": 147,
    "episode_code": 8.13,
    "title": "The Comeback",
    "description": "George tries to come up with a good comeback after someone insults him. Elaine falls in love with a mysterious employee at the video store. Kramer wants to die a certain way. Jerry takes advice from a tennis player who stinks.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMDE2NjM3NzgtZmQyYS00MTk4LTkzYmQtY2U5MzY4MzY3ZjRhXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "January 30 1997",
    "description_length": 226,
    "overall_order": 147,
    "data_order": 13,
    "dvd_order": 12,
    "amazon_order": 13,
    "wikipedia_airing_order": 13,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1512,
    "rating_rank": 37,
    "viewers": "33,5",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 30,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 14,
    "order": 148,
    "episode_code": 8.14,
    "title": "The Van Buren Boys",
    "description": "Kramer gets mixed up with a gang when he is mugged by them and mistakenly shows their secret sign.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNTkyNTQyMjQtNjhlOS00ZGExLTk3NzEtMDJhNTk2Mjk4ZDcxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,93,1000,563_.jpg",
    "date_aired": "February 6 1997",
    "description_length": 98,
    "overall_order": 148,
    "data_order": 14,
    "dvd_order": 14,
    "amazon_order": 14,
    "wikipedia_airing_order": 14,
    "title_length": 18,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1273,
    "rating_rank": 125,
    "viewers": "33,8",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 6,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 15,
    "order": 149,
    "episode_code": 8.15,
    "title": "The Susie",
    "description": "Kramer sets his watch an hour ahead. George tries to avoid a breakup with his girlfriend. A colleague keeps calling Elaine, Susie. Jerry gambles on a basketball game, but the bookie can't pay him.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNzg4ZjM4YjctY2Y2Yi00YjY5LTg2MmItMTBmY2JkZDIxODNlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "February 13 1997",
    "description_length": 196,
    "overall_order": 149,
    "data_order": 15,
    "dvd_order": 15,
    "amazon_order": 15,
    "wikipedia_airing_order": 15,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1403,
    "rating_rank": 37,
    "viewers": "32,0",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 13,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 16,
    "order": 150,
    "episode_code": 8.16,
    "title": "The Pothole",
    "description": "Jerry accidentally knocks his girlfriend's toothbrush in the toilet. George drops his keys in a pothole that is paved over. A restaurant refuses to deliver food to Elaine's address. Kramer adopts a highway.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BODQ0YmEwNGItZTI4NC00Nzc3LThhYTYtYTU4NjZiNGNmNzUwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "February 20 1997",
    "description_length": 206,
    "overall_order": 150,
    "data_order": 16,
    "dvd_order": 16,
    "amazon_order": 16,
    "wikipedia_airing_order": 16,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1388,
    "rating_rank": 37,
    "viewers": "33,8",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 20,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 17,
    "order": 151,
    "episode_code": 8.17,
    "title": "The English Patient",
    "description": 'Elaine is dragged to see the movie "The English Patient (1996) " on multiple occasions, even though she absolutely hates the film.',
    "img_src": "https://m.media-amazon.com/images/M/MV5BNWE2YTY2YzUtMmMzYy00ODNkLTljNDEtMjJmZDA1NTEwNThlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "March 13 1997",
    "description_length": 130,
    "overall_order": 151,
    "data_order": 17,
    "dvd_order": 17,
    "amazon_order": 17,
    "wikipedia_airing_order": 17,
    "title_length": 19,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1435,
    "rating_rank": 57,
    "viewers": "31,3",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "March",
    "DayPart": 13,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 18,
    "order": 152,
    "episode_code": 8.18,
    "title": "The Nap",
    "description": "George takes a nap under his desk. Kramer swims in the East River. Jerry has some maintenance done on his kitchen. Elaine's new boyfriend buys her a new mattress.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZTdlNWQ0NzktMDBkYS00ZTkyLTlmZjQtNGZiYTc1YTE4OWQ3XkEyXkFqcGc@._V1_QL75_UX1000_CR0,128,1000,563_.jpg",
    "date_aired": "April 10 1997",
    "description_length": 162,
    "overall_order": 152,
    "data_order": 18,
    "dvd_order": 18,
    "amazon_order": 18,
    "wikipedia_airing_order": 18,
    "title_length": 7,
    "include": "Yes",
    "IMDB_rating": "8,9",
    "IMDB_raters": 1676,
    "rating_rank": 22,
    "viewers": "32,2",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 10,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 19,
    "order": 153,
    "episode_code": 8.19,
    "title": "The Yada Yada",
    "description": `George's new girlfriend keeps including "Yada Yada" in her stories. Jerry is offended by Tim Whatley's Jewish jokes. Elaine tries to help her friends adopt a baby. Kramer and Mickey fight over two women.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BNjZmZmZhOGUtNzIwOS00ZWQ5LTg5ZDMtZDEwZTdhNzExZDAzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 24 1997",
    "description_length": 203,
    "overall_order": 153,
    "data_order": 19,
    "dvd_order": 19,
    "amazon_order": 19,
    "wikipedia_airing_order": 19,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 2167,
    "rating_rank": 11,
    "viewers": "31,6",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 24,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 20,
    "order": 154,
    "episode_code": 8.2,
    "title": "The Millennium",
    "description": "Kramer and Newman compete during the early planning of each of their millenium parties.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BODVlMjBlNDgtNGM1Zi00ZDQyLTgxMjItYzUzNDMzNWUyMzliXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 1 1997",
    "description_length": 87,
    "overall_order": 154,
    "data_order": 20,
    "dvd_order": 20,
    "amazon_order": 20,
    "wikipedia_airing_order": 20,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1284,
    "rating_rank": 105,
    "viewers": "29,3",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 1,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 21,
    "order": 155,
    "episode_code": 8.21,
    "title": "The Muffin Tops",
    "description": "Elaine opens a new bakery that sells only the tops of the muffins.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMGM3NWM4YTktODE2Zi00YjNkLTg3NGYtMDI1NTcwNGI2NDAzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 8 1997",
    "description_length": 66,
    "overall_order": 155,
    "data_order": 21,
    "dvd_order": 21,
    "amazon_order": 21,
    "wikipedia_airing_order": 21,
    "title_length": 15,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1443,
    "rating_rank": 67,
    "viewers": "31,1",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 8,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 8,
    "episode": 22,
    "order": 156,
    "episode_code": 8.22,
    "title": "The Summer of George",
    "description": `Unemployed again, George decides to have a "memorable" summer. Jerry's new girlfriend has another dude. Kramer wins a Tony Award. A new girl at work is hostile towards Elaine.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BYjUzYjk2OTctNDA4ZS00MDIzLWFhNWQtYzI5NWM5ZmY1Zjc0XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "May 15 1997",
    "description_length": 175,
    "overall_order": 156,
    "data_order": 22,
    "dvd_order": 22,
    "amazon_order": 22,
    "wikipedia_airing_order": 22,
    "title_length": 20,
    "include": "Yes",
    "IMDB_rating": "8,7",
    "IMDB_raters": 1434,
    "rating_rank": 37,
    "viewers": "29,8",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 15,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 1,
    "order": 157,
    "episode_code": 9.1,
    "title": "The Butter Shave",
    "description": "Kramer discovers the amazing yet unknown uses of butter, but accidentally fries himself after using it as sunscreen.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZTY0ZTQzZjUtNjlkYS00ZDliLWExM2YtNzg2NjQ3NDRkZjU5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "September 25 1997",
    "description_length": 116,
    "overall_order": 157,
    "data_order": 1,
    "dvd_order": 1,
    "amazon_order": 1,
    "wikipedia_airing_order": 1,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1463,
    "rating_rank": 57,
    "viewers": "37,8",
    "Date_1stSpace": 10,
    "Date_2ndSpace": 13,
    "MonthPart": "September",
    "DayPart": 25,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 2,
    "order": 158,
    "episode_code": 9.2,
    "title": "The Voice",
    "description": "George's colleagues try to force him to leave. Jerry makes fun of his girlfriend's bellybutton. Kramer hires an intern. Elaine gets back together with David Puddy.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMGUzNzhlNjEtOGMxYy00OWQwLTlhNjEtNjM1YzA4Y2E3MGVlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "October 2 1997",
    "description_length": 163,
    "overall_order": 158,
    "data_order": 2,
    "dvd_order": 2,
    "amazon_order": 2,
    "wikipedia_airing_order": 2,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1498,
    "rating_rank": 67,
    "viewers": "30,9",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "October",
    "DayPart": 2,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 3,
    "order": 159,
    "episode_code": 9.3,
    "title": "The Serenity Now",
    "description": "Jerry opens up his feelings. Elaine is getting hit on by the Jews. Kramer gets a screen door. George helps his father sell computers.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZWM3NWE0NmYtYmU3MS00OGY2LThmNjktMjQxZWJjNTM3NTRjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "October 9 1997",
    "description_length": 133,
    "overall_order": 159,
    "data_order": 3,
    "dvd_order": 3,
    "amazon_order": 3,
    "wikipedia_airing_order": 3,
    "title_length": 16,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 2012,
    "rating_rank": 11,
    "viewers": "30,2",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "October",
    "DayPart": 9,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 4,
    "order": 160,
    "episode_code": 9.4,
    "title": "The Blood",
    "description": "Jerry's parents hire their friend Izzy Mandelbaum to become Jerry's personal trainer while George decides to associate food and television with his love life.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMTIxNTY4NjMtNTRkMS00ZjQ3LThjNGMtODlhMDI0Yzg4YzAwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,94,1000,563_.jpg",
    "date_aired": "October 16 1997",
    "description_length": 158,
    "overall_order": 160,
    "data_order": 4,
    "dvd_order": 4,
    "amazon_order": 4,
    "wikipedia_airing_order": 4,
    "title_length": 9,
    "include": "Yes",
    "IMDB_rating": "8,3",
    "IMDB_raters": 1345,
    "rating_rank": 105,
    "viewers": "31,5",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 16,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 5,
    "order": 161,
    "episode_code": 9.5,
    "title": "The Junk Mail",
    "description": "Kramer is annoyed with the catalogs he keeps getting in the mail. Elaine falls in love with a guy because of his smile. George's parents are avoiding him. Jerry can't find it in his heart to reject a gift from an old school friend.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOWJmZjlmNzUtNWVmZi00MWI3LTljZTQtMjIxZjA2OWZkYTk4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "October 30 1997",
    "description_length": 231,
    "overall_order": 161,
    "data_order": 5,
    "dvd_order": 5,
    "amazon_order": 5,
    "wikipedia_airing_order": 5,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1291,
    "rating_rank": 142,
    "viewers": "30,2",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "October",
    "DayPart": 30,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 6,
    "order": 162,
    "episode_code": 9.6,
    "title": "The Merv Griffin Show",
    "description": `George runs over a flock of pigeons. Jerry's girlfriend has a vintage toy collection she won't let him touch. A new co-worker is freaking Elaine out. Kramer rebuilds the set of "The Merv Griffin Show" in his apartment.`,
    "img_src": "https://m.media-amazon.com/images/M/MV5BNTg2MWZmNTAtNWJiMi00YjE1LWIyMDAtODE2MzU1NWUwYjMzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    "date_aired": "November 6 1997",
    "description_length": 218,
    "overall_order": 162,
    "data_order": 6,
    "dvd_order": 6,
    "amazon_order": 6,
    "wikipedia_airing_order": 6,
    "title_length": 21,
    "include": "Yes",
    "IMDB_rating": "9,1",
    "IMDB_raters": 2247,
    "rating_rank": 7,
    "viewers": "31,6",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "November",
    "DayPart": 6,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 7,
    "order": 163,
    "episode_code": 9.7,
    "title": "The Slicer",
    "description": "Elaine borrows Kramer's meat slicer to feed her neighbor's cat while George tries to hide his not-so-great past from his new boss.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMmNhMzg1ZmEtOTk2ZC00MmNlLTljNzAtYmE1NmE4NDE2NGJjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "November 13 1997",
    "description_length": 130,
    "overall_order": 163,
    "data_order": 7,
    "dvd_order": 7,
    "amazon_order": 7,
    "wikipedia_airing_order": 7,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1360,
    "rating_rank": 67,
    "viewers": "32,8",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 13,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 8,
    "order": 164,
    "episode_code": 9.8,
    "title": "The Betrayal",
    "description": "Elaine and the gang head to India to attend a wedding; Jerry betrays George by sleeping with his prospective girlfriend; Kramer grapples with a malignant wish.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYmU0Y2U2MDItYmM2ZS00MDI5LWFhNWMtZmZhMzM5M2Y1NmE2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,143,1000,563_.jpg",
    "date_aired": "November 20 1997",
    "description_length": 159,
    "overall_order": 164,
    "data_order": 8,
    "dvd_order": 8,
    "amazon_order": 8,
    "wikipedia_airing_order": 8,
    "title_length": 12,
    "include": "Yes",
    "IMDB_rating": "9,0",
    "IMDB_raters": 2341,
    "rating_rank": 11,
    "viewers": "34,0",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "November",
    "DayPart": 20,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 9,
    "order": 165,
    "episode_code": 9.9,
    "title": "The Apology",
    "description": "George is angered when an old acquaintance withholds a 12-Step-mandated apology; Jerry's girlfriend is too comfortable with her nudity; Elaine works with a germ-o-phobe.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNzhhYzJjOTQtZDNlZC00NWRkLTlkZjktYjE2MjcwMTA3MTIyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "December 11 1997",
    "description_length": 169,
    "overall_order": 165,
    "data_order": 9,
    "dvd_order": 9,
    "amazon_order": 9,
    "wikipedia_airing_order": 9,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1309,
    "rating_rank": 88,
    "viewers": "30,5",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "December",
    "DayPart": 11,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 10,
    "order": 166,
    "episode_code": 9.1,
    "title": "The Strike",
    "description": "Jerry goes out with a woman who is beautiful one day and ugly the next. Kramer goes back to work at H&H Bagels. George makes up a charity. Elaine gives a fake number to a man.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZmJjMjIyZWMtNzZiYS00Njg2LTkyYjAtZWQ0YWJlODU4ZTE3XkEyXkFqcGc@._V1_QL75_UX1000_CR0,99,1000,563_.jpg",
    "date_aired": "December 18 1997",
    "description_length": 175,
    "overall_order": 166,
    "data_order": 10,
    "dvd_order": 10,
    "amazon_order": 10,
    "wikipedia_airing_order": 10,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,8",
    "IMDB_raters": 1966,
    "rating_rank": 26,
    "viewers": "30,8",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "December",
    "DayPart": 18,
    "YearPart": 1997,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 11,
    "order": 167,
    "episode_code": 9.11,
    "title": "The Dealership",
    "description": "Jerry looks to buy a new car from Elaine's boyfriend. George tries to find a snack. Kramer test drives a car.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BNjUxNGEyZjUtZjg1Ni00ZGVjLThiMWEtNmE2N2QyN2FkMmY2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,4,1000,563_.jpg",
    "date_aired": "January 8 1998",
    "description_length": 109,
    "overall_order": 167,
    "data_order": 11,
    "dvd_order": 11,
    "amazon_order": 11,
    "wikipedia_airing_order": 11,
    "title_length": 14,
    "include": "Yes",
    "IMDB_rating": "8,6",
    "IMDB_raters": 1439,
    "rating_rank": 57,
    "viewers": "32,9",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 10,
    "MonthPart": "January",
    "DayPart": 8,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 12,
    "order": 168,
    "episode_code": 9.12,
    "title": "The Reverse Peephole",
    "description": "Elaine is embarrassed by Puddy's fur coat. Kramer tries to keep Newman from getting evicted. George carries everything in his wallet. Jerry is through with wallets.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZDU4NzY4YjYtZTIwYy00MzhkLWE5NTMtMWU5YTRmY2NiMWIzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "January 15 1998",
    "description_length": 164,
    "overall_order": 168,
    "data_order": 12,
    "dvd_order": 12,
    "amazon_order": 12,
    "wikipedia_airing_order": 12,
    "title_length": 20,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1347,
    "rating_rank": 88,
    "viewers": "33,5",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 15,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 13,
    "order": 169,
    "episode_code": 9.13,
    "title": "The Cartoon",
    "description": "Sally Weaver makes fun of Jerry. George's new girlfriend looks just like Jerry. Kramer takes a vow of silence. Elaine gets a job drawing cartoons for the New Yorker.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYjQ1YzFlMzMtMjdlYi00ZDNhLWEzYmYtMGFmODIwNGJkYWQwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "January 29 1998",
    "description_length": 165,
    "overall_order": 169,
    "data_order": 13,
    "dvd_order": 13,
    "amazon_order": 13,
    "wikipedia_airing_order": 13,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,0",
    "IMDB_raters": 1289,
    "rating_rank": 156,
    "viewers": "33,2",
    "Date_1stSpace": 8,
    "Date_2ndSpace": 11,
    "MonthPart": "January",
    "DayPart": 29,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 14,
    "order": 170,
    "episode_code": 9.14,
    "title": "The Strongbox",
    "description": "George's new girlfriend refuses to break up with him. Jerry doesn't help out a neighbor. Elaine's new boyfriend is poor. Kramer tries to find a good place to hide his key for his strongbox.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BZTNiZjQzYzUtMGNlOC00NzAzLTlhYzUtYjlhMzE1ODYwNTZmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "February 5 1998",
    "description_length": 189,
    "overall_order": 170,
    "data_order": 14,
    "dvd_order": 14,
    "amazon_order": 14,
    "wikipedia_airing_order": 14,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1302,
    "rating_rank": 142,
    "viewers": "31,6",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 11,
    "MonthPart": "February",
    "DayPart": 5,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 15,
    "order": 171,
    "episode_code": 9.15,
    "title": "The Wizard",
    "description": "Jerry goes down to Florida for his father's birthday. George tries to avoid Susan's parents. Elaine can't figure out her new boyfriend's nationality. Kramer decides to retire.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BMmViOWQwYTktODZlMS00MjM3LTk3ZTAtZGY0ODhkY2VkMjc1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "February 26 1998",
    "description_length": 175,
    "overall_order": 171,
    "data_order": 15,
    "dvd_order": 15,
    "amazon_order": 15,
    "wikipedia_airing_order": 15,
    "title_length": 10,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1214,
    "rating_rank": 142,
    "viewers": "30,5",
    "Date_1stSpace": 9,
    "Date_2ndSpace": 12,
    "MonthPart": "February",
    "DayPart": 26,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 16,
    "order": 172,
    "episode_code": 9.16,
    "title": "The Burning",
    "description": "Elaine finds out that Puddy is religious. Kramer pretends to have gonorrhea. Jerry's new girlfriend has a tractor story to tell him. George wants everyone at work to like him.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYWUzZWM4NjUtYjM5My00NDVmLWI1ZDQtNWU4NWE4MjQ1MDlmXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "March 19 1998",
    "description_length": 175,
    "overall_order": 172,
    "data_order": 16,
    "dvd_order": 16,
    "amazon_order": 16,
    "wikipedia_airing_order": 16,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,5",
    "IMDB_raters": 1606,
    "rating_rank": 67,
    "viewers": "30,9",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "March",
    "DayPart": 19,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 17,
    "order": 173,
    "episode_code": 9.17,
    "title": "The Bookstore",
    "description": "George is forced to buy a book he took with him into the bathroom. Jerry finds out that his Uncle Leo is a shoplifter. Elaine doesn't want to be known as the office skank. Kramer and Newman start a Hong Kong rickshaw business.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BOTdjMTI1MzUtMjY5ZS00OTkxLWIyNzktYTQzMWRlZjZiMWRiXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 9 1998",
    "description_length": 226,
    "overall_order": 173,
    "data_order": 17,
    "dvd_order": 17,
    "amazon_order": 17,
    "wikipedia_airing_order": 17,
    "title_length": 13,
    "include": "Yes",
    "IMDB_rating": "8,4",
    "IMDB_raters": 1264,
    "rating_rank": 88,
    "viewers": "29,6",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 8,
    "MonthPart": "April",
    "DayPart": 9,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 18,
    "order": 174,
    "episode_code": 9.18,
    "title": "The Frogger",
    "description": "George is obsessed with preserving his Frogger high score for posterity; Jerry stays one step ahead of a serial killer; Elaine eats Peterman's expensive cake:",
    "img_src": "https://m.media-amazon.com/images/M/MV5BODg4ODdmODctMzNmNi00YzM4LTk5MDktMDFkNTIxNmNkZjI5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 23 1998",
    "description_length": 158,
    "overall_order": 174,
    "data_order": 18,
    "dvd_order": 18,
    "amazon_order": 18,
    "wikipedia_airing_order": 18,
    "title_length": 11,
    "include": "Yes",
    "IMDB_rating": "8,9",
    "IMDB_raters": 1876,
    "rating_rank": 22,
    "viewers": "30,7",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 23,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 19,
    "order": 175,
    "episode_code": 9.19,
    "title": "The Maid",
    "description": 'Jerry gets into romance with his maid; George struggles to get the nickname "T-Bone" around the office; Elaine searches for a new telephone number.',
    "img_src": "https://m.media-amazon.com/images/M/MV5BOGIwOTU5ZGItMjZjNy00YzVmLTk0NTQtZjMxZGZiMTYxNmUxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "April 30 1998",
    "description_length": 147,
    "overall_order": 175,
    "data_order": 19,
    "dvd_order": 19,
    "amazon_order": 19,
    "wikipedia_airing_order": 19,
    "title_length": 8,
    "include": "Yes",
    "IMDB_rating": "8,2",
    "IMDB_raters": 1258,
    "rating_rank": 125,
    "viewers": "33,3",
    "Date_1stSpace": 6,
    "Date_2ndSpace": 9,
    "MonthPart": "April",
    "DayPart": 30,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 20,
    "order": 176,
    "episode_code": 9.2,
    "title": "The Puerto Rican Day",
    "description": "Jerry, George, Kramer and Elaine get stuck in standstill traffic due to the massive Puerto Rican Day Parade.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BYWJhNmRjYmItY2U0Ni00YjA3LTg1ODktNmNlYjc4YWIxNTY2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 7 1998",
    "description_length": 108,
    "overall_order": 176,
    "data_order": 20,
    "dvd_order": 20,
    "amazon_order": 20,
    "wikipedia_airing_order": 20,
    "title_length": 20,
    "include": "Yes",
    "IMDB_rating": "8,1",
    "IMDB_raters": 1359,
    "rating_rank": 142,
    "viewers": "38,8",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 6,
    "MonthPart": "May",
    "DayPart": 7,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 21,
    "episode_code": 9.21,
    "title": "The Chronicle/Clip Show (Part 1)",
    "description": "Just as the four are about to go to the movies, Jerry looks back on the past nine years with the audience.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BN2IyMTFmMzItM2E1MC00ZjE4LWEzMzEtNjQwMzIwMzc5YjQ2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 14 1998",
    "IMDB_rating": "8,1",
    "isSpecial": true
  },
  {
    "season": 9,
    "episode": 22,
    "episode_code": 9.22,
    "title": "The Chronicle/Clip Show (Part 2)",
    "description": "Just as the four are about to go to the movies, Jerry looks back on the past nine years with the audience.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BN2IyMTFmMzItM2E1MC00ZjE4LWEzMzEtNjQwMzIwMzc5YjQ2XkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 14 1998",
    "IMDB_rating": "8,1",
    "isSpecial": true
  },
  {
    "season": 9,
    "episode": 23,
    "order": 179,
    "episode_code": 9.23,
    "title": "The Finale (Part 1)",
    "description": "After George and Jerry land a production deal with NBC, the four head out for Paris on NBC's private plane and are waylaid in a small Massachusetts town.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BM2MzMDU5ZGItZWJmZS00MmY0LWIzNDMtZjQ1ZjNmYmIxOTJkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 14 1998",
    "description_length": 153,
    "overall_order": 179,
    "data_order": 23,
    "dvd_order": 23,
    "amazon_order": 22,
    "wikipedia_airing_order": 23,
    "title_length": 19,
    "include": "Yes",
    "IMDB_rating": "7,6",
    "IMDB_raters": 2308,
    "rating_rank": 170,
    "viewers": "76,3",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 14,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  },
  {
    "season": 9,
    "episode": 24,
    "order": 180,
    "episode_code": 9.24,
    "title": "The Finale (Part 2)",
    "description": "After George and Jerry land a production deal with NBC, the four head out for Paris on NBC's private plane and are waylaid in a small Massachusetts town.",
    "img_src": "https://m.media-amazon.com/images/M/MV5BM2MzMDU5ZGItZWJmZS00MmY0LWIzNDMtZjQ1ZjNmYmIxOTJkXkEyXkFqcGc@._V1_QL75_UX1000_CR0,7,1000,563_.jpg",
    "date_aired": "May 14 1998",
    "description_length": 153,
    "overall_order": 180,
    "data_order": 24,
    "dvd_order": 24,
    "amazon_order": 22,
    "wikipedia_airing_order": 24,
    "title_length": 19,
    "include": "Yes",
    "IMDB_rating": "7,6",
    "IMDB_raters": 2308,
    "rating_rank": 170,
    "viewers": "76,3",
    "Date_1stSpace": 4,
    "Date_2ndSpace": 7,
    "MonthPart": "May",
    "DayPart": 14,
    "YearPart": 1998,
    "FullDate": "#VALUE!",
    "DaysInYear": "#VALUE!",
    "ImaginedYear": "#VALUE!",
    "DoubleEpisodes?": 180
  }
];
function EpisodeIcon($$payload, $$props) {
  let { size = 25 } = $$props;
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 18 16" fill="none"><path d="M1 8H17" stroke="#E71D80" stroke-linecap="round"></path><circle cx="4" cy="8" r="1.5" fill="#F9F5F7" stroke="#E71D80"></circle><circle cx="9" cy="8" r="1.5" fill="#E71D80" stroke="#E71D80"></circle><circle cx="14" cy="8" r="1.5" fill="#F9F5F7" stroke="#E71D80"></circle></svg>`;
}
function StarIcon($$payload, $$props) {
  let { size = 25 } = $$props;
  $$payload.out += `<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.866 15.35C2.788 15.794 3.226 16.141 3.612 15.943L8.002 13.687L12.391 15.943C12.777 16.141 13.215 15.794 13.137 15.351L12.307 10.621L15.829 7.26498C16.159 6.95098 15.989 6.37698 15.547 6.31498L10.649 5.61898L8.465 1.29198C8.42339 1.20427 8.35775 1.13017 8.27571 1.07828C8.19366 1.02639 8.09857 0.99884 8.0015 0.99884C7.90442 0.99884 7.80933 1.02639 7.72729 1.07828C7.64524 1.13017 7.5796 1.20427 7.538 1.29198L5.354 5.61998L0.455996 6.31598C0.0149962 6.37798 -0.156004 6.95198 0.172996 7.26598L3.696 10.622L2.866 15.352V15.35ZM7.771 12.583L4.085 14.477L4.779 10.52C4.7957 10.4289 4.78956 10.3351 4.76111 10.247C4.73266 10.1588 4.6828 10.0791 4.616 10.015L1.71 7.24498L5.762 6.66898C5.84576 6.65591 5.92517 6.62293 5.99355 6.57282C6.06194 6.52271 6.1173 6.45692 6.155 6.38098L8 2.72298L9.847 6.38098C9.88469 6.45692 9.94006 6.52271 10.0084 6.57282C10.0768 6.62293 10.1562 6.65591 10.24 6.66898L14.292 7.24398L11.386 10.014C11.319 10.0782 11.2691 10.1581 11.2406 10.2464C11.2122 10.3347 11.2061 10.4287 11.223 10.52L11.917 14.477L8.231 12.583C8.15979 12.546 8.08073 12.5267 8.0005 12.5267C7.92026 12.5267 7.8422 12.546 7.771 12.583Z" fill="#E71D80"></path></svg>`;
}
function TvIcon($$payload, $$props) {
  let { size = 25 } = $$props;
  $$payload.out += `<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#E71D80"><path d="M15.9961 4.22661H9.7315L10.6808 3.03999C10.8021 2.88836 10.7775 2.66715 10.6259 2.54583C10.4743 2.42454 10.253 2.44915 10.1317 2.60074L8.97086 4.05185L7.13921 2.22021C7.00193 2.08293 6.77932 2.08293 6.642 2.22021C6.50471 2.3575 6.50471 2.58011 6.642 2.71743L8.15122 4.22665H2.00391C1.40298 4.22665 0.914062 4.71557 0.914062 5.31649V15.7931C0.914062 16.394 1.40298 16.8829 2.00391 16.8829H15.9961C16.5971 16.8829 17.0859 16.394 17.0859 15.7931V5.31649C17.0859 4.7155 16.5971 4.22661 15.9961 4.22661ZM16.3828 15.793C16.3828 16.0062 16.2093 16.1797 15.9961 16.1797H2.00391C1.79068 16.1797 1.61719 16.0062 1.61719 15.793V5.31642C1.61719 5.1032 1.79068 4.9297 2.00391 4.9297H15.9961C16.2093 4.9297 16.3828 5.1032 16.3828 5.31642V15.793Z"></path><path d="M11.8125 5.98444H3.02344C2.82927 5.98444 2.67188 6.14183 2.67188 6.336V14.7735C2.67188 14.9676 2.82927 15.125 3.02344 15.125H11.8125C12.0066 15.125 12.1641 14.9676 12.1641 14.7735V6.336C12.1641 6.1418 12.0066 5.98444 11.8125 5.98444ZM11.4609 14.4219H3.375V6.68756H11.4609V14.4219Z"></path><path d="M14.2734 10.9063C14.855 10.9063 15.3281 10.4331 15.3281 9.85159C15.3281 9.27003 14.855 8.79694 14.2734 8.79694C13.6919 8.79694 13.2188 9.27003 13.2188 9.85159C13.2188 10.4331 13.6919 10.9063 14.2734 10.9063ZM14.2734 9.50003C14.4673 9.50003 14.625 9.65774 14.625 9.85159C14.625 10.0454 14.4673 10.2032 14.2734 10.2032C14.0796 10.2032 13.9219 10.0454 13.9219 9.85159C13.9219 9.65774 14.0796 9.50003 14.2734 9.50003Z"></path><path d="M14.2734 8.09381C14.855 8.09381 15.3281 7.62068 15.3281 7.03912C15.3281 6.45757 14.855 5.98444 14.2734 5.98444C13.6919 5.98444 13.2188 6.45757 13.2188 7.03912C13.2188 7.62068 13.6919 8.09381 14.2734 8.09381ZM14.2734 6.68756C14.4673 6.68756 14.625 6.84527 14.625 7.03912C14.625 7.23298 14.4673 7.39069 14.2734 7.39069C14.0796 7.39069 13.9219 7.23298 13.9219 7.03912C13.9219 6.84524 14.0796 6.68756 14.2734 6.68756Z"></path><path d="M15.3281 13.0156H13.5703C13.3761 13.0156 13.2188 13.1731 13.2188 13.3672C13.2188 13.5613 13.3761 13.7188 13.5703 13.7188H15.3281C15.5223 13.7188 15.6797 13.5613 15.6797 13.3672C15.6797 13.1731 15.5223 13.0156 15.3281 13.0156Z"></path><path d="M15.3281 14.4219H13.5703C13.3761 14.4219 13.2188 14.5793 13.2188 14.7734C13.2188 14.9676 13.3761 15.125 13.5703 15.125H15.3281C15.5223 15.125 15.6797 14.9676 15.6797 14.7734C15.6797 14.5793 15.5223 14.4219 15.3281 14.4219Z"></path><path d="M15.3281 11.6094H13.5703C13.3761 11.6094 13.2188 11.7668 13.2188 11.9609C13.2188 12.1551 13.3761 12.3125 13.5703 12.3125H15.3281C15.5223 12.3125 15.6797 12.1551 15.6797 11.9609C15.6797 11.7668 15.5223 11.6094 15.3281 11.6094Z"></path></g></svg>`;
}
function EpisodeTooltip($$payload, $$props) {
  push();
  let { episode, position } = $$props;
  let innerWidth = 1600;
  let innerHeight = 800;
  let tooltip = void 0;
  let tooltipWidth = 432;
  let tooltipLeftPosition = position[0] > innerWidth / 2 ? position[0] - tooltipWidth - 10 : position[0] + 10;
  let tooltipTopPosition = (() => {
    switch (true) {
      case innerHeight - position[1] > tooltip?.clientHeight:
        return position[1] - 30;
      default:
        return innerHeight - tooltip?.clientHeight - 10;
    }
  })();
  $$payload.out += `<div class="tooltip absolute z-10 svelte-i5e10z"${attr_style(`width: ${stringify(tooltipWidth)}px; max-height: ${stringify(innerHeight - 40)}px; top: ${stringify(tooltipTopPosition)}px; left: ${stringify(tooltipLeftPosition)}px;}`)}><div class="tooltip-image svelte-i5e10z"${attr_style(`background-image: url(${stringify(episode.img_src)});`)}></div> <div class="tooltip-content svelte-i5e10z"><h4>${escape_html(episode.title)}</h4> <div class="tooltip-tags svelte-i5e10z"><div class="tooltip-tag tooltip-tag-episode flex items-center font-semibold svelte-i5e10z">`;
  EpisodeIcon($$payload, { size: 24 });
  $$payload.out += `<!----> <span class="ml-1">${escape_html(`s${episode.season}e${episode.episode}`)}</span></div> <div class="tooltip-tag tooltip-tag-imdb flex items-center svelte-i5e10z"><span class="relative" style="top: -3px;">`;
  StarIcon($$payload, { size: 24 });
  $$payload.out += `<!----></span> <span class="ml-1"><span class="mr-1 font-semibold">IMDb rating:</span> <span>${escape_html(episode.IMDB_rating.replace(",", "."))}/10</span></span></div> <div class="tooltip-tag tooltip-tag-tv flex items-center svelte-i5e10z"><span class="relative" style="top: -3px;">`;
  TvIcon($$payload, { size: 24 });
  $$payload.out += `<!----></span> <span class="ml-1"><span class="mr-1 font-semibold">First aired:</span> <span>${escape_html(`${episode.MonthPart} ${episode.DayPart}, ${episode.YearPart}`)}</span></span></div></div> <div class="tooltip-description svelte-i5e10z">${escape_html(episode.description)}</div></div></div>`;
  pop();
}
function CalendarTexts($$payload, $$props) {
  push();
  let showEpisodes = $$props["showEpisodes"];
  $$payload.out += `<div class="flex w-screen items-center justify-center" style="height: calc(150vh + 260px); padding-top: calc(50vh + 260px);"><div class="text-overlay">Let’s go back to the start. Seinfeld aired on US TV for the first time on Wednesday 5th July
		1989, with a pilot episode titled <span class="em">Good News, Bad News</span> (it was also known
		as The Seinfeld Chronicles, the inspiration for the title of this project).</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">Though it was watched by 15.4M viewers, the early reviews were mixed - test audiences hated, TV
		critics liked it - so its future was initially uncertain. However, thanks to the perseverance
		and persuasion of NBC executive Rick Ludwin, four more episodes were belatedly ordered to
		complete the unusually short first season.</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">This opening season belatedly wrapped a year later, in the summer of 1990, and was received with
		healthy ratings from critics and audiences alike. This response was positive enough to convince
		NBC to commission a second season, this time comprising 12 episodes.</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">Despite a slightly rocky start with Season Two, critical reviews and audience ratings continued
		to improve giving NBC reason to not only green-light a third season but to move the show into
		the sought-after Fall schedule, where buzz, anticipation, and advertising revenues peak.</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">Towards the middle of Season Four the show was moved to Thursdays, straight after Cheers, in the
		most popular prime-time slot. When the final episode was broadcast, on 14th May 1998, it brought
		to an end <span class="em">nine seasons</span> and a total of <span class="em">176 episodes</span> (plus four specials).</div></div>`;
  bind_props($$props, { showEpisodes });
  pop();
}
function Calendar($$payload, $$props) {
  push();
  let innerWidth = 1600;
  let innerHeight = 800;
  let screenSize = { width: innerWidth };
  let seasonsWidth = 130;
  let headersHeight = 68;
  let episodeRadius = 15;
  const tvSeasons = [
    {
      season: "Fall",
      months: ["Sep", "Oct", "Nov", "Dec"]
    },
    {
      season: "Spring",
      months: ["Jan", "Feb", "Mar", "Apr"]
    },
    {
      season: "Summer",
      months: ["May", "Jun", "Jul", "Aug"]
    }
  ];
  let nodes = [];
  const getTimeDomain = (season, date) => {
    switch (season) {
      case 1:
        return date === "July 5 1989" ? [
          new Date(1988, 8, 1),
          new Date(1989, 7, 31)
        ] : [
          new Date(1989, 8, 1),
          new Date(1990, 7, 31)
        ];
      case 2:
        return [
          new Date(1990, 8, 1),
          new Date(1991, 7, 31)
        ];
      case 3:
        return [
          new Date(1991, 8, 1),
          new Date(1992, 7, 31)
        ];
      case 4:
        return date === "August 12 1992" || date === "August 19 1992" ? [
          new Date(1991, 8, 1),
          new Date(1992, 7, 31)
        ] : [
          new Date(1992, 8, 1),
          new Date(1993, 7, 31)
        ];
      case 5:
        return [
          new Date(1993, 8, 1),
          new Date(1994, 7, 31)
        ];
      case 6:
        return [
          new Date(1994, 8, 1),
          new Date(1995, 7, 31)
        ];
      case 7:
        return [
          new Date(1995, 8, 1),
          new Date(1996, 7, 31)
        ];
      case 8:
        return [
          new Date(1996, 8, 1),
          new Date(1997, 7, 31)
        ];
      default:
        return [
          new Date(1997, 8, 1),
          new Date(1998, 7, 31)
        ];
    }
  };
  const timeScale = scaleTime().domain(getTimeDomain(1, "July 6 1989")).range([
    15,
    // [new Date(1989, 8, 1), new Date(1990, 7, 31)]
    screenSize.width - seasonsWidth - 15
  ]);
  const globalTimeScale = (month) => {
    switch (month) {
      case "Sep":
        return timeScale(/* @__PURE__ */ new Date("October 1 1989"));
      case "Oct":
        return timeScale(/* @__PURE__ */ new Date("November 1 1989"));
      case "Nov":
        return timeScale(/* @__PURE__ */ new Date("December 1 1989"));
      case "Dec":
        return timeScale(/* @__PURE__ */ new Date("January 1 1990"));
      case "Jan":
        return timeScale(/* @__PURE__ */ new Date("February 1 1990"));
      case "Feb":
        return timeScale(/* @__PURE__ */ new Date("March 1 1990"));
      case "Mar":
        return timeScale(/* @__PURE__ */ new Date("April 1 1990"));
      case "Apr":
        return timeScale(/* @__PURE__ */ new Date("May 1 1990"));
      case "May":
        return timeScale(/* @__PURE__ */ new Date("June 1 1990"));
      case "Jun":
        return timeScale(/* @__PURE__ */ new Date("July 1 1990"));
      case "Jul":
        return timeScale(/* @__PURE__ */ new Date("August 1 1990"));
      default:
        return timeScale(/* @__PURE__ */ new Date("August 31 1990"));
    }
  };
  const monthScale = (month) => {
    let date1;
    let date2;
    switch (month) {
      case "Sep":
        date1 = timeScale(/* @__PURE__ */ new Date("September 15 1989"));
        date2 = timeScale(/* @__PURE__ */ new Date("September 15 1989"));
        break;
      case "Oct":
        date1 = timeScale(/* @__PURE__ */ new Date("October 15 1989"));
        date2 = timeScale(/* @__PURE__ */ new Date("October 16 1989"));
        break;
      case "Nov":
        date1 = timeScale(/* @__PURE__ */ new Date("November 15 1989"));
        date2 = timeScale(/* @__PURE__ */ new Date("November 15 1989"));
        break;
      case "Dec":
        date1 = timeScale(/* @__PURE__ */ new Date("December 15 1989"));
        date2 = timeScale(/* @__PURE__ */ new Date("December 16 1989"));
        break;
      case "Jan":
        date1 = timeScale(/* @__PURE__ */ new Date("January 15 1990"));
        date2 = timeScale(/* @__PURE__ */ new Date("January 16 1990"));
        break;
      case "Feb":
        date1 = timeScale(/* @__PURE__ */ new Date("February 14 1990"));
        date2 = timeScale(/* @__PURE__ */ new Date("February 14 1990"));
        break;
      case "Mar":
        date1 = timeScale(/* @__PURE__ */ new Date("March 15 1990"));
        date2 = timeScale(/* @__PURE__ */ new Date("March 16 1990"));
        break;
      case "Apr":
        date1 = timeScale(/* @__PURE__ */ new Date("April 15 1990"));
        date2 = timeScale(/* @__PURE__ */ new Date("April 15 1990"));
        break;
      case "May":
        date1 = timeScale(/* @__PURE__ */ new Date("May 15 1990"));
        date2 = timeScale(/* @__PURE__ */ new Date("May 16 1990"));
        break;
      case "Jun":
        date1 = timeScale(/* @__PURE__ */ new Date("June 15 1990"));
        date2 = timeScale(/* @__PURE__ */ new Date("June 15 1990"));
        break;
      case "Jul":
        date1 = timeScale(/* @__PURE__ */ new Date("July 15 1990"));
        date2 = timeScale(/* @__PURE__ */ new Date("July 16 1990"));
        break;
      default:
        date1 = timeScale(/* @__PURE__ */ new Date("August 15 1990"));
        date2 = timeScale(/* @__PURE__ */ new Date("August 16 1990"));
        break;
    }
    return date1 + (date2 - date1) / 2;
  };
  const episodesShow1 = ["s1e1"];
  const episodesShow2 = ["s1e2", "s1e3", "s1e4", "s1e5"];
  const twelveArray = range(1, 13);
  const twentyTwoArray = range(1, 23);
  const twentyThreeArray = range(1, 24);
  const twentyFourArray = range(1, 25);
  const episodesShow3 = twelveArray.map((e) => `s2e${e}`);
  const episodesShow4 = twentyThreeArray.map((e) => `s3e${e}`);
  const episodesShow5 = twentyFourArray.map((e) => `s4e${e}`).concat(twentyTwoArray.map((e) => `s5e${e}`)).concat(twentyFourArray.map((e) => `s6e${e}`)).concat(twentyFourArray.map((e) => `s7e${e}`)).concat(twentyTwoArray.map((e) => `s8e${e}`)).concat(twentyFourArray.map((e) => `s9e${e}`));
  function showEpisodes(number) {
    let selectors = "";
    switch (number) {
      case 1:
        selectors = episodesShow1.map((e) => `#calendar-${e}`).join(",");
        break;
      case 2:
        selectors = episodesShow2.map((e) => `#calendar-${e}`).join(",");
        break;
      case 3:
        selectors = episodesShow3.map((e) => `#calendar-${e}`).join(",");
        break;
      case 4:
        selectors = episodesShow4.map((e) => `#calendar-${e}`).join(",");
        break;
      default:
        selectors = episodesShow5.map((e) => `#calendar-${e}`).join(",");
        break;
    }
    gsap.to(selectors, {
      scale: 1,
      opacity: 1,
      ease: "back.out(5)",
      duration: 1,
      pointerEvents: "auto",
      stagger: { from: "random", amount: 0.4 }
    });
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(seasons);
    const each_array_1 = ensure_array_like(tvSeasons);
    const each_array_5 = ensure_array_like(nodes);
    $$payload2.out += `<div id="intro-calendar-container" class="relative"><div id="intro-calendar" class="absolute flex h-screen w-screen"><div class="flex flex-col"${attr_style(`width: ${stringify(seasonsWidth)}px;`)}><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let season = each_array[i];
      $$payload2.out += `<div${attr("id", `catalog-season-${i + 1}`)} class="flex flex-col justify-center px-4"${attr_style(`flex-grow: ${stringify(i === 0 ? 2 : 1)}; color: ${stringify(i > 1 ? "#F9F5F7" : "#12020A")}; background: ${stringify(season.color)}; font-size: ${stringify("1.125rem")};`)}><div class="uppercase">${escape_html(season.id)}</div> <div>${escape_html(season.years)}</div></div>`;
    }
    $$payload2.out += `<!--]--></div> <svg class="absolute"${attr("width", innerWidth - seasonsWidth)}${attr("height", innerHeight)}${attr_style(`top: 0px; left: ${stringify(seasonsWidth)}px;`)}><rect${attr("x", timeScale(/* @__PURE__ */ new Date("January 1 1990")))}${attr("y", 0)}${attr("width", timeScale(/* @__PURE__ */ new Date("May 1 1990")) - timeScale(/* @__PURE__ */ new Date("January 1 1990")))}${attr("height", innerHeight)} fill="#EEECED"></rect><!--[-->`;
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let tvSeason = each_array_1[i];
      $$payload2.out += `<text${attr("x", i === 0 ? timeScale(/* @__PURE__ */ new Date("November 1 1989")) : i === 1 ? timeScale(/* @__PURE__ */ new Date("March 1 1990")) : timeScale(/* @__PURE__ */ new Date("July 1 1990")))}${attr("y", 24)} text-anchor="middle" dominant-baseline="middle">${escape_html(tvSeason.season)}</text>`;
      {
        $$payload2.out += "<!--[-->";
        const each_array_2 = ensure_array_like(tvSeason.months);
        $$payload2.out += `<!--[-->`;
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let month = each_array_2[$$index_1];
          $$payload2.out += `<text class="text-base"${attr("x", monthScale(month))}${attr("y", 56)} text-anchor="middle" dominant-baseline="middle">${escape_html(month)}</text>`;
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]-->`;
    {
      $$payload2.out += "<!--[-->";
      const each_array_3 = ensure_array_like(tvSeasons);
      $$payload2.out += `<!--[-->`;
      for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
        let season = each_array_3[$$index_4];
        const each_array_4 = ensure_array_like(season.months);
        $$payload2.out += `<!--[-->`;
        for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
          let month = each_array_4[$$index_3];
          if (month !== "Aug") {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<line${attr("x1", globalTimeScale(month))}${attr("y1", 44)}${attr("x2", globalTimeScale(month))}${attr("y2", innerHeight)} stroke="#BEBABC"></line>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--><!--[-->`;
    for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
      let node = each_array_5[$$index_5];
      $$payload2.out += `<g${attr("id", `calendar-s${node.season}e${node.episode}`)} class="calendar-episode"${attr("transform", `translate(${node.x}, ${node.y + headersHeight})`)} style="cursor: default;" role="document"><circle${attr("r", episodeRadius)}${attr("fill", node.isSpecial ? "#BEBABC" : seasons.find((s) => s.seasonNum === node.season)?.color)}></circle>`;
      {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<text class="number" text-anchor="middle" dominant-baseline="middle"${attr("dy", 1)}${attr("fill", node.season > 2 && !node.isSpecial ? "#F9F5F7" : "#12020A")}>${escape_html(node.episode)}</text>`;
      }
      $$payload2.out += `<!--]--></g>`;
    }
    $$payload2.out += `<!--]--></svg></div> <div class="z-10 relative pointer-events-none">`;
    CalendarTexts($$payload2, {
      get showEpisodes() {
        return showEpisodes;
      },
      set showEpisodes($$value) {
        showEpisodes = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function SeasonsStrip($$payload, $$props) {
  push();
  const width = 25;
  let innerHeight = 800;
  let topSpace = 0;
  let seasonScale = scaleLinear().domain([0, totalNumEpisodes]).range([topSpace, innerHeight - topSpace]);
  const each_array = ensure_array_like(seasons);
  $$payload.out += `<div id="seasons-strip" class="svelte-1qwq7jx"><svg${attr("width", width)}${attr("height", innerHeight)}><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let season = each_array[i];
    $$payload.out += `<!---->$inspect(season, i) <rect${attr("x", 0)}${attr("y", seasonScale(sum(seasons.slice(0, i), (d) => d.numEpisodes)))}${attr("width", 25)}${attr("height", seasonScale(season.numEpisodes) - topSpace)}${attr("fill", season.color)} class="svelte-1qwq7jx"></rect>`;
  }
  $$payload.out += `<!--]--></svg></div>`;
  pop();
}
function Laugh($$payload, $$props) {
  let { width = "100%", height = "100%" } = $$props;
  $$payload.out += `<svg${attr("width", width)}${attr("height", height)} viewBox="0 0 142 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M89.5525 74.9187C89.0192 73.6218 87.7695 72.7734 86.3678 72.7734C86.3667 72.7734 86.365 72.7734 86.3639 72.7734C84.9383 72.7734 83.6662 73.6557 83.1559 74.993L72.0516 104.151C71.5063 105.582 72.2246 107.186 73.656 107.731C75.0871 108.276 76.6899 107.624 77.2348 106.193L79.3196 100.785H93.333L95.3959 106.186C95.9062 107.538 97.446 108.328 98.9697 107.752C100.403 107.211 101.126 105.603 100.585 104.17C100.575 104.142 89.5642 74.947 89.5525 74.9187ZM81.4322 95.2383L86.3586 82.3041L91.2399 95.2383H81.4322Z" fill="#12020A"></path><path d="M63.5117 72.7949C61.9799 72.7949 60.7383 74.0369 60.7383 75.5684V87.1941H46.8711V75.5684C46.8711 74.0369 45.6291 72.7949 44.0977 72.7949C42.5659 72.7949 41.3242 74.0369 41.3242 75.5684V105.14C41.3242 106.671 42.5659 107.913 44.0977 107.913C45.6291 107.913 46.8711 106.671 46.8711 105.14V92.7409H60.7383V105.14C60.7383 106.671 61.9799 107.913 63.5117 107.913C65.0432 107.913 66.2852 106.671 66.2852 105.14V75.5684C66.2852 74.0369 65.0432 72.7949 63.5117 72.7949Z" fill="#12020A"></path><path d="M103.561 67.2031C105.092 67.2031 106.334 65.9614 106.334 64.4297C106.334 62.898 105.092 61.6562 103.561 61.6562C102.029 61.6562 100.787 62.898 100.787 64.4297C100.787 65.9614 102.029 67.2031 103.561 67.2031Z" fill="#12020A"></path><path d="M87.7627 60.0156L89.8256 65.4457C90.3436 66.8189 91.9004 67.6004 93.3997 67.0341C94.8327 66.4935 95.5558 64.8888 95.0149 63.4555L84.0116 34.297C84.0022 34.2717 83.9922 34.2044 83.9819 34.1794C83.4486 32.8825 82.1989 32.0039 80.7975 32.0039C80.7964 32.0039 80.795 32.0039 80.7939 32.0039C79.4138 32.0039 78.1131 32.8662 77.5853 34.2679L66.4813 63.4331C65.936 64.8644 66.6543 66.4722 68.0857 67.0172C69.5173 67.5624 71.1196 66.8827 71.6645 65.4513L73.7493 60.0156H87.7627ZM80.788 41.5348L85.6693 54.469H75.8619L80.788 41.5348Z" fill="#12020A"></path><path d="M55.1914 51.9712V64.4289C55.1914 65.9604 56.4331 67.2024 57.9648 67.2024C59.4963 67.2024 60.7383 65.9604 60.7383 64.4289V34.8574C60.7383 33.3259 59.4963 32.084 57.9648 32.084C56.4331 32.084 55.1914 33.3259 55.1914 34.8574V46.4243H41.3242V34.8574C41.3242 33.3259 40.0823 32.084 38.5508 32.084C37.019 32.084 35.7773 33.3259 35.7773 34.8574V64.4289C35.7773 65.9604 37.019 67.2024 38.5508 67.2024C40.0823 67.2024 41.3242 65.9604 41.3242 64.4289V51.9712H55.1914Z" fill="#12020A"></path><path d="M103.449 56.0634C104.981 56.0634 106.223 54.8215 106.223 53.29V34.8574C106.223 33.3259 104.981 32.084 103.449 32.084C101.918 32.084 100.676 33.3259 100.676 34.8574V53.29C100.676 54.8217 101.918 56.0634 103.449 56.0634Z" fill="#12020A"></path><path d="M141.19 68.0404L129.758 56.5836L135.1 41.3034C135.605 39.8587 134.842 38.2754 133.396 37.77L118.116 32.4298L116.298 16.3463C116.126 14.8259 114.754 13.7335 113.234 13.9016L97.147 15.6954L88.528 1.99297C87.7123 0.696387 86.0008 0.306442 84.704 1.12183L70.9999 9.73973L57.2955 1.12155C55.9989 0.305887 54.2868 0.695832 53.4715 1.99269L44.8527 15.6951L28.7654 13.9013C27.2431 13.7321 25.8741 14.8257 25.7021 16.3461L23.8839 32.4295L8.60306 37.7698C7.15838 38.2745 6.3943 39.8573 6.8999 41.3031L12.241 56.5834L0.809982 68.0404C-0.269994 69.1232 -0.269994 70.8757 0.809982 71.9585L12.2413 83.4153L6.90017 98.6955C6.39485 100.14 7.15727 101.724 8.60334 102.229L23.8839 107.569L25.7021 123.653C25.8741 125.173 27.2483 126.269 28.7654 126.097L44.8527 124.304L53.4717 138.006C54.2874 139.303 55.9997 139.692 57.2958 138.877L70.9999 130.259L84.7042 138.877C86.0006 139.693 87.7129 139.303 88.5283 138.006L97.147 124.304L113.234 126.098C114.757 126.267 116.126 125.173 116.298 123.653L118.116 107.569L133.397 102.229C134.841 101.724 135.606 100.142 135.1 98.6958L129.759 83.4155L141.19 71.9588C142.27 70.8757 142.27 69.1232 141.19 68.0404ZM124.603 80.7292C123.852 81.4825 123.597 82.599 123.948 83.6033L128.948 97.9076L114.641 102.908C113.635 103.259 112.92 104.156 112.8 105.214L111.097 120.278L96.0326 118.598C94.9737 118.48 93.9437 118.977 93.3776 119.877L85.3091 132.705L72.4756 124.634C71.5731 124.067 70.4255 124.067 69.523 124.634L56.6895 132.705L48.6207 119.877C48.0585 118.984 47.0326 118.48 45.9657 118.598L30.9021 120.278L29.1992 105.214C29.0794 104.156 28.3641 103.259 27.3582 102.908L13.0517 97.9076L18.0513 83.6033C18.4027 82.599 18.1481 81.4822 17.3968 80.7292L6.69106 69.9993L17.3968 59.2694C18.1481 58.5162 18.4027 57.3996 18.0513 56.3953L13.0517 42.0911L27.359 37.0911C28.3649 36.7394 29.0802 35.8431 29.2 34.7844L30.9032 19.7211L45.9668 21.4009C47.0254 21.5185 48.0555 21.0218 48.6218 20.1213L56.6903 7.29356L69.5238 15.3643C70.4263 15.932 71.5742 15.932 72.4764 15.3643L85.31 7.29356L93.3787 20.1213C93.9453 21.0218 94.9776 21.5177 96.0337 21.4009L111.098 19.7211L112.801 34.7844C112.92 35.8431 113.636 36.7397 114.642 37.0911L128.949 42.0911L123.949 56.3953C123.598 57.3996 123.852 58.5162 124.604 59.2694L135.309 69.9993L124.603 80.7292Z" fill="#12020A"></path></svg>`;
}
function DataGatheringDetails($$payload, $$props) {
  push();
  let { laughData } = $$props;
  const videoStartTime = 19 * 60 + 22;
  const videoEndTime = 20 * 60 + 55;
  const videoLaughs = laughData.filter((d) => +d.eventTimeSeconds >= videoStartTime && +d.eventTimeSeconds <= videoEndTime);
  const fiveSecondsArray = range(videoStartTime + 3, videoEndTime + 10, 5);
  let innerWidth = 1600;
  let videoWidth = 800;
  let sideSpacing = (innerWidth - 1280) / 2 + 16 + 25;
  let laughsBarScale = scaleLinear().domain([videoStartTime, videoEndTime + 5]).range([0, videoWidth]);
  let laughWidth = laughsBarScale(videoStartTime + 5);
  const each_array = ensure_array_like(fiveSecondsArray);
  const each_array_1 = ensure_array_like(videoLaughs);
  $$payload.out += `<div class="w-screen"${attr_style(`margin-left: ${stringify(-25)}px;`)}><div class="container py-96"><div id="data-gathering-1" class="grid grid-cols-12 mb-48"><div class="col-span-10 md:col-span-6 relative"><div class="mask"><div class="text">It doesn’t take a genius to recognise the main goal of a sitcom is to offer situational comedy. It also stands to reason that a reliable indicator of a situation comedy being funny is to measure the reaction of an audience’s laughter through the laugh track. These days it is rare to find laugh tracks on modern sitcoms, but Seinfeld had one and with the show always being filmed in front of a <span class="highlight pl-1">live studio audience</span> - with any scenes filmed outside played back in the studio - and so the laughter heard is authentic.</div></div> <div class="absolute w-20 md:w-32 h-20 md:h-32"${attr_style(`top:-68px; right: ${stringify(-130)}px;`)}>`;
  Laugh($$payload, {});
  $$payload.out += `<!----></div></div> <div class="col-span-2 md:col-span-6"></div> <div class="col-span-2 md:col-span-4"></div> <div class="col-span-10 md:col-span-8 mt-8"${attr_style(`margin-right: -${stringify(sideSpacing)}px;`)}><img class="data-gathering-parallax" src="https://amdufour.github.io/hosted-data/apis/images/audience.jpg" alt="Jerry Seinfeld talking with the audience during taping."/> <div class="number text pt-2" style="background-color: rgba(249, 245, 247, 0.6);">Source: <a href="https://www.facebook.com/story.php?story_fbid=539096318663826&amp;id=100076903884453" target="_blank">The Seinfeld World</a></div></div></div> <div id="data-gathering-2" class="grid grid-cols-12 mb-48"><div class="col-auto md:col-span-1"></div> <div class="col-span-7" style="margin-right: -50px;"><img class="data-gathering-parallax" src="https://amdufour.github.io/hosted-data/apis/images/data_gathering.png" alt="Data spreadsheet and tv during data gathering."/></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="col-span-10 md:col-span-4 relative z-10 mask" style="background-color: rgba(249, 245, 247, 0.6);"><p class="text">We gathered all the data for this project by watching every Seinfeld episode and <span class="highlight">manually logging</span> the events and classifications established to serve the intention of the analysis.</p> <p class="text">Laughter has a spectrum of levels, from the subtle smile characteristic of ‘inner’ laughter, through to more external titters, chuckles, chortles, and through to belly laughs or howls. To establish a standard measurement any laughter heard during the episodes counted as simply as laughter, regardless of whether it was loud or fleeting.</p></div></div> <div id="data-gathering-3" class="grid grid-cols-12"><div class="col-span-12 md:col-span-8 mask"><div class="text"><p>For consistency each distinct moment of laughter was allocated to distinct units of <span class="highlight">5-second durations</span>. When testing out the data collection approach over three sample episodes, the 5-second duration proved to be the most reliable and representative ‘average’ duration, from the gag’s delivery to the audience’s laughter subsiding.</p> <p>Occasionally, laughter would run for longer than 5 seconds, sometimes persisting for 10 and even 15 seconds. In these rare cases, each 5-second unit would count as a laughter moment.</p></div></div> <div class="col-span-12"${attr_style(`margin-left: ${stringify(0)}px; margin-right: ${stringify(0)}px;`)}><div class="relative video-container"><video id="demo-video" playsinline><source src="https://amdufour.github.io/hosted-data/apis/videos/MarineBiologist_edited.mp4" type="video/mp4"/></video> <div class="z-1 absolute bottom-0 left-0 right-0 top-0"${attr_style(`background: rgba(18, 2, 10, 0.3); width: ${stringify(videoWidth)}px;`)}></div> <div class="absolute z-10 bottom-0 left-0 right-0 top-0"${attr_style(`background-image: url('${stringify(tv_noise)}'); width: ${stringify(videoWidth)}px;`)}></div></div> <svg class="mt-8"${attr("width", videoWidth + 50)}${attr("height", 100)} style="margin-left: -25px;"><g transform="translate(25, 10)"><line${attr("x1", 0)}${attr("y1", 0)}${attr("x2", videoWidth)}${attr("y2", 0)} stroke="#928D90"></line><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let fiveSecconds = each_array[i];
    $$payload.out += `<g${attr("transform", `translate(${laughsBarScale(fiveSecconds)}, 0)`)}><line${attr("x1", 0)}${attr("y1", 0)}${attr("x2", 0)}${attr("y2", i % 2 !== 0 ? 5 : 3)} stroke="#928D90"></line>`;
    if (i % 2 !== 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<text class="number" y="22" text-anchor="middle" fill="#928D90"${attr_style(`font-size: ${stringify(15)}px;`)}>${escape_html(`${Math.floor(fiveSecconds / 60)}:${fiveSecconds - Math.floor(fiveSecconds / 60) * 60 === 0 ? "00" : fiveSecconds - Math.floor(fiveSecconds / 60) * 60}`)}</text>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></g>`;
  }
  $$payload.out += `<!--]--><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let laugh = each_array_1[$$index_1];
    $$payload.out += `<g${attr_class(`laugh-icon laugh-icon-${laugh.eventTimeSeconds}`)}${attr("transform", `translate(${laughsBarScale(+laugh.eventTimeSeconds)}, 30)`)}>`;
    Laugh($$payload, {
      width: laughWidth - 20,
      height: laughWidth - 20
    });
    $$payload.out += `<!----></g>`;
  }
  $$payload.out += `<!--]--><circle${attr("cx", laughsBarScale(videoEndTime + 5))}${attr("cy", 0)}${attr("r", 10)} fill="#E71D80"></circle></g></svg></div></div></div></div>`;
  pop();
}
const formatTime = (timeString) => {
  const min = +timeString.slice(0, 2);
  const sec = +timeString.slice(3);
  return min * 60 + sec;
};
function More($$payload) {
  $$payload.out += `<svg width="33" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_937_995)"><path d="M16 11.5V21.5M21 16.5H11M31 16.5C31 18.4698 30.612 20.4204 29.8582 22.2403C29.1044 24.0601 27.9995 25.7137 26.6066 27.1066C25.2137 28.4995 23.5601 29.6044 21.7403 30.3582C19.9204 31.112 17.9698 31.5 16 31.5C14.0302 31.5 12.0796 31.112 10.2597 30.3582C8.43986 29.6044 6.78628 28.4995 5.3934 27.1066C4.00052 25.7137 2.89563 24.0601 2.14181 22.2403C1.38799 20.4204 1 18.4698 1 16.5C1 12.5218 2.58035 8.70644 5.3934 5.8934C8.20644 3.08035 12.0218 1.5 16 1.5C19.9782 1.5 23.7936 3.08035 26.6066 5.8934C29.4196 8.70644 31 12.5218 31 16.5Z" stroke="#12020A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_937_995"><rect width="32" height="32" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>`;
}
const isEpisodeValid = (season, episode) => {
  if (season === 6 && episode === 14 || season === 6 && episode === 15 || season === 9 && episode === 21 || season === 9 && episode === 22) {
    return false;
  } else {
    return true;
  }
};
const getRandom = (arr, n) => {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len) throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};
const getRandomEpisode = () => {
  const newSeason = Math.floor(Math.random() * 9) + 1;
  const numEpisodes = seasons.find((s) => s.seasonNum === newSeason)?.numEpisodes;
  if (numEpisodes) {
    const newEpisode = Math.floor(Math.random() * numEpisodes) + 1;
    if (isEpisodeValid(newSeason, newEpisode)) {
      return { newSeason, newEpisode };
    } else {
      getRandomEpisode();
    }
  } else {
    getRandomEpisode();
  }
};
const UpDownCarets = "data:image/svg+xml,%3csvg%20width='28'%20height='27'%20viewBox='0%200%2028%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20stroke='%23F9F5F7'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M8.59216%2016.875L14.2172%2022.5L19.8422%2016.875'%20/%3e%3cpath%20d='M8.59216%2010.125L14.2172%204.5L19.8422%2010.125'%20/%3e%3c/g%3e%3c/svg%3e";
function Dropdown($$payload, $$props) {
  push();
  let { options, value = void 0, prefix } = $$props;
  const each_array = ensure_array_like(options);
  $$payload.out += `<div class="dropdown svelte-1jrpx8c"><select${attr_style(`background-image: url(${stringify(UpDownCarets)});`)} class="svelte-1jrpx8c"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$payload.out += `<option${attr("value", option)}>${escape_html(prefix)}${escape_html(option)}</option>`;
  }
  $$payload.out += `<!--]--></select></div>`;
  bind_props($$props, { value });
  pop();
}
function Prev($$payload) {
  $$payload.out += `<svg width="30" height="51" viewBox="0 0 30 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.9336 49.5695C27.7545 49.7491 27.5417 49.8916 27.3074 49.9888C27.0732 50.086 26.8221 50.136 26.5685 50.136C26.3149 50.136 26.0637 50.086 25.8295 49.9888C25.5953 49.8916 25.3825 49.7491 25.2034 49.5695L2.06644 26.4326C1.88689 26.2535 1.74443 26.0407 1.64723 25.8065C1.55003 25.5722 1.5 25.3211 1.5 25.0675C1.5 24.8139 1.55003 24.5628 1.64723 24.3285C1.74443 24.0943 1.88689 23.8815 2.06644 23.7024L25.2034 0.565479C25.5654 0.203437 26.0565 4.53268e-05 26.5685 4.53715e-05C27.0805 4.54163e-05 27.5715 0.203437 27.9336 0.565479C28.2956 0.927521 28.499 1.41855 28.499 1.93056C28.499 2.44256 28.2956 2.9336 27.9336 3.29564L6.15783 25.0675L27.9336 46.8394C28.1131 47.0185 28.2556 47.2312 28.3528 47.4655C28.45 47.6997 28.5 47.9509 28.5 48.2045C28.5 48.4581 28.45 48.7092 28.3528 48.9434C28.2556 49.1777 28.1131 49.3904 27.9336 49.5695Z" fill="#F9F5F7"></path></svg>`;
}
function Next($$payload) {
  $$payload.out += `<svg width="30" height="51" viewBox="0 0 30 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06644 0.566446C2.24555 0.386891 2.45831 0.244433 2.69256 0.147233C2.9268 0.0500331 3.17792 0 3.43152 0C3.68513 0 3.93625 0.0500331 4.17049 0.147233C4.40474 0.244433 4.6175 0.386891 4.79661 0.566446L27.9336 23.7034C28.1131 23.8825 28.2556 24.0953 28.3528 24.3295C28.45 24.5638 28.5 24.8149 28.5 25.0685C28.5 25.3221 28.45 25.5732 28.3528 25.8074C28.2556 26.0417 28.1131 26.2545 27.9336 26.4336L4.79661 49.5705C4.43456 49.9326 3.94353 50.1359 3.43152 50.1359C2.91952 50.1359 2.42849 49.9326 2.06644 49.5705C1.7044 49.2085 1.50101 48.7174 1.50101 48.2054C1.50101 47.6934 1.7044 47.2024 2.06644 46.8403L23.8422 25.0685L2.06644 3.29661C1.88689 3.1175 1.74443 2.90474 1.64723 2.6705C1.55003 2.43625 1.5 2.18514 1.5 1.93153C1.5 1.67792 1.55003 1.4268 1.64723 1.19256C1.74443 0.958314 1.88689 0.745548 2.06644 0.566446Z" fill="#F9F5F7"></path></svg>`;
}
function Random($$payload) {
  $$payload.out += `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="21" fill="#F9F5F7"></rect><path d="M10.1667 27.5H11.6833C13.0917 27.5 14.3917 26.85 15.2583 25.6583L21.8667 16.3417C22.625 15.15 24.0333 14.5 25.4417 14.5H31.8333" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.5 10.1667L31.8333 14.5001L27.5 18.8334" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.1667 14.5H12.225C13.85 14.5 15.3667 15.475 16.125 16.8833" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31.8333 27.5H25.4417C24.0333 27.5 22.625 26.7417 21.8667 25.55L21.325 24.6833" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.5 23.1667L31.8333 27.5001L27.5 31.8334" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
}
function EpisodeControls($$payload, $$props) {
  push();
  let {
    episodes,
    currentSeason = void 0,
    currentEpisode = void 0
  } = $$props;
  const seasonNums = seasons.map((s) => s.seasonNum);
  let availableEpisodes = episodes.filter((e) => e.season === currentSeason).map((e) => e.episode);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div${attr_style(`width: ${stringify("100vw")}; background-color: #E71D80;`)}><div class="flex flex-nowrap items-center justify-between px-4 py-3"${attr_style(`max-width: ${stringify(600)}px; margin-left: ${stringify(0)}px;`)}><button class="my-1"${attr("disabled", currentSeason === 1 && currentEpisode === 1, true)}${attr_style(`opacity: ${stringify(currentSeason === 1 && currentEpisode === 1 ? 0.3 : 1)};`)}>`;
    Prev($$payload2);
    $$payload2.out += `<!----></button> <div class="my-1">`;
    Dropdown($$payload2, {
      options: seasonNums,
      prefix: "s",
      get value() {
        return currentSeason;
      },
      set value($$value) {
        currentSeason = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div class="my-1">`;
    Dropdown($$payload2, {
      options: availableEpisodes,
      prefix: "e",
      get value() {
        return currentEpisode;
      },
      set value($$value) {
        currentEpisode = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <button class="my-1"${attr("disabled", currentSeason === 9 && currentEpisode === 24, true)}${attr_style(`opacity: ${stringify(currentSeason === 9 && currentEpisode === 24 ? 0.3 : 1)};`)}>`;
    Next($$payload2);
    $$payload2.out += `<!----></button> <div class="flex items-center" style="color: #F9F5F7; font-weight: 600;">`;
    {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="small">OR</div>`;
    }
    $$payload2.out += `<!--]--> <button class="ml-1 flex items-center lg:ml-5"><div class="flex items-center justify-center">`;
    Random($$payload2);
    $$payload2.out += `<!----></div> `;
    {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="small ml-2 text-left leading-tight" style="width: 120px;">Go to a random episode</div>`;
    }
    $$payload2.out += `<!--]--></button></div></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { currentSeason, currentEpisode });
  pop();
}
function EpisodeDetails($$payload, $$props) {
  push();
  let {
    episodes = null,
    currentSeason = void 0,
    currentEpisode = void 0,
    episodeInfo
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="relative"${attr_style(`display: ${stringify("block")}; z-index: ${stringify(0)};`)}>`;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div${attr_style(`margin-top: ${stringify(0)}px;`)}>`;
    if (episodes) {
      $$payload2.out += "<!--[-->";
      EpisodeControls($$payload2, {
        episodes,
        get currentSeason() {
          return currentSeason;
        },
        set currentSeason($$value) {
          currentSeason = $$value;
          $$settled = false;
        },
        get currentEpisode() {
          return currentEpisode;
        },
        set currentEpisode($$value) {
          currentEpisode = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="mx-4">`;
    if (!episodes) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="ml-4" style="margin-top: 42px; margin-bottom: -16px; font-weight: 600;">season 5 episode 14</div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="flex items-center justify-between"${attr_style(`margin-left: ${stringify(0)}px;`)}><h2${attr_style(`overflow: ${stringify("hidden")}; white-space: ${stringify("nowrap")}`)} class="svelte-1vauw6j">${escape_html(episodeInfo.title)}</h2> `;
    {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<button class="ml-4 mt-2">`;
      {
        $$payload2.out += "<!--[!-->";
        More($$payload2);
      }
      $$payload2.out += `<!--]--></button>`;
    }
    $$payload2.out += `<!--]--></div> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { currentSeason, currentEpisode });
  pop();
}
const characters = [
  { id: "JERRY", label: "Jerry", color: "#5FA8D3" },
  { id: "GEORGE", label: "George", color: "#EB6447" },
  { id: "ELAINE", label: "Elaine", color: "#FBBA3A" },
  { id: "KRAMER", label: "Kramer", color: "#83C8C3" },
  { id: "Love interest", label: "Love interest", color: "#B3478B" },
  { id: "Friend/Acquaintance", label: "Friend", color: "#B3478B" },
  { id: "Neighbour", label: "Neighbour", color: "#B3478B" },
  { id: "Work colleague", label: "Colleague", color: "#B3478B" },
  { id: "Jerry's family", label: "Jerry's family", color: "#835330" },
  { id: "George's family", label: "George's family", color: "#835330" },
  { id: "Elaine's family", label: "Elaine's family", color: "#835330" },
  { id: "Kramer's family", label: "Kramer's family", color: "#835330" },
  { id: "Other", label: "Other persons", color: "#5443B0" },
  { id: "The situation", label: "The situation", color: "#5443B0" }
];
const mainCharacterTiles = [
  { id: "main_char_1", name: "Jerry", thumbnail: "Jerry1.jpeg", video: "Jerry1.mp4", season: 5, episode: 18, episodeTitle: "The Raincoats" },
  { id: "main_char_2", name: "Jerry", thumbnail: "Jerry2.jpeg", video: "Jerry2.mp4", season: 5, episode: 2, episodeTitle: "The Puffy Shirt" },
  { id: "main_char_3", name: "Jerry", thumbnail: "Jerry3.jpeg", video: "Jerry3.mp4", season: 1, episode: 5, episodeTitle: "Stock Tip" },
  { id: "main_char_4", name: "George", thumbnail: "George1.jpeg", video: "George1.mp4", season: 7, episode: 20, episodeTitle: "The Bottle Deposit" },
  { id: "main_char_5", name: "George", thumbnail: "George2.jpeg", video: "George2.mp4", season: 8, episode: 22, episodeTitle: "The Summer of George" },
  { id: "main_char_6", name: "George", thumbnail: "George3.jpeg", video: "George3.mp4", season: 7, episode: 16, episodeTitle: "The Doll" },
  { id: "main_char_7", name: "Elaine", thumbnail: "Elaine1.jpeg", video: "Elaine1.mp4", season: 2, episode: 5, episodeTitle: "The Apartment" },
  { id: "main_char_8", name: "Elaine", thumbnail: "Elaine2.jpeg", video: "Elaine2.mp4", season: 4, episode: 10, episodeTitle: "The Contest" },
  { id: "main_char_9", name: "Elaine", thumbnail: "Elaine3.jpeg", video: "Elaine3.mp4", season: 2, episode: 3, episodeTitle: "The Jacket" },
  { id: "main_char_10", name: "Kramer", thumbnail: "Kramer1.jpeg", video: "Kramer1.mp4", season: 4, episode: 3, episodeTitle: "The Pitch" },
  { id: "main_char_11", name: "Kramer", thumbnail: "Kramer2.jpeg", video: "Kramer2.mp4", season: 8, episode: 8, episodeTitle: "Chicken Roaster" },
  { id: "main_char_12", name: "Kramer", thumbnail: "Kramer3.jpeg", video: "Kramer3.mp4", season: 5, episode: 19, episodeTitle: "The Fire" }
];
const supportingCharacterTiles = [
  { id: "supp_char_1", name: "Susan Ross", category: "Love interest", thumbnail: "25.GeorgeSusanPrenup-min.jpg", video: "25.GeorgeSusanPrenup.mp4", season: 7, episode: 22, episodeTitle: "The Invitations" },
  { id: "supp_char_2", name: "Puddy", category: "Love interest", thumbnail: "9.Puddy-min.jpg", video: "9.Puddy.mp4", season: 6, episode: 22, episodeTitle: "The Face Painter" },
  { id: "supp_char_3", name: "Elaine's friends", category: "Friend", thumbnail: "16.ElaineFriends-min.jpg", video: "16.ElaineFriends.mp4", season: 8, episode: 2, episodeTitle: "The Soul Mate" },
  { id: "supp_char_4", name: "Bryan Cranston", category: "Friend", thumbnail: "28.FriendCranston-min.jpg", video: "28.FriendCranston.mp4", season: 6, episode: 8, episodeTitle: "The Mom and Pop Store" },
  { id: "supp_char_5", name: "Newman", category: "Neighbour", thumbnail: "4a.Newman-min.jpg", video: "4a.Newman.mp4", season: 4, episode: 3, episodeTitle: "The Pitch" },
  { id: "supp_char_6", name: "Mr. Pitt", category: "Colleague", thumbnail: "27.ElaineColleague-min.jpg", video: "27.ElaineColleague.mp4", season: 6, episode: 8, episodeTitle: "The Mom and Pop Store" },
  { id: "supp_char_7", name: "Kenny Bania", category: "Colleague", thumbnail: "37b.Bania-min.jpg", video: "37b.Bania.mp4", season: 6, episode: 7, episodeTitle: "The Soup" },
  { id: "supp_char_8", name: "Helen and Morty Seinfeld", category: "Jerry's family", thumbnail: "36.JerrysFamily-min.jpg", video: "36.JerrysFamily.mp4", season: 9, episode: 15, episodeTitle: "The Wizard" },
  { id: "supp_char_9", name: "Uncle Leo", category: "Jerry's family", thumbnail: "35b.UncleLeo-min.jpg", video: "35b.UncleLeo.mp4", season: 2, episode: 2, episodeTitle: "The Pony Remark" },
  { id: "supp_char_10", name: "Estelle and Frank Costanza", category: "George's family", thumbnail: "22.Costanzas-min.jpg", video: "22.Costanzas.mp4", season: 5, episode: 18, episodeTitle: "The Raincoats" },
  { id: "supp_char_11", name: "Yev Kassem", category: "Other persons", thumbnail: "10.SoupNazi-min.jpg", video: "10.SoupNazi.mp4", season: 7, episode: 6, episodeTitle: "The Soup Nazi" },
  { id: "supp_char_12", name: "Jackie Chiles", category: "Other persons", thumbnail: "12a.JackieChiles-min.jpg", video: "12a.JackieChiles.mp4", season: 9, episode: 23, episodeTitle: "The Finale" }
];
const getCharacterId = (sonificationId) => {
  switch (sonificationId) {
    case "Jerry":
      return ["JERRY"];
    case "George":
      return ["GEORGE"];
    case "Elaine":
      return ["ELAINE"];
    case "Kramer":
      return ["KRAMER"];
    case "FNC":
      return ["Friend/Acquaintance", "Neighbour", "Work colleague"];
    case "LoveInterest":
      return ["Love interest"];
    case "Families":
      return ["Jerry's family", "George's family", "Elaine's family", "Kramer's family"];
    case "Situation":
      return ["The situation"];
    default:
      return "Other";
  }
};
const getLocationId = (sonificationId) => {
  switch (sonificationId) {
    case "CharacterHome":
      return ["Jerry's home", "George's home", "Elaine's home", "Kramer's home"];
    case "Diner":
      return ["Diner"];
    case "Leisure":
      return ["Place of leisure"];
    case "OtherFamilyHome":
      return ["Other family home"];
    case "Outside":
      return ["Outside"];
    case "Transport":
      return ["Transport"];
    case "Workplace":
      return ["Workplace"];
    default:
      return ["Other location"];
  }
};
const JerryIcon = "/_app/immutable/assets/JerryIcon.CWxgjMvj.jpg";
const GeorgeIcon = "/_app/immutable/assets/GeorgeIcon.F9EVhRXZ.jpg";
const ElaineIcon = "/_app/immutable/assets/ElaineIcon.C4_nGvvx.jpg";
const KramerIcon = "/_app/immutable/assets/KramerIcon.u9mQvZjQ.jpg";
const LoverInterestIcon = "/_app/immutable/assets/LoveInterestIcon.rUzzO44U.jpg";
const FriendIcon = "/_app/immutable/assets/FriendIcon.gzJWnkEH.jpg";
const NeighbourIcon = "/_app/immutable/assets/NeighbourIcon.DbFgxVL_.jpg";
const ColleagueIcon = "/_app/immutable/assets/ColleagueIcon.CZ3Di25P.jpg";
const JerryFamilyIcon = "/_app/immutable/assets/JerryFamilyIcon.DQguu6y4.jpg";
const GeorgeFamilyIcon = "/_app/immutable/assets/GeorgeFamilyIcon.DgHR8fCo.jpg";
const ElaineFamilyIcon = "/_app/immutable/assets/ElaineFamilyIcon.C20bJseD.jpg";
const KramerFamilyIcon = "/_app/immutable/assets/KramerFamilyIcon.Cj-rYyuv.jpg";
const OtherPersonIcon = "/_app/immutable/assets/OtherPersonIcon.BQPh4vNa.jpg";
const getCharacterImagePath = (id) => {
  switch (id) {
    case "JERRY":
      return JerryIcon;
    case "GEORGE":
      return GeorgeIcon;
    case "ELAINE":
      return ElaineIcon;
    case "KRAMER":
      return KramerIcon;
    case "Love interest":
      return LoverInterestIcon;
    case "Friend/Acquaintance":
      return FriendIcon;
    case "Neighbour":
      return NeighbourIcon;
    case "Work colleague":
      return ColleagueIcon;
    case "Jerry's family":
      return JerryFamilyIcon;
    case "George's family":
      return GeorgeFamilyIcon;
    case "Elaine's family":
      return ElaineFamilyIcon;
    case "Kramer's family":
      return KramerFamilyIcon;
    case "Other":
      return OtherPersonIcon;
    default:
      return null;
  }
};
function CharactersList($$payload, $$props) {
  push();
  let {
    labelsWidth,
    characters: characters2,
    yScale,
    isHover,
    hoveredCharacters,
    isPlaying
  } = $$props;
  const isHighlight = /* @__PURE__ */ (() => {
    return !isPlaying && !isHover ? false : true;
  })();
  const each_array = ensure_array_like(characters2);
  $$payload.out += `<ul class="relative z-10 shrink-0 pt-8"${attr_style(`width: ${stringify(labelsWidth)}px; background-color: #F9F5F7;`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let char = each_array[$$index];
    $$payload.out += `<li class="mask absolute w-full svelte-qag8a1"${attr_style(`top: ${stringify(yScale(char.id) + yScale.bandwidth() / 2 - 16)}px; right: 16px; opacity: ${stringify(!isHighlight || isHighlight && hoveredCharacters.includes(char.id) ? 1 : 0.2)}`)}><div class="catalog-character-label flex justify-end">`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="image h-8 w-8 rounded-full svelte-qag8a1"${attr_style(`background-image: url(${stringify(getCharacterImagePath(char.id))});`)}></div></div></li>`;
  }
  $$payload.out += `<!--]--></ul>`;
  pop();
}
function Scenes($$payload, $$props) {
  push();
  let {
    scenes,
    xScale,
    height,
    isNumbersUp = true,
    isHover,
    hoveredTime,
    isPlaying,
    playingScene
  } = $$props;
  const each_array = ensure_array_like(scenes);
  $$payload.out += `<g><!--[-->`;
  for (let j = 0, $$length = each_array.length; j < $$length; j++) {
    let scene = each_array[j];
    $$payload.out += `<rect${attr("x", xScale(scene.startTime))}${attr("y", 0)}${attr("width", xScale(scene.endTime) - xScale(scene.startTime))}${attr("height", height)}${attr("fill", j % 2 && !isHover && !isPlaying || isHover && hoveredTime >= scene.startTime && hoveredTime <= scene.endTime || isPlaying && playingScene === scene.sceneNum ? "#DDDBDC" : "#EEECED")}${attr("fill-opacity", !isHover && !isPlaying || isHover && hoveredTime >= scene.startTime && hoveredTime <= scene.endTime || isPlaying && playingScene === scene.sceneNum ? 0.7 : 0.2)} class="svelte-m1e7n9"></rect>`;
    if (xScale(scene.endTime) - xScale(scene.startTime) >= 20) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<text class="number svelte-m1e7n9"${attr("x", xScale(scene.startTime) + (xScale(scene.endTime) - xScale(scene.startTime)) / 2)}${attr("y", isNumbersUp ? 15 : height - 15)}${attr("fill-opacity", isHover && hoveredTime >= scene.startTime && hoveredTime <= scene.endTime || !isHover ? 1 : 0.2)} text-anchor="middle" dominant-baseline="middle">${escape_html(scene.sceneNum)}</text>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></g>`;
  pop();
}
function PresenceOnScreen($$payload, $$props) {
  push();
  let {
    characters: characters2,
    xScale,
    yScale,
    scenes,
    isHover,
    hoveredTime,
    isPlaying,
    playingScene
  } = $$props;
  const charactersData = (() => {
    const charactersArray = structuredClone(characters2);
    charactersArray.forEach((char) => {
      if (char.id !== "The situation") {
        char.momentsOnScreen = [];
        let startTime;
        let currentTime;
        let currentScene;
        if (char.timesOnScreen) {
          char.timesOnScreen.forEach((time, i) => {
            const scene = scenes.find((s) => time >= s.startTime && time < s.endTime).sceneNum;
            const addedTime = i === char.timesOnScreen.length - 1 ? 10 : 5;
            switch (true) {
              case i === 0:
                startTime = time;
                currentTime = time;
                currentScene = 1;
                break;
              case i === char.timesOnScreen.length - 1:
              case time - currentTime > 5:
              case scene > currentScene:
                char.momentsOnScreen.push({
                  startTime,
                  duration: currentTime - startTime + addedTime,
                  scene: currentScene
                });
                startTime = time;
                currentTime = time;
                break;
              case time - currentTime === 5:
                currentTime = time;
                break;
            }
            currentScene = scene;
          });
        }
      }
    });
    return charactersArray;
  })();
  const each_array = ensure_array_like(charactersData);
  $$payload.out += `<g><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let char = each_array[$$index_1];
    const each_array_1 = ensure_array_like(char.momentsOnScreen);
    $$payload.out += `<g${attr("transform", `translate(0, ${yScale(char.id)})`)}><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let moment = each_array_1[$$index];
      $$payload.out += `<rect class="catalog-character-on-screen svelte-il4s97"${attr("x", xScale(moment.startTime))}${attr("y", 0)}${attr("width", xScale(moment.duration))}${attr("height", yScale.bandwidth())}${attr("fill", char.color)}${attr("fill-opacity", !isHover && !isPlaying || isHover && hoveredTime >= moment.startTime && hoveredTime <= moment.startTime + moment.duration || isPlaying && playingScene === moment.scene ? 1 : 0.1)}></rect>`;
    }
    $$payload.out += `<!--]--></g>`;
  }
  $$payload.out += `<!--]--></g>`;
  pop();
}
function CausedLaughs($$payload, $$props) {
  push();
  let {
    characters: characters2,
    xScale,
    yScale,
    isHover,
    hoveredTime,
    isPlaying,
    playingScene,
    scenes
  } = $$props;
  let laughWidth = xScale(5);
  const playingSceneData = scenes.find((s) => s.sceneNum === playingScene);
  const each_array = ensure_array_like(characters2);
  $$payload.out += `<g><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let char = each_array[$$index_1];
    const each_array_1 = ensure_array_like(char.causedLaughs);
    $$payload.out += `<g${attr("transform", `translate(0, ${yScale(char.id)})`)}><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let laugh = each_array_1[$$index];
      $$payload.out += `<rect class="catalog-laugh-bar svelte-il4s97"${attr("x", xScale(laugh))}${attr("y", -10)}${attr("width", laughWidth)}${attr("height", yScale.bandwidth() + 20)}${attr("fill", char.color)}${attr("fill-opacity", !isHover && !isPlaying || isHover && hoveredTime >= laugh && hoveredTime <= laugh + laughWidth || isPlaying && laugh >= playingSceneData.startTime && laugh + laughWidth <= playingSceneData.endTime ? 1 : 0.2)} stroke="#F9F5F7"${attr("stroke-opacity", !isHover && !isPlaying || isHover && hoveredTime >= laugh && hoveredTime <= laugh + laughWidth || isPlaying && laugh >= playingSceneData.startTime && laugh + laughWidth <= playingSceneData.endTime ? 1 : 0)}></rect>`;
    }
    $$payload.out += `<!--]--></g>`;
  }
  $$payload.out += `<!--]--></g>`;
  pop();
}
function Characters($$payload, $$props) {
  push();
  let {
    width,
    labelsWidth,
    scenes,
    xScale,
    episodeData,
    isHover,
    hoveredPosition,
    hoveredTime,
    isPlaying,
    playingScene,
    sonificationCharactersData
  } = $$props;
  let innerWidth = 1200;
  const charactersOnScreen = (() => {
    const data = episodeData.filter((e) => e.eventCategory === "CHARACTERS");
    const charactersArray = characters.map((c) => {
      return {
        id: c.id,
        label: c.label,
        color: c.color,
        timesOnScreen: []
      };
    });
    data.forEach((d) => {
      charactersArray.find((c) => c.id === d.eventAttribute).timesOnScreen.push(+d.eventTimeSeconds);
    });
    const charactersOnScreen2 = charactersArray.filter((c) => c.timesOnScreen.length > 0);
    if (episodeData.find((d) => d.eventCategory === "CAUSES THE LAUGH" && d.eventAttribute === "The situation")) {
      charactersOnScreen2.push({
        id: "The situation",
        label: "The situation",
        color: "#5443B0"
      });
    }
    return charactersOnScreen2;
  })();
  const charactersCausedLaughs = (() => {
    const data = episodeData.filter((e) => e.eventCategory === "CAUSES THE LAUGH");
    const charactersArray = characters.map((c) => {
      return {
        id: c.id,
        label: c.label,
        color: c.color,
        causedLaughs: []
      };
    });
    data.forEach((d) => {
      charactersArray.find((c) => c.id === d.eventAttribute).causedLaughs.push(+d.eventTimeSeconds);
    });
    return charactersArray.filter((c) => c.causedLaughs.length > 0);
  })();
  const hoveredCharacters = (() => {
    let hoveredCharactersArray = [];
    if (isPlaying) {
      const playingChars = sonificationCharactersData.filter((d) => +d.SceneNumber === playingScene).map((d) => d.Character);
      playingChars.forEach((char) => {
        const ids = getCharacterId(char);
        hoveredCharactersArray = hoveredCharactersArray.concat(ids);
      });
    } else {
      const time = Math.floor(hoveredTime / 5) * 5;
      charactersOnScreen.forEach((char) => {
        if (char.timesOnScreen && char.timesOnScreen.includes(time)) {
          hoveredCharactersArray.push(char.id);
        }
      });
      const situationLaughs = charactersCausedLaughs.find((char) => char.id === "The situation")?.causedLaughs;
      if (situationLaughs && situationLaughs.includes(time)) {
        hoveredCharactersArray.push("The situation");
      }
    }
    return hoveredCharactersArray;
  })();
  const vizHeight = charactersOnScreen.length * 48 + 32;
  const yScale = scaleBand().domain(charactersOnScreen.map((char) => char.id)).range([32, vizHeight]).padding(0.6);
  $$payload.out += `<div class="flex">`;
  CharactersList($$payload, {
    labelsWidth,
    characters: charactersOnScreen,
    yScale,
    isHover,
    isPlaying,
    hoveredCharacters
  });
  $$payload.out += `<!----> <div class="flex-shrink-0"${attr_style(`max-width: ${stringify(innerWidth - 63)}px; overflow: scroll;`)}><svg${attr("width", width)}${attr("height", vizHeight)}${attr_style(`transform: translateX(${stringify(0)}px);`)}>`;
  Scenes($$payload, {
    scenes,
    xScale,
    height: vizHeight,
    isHover,
    hoveredTime,
    isPlaying,
    playingScene
  });
  $$payload.out += `<!---->`;
  PresenceOnScreen($$payload, {
    characters: charactersOnScreen,
    xScale,
    yScale,
    scenes,
    isHover,
    hoveredTime,
    isPlaying,
    playingScene
  });
  $$payload.out += `<!---->`;
  CausedLaughs($$payload, {
    characters: charactersCausedLaughs,
    xScale,
    yScale,
    isHover,
    hoveredTime,
    isPlaying,
    playingScene,
    scenes
  });
  $$payload.out += `<!---->`;
  if (isHover) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<line${attr("x1", hoveredPosition)}${attr("y1", 0)}${attr("x2", hoveredPosition)}${attr("y2", vizHeight)} stroke="#12020A"></line>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></svg></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function Timeline($$payload, $$props) {
  push();
  let {
    labelsWidth,
    xScale,
    episodeDuration
  } = $$props;
  const height = 40;
  const numMinutes = Math.ceil(episodeDuration / 60);
  let minutesArray = range(0, numMinutes + 1);
  const each_array = ensure_array_like(minutesArray);
  $$payload.out += `<svg${attr("width", xScale(numMinutes * 60) + 100)}${attr("height", height)}${attr_style(`margin-left: ${stringify(labelsWidth - 50)}px; transform: translateX(${stringify(0)}px);`)}><g transform="translate(50, 0)" stroke="#928D90"><line${attr("x1", 0)}${attr("y1", 0)}${attr("x2", xScale(numMinutes * 60))}${attr("y2", 0)}></line><line${attr("x1", 0)}${attr("y1", height)}${attr("x2", xScale(numMinutes * 60))}${attr("y2", 40)}></line><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let min = each_array[i];
    $$payload.out += `<line${attr("x1", xScale(min * 60))}${attr("y1", 0)}${attr("x2", xScale(min * 60))}${attr("y2", 5)}></line>`;
    if (i !== minutesArray.length - 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<line${attr("x1", xScale((min + 0.5) * 60))}${attr("y1", 0)}${attr("x2", xScale((min + 0.5) * 60))}${attr("y2", 3)}></line>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--><line${attr("x1", xScale(min * 60))}${attr("y1", height - 5)}${attr("x2", xScale(min * 60))}${attr("y2", height)}></line>`;
    if (i !== minutesArray.length - 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<line${attr("x1", xScale((min + 0.5) * 60))}${attr("y1", height - 3)}${attr("x2", xScale((min + 0.5) * 60))}${attr("y2", height)}></line>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
    if (min % 2 == 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<text class="number"${attr("x", xScale(min * 60))}${attr("y", height / 2 + 1)} text-anchor="middle" dominant-baseline="middle" fill="#928D90" stroke="none">${escape_html(`${min < 10 ? "0" : ""}${min}:00`)}</text>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></g></svg>`;
  pop();
}
const locations = [
  { id: "Jerry's home", label: "Jerry's home" },
  { id: "George's home", label: "George's home" },
  { id: "Elaine's home", label: "Elaine's home" },
  { id: "Kramer's home", label: "Kramer's home" },
  { id: "Other family home", label: "Family home" },
  { id: "Diner", label: "Diner" },
  { id: "Place of leisure", label: "Place of leisure" },
  { id: "Workplace", label: "Workplace" },
  { id: "Transport", label: "Transport" },
  { id: "Outside", label: "Outside" },
  { id: "Other location", label: "Other location" }
];
const locationsTiles = [
  { id: "location_1", name: "Jerry's home", thumbnail: "24a.Jerrys.jpeg", video: "24a.Jerrys.mp4", season: 7, episode: 21, episodeTitle: "The Wait Out" },
  { id: "location_2", name: "George's home", thumbnail: "33.GeorgeHome.jpeg", video: "33.GeorgeHome.mp4", season: 8, episode: 15, episodeTitle: "The Susie" },
  { id: "location_3", name: "Kramer's home", thumbnail: "34.Kramers.jpeg", video: "34.Kramers.mp4", season: 9, episode: 6, episodeTitle: "The Merv Griffin Show" },
  { id: "location_4", name: "Family home", thumbnail: "18.CostanzasHome.jpeg", video: "18.CostanzasHome.mp4", season: 8, episode: 12, episodeTitle: "The Money" },
  { id: "location_5", name: "Diner", thumbnail: "31a.TheDiner.jpeg", video: "31a.TheDiner.mp4", season: 4, episode: 10, episodeTitle: "The Contest" },
  { id: "location_6", name: "Place of leisure", thumbnail: "29b.Restaurant.jpeg", video: "29b.Restaurant.mp4", season: 6, episode: 11, episodeTitle: "The Switch" },
  { id: "location_7", name: "Workplace", thumbnail: "23.JerryStandup.jpeg", video: "23.JerryStandup.mp4", season: 1, episode: 5, episodeTitle: "Stock Tip" },
  { id: "location_8", name: "Transport", thumbnail: "21b.JerrysCar.jpeg", video: "21b.JerrysCar.mp4", season: 9, episode: 20, episodeTitle: "Puerto Rico Day" },
  { id: "location_9", name: "Transport", thumbnail: "20.KramerSubway.jpeg", video: "20.KramerSubway.mp4", season: 3, episode: 13, episodeTitle: "The Subway" },
  { id: "location_10", name: "Outside", thumbnail: "19.OutsideParkingSpace.jpeg", video: "19.OutsideParkingSpace.mp4", season: 3, episode: 21, episodeTitle: "The Parking Space" },
  { id: "location_11", name: "Other location", thumbnail: "30.Hospital.jpeg", video: "30.Hospital.mp4", season: 4, episode: 10, episodeTitle: "The Contest" },
  { id: "location_12", name: "Other location", thumbnail: "15.Newman.jpeg", video: "15.Newman.mp4", season: 8, episode: 2, episodeTitle: "The Soulmate" }
];
const JerryHome = "/_app/immutable/assets/JerryHome.CBp_ZRc9.svg";
const JerryHomeSmall = "/_app/immutable/assets/JerryHomeSmall.CcIUSd4l.svg";
const GeorgeHome = "/_app/immutable/assets/GeorgeHome.Bs_X2OsM.svg";
const GeorgeHomeSmall = "/_app/immutable/assets/GeorgeHomeSmall.DKBfXyUK.svg";
const ElaineHome = "/_app/immutable/assets/ElaineHome.CVoYU9td.svg";
const ElaineHomeSmall = "/_app/immutable/assets/ElaineHomeSmall.C-RqAldq.svg";
const KramerHome = "/_app/immutable/assets/KramerHome.CKbkCzCg.svg";
const KramerHomeSmall = "/_app/immutable/assets/KramerHomeSmall.tcTkGo0P.svg";
const FamilyHome = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2075%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20fill='%23F9F5F7'%20/%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20stroke='%2312020A'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.9688%2030.4687H16.4063C16.0587%2030.4687%2015.7524%2030.2383%2015.6555%2029.9039C15.5594%2029.5695%2015.6954%2029.2117%2015.9899%2029.0266L37.0837%2015.7453C37.3383%2015.5852%2037.6618%2015.5852%2037.9165%2015.7453L59.0102%2029.0266C59.3048%2029.2117%2059.4407%2029.5695%2059.3446%2029.9039C59.2477%2030.2383%2058.9415%2030.4687%2058.5938%2030.4687H57.0313V58.5938C57.0313%2059.025%2056.6813%2059.375%2056.2501%2059.375H18.7501C18.3188%2059.375%2017.9688%2059.025%2017.9688%2058.5938V30.4687ZM55.8868%2028.9062L37.5001%2017.3297L19.1133%2028.9062H55.8868ZM55.4688%2034.375V30.4687H19.5313V34.375H49.2188C49.6501%2034.375%2050.0001%2034.725%2050.0001%2035.1562C50.0001%2035.5875%2049.6501%2035.9375%2049.2188%2035.9375H19.5313V57.8125H21.8751V39.8437C21.8751%2039.4125%2022.2251%2039.0625%2022.6563%2039.0625H33.5938C34.0251%2039.0625%2034.3751%2039.4125%2034.3751%2039.8437V57.8125H55.4688V35.9375H52.3438C51.9126%2035.9375%2051.5626%2035.5875%2051.5626%2035.1562C51.5626%2034.725%2051.9126%2034.375%2052.3438%2034.375H55.4688ZM23.4376%2057.8125H32.8126V44.5313H23.4376V57.8125ZM32.8126%2042.9688V40.625H23.4376V42.9688H32.8126ZM53.1251%2053.125H37.5001C37.0688%2053.125%2036.7188%2052.775%2036.7188%2052.3438V42.9688C36.7188%2042.5375%2037.0688%2042.1875%2037.5001%2042.1875H53.1251C53.5563%2042.1875%2053.9063%2042.5375%2053.9063%2042.9688V52.3438C53.9063%2052.775%2053.5563%2053.125%2053.1251%2053.125ZM44.5391%2043.75H38.2813V46.875H44.5391V43.75ZM38.2813%2048.4375V51.5625H44.5391V48.4375H38.2813ZM52.3438%2046.875V43.75H46.1016V46.875H52.3438ZM46.1016%2051.5625H52.3438V48.4375H46.1016V51.5625ZM30.4688%2050C31.3313%2050%2032.0313%2050.7%2032.0313%2051.5625C32.0313%2052.425%2031.3313%2053.125%2030.4688%2053.125C29.6063%2053.125%2028.9063%2052.425%2028.9063%2051.5625C28.9063%2050.7%2029.6063%2050%2030.4688%2050ZM37.5001%2020.3125C39.2251%2020.3125%2040.6251%2021.7125%2040.6251%2023.4375C40.6251%2025.1625%2039.2251%2026.5625%2037.5001%2026.5625C35.7751%2026.5625%2034.3751%2025.1625%2034.3751%2023.4375C34.3751%2021.7125%2035.7751%2020.3125%2037.5001%2020.3125ZM37.5001%2021.875C36.6376%2021.875%2035.9376%2022.575%2035.9376%2023.4375C35.9376%2024.3%2036.6376%2025%2037.5001%2025C38.3626%2025%2039.0626%2024.3%2039.0626%2023.4375C39.0626%2022.575%2038.3626%2021.875%2037.5001%2021.875Z'%20fill='%2312020A'%20/%3e%3c/svg%3e";
const FamilyHomeSmall = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='29'%20height='29'%20rx='14.5'%20fill='%23F9F5F7'/%3e%3crect%20x='0.5'%20y='0.5'%20width='29'%20height='29'%20rx='14.5'%20stroke='%2312020A'/%3e%3cpath%20d='M6.21416%2011.9754L6.21413%2011.9753C6.16957%2011.8202%206.23258%2011.6542%206.36929%2011.5682L6.21416%2011.9754ZM6.21416%2011.9754C6.25909%2012.1305%206.40112%2012.2374%206.5625%2012.2374H7.1375M6.21416%2011.9754L7.1375%2012.2374M7.1375%2012.2374V23.4374C7.1375%2023.6375%207.29988%2023.7999%207.5%2023.7999H22.5C22.7001%2023.7999%2022.8625%2023.6375%2022.8625%2023.4374V12.2374H23.4375C23.5989%2012.2374%2023.7409%2012.1305%2023.7858%2011.9754L23.7859%2011.9753C23.8304%2011.8202%2023.7674%2011.6542%2023.6307%2011.5682L7.1375%2012.2374ZM14.8068%206.25574L6.36932%2011.5682H23.6307L15.1932%206.25574L15.1932%206.25572C15.075%206.18143%2014.925%206.18143%2014.8068%206.25572L14.8068%206.25574ZM7.81856%2011.5124L15%206.99088L22.1814%2011.5124H7.81856ZM7.8625%2012.2374H22.1375V13.6999H20.9375C20.7374%2013.6999%2020.575%2013.8623%2020.575%2014.0624C20.575%2014.2625%2020.7374%2014.4249%2020.9375%2014.4249H22.1375V23.0749H13.8V15.9374C13.8%2015.7373%2013.6376%2015.5749%2013.4375%2015.5749H9.0625C8.86238%2015.5749%208.7%2015.7373%208.7%2015.9374V23.0749H7.8625V14.4249H19.6875C19.8876%2014.4249%2020.05%2014.2625%2020.05%2014.0624C20.05%2013.8623%2019.8876%2013.6999%2019.6875%2013.6999H7.8625V12.2374ZM13.075%2017.8624V23.0749H9.425V17.8624H13.075ZM9.425%2016.2999H13.075V17.1374H9.425V16.2999ZM15%2021.2999H21.25C21.4501%2021.2999%2021.6125%2021.1375%2021.6125%2020.9374V17.1874C21.6125%2016.9873%2021.4501%2016.8249%2021.25%2016.8249H15C14.7999%2016.8249%2014.6375%2016.9873%2014.6375%2017.1874V20.9374C14.6375%2021.1375%2014.7999%2021.2999%2015%2021.2999ZM15.3625%2018.6999V17.5499H17.7656V18.6999H15.3625ZM17.7656%2020.5749H15.3625V19.4249H17.7656V20.5749ZM18.4906%2017.5499H20.8875V18.6999H18.4906V17.5499ZM20.8875%2019.4249V20.5749H18.4906V19.4249H20.8875ZM12.8625%2020.6249C12.8625%2020.2523%2012.5601%2019.9499%2012.1875%2019.9499C11.8149%2019.9499%2011.5125%2020.2523%2011.5125%2020.6249C11.5125%2020.9975%2011.8149%2021.2999%2012.1875%2021.2999C12.5601%2021.2999%2012.8625%2020.9975%2012.8625%2020.6249ZM16.3%209.37492C16.3%208.65731%2015.7176%208.07492%2015%208.07492C14.2824%208.07492%2013.7%208.65731%2013.7%209.37492C13.7%2010.0925%2014.2824%2010.6749%2015%2010.6749C15.7176%2010.6749%2016.3%2010.0925%2016.3%209.37492ZM14.425%209.37492C14.425%209.05754%2014.6826%208.79992%2015%208.79992C15.3174%208.79992%2015.575%209.05754%2015.575%209.37492C15.575%209.69231%2015.3174%209.94992%2015%209.94992C14.6826%209.94992%2014.425%209.69231%2014.425%209.37492Z'%20fill='%2312020A'%20stroke='%2312020A'%20stroke-width='0.1'/%3e%3c/svg%3e";
const Diner = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2075%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20fill='%23F9F5F7'%20/%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20stroke='%2312020A'%20/%3e%3cpath%20d='M27.8491%2034.6235H47.0259'%20stroke='%2312020A'%20stroke-width='1.5'%20stroke-linecap='round'%20/%3e%3cpath%20d='M34.9719%2049.4168H39.9031'%20stroke='%2312020A'%20stroke-width='1.5'%20stroke-linecap='round'%20/%3e%3cpath%20d='M37.4375%2034.6235L37.4375%2049.417'%20stroke='%2312020A'%20stroke-width='1.5'%20stroke-linecap='square'%20/%3e%3cpath%20d='M59.0504%2048.417V26.583C59.0504%2026.0307%2058.6027%2025.583%2058.0504%2025.583H55.8042C55.2519%2025.583%2054.8042%2026.0307%2054.8042%2026.583V39.7463C54.8042%2040.8508%2053.9087%2041.7463%2052.8042%2041.7463H47.4897C46.3852%2041.7463%2045.4897%2042.6417%2045.4897%2043.7463V48.417C45.4897%2048.9692%2045.9375%2049.417%2046.4897%2049.417H58.0504C58.6027%2049.417%2059.0504%2048.9692%2059.0504%2048.417Z'%20stroke='%2312020A'%20stroke-width='1.5'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M15.9498%2048.417V26.583C15.9498%2026.0307%2016.3975%2025.583%2016.9498%2025.583H19.1961C19.7484%2025.583%2020.1961%2026.0307%2020.1961%2026.583V39.7463C20.1961%2040.8508%2021.0915%2041.7463%2022.1961%2041.7463H27.5105C28.6151%2041.7463%2029.5105%2042.6417%2029.5105%2043.7463V48.417C29.5105%2048.9692%2029.0628%2049.417%2028.5105%2049.417H16.9498C16.3975%2049.417%2015.9498%2048.9692%2015.9498%2048.417Z'%20stroke='%2312020A'%20stroke-width='1.5'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M31.4104%2029.6923V33.8016H33.3281V29.6923H31.4104Z'%20fill='%2312020A'%20stroke='%2312020A'%20stroke-width='0.5'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M31.6843%2029.1444V29.6923H33.0541V29.1444H31.6843Z'%20stroke='%2312020A'%20stroke-width='0.5'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M32.6191%2028.3225C32.6191%2028.1845%2032.5072%2028.0725%2032.3691%2028.0725C32.2311%2028.0725%2032.1191%2028.1845%2032.1191%2028.3225L32.6191%2028.3225ZM32.1191%2028.3225L32.1191%2029.3225L32.6191%2029.3225L32.6191%2028.3225L32.1191%2028.3225Z'%20fill='%2312020A'%20/%3e%3cpath%20d='M34%2029.6923V33.8016H35.9177V29.6923H34Z'%20stroke='%2312020A'%20stroke-width='0.5'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M34.2739%2029.1444V29.6923H35.6437V29.1444H34.2739Z'%20stroke='%2312020A'%20stroke-width='0.5'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M35.2087%2028.3225C35.2087%2028.1844%2035.0968%2028.0725%2034.9587%2028.0725C34.8207%2028.0725%2034.7087%2028.1844%2034.7087%2028.3225L35.2087%2028.3225ZM34.7087%2028.3225L34.7087%2029.3225L35.2087%2029.3225L35.2087%2028.3225L34.7087%2028.3225Z'%20fill='%2312020A'%20/%3e%3cpath%20d='M37%2033.8017L37.274%2032.1579H38.0958L38.3698%2033.8017H37Z'%20fill='%2312020A'%20stroke='%2312020A'%20stroke-width='0.5'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M37.2739%2031.61V31.3361H38.0958V31.61H37.2739Z'%20stroke='%2312020A'%20stroke-width='0.5'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M39%2033.8017L39.274%2032.1579H40.0958L40.3698%2033.8017H39Z'%20stroke='%2312020A'%20stroke-width='0.5'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M39.2739%2031.61V31.3361H40.0958V31.61H39.2739Z'%20stroke='%2312020A'%20stroke-width='0.5'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const DinerSmall = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20fill='%23F9F5F7'/%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20stroke='%2312020A'/%3e%3cpath%20d='M10.5217%2013.6643H19.4203'%20stroke='%2312020A'%20stroke-linecap='round'/%3e%3cpath%20d='M13.8268%2020.5288H16.115'%20stroke='%2312020A'%20stroke-linecap='round'/%3e%3cpath%20d='M14.9711%2013.6643L14.9711%2020.5289'%20stroke='%2312020A'%20stroke-linecap='square'/%3e%3cpath%20d='M25%2019.5289V10.4544C25%209.91033%2024.5589%209.46924%2024.0148%209.46924C23.4707%209.46924%2023.0296%209.91033%2023.0296%2010.4544V15.9694C23.0296%2016.5217%2022.5819%2016.9694%2022.0296%2016.9694H19.7075C19.1552%2016.9694%2018.7075%2017.4172%2018.7075%2017.9694V19.5289C18.7075%2020.0812%2019.1552%2020.5289%2019.7075%2020.5289H24C24.5523%2020.5289%2025%2020.0812%2025%2019.5289Z'%20stroke='%2312020A'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.99999%2019.5289V10.4544C4.99999%209.91033%205.44108%209.46924%205.98519%209.46924C6.5293%209.46924%206.97039%209.91033%206.97039%2010.4544V15.9694C6.97039%2016.5217%207.4181%2016.9694%207.97039%2016.9694H10.2925C10.8448%2016.9694%2011.2925%2017.4172%2011.2925%2017.9694V19.5289C11.2925%2020.0812%2010.8448%2020.5289%2010.2925%2020.5289H5.99999C5.44771%2020.5289%204.99999%2020.0812%204.99999%2019.5289Z'%20stroke='%2312020A'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.1745%2011.376V13.2828H13.0644V11.376H12.1745Z'%20fill='%2312020A'%20stroke='%2312020A'%20stroke-width='0.25'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.3016%2011.1218V11.3761H12.9372V11.1218H12.3016Z'%20stroke='%2312020A'%20stroke-width='0.25'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.7445%2010.7405C12.7445%2010.6714%2012.6885%2010.6155%2012.6195%2010.6155C12.5505%2010.6155%2012.4945%2010.6714%2012.4945%2010.7405L12.7445%2010.7405ZM12.4945%2010.7405L12.4945%2011.2045L12.7445%2011.2045L12.7445%2010.7405L12.4945%2010.7405Z'%20fill='%2312020A'/%3e%3cpath%20d='M13.516%2011.3762V13.2831H14.4058V11.3762H13.516Z'%20stroke='%2312020A'%20stroke-width='0.25'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.6434%2011.1218V11.3761H14.279V11.1218H13.6434Z'%20stroke='%2312020A'%20stroke-width='0.25'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.0862%2010.7405C14.0862%2010.6714%2014.0303%2010.6155%2013.9612%2010.6155C13.8922%2010.6155%2013.8362%2010.6714%2013.8362%2010.7405L14.0862%2010.7405ZM13.8362%2010.7405L13.8362%2011.2045L14.0862%2011.2045L14.0862%2010.7405L13.8362%2010.7405Z'%20fill='%2312020A'/%3e%3cpath%20d='M15.4131%2013.283L15.5402%2012.5203H15.9216L16.0487%2013.283H15.4131Z'%20fill='%2312020A'%20stroke='%2312020A'%20stroke-width='0.25'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.5402%2012.266V12.1389H15.9216V12.266H15.5402Z'%20stroke='%2312020A'%20stroke-width='0.25'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3411%2013.283L16.4682%2012.5203H16.8496L16.9767%2013.283H16.3411Z'%20stroke='%2312020A'%20stroke-width='0.25'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.4683%2012.266V12.1389H16.8496V12.266H16.4683Z'%20stroke='%2312020A'%20stroke-width='0.25'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const PlaceOfLeisure = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2075%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20fill='%23F9F5F7'%20/%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20stroke='%2312020A'%20/%3e%3cpath%20d='M49.9999%2029.1667C51.105%2029.1667%2052.1648%2028.7277%2052.9462%2027.9463C53.7276%2027.1649%2054.1666%2026.1051%2054.1666%2025C54.1666%2023.8949%2053.7276%2022.8351%2052.9462%2022.0537C52.1648%2021.2723%2051.105%2020.8333%2049.9999%2020.8333C49.9999%2019.7283%2049.5609%2018.6685%2048.7795%2017.8871C47.9981%2017.1057%2046.9383%2016.6667%2045.8333%2016.6667C44.7282%2016.6667%2043.6684%2017.1057%2042.887%2017.8871C42.1056%2018.6685%2041.6666%2019.7283%2041.6666%2020.8333C41.6666%2019.7283%2041.2276%2018.6685%2040.4462%2017.8871C39.6648%2017.1057%2038.605%2016.6667%2037.4999%2016.6667C36.3948%2016.6667%2035.335%2017.1057%2034.5536%2017.8871C33.7722%2018.6685%2033.3333%2019.7283%2033.3333%2020.8333C33.3333%2019.7283%2032.8943%2018.6685%2032.1129%2017.8871C31.3315%2017.1057%2030.2717%2016.6667%2029.1666%2016.6667C28.0615%2016.6667%2027.0017%2017.1057%2026.2203%2017.8871C25.4389%2018.6685%2024.9999%2019.7283%2024.9999%2020.8333C23.8948%2020.8333%2022.835%2021.2723%2022.0536%2022.0537C21.2722%2022.8351%2020.8333%2023.8949%2020.8333%2025C20.8333%2026.1051%2021.2722%2027.1649%2022.0536%2027.9463C22.835%2028.7277%2023.8948%2029.1667%2024.9999%2029.1667'%20stroke='%2312020A'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M33.3333%2058.3333L31.25%2029.1667'%20stroke='%2312020A'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M41.6667%2058.3333L43.7501%2029.1667'%20stroke='%2312020A'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M54.1667%2029.1667C55.2083%2029.1667%2056.0417%2030%2055.8333%2031.25L50.4167%2056.25C50.2083%2057.2917%2048.9583%2058.3333%2047.9167%2058.3333H27.0833C25.8333%2058.3333%2024.7917%2057.5%2024.5833%2056.25L19.1667%2031.25C18.9583%2030%2019.7917%2029.1667%2020.8333%2029.1667H54.1667Z'%20stroke='%2312020A'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const PlaceOfLeisureSmall = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20fill='%23F9F5F7'/%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20stroke='%2312020A'/%3e%3cpath%20d='M20.25%2010.999C20.7141%2010.999%2021.1592%2010.8234%2021.4874%2010.5109C21.8156%2010.1983%2022%209.77438%2022%209.33236C22%208.89033%2021.8156%208.46641%2021.4874%208.15385C21.1592%207.84128%2020.7141%207.66569%2020.25%207.66569C20.25%207.22366%2020.0656%206.79974%2019.7374%206.48718C19.4092%206.17462%2018.9641%205.99902%2018.5%205.99902C18.0359%205.99902%2017.5908%206.17462%2017.2626%206.48718C16.9344%206.79974%2016.75%207.22366%2016.75%207.66569C16.75%207.22366%2016.5656%206.79974%2016.2374%206.48718C15.9092%206.17462%2015.4641%205.99902%2015%205.99902C14.5359%205.99902%2014.0908%206.17462%2013.7626%206.48718C13.4344%206.79974%2013.25%207.22366%2013.25%207.66569C13.25%207.22366%2013.0656%206.79974%2012.7374%206.48718C12.4092%206.17462%2011.9641%205.99902%2011.5%205.99902C11.0359%205.99902%2010.5908%206.17462%2010.2626%206.48718C9.93437%206.79974%209.75%207.22366%209.75%207.66569C9.28587%207.66569%208.84075%207.84128%208.51256%208.15385C8.18437%208.46641%208%208.89033%208%209.33236C8%209.77438%208.18437%2010.1983%208.51256%2010.5109C8.84075%2010.8234%209.28587%2010.999%209.75%2010.999'%20stroke='%2312020A'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13%2023.999L12%2010.999'%20stroke='%2312020A'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17%2023.999L18%2010.999'%20stroke='%2312020A'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.26%2010.999C22.7138%2010.999%2023.0767%2011.3705%2022.986%2011.9276L20.6265%2023.0705C20.5358%2023.5347%2019.9913%2023.999%2019.5375%2023.999H10.4625C9.918%2023.999%209.46425%2023.6276%209.3735%2023.0705L7.014%2011.9276C6.92325%2011.3705%207.28625%2010.999%207.74%2010.999H22.26Z'%20stroke='%2312020A'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const Workplace = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2075%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20fill='%23F9F5F7'%20/%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20stroke='%2312020A'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.6428%2036.0783L17.9219%2059.5201C17.8543%2059.9436%2018.1439%2060.3425%2018.5678%2060.4096C18.9913%2060.4768%2019.3902%2060.1873%2019.4573%2059.7637L20.457%2053.4664H34.3043L35.304%2059.7637C35.3715%2060.1873%2035.77%2060.4768%2036.1935%2060.4096C36.6174%2060.3425%2036.907%2059.9436%2036.8394%2059.5201L33.1174%2036.0693C34.2394%2035.941%2035.1111%2034.9884%2035.1111%2033.832V33.3048C35.1111%2032.0611%2034.1029%2031.0529%2032.8588%2031.0529H21.8021C20.5581%2031.0529%2019.5499%2032.0611%2019.5499%2033.3048V33.832C19.5499%2035.022%2020.473%2035.9966%2021.6428%2036.0783ZM49.2002%2058.8645H46.5014C46.0723%2058.8645%2045.7237%2059.2126%2045.7237%2059.6417C45.7237%2060.0708%2046.0723%2060.419%2046.5014%2060.419H53.454C53.8831%2060.419%2054.2316%2060.0708%2054.2316%2059.6417C54.2316%2059.2126%2053.8831%2058.8645%2053.454%2058.8645H50.7551V30.7007L55.5118%2035.4574C55.8152%2035.7608%2056.3077%2035.7608%2056.6111%2035.4574C56.9144%2035.154%2056.9144%2034.6615%2056.6111%2034.3582L50.7551%2028.5018V24.5011C50.7551%2024.072%2050.4066%2023.7234%2049.9775%2023.7234C49.5487%2023.7234%2049.2002%2024.072%2049.2002%2024.5011V26.947L42.1626%2019.9096L47.026%2018.9734C47.392%2018.9029%2047.6566%2018.5828%2047.6566%2018.21C47.6566%2017.8376%2047.392%2017.5171%2047.026%2017.447L37.6898%2015.6499C37.2958%2015.4466%2036.8488%2015.332%2036.3752%2015.332C34.7868%2015.332%2033.4973%2016.6216%2033.4973%2018.21C33.4973%2019.7984%2034.7868%2021.0884%2036.3752%2021.0884C36.8488%2021.0884%2037.2958%2020.9734%2037.6898%2020.7701L40.3189%2020.2645L49.2002%2029.1458V58.8645ZM22.1122%2043.0369L20.7036%2051.9115H34.0577L32.6491%2043.0369H22.1122ZM32.4021%2041.482C31.9051%2038.3507%2031.5454%2036.0839%2031.5454%2036.0839H23.2159L22.3592%2041.482H32.4021ZM33.5562%2033.3048V33.832C33.5562%2034.2171%2033.2439%2034.529%2032.8588%2034.529H21.8021C21.4167%2034.529%2021.1047%2034.2171%2021.1047%2033.832V33.3048C21.1047%2032.9197%2021.4167%2032.6074%2021.8017%2032.6074H32.8588C33.2439%2032.6074%2033.5562%2032.9197%2033.5562%2033.3048ZM36.9014%2016.9955C36.7402%2016.9253%2036.5622%2016.8869%2036.3752%2016.8869C35.645%2016.8869%2035.0521%2017.4798%2035.0521%2018.21C35.0521%2018.9406%2035.645%2019.5335%2036.3752%2019.5335C36.5585%2019.5335%2036.7327%2019.4966%2036.8909%2019.429C37.3991%2018.6167%2037.4402%2017.8055%2036.9014%2016.9955ZM38.792%2017.4455C38.9122%2017.9559%2038.9047%2018.4667%2038.7767%2018.9779L42.7659%2018.21L38.792%2017.4455Z'%20fill='%2312020A'%20stroke='%2312020A'%20stroke-width='0.5'%20/%3e%3c/svg%3e";
const WorkplaceSmall = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20fill='%23F9F5F7'/%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20stroke='%2312020A'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.53342%2014.2815L7.00402%2023.64C6.97626%2023.8091%207.09527%2023.9683%207.2695%2023.9952C7.44358%2024.022%207.60753%2023.9064%207.63514%2023.7373L8.04601%2021.2232H13.7377L14.1486%2023.7373C14.1764%2023.9064%2014.3402%2024.022%2014.5142%2023.9952C14.6885%2023.9683%2014.8075%2023.8091%2014.7797%2023.64L13.2499%2014.2779C13.711%2014.2266%2014.0693%2013.8463%2014.0693%2013.3847V13.1742C14.0693%2012.6777%2013.6549%2012.2752%2013.1436%2012.2752H8.59891C8.08758%2012.2752%207.67317%2012.6777%207.67317%2013.1742V13.3847C7.67317%2013.8597%208.05261%2014.2488%208.53342%2014.2815ZM19.8604%2023.3783H18.7511C18.5747%2023.3783%2018.4315%2023.5173%2018.4315%2023.6886C18.4315%2023.8599%2018.5747%2023.9989%2018.7511%2023.9989H21.6088C21.7852%2023.9989%2021.9284%2023.8599%2021.9284%2023.6886C21.9284%2023.5173%2021.7852%2023.3783%2021.6088%2023.3783H20.4995V12.1346L22.4547%2014.0336C22.5793%2014.1547%2022.7818%2014.1547%2022.9065%2014.0336C23.0312%2013.9125%2023.0312%2013.7158%2022.9065%2013.5947L20.4995%2011.2567V9.65953C20.4995%209.48823%2020.3562%209.34909%2020.1799%209.34909C20.0037%209.34909%2019.8604%209.48823%2019.8604%209.65953V10.636L16.9677%207.82652L18.9667%207.45277C19.1172%207.42462%2019.2259%207.2968%2019.2259%207.14799C19.2259%206.99932%2019.1172%206.87136%2018.9667%206.84336L15.1292%206.12594C14.9673%206.04476%2014.7836%205.99902%2014.5889%205.99902C13.936%205.99902%2013.406%206.51385%2013.406%207.14799C13.406%207.78213%2013.936%208.2971%2014.5889%208.2971C14.7836%208.2971%2014.9673%208.25122%2015.1292%208.17004L16.2099%207.96819L19.8604%2011.5138V23.3783ZM8.72636%2017.0595L8.14739%2020.6025H13.6363L13.0574%2017.0595H8.72636ZM12.9558%2016.4388C12.7516%2015.1887%2012.6037%2014.2837%2012.6037%2014.2837H9.18003L8.82789%2016.4388H12.9558ZM13.4302%2013.1742V13.3847C13.4302%2013.5384%2013.3018%2013.663%2013.1436%2013.663H8.59891C8.44048%2013.663%208.31226%2013.5384%208.31226%2013.3847V13.1742C8.31226%2013.0205%208.44048%2012.8958%208.59876%2012.8958H13.1436C13.3018%2012.8958%2013.4302%2013.0205%2013.4302%2013.1742ZM14.8052%206.66311C14.7389%206.6351%2014.6658%206.61976%2014.5889%206.61976C14.2888%206.61976%2014.0451%206.85646%2014.0451%207.14799C14.0451%207.43966%2014.2888%207.67637%2014.5889%207.67637C14.6642%207.67637%2014.7359%207.66162%2014.8009%207.63466C15.0098%207.31036%2015.0266%206.98651%2014.8052%206.66311ZM15.5823%206.84276C15.6317%207.04654%2015.6286%207.25048%2015.576%207.45456L17.2157%207.14799L15.5823%206.84276Z'%20fill='%2312020A'%20stroke='%2312020A'%20stroke-width='0.25'/%3e%3c/svg%3e";
const Transport = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2075%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20fill='%23F9F5F7'%20/%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20stroke='%2312020A'%20/%3e%3cpath%20d='M49.5833%2052.5L45.8333%2035.4167L53.125%2028.125C56.25%2025%2057.2917%2020.8333%2056.25%2018.75C54.1667%2017.7083%2050%2018.75%2046.875%2021.875L39.5833%2029.1667L22.5%2025.4167C21.4583%2025.2083%2020.625%2025.625%2020.2083%2026.4583L19.5833%2027.5C19.1667%2028.5417%2019.375%2029.5833%2020.2083%2030.2083L31.25%2037.5L27.0833%2043.75H20.8333L18.75%2045.8333L25%2050L29.1667%2056.25L31.25%2054.1667V47.9167L37.5%2043.75L44.7917%2054.7917C45.4167%2055.625%2046.4583%2055.8333%2047.5%2055.4167L48.5417%2055C49.375%2054.375%2049.7917%2053.5417%2049.5833%2052.5Z'%20stroke='%2312020A'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const TransportSmall = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20fill='%23F9F5F7'/%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20stroke='%2312020A'/%3e%3cpath%20d='M20.0199%2021.4155L18.4364%2014.2018L21.5155%2011.1227C22.8351%209.80315%2023.2749%208.0437%2022.8351%207.16397C21.9553%206.72411%2020.1959%207.16397%2018.8763%208.48356L15.7973%2011.5626L8.58351%209.97909C8.14364%209.89112%207.79175%2010.0671%207.61581%2010.419L7.35189%2010.8588C7.17595%2011.2987%207.26392%2011.7385%207.61581%2012.0025L12.2784%2015.0815L10.5189%2017.7207H7.87973L7%2018.6004L9.63918%2020.3598L11.3986%2022.999L12.2784%2022.1193V19.4801L14.9175%2017.7207L17.9966%2022.3832C18.2605%2022.7351%2018.7003%2022.8231%2019.1402%2022.6471L19.5801%2022.4712C19.932%2022.2073%2020.1079%2021.8554%2020.0199%2021.4155Z'%20stroke='%2312020A'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const Outside = "/_app/immutable/assets/Outside.CWb9iKXs.svg";
const OutsideSmall = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20fill='%23F9F5F7'/%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20stroke='%2312020A'/%3e%3cpath%20d='M20.0894%2014.2312L20.0894%2023.5109'%20stroke='%2312020A'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cmask%20id='path-3-inside-1_401_3785'%20fill='white'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.8592%208.38421C22.8592%208.63012%2022.8256%208.86817%2022.7626%209.09401C23.1009%209.51756%2023.2988%2010.03%2023.2988%2010.5821C23.2988%2011.1094%2023.1182%2011.6007%2022.8071%2012.0128C23.3852%2012.5611%2023.7384%2013.2937%2023.7384%2014.0985C23.7384%2015.7979%2022.164%2017.1755%2020.2218%2017.1755C18.2797%2017.1755%2016.7053%2015.7979%2016.7053%2014.0985C16.7053%2013.2937%2017.0585%2012.5611%2017.6365%2012.0128C17.3255%2011.6007%2017.1449%2011.1094%2017.1449%2010.5821C17.1449%2010.03%2017.3428%209.51757%2017.6811%209.09402C17.6181%208.86818%2017.5845%208.63013%2017.5845%208.38421C17.5845%206.92762%2018.7653%205.74683%2020.2218%205.74683C21.6784%205.74683%2022.8592%206.92762%2022.8592%208.38421Z'/%3e%3c/mask%3e%3cpath%20d='M22.7626%209.09401L21.7993%208.82547L21.662%209.31831L21.9813%209.71808L22.7626%209.09401ZM22.8071%2012.0128L22.009%2011.4103L21.4707%2012.1234L22.119%2012.7383L22.8071%2012.0128ZM17.6365%2012.0128L18.3247%2012.7383L18.973%2012.1234L18.4347%2011.4103L17.6365%2012.0128ZM17.6811%209.09402L18.4624%209.71809L18.7817%209.31832L18.6443%208.82548L17.6811%209.09402ZM23.7259%209.36254C23.813%209.05011%2023.8592%208.72175%2023.8592%208.38421H21.8592C21.8592%208.53849%2021.8382%208.68623%2021.7993%208.82547L23.7259%209.36254ZM24.2988%2010.5821C24.2988%209.78285%2024.0106%209.05411%2023.544%208.46993L21.9813%209.71808C22.1912%209.98101%2022.2988%2010.2772%2022.2988%2010.5821H24.2988ZM23.6053%2012.6152C24.036%2012.0447%2024.2988%2011.345%2024.2988%2010.5821H22.2988C22.2988%2010.8738%2022.2005%2011.1567%2022.009%2011.4103L23.6053%2012.6152ZM22.119%2012.7383C22.5214%2013.12%2022.7384%2013.5988%2022.7384%2014.0985H24.7384C24.7384%2012.9887%2024.2491%2012.0022%2023.4953%2011.2872L22.119%2012.7383ZM22.7384%2014.0985C22.7384%2015.1244%2021.7413%2016.1755%2020.2218%2016.1755V18.1755C22.5866%2018.1755%2024.7384%2016.4714%2024.7384%2014.0985H22.7384ZM20.2218%2016.1755C18.7024%2016.1755%2017.7053%2015.1244%2017.7053%2014.0985H15.7053C15.7053%2016.4714%2017.857%2018.1755%2020.2218%2018.1755V16.1755ZM17.7053%2014.0985C17.7053%2013.5988%2017.9223%2013.12%2018.3247%2012.7383L16.9484%2011.2872C16.1946%2012.0022%2015.7053%2012.9887%2015.7053%2014.0985H17.7053ZM16.1449%2010.5821C16.1449%2011.345%2016.4077%2012.0447%2016.8384%2012.6152L18.4347%2011.4103C18.2432%2011.1566%2018.1449%2010.8738%2018.1449%2010.5821H16.1449ZM16.8997%208.46994C16.4331%209.05413%2016.1449%209.78286%2016.1449%2010.5821H18.1449C18.1449%2010.2772%2018.2524%209.98101%2018.4624%209.71809L16.8997%208.46994ZM16.5845%208.38421C16.5845%208.72176%2016.6307%209.05012%2016.7178%209.36255L18.6443%208.82548C18.6055%208.68624%2018.5845%208.5385%2018.5845%208.38421H16.5845ZM20.2218%204.74683C18.213%204.74683%2016.5845%206.37534%2016.5845%208.38421H18.5845C18.5845%207.47991%2019.3175%206.74683%2020.2218%206.74683V4.74683ZM23.8592%208.38421C23.8592%206.37534%2022.2307%204.74683%2020.2218%204.74683V6.74683C21.1261%206.74683%2021.8592%207.47991%2021.8592%208.38421H23.8592Z'%20fill='%2312020A'%20mask='url(%23path-3-inside-1_401_3785)'/%3e%3crect%20x='6.5'%20y='19.499'%20width='9'%20height='2'%20rx='0.5'%20stroke='%2312020A'%20stroke-linejoin='round'/%3e%3crect%20x='6.5'%20y='14.499'%20width='9'%20height='3'%20rx='0.5'%20stroke='%2312020A'%20stroke-linejoin='round'/%3e%3cline%20x1='7.5'%20y1='17.999'%20x2='7.5'%20y2='19.999'%20stroke='%2312020A'/%3e%3cline%20x1='14.5'%20y1='17.999'%20x2='14.5'%20y2='19.999'%20stroke='%2312020A'/%3e%3cline%20x1='14.5'%20y1='21.999'%20x2='14.5'%20y2='23.999'%20stroke='%2312020A'/%3e%3cline%20x1='7.5'%20y1='21.999'%20x2='7.5'%20y2='23.999'%20stroke='%2312020A'/%3e%3cpath%20d='M6%2023.999H23'%20stroke='%2312020A'%20stroke-linecap='round'/%3e%3c/svg%3e";
const OtherLocation = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2075%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20fill='%23F9F5F7'%20/%3e%3crect%20x='0.5'%20y='0.5'%20width='74'%20height='74'%20rx='37'%20stroke='%2312020A'%20/%3e%3cpath%20d='M54.1666%2033.3333C54.1666%2043.7354%2042.627%2054.5687%2038.752%2057.9146C38.391%2058.186%2037.9516%2058.3328%2037.4999%2058.3328C37.0483%2058.3328%2036.6088%2058.186%2036.2478%2057.9146C32.3728%2054.5687%2020.8333%2043.7354%2020.8333%2033.3333C20.8333%2028.913%2022.5892%2024.6738%2025.7148%2021.5482C28.8404%2018.4226%2033.0796%2016.6667%2037.4999%2016.6667C41.9202%2016.6667%2046.1594%2018.4226%2049.285%2021.5482C52.4106%2024.6738%2054.1666%2028.913%2054.1666%2033.3333Z'%20stroke='%2312020A'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M37.5%2039.5833C40.9518%2039.5833%2043.75%2036.7851%2043.75%2033.3333C43.75%2029.8816%2040.9518%2027.0833%2037.5%2027.0833C34.0482%2027.0833%2031.25%2029.8816%2031.25%2033.3333C31.25%2036.7851%2034.0482%2039.5833%2037.5%2039.5833Z'%20stroke='%2312020A'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const OtherLocationSmall = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20fill='%23F9F5F7'/%3e%3crect%20x='0.5'%20y='0.499023'%20width='29'%20height='29'%20rx='14.5'%20stroke='%2312020A'/%3e%3cpath%20d='M22%2013.1991C22%2017.6929%2017.1534%2022.3729%2015.5259%2023.8183C15.3743%2023.9356%2015.1897%2023.999%2015%2023.999C14.8103%2023.999%2014.6257%2023.9356%2014.4741%2023.8183C12.8466%2022.3729%208%2017.6929%208%2013.1991C8%2011.2895%208.7375%209.45816%2010.0503%208.10788C11.363%206.7576%2013.1435%205.99902%2015%205.99902C16.8565%205.99902%2018.637%206.7576%2019.9497%208.10788C21.2625%209.45816%2022%2011.2895%2022%2013.1991Z'%20stroke='%2312020A'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%2015.999C16.6569%2015.999%2018%2014.8797%2018%2013.499C18%2012.1183%2016.6569%2010.999%2015%2010.999C13.3431%2010.999%2012%2012.1183%2012%2013.499C12%2014.8797%2013.3431%2015.999%2015%2015.999Z'%20stroke='%2312020A'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const getLocationIconPath = (id, isSmall = false) => {
  switch (id) {
    case "Jerry's home":
      return isSmall ? JerryHomeSmall : JerryHome;
    case "George's home":
      return isSmall ? GeorgeHomeSmall : GeorgeHome;
    case "Elaine's home":
      return isSmall ? ElaineHomeSmall : ElaineHome;
    case "Kramer's home":
      return isSmall ? KramerHomeSmall : KramerHome;
    case "Other family home":
      return isSmall ? FamilyHomeSmall : FamilyHome;
    case "Diner":
      return isSmall ? DinerSmall : Diner;
    case "Place of leisure":
      return isSmall ? PlaceOfLeisureSmall : PlaceOfLeisure;
    case "Workplace":
      return isSmall ? WorkplaceSmall : Workplace;
    case "Transport":
      return isSmall ? TransportSmall : Transport;
    case "Outside":
      return isSmall ? OutsideSmall : Outside;
    default:
      return isSmall ? OtherLocationSmall : OtherLocation;
  }
};
function LocationsList($$payload, $$props) {
  push();
  let {
    labelsWidth,
    locations: locations2,
    yScale,
    isHover,
    hoveredLocations,
    isPlaying
  } = $$props;
  const each_array = ensure_array_like(locations2);
  $$payload.out += `<ul class="relative z-10 shrink-0 pt-4"${attr_style(`width: ${stringify(labelsWidth)}px; background-color: #F9F5F7;`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let location = each_array[$$index];
    $$payload.out += `<li class="mask absolute w-full svelte-qag8a1"${attr_style(`top: ${stringify(yScale(location.id) + yScale.bandwidth() / 2 - 16)}px; right: 16px; opacity: ${stringify(!isHover && !isPlaying || (isHover || isPlaying) && hoveredLocations.includes(location.id) ? 1 : 0.2)}`)}><div class="catalog-location-label flex justify-end">`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="image h-8 w-8 rounded-full svelte-qag8a1"${attr_style(`background-image: url(${stringify(getLocationIconPath(location.id, true))});`)}></div></div></li>`;
  }
  $$payload.out += `<!--]--></ul>`;
  pop();
}
function LocationsOnScreen($$payload, $$props) {
  push();
  let {
    locations: locations2,
    xScale,
    yScale,
    isHover,
    hoveredTime,
    scenes,
    isPlaying,
    playingScene
  } = $$props;
  const locationsData = (() => {
    const locationsArray = structuredClone(locations2);
    locationsArray.forEach((location) => {
      location.momentsOnScreen = [];
      let startTime;
      let currentTime;
      let currentScene;
      if (location.timesOnScreen) {
        location.timesOnScreen.forEach((time, i) => {
          const scene = scenes.find((s) => time >= s.startTime && time < s.endTime)?.sceneNum;
          switch (true) {
            case i === 0:
              startTime = time;
              currentTime = time;
              break;
            case i === location.timesOnScreen.length - 1:
            case time - currentTime > 5:
            case scene > currentScene:
              const addedTime = i === location.timesOnScreen.length - 1 ? 10 : 5;
              location.momentsOnScreen.push({
                startTime,
                duration: currentTime - startTime + addedTime,
                scene: currentScene
              });
              startTime = time;
              currentTime = time;
              break;
            case time - currentTime === 5:
              currentTime = time;
              break;
          }
          currentScene = scene;
        });
      }
    });
    return locationsArray;
  })();
  const each_array = ensure_array_like(locationsData);
  $$payload.out += `<g><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let location = each_array[$$index_1];
    const each_array_1 = ensure_array_like(location.momentsOnScreen);
    $$payload.out += `<g${attr("transform", `translate(0, ${yScale(location.id)})`)}><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let moment = each_array_1[$$index];
      $$payload.out += `<rect class="catalog-location-on-screen svelte-il4s97"${attr("x", xScale(moment.startTime))}${attr("y", 0)}${attr("width", xScale(moment.duration))}${attr("height", yScale.bandwidth())} fill="#12020A"${attr("fill-opacity", !isHover && !isPlaying || isHover && hoveredTime >= moment.startTime && hoveredTime <= moment.startTime + moment.duration || isPlaying && playingScene === moment.scene ? 1 : 0.1)}></rect>`;
    }
    $$payload.out += `<!--]--></g>`;
  }
  $$payload.out += `<!--]--></g>`;
  pop();
}
function LocationsStats($$payload, $$props) {
  push();
  let {
    width,
    height,
    yScale,
    locationsOnScreen,
    episodeDuration
  } = $$props;
  let columnWidth = width / 2 - 8;
  const barHeight = 10;
  const xScale = scaleLinear().domain([0, 1]).range([0, columnWidth]);
  const each_array = ensure_array_like(locationsOnScreen);
  $$payload.out += `<div class="flex pl-6"${attr_style(`width: ${stringify(width)}px;`)}><div class="mr-4"${attr_style(`width: ${stringify(columnWidth)}px;`)}><svg${attr("width", columnWidth)}${attr("height", height)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let location = each_array[$$index];
    $$payload.out += `<rect${attr("x", 0)}${attr("y", Math.max(yScale(location.id) + yScale.bandwidth() / 2 - barHeight / 2, 0))}${attr("width", columnWidth > 0 ? columnWidth : 0)}${attr("height", barHeight)} fill="#EEECED"></rect><rect${attr("x", 0)}${attr("y", Math.max(yScale(location.id) + yScale.bandwidth() / 2 - barHeight / 2, 0))}${attr("width", Math.max(xScale(location.timesOnScreen.length * 5 / episodeDuration), 0))}${attr("height", barHeight)} fill="#12020A"></rect><text class="number"${attr("x", 0)}${attr("y", yScale(location.id) + yScale.bandwidth() / 2 - barHeight / 2 - 2)}>${escape_html(Math.round(location.timesOnScreen.length * 5 / episodeDuration * 100) === 100 ? 99 : Math.round(location.timesOnScreen.length * 5 / episodeDuration * 100))}%</text>`;
  }
  $$payload.out += `<!--]--></svg></div></div>`;
  pop();
}
function Locations($$payload, $$props) {
  push();
  let {
    width,
    statsWidth,
    labelsWidth,
    xScale,
    scenes,
    episodeData,
    episodeDuration,
    isHover,
    hoveredPosition,
    hoveredTime,
    isPlaying,
    playingScene,
    sonificationLocationData
  } = $$props;
  let innerWidth = 1200;
  const locationsData = episodeData.filter((e) => e.eventCategory === "LOCATION");
  const locationsOnScreen = (() => {
    const locationsArray = locations.map((c) => {
      return { id: c.id, label: c.label, timesOnScreen: [] };
    });
    locationsData.forEach((d) => {
      locationsArray.find((c) => c.id === d.eventAttribute).timesOnScreen.push(+d.eventTimeSeconds);
    });
    const locationsOnScreen2 = locationsArray.filter((c) => c.timesOnScreen.length > 0);
    return locationsOnScreen2;
  })();
  const hoveredLocations = (() => {
    let hoveredLocationsArray = [];
    if (isPlaying) {
      const playingLocations = sonificationLocationData.filter((d) => +d.SceneNumber === playingScene).map((d) => d.Location);
      playingLocations.forEach((loc) => {
        const ids = getLocationId(loc);
        hoveredLocationsArray = hoveredLocationsArray.concat(ids);
      });
    } else {
      const time = Math.floor(hoveredTime / 5) * 5;
      locationsOnScreen.forEach((location) => {
        if (location.timesOnScreen && location.timesOnScreen.includes(time)) {
          hoveredLocationsArray.push(location.id);
        }
      });
    }
    return hoveredLocationsArray;
  })();
  const vizHeight = locationsOnScreen.length * 48 + 32;
  const yScale = scaleBand().domain(locationsOnScreen.map((char) => char.id)).range([0, vizHeight - 32]).padding(0.6);
  $$payload.out += `<div class="flex">`;
  LocationsList($$payload, {
    labelsWidth,
    locations: locationsOnScreen,
    yScale,
    isHover,
    hoveredLocations,
    isPlaying
  });
  $$payload.out += `<!----> <div class="flex-shrink-0"${attr_style(`max-width: ${stringify(innerWidth - 63)}px; overflow: scroll;`)}><svg${attr("width", width)}${attr("height", vizHeight)}${attr_style(`transform: translateX(${stringify(0)}px);`)}>`;
  Scenes($$payload, {
    scenes,
    xScale,
    height: vizHeight,
    isNumbersUp: false,
    isHover,
    hoveredTime,
    isPlaying,
    playingScene
  });
  $$payload.out += `<!---->`;
  LocationsOnScreen($$payload, {
    locations: locationsOnScreen,
    xScale,
    yScale,
    isHover,
    hoveredTime,
    scenes,
    isPlaying,
    playingScene
  });
  $$payload.out += `<!---->`;
  if (isHover) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<line${attr("x1", hoveredPosition)}${attr("y1", 0)}${attr("x2", hoveredPosition)}${attr("y2", vizHeight)} stroke="#12020A"></line>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></svg></div> `;
  if (statsWidth > 0) {
    $$payload.out += "<!--[-->";
    LocationsStats($$payload, {
      width: statsWidth,
      height: vizHeight,
      yScale,
      locationsOnScreen,
      episodeDuration
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function EpisodeScore($$payload, $$props) {
  push();
  let {
    width,
    statsWidth = 0,
    labelsWidth,
    scenes,
    xScale,
    episodeData,
    isPlaying = false,
    playingScene = null,
    sonificationCharactersData = null,
    sonificationLocationData = null
  } = $$props;
  let innerWidth = 1200;
  let episodeDuration = +episodeData[episodeData.length - 1].eventTimeSeconds;
  let isHover = false;
  let hoveredPosition = 0;
  let hoveredTime = 0;
  $$payload.out += `<div${attr_style(`width: ${stringify(statsWidth > 0 ? `${width + statsWidth}px` : "auto")}; max-width: 100vw;`)} role="document">`;
  Characters($$payload, {
    width,
    labelsWidth,
    scenes,
    xScale,
    episodeData,
    isHover,
    hoveredPosition,
    hoveredTime,
    isPlaying,
    playingScene,
    sonificationCharactersData
  });
  $$payload.out += `<!----> <div${attr_style(`max-width: ${stringify(innerWidth)}px; overflow: scroll;`)}>`;
  Timeline($$payload, {
    labelsWidth,
    xScale,
    episodeDuration
  });
  $$payload.out += `<!----></div> `;
  Locations($$payload, {
    width,
    statsWidth,
    labelsWidth,
    scenes,
    xScale,
    episodeData,
    episodeDuration,
    isHover,
    hoveredPosition,
    hoveredTime,
    isPlaying,
    playingScene,
    sonificationLocationData
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function EpisodeTexts($$payload, $$props) {
  push();
  let episodeStepChange = $$props["episodeStepChange"];
  $$payload.out += `<div class="flex w-screen items-center justify-center" style="height: calc(150vh + 260px); padding-top: calc(50vh + 260px);"><div class="text-overlay">Let’s take <span class="em">The Marine Biologist</span>, episode 14 of Season 5, as a worked
		example.</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">This episode has a duration of about 21m45s.</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">Across every sequential block of 5 seconds, we recorded the moments of laughter heard from the
		studio audience.</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">We also recorded the number of discrete scenes, when they started, finished, and their duration.</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">We recorded which characters were <span class="em">present and active</span> on screen and when.</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">We logged which characters caused each moment of <span class="em">audience laughter</span>.</div></div> <div class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">We also categorised the specific or type of location in which each scene was taking place.</div></div>`;
  bind_props($$props, { episodeStepChange });
  pop();
}
function EpisodeExample($$payload, $$props) {
  push();
  let {
    episodeInfo,
    episodeData,
    laughData
  } = $$props;
  let innerWidth = 1200;
  let innerHeight = 800;
  let episodeWidth = innerWidth - 273;
  const timeScale = scaleLinear().domain([
    0,
    +laughData[laughData.length - 1].eventTimeSeconds + 5
  ]).range([0, episodeWidth]);
  const laughWidth = timeScale(5);
  const labelsWidth = 60;
  const extraPadding = 10;
  let vizWidth = innerWidth - 25 - extraPadding;
  let scenesWidth = vizWidth - labelsWidth;
  const scenesData = episodeData.filter((d) => d.eventCategory === "SCENE");
  const scenes = (() => {
    const scenesArray = [];
    const lastSceneNumber = +scenesData[scenesData.length - 2].sceneNumber;
    for (let i = 1; i <= lastSceneNumber; i++) {
      const sceneData = scenesData.filter((d) => +d.sceneNumber === i);
      const startTime = sceneData[0].eventTime;
      const endTime = sceneData[sceneData.length - 1].eventTime;
      scenesArray.push({
        sceneNum: i,
        startTime: formatTime(startTime),
        endTime: formatTime(endTime) + 5
      });
    }
    return scenesArray;
  })();
  const xScale = scaleLinear().domain([0, scenes[scenes.length - 1].endTime]).range([0, scenesWidth]);
  const reveal1 = () => {
    gsap.to("#episode-detail-container", {
      translateY: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 2
    });
  };
  const reveal2 = () => {
    gsap.to("#episode-length", {
      translateX: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 1
    });
    gsap.to("#duration-example .episode-start-end", {
      translateY: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 0.5,
      delay: 0.7
    });
  };
  const reveal3 = () => {
    gsap.to("#duration-example .laugh-bar", {
      translateY: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 1
    });
    gsap.to("#duration-example .label", {
      translateY: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 1,
      delay: 0.5
    });
  };
  const reveal4 = () => {
    gsap.to("#episode-length, #duration-example .episode-start-end, #duration-example .laugh-bar, #duration-example .label", {
      translateY: 100,
      opacity: 0,
      ease: "power3.out",
      duration: 1
    });
    gsap.to(".score-wrapper", {
      translateY: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 1,
      delay: 0.7
    });
  };
  const reveal5 = () => {
    gsap.to("#episode-example-container .catalog-character-label", {
      translateX: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 2
    });
    gsap.to("#episode-example-container .catalog-character-on-screen", {
      translateX: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 1
    });
  };
  const reveal6 = () => {
    gsap.to("#episode-example-container .catalog-laugh-bar", {
      translateY: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 1
    });
  };
  const reveal7 = () => {
    gsap.to("#episode-example-container .catalog-location-label", {
      translateX: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 2
    });
    gsap.to("#episode-example-container .catalog-location-on-screen", {
      translateX: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 0.3
    });
  };
  function episodeStepChange(number) {
    switch (number) {
      case 1:
        reveal1();
        break;
      case 2:
        reveal2();
        break;
      case 3:
        reveal3();
        break;
      case 4:
        reveal4();
        break;
      case 5:
        reveal5();
        break;
      case 6:
        reveal6();
        break;
      case 7:
        reveal7();
        break;
      default:
        return null;
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(laughData);
    $$payload2.out += `<div id="episode-example-container" class="relative" style="width: calc(100vw - 25px); height: auto;"><div id="episode-example" class="absolute h-screen"><div class="relative overflow-scroll"><div class="mask self-start"><div id="episode-detail-container">`;
    EpisodeDetails($$payload2, { episodeInfo });
    $$payload2.out += `<!----></div></div> <div id="duration-example" class="flex items-center justify-center"${attr_style(`width: ${stringify(innerWidth - 25)}px; height: ${stringify(innerHeight - 254)}px;`)}><svg${attr("width", innerWidth - 225)} height="130"><g transform="translate(0, 40)"><rect id="episode-length"${attr("x", 24)}${attr("y", 10)}${attr("width", episodeWidth)}${attr("height", 50)} fill="#DDDBDC"></rect><text class="number episode-start-end"${attr("y", 90)}>00:00</text><text class="number episode-start-end"${attr("x", episodeWidth)}${attr("y", 90)}>21:45</text><g transform="translate(24, 0)"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let laugh = each_array[$$index];
      $$payload2.out += `<rect class="laugh-bar"${attr("x", timeScale(+laugh.eventTimeSeconds))}${attr("y", 0)}${attr("width", laughWidth)}${attr("height", 70)} fill="#12020A" stroke="#F9F5F7"${attr("stroke-width", 1.5)}></rect>`;
    }
    $$payload2.out += `<!--]--><text class="mid label"${attr("x", timeScale(+laughData[0].eventTimeSeconds))}${attr("y", -20)}>Each bar represents a block of 5s with laughter.</text><line class="label"${attr("x1", timeScale(+laughData[0].eventTimeSeconds) + laughWidth / 2)}${attr("y1", -15)}${attr("x2", timeScale(+laughData[0].eventTimeSeconds) + laughWidth / 2)}${attr("y2", -4)} stroke="#E71D80"></line></g></g></svg></div> <div class="score-wrapper absolute left-0" style="top: 270px;">`;
    EpisodeScore($$payload2, {
      episodeData,
      width: scenesWidth,
      labelsWidth,
      scenes,
      xScale
    });
    $$payload2.out += `<!----></div></div></div> <div class="z-1000 relative" style="pointer-events: none">`;
    EpisodeTexts($$payload2, {
      get episodeStepChange() {
        return episodeStepChange;
      },
      set episodeStepChange($$value) {
        episodeStepChange = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function ArrowDown($$payload) {
  $$payload.out += `<svg width="6" height="50" viewBox="0 0 6 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 50L5.88675 45L0.113251 45L3 50ZM2.5 2.18557e-08L2.5 45.5L3.5 45.5L3.5 -2.18557e-08L2.5 2.18557e-08Z" fill="#E71D80"></path></svg>`;
}
function EpisodeBars($$payload, $$props) {
  push();
  let {
    episodesData,
    barsHeight,
    width,
    topMargin,
    episodeVerticalPositionScale,
    handleMouseEnter = void 0,
    handleMouseLeave = void 0
  } = $$props;
  let episodeMaxDuration = max(episodesData, (d) => d.duration) ?? 0;
  let episodeTimeScale = scaleLinear().domain([0, episodeMaxDuration]).range([0, width]);
  let minutes = ["00", "05", "10", "15", "20", "25", "30"];
  const each_array = ensure_array_like(minutes);
  const each_array_1 = ensure_array_like(episodesData);
  const each_array_2 = ensure_array_like(episodesData);
  $$payload.out += `<div id="episode-bars" class="relative z-10"${attr_style(`padding-top: ${stringify(topMargin)}px;`)}><svg id="episodes"${attr("width", width + 50)}${attr("height", barsHeight + 70)} style="margin-top: -35px; margin-left: -25px;"><g class="label"><g transform="translate(20, 105) rotate(-90)"><text class="small accent">Episodes</text></g><g transform="translate(13, 111)">`;
  ArrowDown($$payload);
  $$payload.out += `<!----></g></g><g transform="translate(25, 0)"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let minute = each_array[$$index];
    $$payload.out += `<g${attr("transform", `translate(${episodeTimeScale(+minute * 60)}, 0)`)}><text class="number"${attr("x", 0)}${attr("y", 20)} text-anchor="middle" fill="#928D90">${escape_html(`${minute}:00`)}</text><line${attr("x1", 0)}${attr("y1", 25)}${attr("x2", 0)}${attr("y2", barsHeight + 45)} stroke="#928D90"></line><text class="number"${attr("x", 0)}${attr("y", barsHeight + 60)} text-anchor="middle" fill="#928D90">${escape_html(`${minute}:00`)}</text></g>`;
  }
  $$payload.out += `<!--]--></g><g transform="translate(25, 35)"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let episode = each_array_1[$$index_1];
    $$payload.out += `<rect class="episode-bar"${attr("x", 0)}${attr("y", episodeVerticalPositionScale(`${episode.season}-${episode.episode}`))}${attr("width", episodeTimeScale(episode.duration))}${attr("height", episodeVerticalPositionScale.bandwidth())} fill="#DDDBDC" role="document"></rect>`;
  }
  $$payload.out += `<!--]--></g></svg> <svg id="laughs" class="absolute top-0 left-0"${attr("width", width + 50)}${attr("height", barsHeight + 70)} style="margin-left: -25px;"><g transform="translate(25, 50)"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
    let episode = each_array_2[$$index_3];
    const each_array_3 = ensure_array_like(episode.laughs);
    $$payload.out += `<!--[-->`;
    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
      let laugh = each_array_3[$$index_2];
      $$payload.out += `<rect class="laugh-bar"${attr("x", episodeTimeScale(+laugh.eventTimeSeconds))}${attr("y", episodeVerticalPositionScale(`${episode.season}-${episode.episode}`))}${attr("width", episodeTimeScale(5))}${attr("height", episodeVerticalPositionScale.bandwidth())} fill="#12020A" pointer-events="none"></rect>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></g></svg></div>`;
  bind_props($$props, { handleMouseEnter, handleMouseLeave });
  pop();
}
function PercentageAxes($$payload, $$props) {
  let { barsHeight, width, secondLabel } = $$props;
  $$payload.out += `<text class="number"${attr("x", 0)}${attr("y", 20)} text-anchor="middle" fill="#928D90">0</text><text class="number"${attr("x", width)}${attr("y", 20)} text-anchor="middle" fill="#928D90">${escape_html(secondLabel)}</text><line${attr("x1", 0)}${attr("y1", 25)}${attr("x2", 0)}${attr("y2", barsHeight + 45)} stroke="#928D90"></line><line${attr("x1", width)}${attr("y1", 25)}${attr("x2", width)}${attr("y2", barsHeight + 45)} stroke="#928D90"></line><text class="number"${attr("x", 0)}${attr("y", barsHeight + 60)} text-anchor="middle" fill="#928D90">0</text><text class="number"${attr("x", width)}${attr("y", barsHeight + 60)} text-anchor="middle" fill="#928D90">${escape_html(secondLabel)}</text>`;
}
function LaughRate($$payload, $$props) {
  push();
  let {
    episodesData,
    barsHeight,
    width,
    topMargin,
    episodeVerticalPositionScale,
    percentageScale,
    handleMouseEnter = void 0,
    handleMouseLeave = void 0
  } = $$props;
  const laughRates = [];
  episodesData.forEach((episode) => {
    const laughRate = episode.laughs.length * 5 / episode.duration;
    laughRates.push(laughRate);
  });
  const meanLaughRate = Math.round((mean(laughRates) ?? 0) * 100);
  const each_array = ensure_array_like(episodesData);
  $$payload.out += `<div id="laugh-rate" class="relative ml-4"><svg${attr("width", width + 40)}${attr("height", barsHeight + 70)}${attr_style(`margin-top: -35px; padding-top: ${stringify(topMargin)}px;`)}><g transform="translate(20, 0)"><rect${attr("x", 0)}${attr("y", 35)}${attr("width", width)}${attr("height", barsHeight)} fill="rgba(231, 28, 128, 0.15)"></rect>`;
  PercentageAxes($$payload, { barsHeight, width, secondLabel: "100%" });
  $$payload.out += `<!----><text class="small accent label"${attr("x", 6)}${attr("y", 30)}>Laugh rate</text><g transform="translate(0, 35)"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let episode = each_array[$$index];
    $$payload.out += `<rect class="bar"${attr("x", 0)}${attr("y", episodeVerticalPositionScale(`${episode.season}-${episode.episode}`))}${attr("width", percentageScale(episode.laughs.length * 5 / episode.duration))}${attr("height", episodeVerticalPositionScale.bandwidth())} fill="#E71D80" role="document"></rect>`;
  }
  $$payload.out += `<!--]--><line class="avg-line"${attr("x1", percentageScale(meanLaughRate / 100))}${attr("y1", 0)}${attr("x2", percentageScale(meanLaughRate / 100))}${attr("y2", barsHeight)} stroke="#12020A"${attr("stroke-width", 2)}></line></g></g></svg> <div class="avg-label small absolute text-center px-2 py-1 rounded-md"${attr_style(` top: ${stringify(100)}px; left: ${stringify(percentageScale(meanLaughRate / 100) - 38)}px; background-color: rgba(249, 245, 247, 0.9);`)}><div>avg</div> <div>${escape_html(`${meanLaughRate}%`)}</div></div></div>`;
  bind_props($$props, { handleMouseEnter, handleMouseLeave });
  pop();
}
function IMDbRating($$payload, $$props) {
  push();
  let {
    episodesData,
    barsHeight,
    width,
    topMargin,
    episodeVerticalPositionScale,
    percentageScale,
    handleMouseEnter = void 0,
    handleMouseLeave = void 0
  } = $$props;
  const imdbRatings = [];
  episodesInfo.forEach((episode) => {
    const laughRate = episode.IMDB_rating ? +episode.IMDB_rating.replace(",", ".") : 0;
    imdbRatings.push(laughRate);
  });
  const meanIMDbRating = Math.round((mean(imdbRatings) ?? 0) * 10) / 10;
  const each_array = ensure_array_like(episodesData);
  $$payload.out += `<div id="imdb-rating" class="relative ml-8"><svg${attr("width", width + 40)}${attr("height", barsHeight + 70)}${attr_style(`margin-top: -35px; padding-top: ${stringify(topMargin)}px;`)}><g transform="translate(20, 0)"><rect${attr("x", 0)}${attr("y", 35)}${attr("width", width)}${attr("height", barsHeight)} fill="rgba(231, 28, 128, 0.15)"></rect>`;
  PercentageAxes($$payload, { barsHeight, width, secondLabel: "10" });
  $$payload.out += `<!----><text class="small accent label"${attr("x", 6)}${attr("y", 30)}>IMDb rating</text><g transform="translate(0, 35)"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let episode = each_array[$$index];
    $$payload.out += `<rect class="bar"${attr("x", 0)}${attr("y", episodeVerticalPositionScale(`${episode.season}-${episode.episode}`))}${attr("width", (() => {
      const info = episodesInfo.find((e) => e.season === episode.season && e.episode === episode.episode);
      return info && info.IMDB_rating ? percentageScale(+info.IMDB_rating.replace(",", ".") / 10) : 0;
    })())}${attr("height", episodeVerticalPositionScale.bandwidth())} fill="#E71D80" role="document"></rect>`;
  }
  $$payload.out += `<!--]--><line class="avg-line"${attr("x1", percentageScale(meanIMDbRating / 10))}${attr("y1", 0)}${attr("x2", percentageScale(meanIMDbRating / 10))}${attr("y2", barsHeight)} stroke="#12020A"${attr("stroke-width", 2)}></line></g></g></svg> <div class="avg-label small absolute text-center px-2 py-1 rounded-md"${attr_style(` top: ${stringify(100)}px; left: ${stringify(percentageScale(meanIMDbRating / 10) - 53)}px; background-color: rgba(249, 245, 247, 0.9);`)}><div>avg</div> <div>${escape_html(`${meanIMDbRating}/10`)}</div></div></div>`;
  bind_props($$props, { handleMouseEnter, handleMouseLeave });
  pop();
}
function AllEpisodesTexts($$payload) {
  $$payload.out += `<div id="all-episodes-1" class="flex w-screen items-center justify-center" style="height: calc(150vh + 260px); padding-top: calc(50vh + 260px);"><div class="text-overlay">We repeated this process for each of the <span class="em">176 original episodes</span>, those that were written discounting any clip/highlight shows...</div></div> <div id="all-episodes-2" class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">... and discovered the laugh rate was pretty stable over the 9 seasons.</div></div> <div id="all-episodes-3" class="flex h-screen w-screen items-center justify-center"><div class="text-overlay">This was also borne out in the IMDb ratings, another view of enjoyment but now shaped by the wider viewing audience, not just those present for the recording. Seinfeld's writing and producing team excelled at generating laughs consistently across its 9 seasons.</div></div>`;
}
function AllEpisodes($$payload, $$props) {
  push();
  let { episodesData, stripHeight } = $$props;
  let innerWidth = 1600;
  let innerHeight = 800;
  let topMargin = (innerHeight - stripHeight) / 2;
  let smallChartWidth = innerWidth / 10;
  let episodeVerticalPositionScale = scaleBand().domain(episodesInfo.map((d) => `${d.season}-${d.episode}`)).range([0, stripHeight]);
  let percentageScale = scaleLinear().domain([0, 1]).range([0, smallChartWidth]);
  let isTooltipVisible = false;
  let hoveredEpisode = void 0;
  let mousePosition = void 0;
  function handleMouseEnter(e, episode) {
    mousePosition = [e.clientX, e.clientY];
    isTooltipVisible = true;
    hoveredEpisode = episodesInfo.find((e2) => e2.season === episode.season && e2.episode === episode.episode);
  }
  function handleMouseLeave() {
    isTooltipVisible = false;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div id="all-episodes" class="relative mt-60" style="width: calc(100vw - 25);"><div id="all-episodes-visualizations" class="h-screen flex absolute top-0 left-0" style="width: calc(100vw - 25);">`;
    EpisodeBars($$payload2, {
      episodesData,
      barsHeight: stripHeight,
      width: 2 * innerWidth / 3 - 25,
      topMargin,
      episodeVerticalPositionScale,
      get handleMouseEnter() {
        return handleMouseEnter;
      },
      set handleMouseEnter($$value) {
        handleMouseEnter = $$value;
        $$settled = false;
      },
      get handleMouseLeave() {
        return handleMouseLeave;
      },
      set handleMouseLeave($$value) {
        handleMouseLeave = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    {
      $$payload2.out += "<!--[-->";
      LaughRate($$payload2, {
        episodesData,
        barsHeight: stripHeight,
        width: smallChartWidth,
        topMargin,
        episodeVerticalPositionScale,
        percentageScale,
        get handleMouseEnter() {
          return handleMouseEnter;
        },
        set handleMouseEnter($$value) {
          handleMouseEnter = $$value;
          $$settled = false;
        },
        get handleMouseLeave() {
          return handleMouseLeave;
        },
        set handleMouseLeave($$value) {
          handleMouseLeave = $$value;
          $$settled = false;
        }
      });
      $$payload2.out += `<!----> `;
      IMDbRating($$payload2, {
        episodesData,
        barsHeight: stripHeight,
        width: smallChartWidth,
        topMargin,
        episodeVerticalPositionScale,
        percentageScale,
        get handleMouseEnter() {
          return handleMouseEnter;
        },
        set handleMouseEnter($$value) {
          handleMouseEnter = $$value;
          $$settled = false;
        },
        get handleMouseLeave() {
          return handleMouseLeave;
        },
        set handleMouseLeave($$value) {
          handleMouseLeave = $$value;
          $$settled = false;
        }
      });
      $$payload2.out += `<!---->`;
    }
    $$payload2.out += `<!--]--></div> <div class="z-10 relative" style="pointer-events: none">`;
    AllEpisodesTexts($$payload2);
    $$payload2.out += `<!----></div> `;
    if (isTooltipVisible && innerWidth >= 793) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="fixed top-0 z-20 h-screen" style="width: calc(100vw - 25px); left: 25px; pointer-events: none;">`;
      EpisodeTooltip($$payload2, {
        episode: hoveredEpisode,
        position: mousePosition
      });
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function DataGathering($$payload, $$props) {
  push();
  let { episodesData } = $$props;
  let innerHeight = 800;
  let stripHeight = /* @__PURE__ */ (() => {
    return innerHeight;
  })();
  const currentSeason = 5;
  const currentEpisode = 14;
  const episodeInfo = episodesInfo.find((e) => e.season === currentSeason && e.episode === currentEpisode);
  const episodeData = episodesData.filter((d) => d.season === 5 && d.episode === 14).map((d) => d.data)[0];
  const laughData = episodesData.filter((d) => d.season === 5 && d.episode === 14).map((d) => d.laughs)[0];
  $$payload.out += `<section id="data-gathering" class="relative"><div class="absolute top-0 left-0">`;
  SeasonsStrip($$payload);
  $$payload.out += `<!----></div> <div class="w-screen" style="padding-left: 25px;">`;
  DataGatheringDetails($$payload, { laughData });
  $$payload.out += `<!----> `;
  EpisodeExample($$payload, {
    episodeInfo,
    episodeData,
    laughData
  });
  $$payload.out += `<!----> `;
  AllEpisodes($$payload, { episodesData, stripHeight });
  $$payload.out += `<!----></div></section>`;
  pop();
}
const quotes = [
  {
    "audio_clip_id": 1,
    "season": 1,
    "episode": 1,
    "episode_title": "The Seinfeld Chronicles",
    "who": "Jerry",
    "quote": "Seems to me, that button is in the worst possible spot.",
    "revised_quote_text": "See that, to me, that button's in the worst possible spot",
    "duration": 3
  },
  {
    "audio_clip_id": 2,
    "season": 1,
    "episode": 2,
    "episode_title": "The Stakeout",
    "who": "Jerry",
    "quote": "Sagman, Bennet, Robbins, Oppenheim and Taft",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 3,
    "season": 1,
    "episode": 3,
    "episode_title": "The Robbery",
    "who": "Jerry",
    "quote": "Why do I need two bedrooms? I got enough trouble maintaining activity in one",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 4,
    "season": 1,
    "episode": 4,
    "episode_title": "Male Unbonding",
    "who": "Kramer",
    "quote": "One day, you'll beg me to make your own pie",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 5,
    "season": 1,
    "episode": 5,
    "episode_title": "The Stock Tip",
    "who": "Jerry",
    "quote": "I think Superman probably has a very good sense of humor",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 6,
    "season": 2,
    "episode": 1,
    "episode_title": "The Ex-Girlfriend",
    "who": "Jerry",
    "quote": "You're a cashier!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 7,
    "season": 2,
    "episode": 2,
    "episode_title": "The Jacket",
    "who": "George",
    "quote": "Master of the house doling out the charm, ready with a handshake and an open palm",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 8,
    "season": 2,
    "episode": 3,
    "episode_title": "The Pony Remark",
    "who": "Jerry",
    "quote": "I hate anyone that ever had a pony when they were growing up",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 9,
    "season": 2,
    "episode": 4,
    "episode_title": "The Phone Message",
    "who": "George",
    "quote": "I can't drink coffee late at night, it keeps me up",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 10,
    "season": 2,
    "episode": 5,
    "episode_title": "The Apartment",
    "who": "Jerry",
    "quote": "You're a great guy, I love you, but you're a pod",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 11,
    "season": 2,
    "episode": 6,
    "episode_title": "The Statue",
    "who": "Kramer",
    "quote": "Just make love to that wall, pervert!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 12,
    "season": 2,
    "episode": 7,
    "episode_title": "The Revenge",
    "who": "George",
    "quote": "I'm gonna slip him a mickey!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 13,
    "season": 2,
    "episode": 8,
    "episode_title": "The Heart Attack",
    "who": "George",
    "quote": "I'm an eggplant! I'm an eggplant! I'm a minstrel man!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 14,
    "season": 2,
    "episode": 9,
    "episode_title": "The Deal",
    "who": "Kramer",
    "quote": "Boy, I really liked the two of you much better when you weren't a couple",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 15,
    "season": 2,
    "episode": 10,
    "episode_title": "The Baby Shower",
    "who": "Kramer",
    "quote": "What have you done to my little cable boy?",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 16,
    "season": 2,
    "episode": 11,
    "episode_title": "The Chinese Restaurant",
    "who": "George",
    "quote": "You know, we're living in a society!",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 17,
    "season": 2,
    "episode": 12,
    "episode_title": "The Busboy",
    "who": "Elaine",
    "quote": "He's a wonderful guy, but I hate his guts",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 18,
    "season": 3,
    "episode": 1,
    "episode_title": "The Note",
    "who": "George",
    "quote": "I think it moved",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 19,
    "season": 3,
    "episode": 2,
    "episode_title": "The Truth",
    "who": "Krame",
    "quote": "My friend Bob Sacamano had shock treatments. But his synapses were so large, it had no effect",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 20,
    "season": 3,
    "episode": 3,
    "episode_title": "The Pen",
    "who": "Elaine",
    "quote": "Stella! Stella!",
    "revised_quote_text": "Put the air conditioner on",
    "duration": 4
  },
  {
    "audio_clip_id": 21,
    "season": 3,
    "episode": 4,
    "episode_title": "The Dog",
    "who": "Jerry",
    "quote": "Two hundred seats on a plane, I gotta wind up next to Yukon Jack and his dog Cujo",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 22,
    "season": 3,
    "episode": 5,
    "episode_title": "The Library",
    "who": "Bookman",
    "quote": "You put on a pair of shoes when you walk into the New York Public Library, fella",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 23,
    "season": 3,
    "episode": 6,
    "episode_title": "The Parking Garage",
    "who": "Jerry",
    "quote": "I can't carry a pen, I'm afraid I'll puncture my scrotum",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 24,
    "season": 3,
    "episode": 7,
    "episode_title": "The Cafe",
    "who": "Babu",
    "quote": "You bad man! You very very bad man!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 25,
    "season": 3,
    "episode": 8,
    "episode_title": "The Tape",
    "who": "Elaine",
    "quote": "Jerry, I want to slide my tongue around you like a snake",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 26,
    "season": 3,
    "episode": 9,
    "episode_title": "The Nose Job",
    "who": "Kramer",
    "quote": "You're as pretty as any of them, you just need a nose job",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 27,
    "season": 3,
    "episode": 10,
    "episode_title": "The Stranded",
    "who": "Elaine",
    "quote": "Maybe the dingo ate your baby",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 28,
    "season": 3,
    "episode": 11,
    "episode_title": "The Alternate Side",
    "who": "Kramer",
    "quote": "Boy, these pretzels are making me thirsty",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 29,
    "season": 3,
    "episode": 12,
    "episode_title": "The Red Dot",
    "who": "Kramer",
    "quote": "That's Hennigans, the no-smell, no-tell scotch",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 30,
    "season": 3,
    "episode": 13,
    "episode_title": "The Subway",
    "who": "George",
    "quote": "I get the feeling when lesbians are looking at me, they're thinking",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 31,
    "season": 3,
    "episode": 14,
    "episode_title": "The Pez Dispenser",
    "who": "Jerry",
    "quote": "Anyone who would laugh at a recital is probably some sort of lunatic anyway",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 32,
    "season": 3,
    "episode": 15,
    "episode_title": "The Suicide",
    "who": "Jerry",
    "quote": "I didn’t know what the coma etiquette was",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 33,
    "season": 3,
    "episode": 16,
    "episode_title": "The Fix-Up",
    "who": "George",
    "quote": "My boys can swim!",
    "revised_quote_text": "",
    "duration": 1
  },
  {
    "audio_clip_id": 34,
    "season": 3,
    "episode": 17,
    "episode_title": "The Boyfriend (Part 1)",
    "who": "Jerry",
    "quote": "And you want to be my latex salesman",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 35,
    "season": 3,
    "episode": 18,
    "episode_title": "The Boyfriend (Part 2)",
    "who": "Carol",
    "quote": "Jerry, I can't believe it took you so long to come see the baby. I kept saying to",
    "revised_quote_text": "Jerry, I can't believe it took you so long to come see the baby. I kept saying to Michael, 'when is Jerry going to see the baby?'.",
    "duration": 6
  },
  {
    "audio_clip_id": 36,
    "season": 3,
    "episode": 19,
    "episode_title": "The Limo",
    "who": "George",
    "quote": "Tim, who's the head of the Aryan Union, you or me?",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 37,
    "season": 3,
    "episode": 20,
    "episode_title": "The Good Samaritan",
    "who": "Elaine",
    "quote": "You're soo good lookin'",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 38,
    "season": 3,
    "episode": 21,
    "episode_title": "The Letter",
    "who": "Mr Arm",
    "quote": "I see a parasite",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 39,
    "season": 3,
    "episode": 22,
    "episode_title": "The Parking Space",
    "who": "Newman",
    "quote": "You wanna know why you can't go in front first? I'll tell you why. because it signals a breakdown in the social order",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 40,
    "season": 3,
    "episode": 23,
    "episode_title": "The Keys",
    "who": "Jerry",
    "quote": "Kramer's on 'Murphy Brown'?!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 41,
    "season": 4,
    "episode": 1,
    "episode_title": "The Trip (Part 1)",
    "who": "Jerry & George",
    "quote": "This is morning mist",
    "revised_quote_text": "And what mood is this? This is morning mist",
    "duration": 3
  },
  {
    "audio_clip_id": 42,
    "season": 4,
    "episode": 2,
    "episode_title": "The Trip (Part 2)",
    "who": "Kramer",
    "quote": "Yes, I'm free! 'cause the murderer struck again'!",
    "revised_quote_text": "Yes, I'm free! 'cause the murderer struck again'!",
    "duration": 5
  },
  {
    "audio_clip_id": 43,
    "season": 4,
    "episode": 3,
    "episode_title": "The Pitch",
    "who": "George",
    "quote": "I think I can sum up the show for you with one word",
    "revised_quote_text": "The show is about NOTHING",
    "duration": 4
  },
  {
    "audio_clip_id": 44,
    "season": 4,
    "episode": 4,
    "episode_title": "The Ticket",
    "who": "Kramer",
    "quote": "Yo-yo Ma!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 45,
    "season": 4,
    "episode": 5,
    "episode_title": "The Wallet",
    "who": "Helen",
    "quote": "How could anyone not like you?",
    "revised_quote_text": "Doesn't like you? How could anyone not like you?",
    "duration": 4
  },
  {
    "audio_clip_id": 46,
    "season": 4,
    "episode": 6,
    "episode_title": "The Watch",
    "who": "Susan",
    "quote": "What do you think, they're up there going, maybe we should give those two guys, who have no experience and no idea, more money?!",
    "revised_quote_text": "Why should we give two guys with no idea or experience more money?",
    "duration": 5
  },
  {
    "audio_clip_id": 47,
    "season": 4,
    "episode": 7,
    "episode_title": "The Bubble Boy",
    "who": "George",
    "quote": "The correct answer is the Moops!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 48,
    "season": 4,
    "episode": 8,
    "episode_title": "The Cheever Letters",
    "who": "Jerry",
    "quote": "You mean the panties your mother laid out for you?",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 49,
    "season": 4,
    "episode": 9,
    "episode_title": "The Opera",
    "who": "Jerry",
    "quote": "I don't like the opera. What are they singing for? Who sings? You got something to say, say it",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 50,
    "season": 4,
    "episode": 10,
    "episode_title": "The Virgin",
    "who": "George",
    "quote": "Every time I think I'm out, they pull me back in!",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 51,
    "season": 4,
    "episode": 11,
    "episode_title": "The Contest",
    "who": "Jerry",
    "quote": "But the question is, are you still master of your domain?",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 52,
    "season": 4,
    "episode": 12,
    "episode_title": "The Airport",
    "who": "Kramer",
    "quote": "Listen to the bell, Grossbard. It tolls for thee",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 53,
    "season": 4,
    "episode": 13,
    "episode_title": "The Pick",
    "who": "Elaine",
    "quote": "Here's your Christmas card",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 54,
    "season": 4,
    "episode": 14,
    "episode_title": "The Movie",
    "who": "George",
    "quote": "I went in with a pretty woman? You know, kinda short, big wall o' hair, face like a frying pan?",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 55,
    "season": 4,
    "episode": 15,
    "episode_title": "The Visa",
    "who": "George",
    "quote": "I'm disturbed, I'm depressed, I'm inadequate, I've got it all!",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 56,
    "season": 4,
    "episode": 16,
    "episode_title": "The Shoes",
    "who": "Jerry",
    "quote": "Looking at cleavage is like looking at the sun, you don't stare at it. It's too risky. You get a sense of it and then you look away",
    "revised_quote_text": "",
    "duration": 7
  },
  {
    "audio_clip_id": 57,
    "season": 4,
    "episode": 17,
    "episode_title": "The Outing",
    "who": "Jerry",
    "quote": "Not that there's anything wrong with that…",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 58,
    "season": 4,
    "episode": 18,
    "episode_title": "The Old Man",
    "who": "George",
    "quote": "I would like to dip my bald head in oil and rub it all over your body",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 59,
    "season": 4,
    "episode": 19,
    "episode_title": "The Implant",
    "who": "Sidra",
    "quote": "And by the way. They're real, and they're spectacular!",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 60,
    "season": 4,
    "episode": 20,
    "episode_title": "The Junior Mint",
    "who": "Kramer",
    "quote": "Who's gonna turn down a Junior Mint? It's chocolate, it's peppermint; it's delicious!",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 61,
    "season": 4,
    "episode": 21,
    "episode_title": "The Smelly Car",
    "who": "Jerry",
    "quote": "My car stinks is what happened. And it's destroying the lives of everyone in its path",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 62,
    "season": 4,
    "episode": 22,
    "episode_title": "The Handicap Spot",
    "who": "Kramer",
    "quote": "She's got everything I've ever wanted in another human being ... except for the walking",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 63,
    "season": 4,
    "episode": 23,
    "episode_title": "The Pilot (Part 1)",
    "who": "George",
    "quote": "God would never let me be successful; he'd kill me first",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 64,
    "season": 4,
    "episode": 24,
    "episode_title": "The Pilot (Part 2)",
    "who": "Jerry",
    "quote": "You're passing already? But the show just ended two minutes ago!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 65,
    "season": 5,
    "episode": 1,
    "episode_title": "The Mango",
    "who": "Jerry",
    "quote": "The woman had an orgasm under false pretenses...that's sexual perjury!",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 66,
    "season": 5,
    "episode": 2,
    "episode_title": "The Puffy Shirt",
    "who": "Jery",
    "quote": "But, I don't want to be a pirate!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 67,
    "season": 5,
    "episode": 3,
    "episode_title": "The Glasses",
    "who": "Kramer",
    "quote": "May I have one of those, madam?",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 68,
    "season": 5,
    "episode": 4,
    "episode_title": "The Sniffing Accountant",
    "who": "Kramer",
    "quote": "Well, here's to feeling good all of the time",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 69,
    "season": 5,
    "episode": 5,
    "episode_title": "The Bris",
    "who": "Kramer",
    "quote": "He's just a fat little mental patient",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 70,
    "season": 5,
    "episode": 6,
    "episode_title": "The Lip Reader",
    "who": "Jerry",
    "quote": "She's not a novelty act, George. Where you hire her out for weddings and bar mitzvas",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 71,
    "season": 5,
    "episode": 7,
    "episode_title": "The Non-Fat Yoghurt",
    "who": "Jerry",
    "quote": "What the f**k are you doing, you little piece of s**t?!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 72,
    "season": 5,
    "episode": 8,
    "episode_title": "The Barber",
    "who": "Jerry",
    "quote": "I want you to have this job. Of course, sodomy is a pre-requisite",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 73,
    "season": 5,
    "episode": 9,
    "episode_title": "The Masseuse",
    "who": "George",
    "quote": "Jerry, this woman hates me so much. I'm starting to like her",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 74,
    "season": 5,
    "episode": 10,
    "episode_title": "The Cigar Store Indian",
    "who": "Kramer",
    "quote": "Hey, you know what would make a great coffee table book? A coffee table book about coffee tables!",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 75,
    "season": 5,
    "episode": 11,
    "episode_title": "The Conversion",
    "who": "Frank",
    "quote": "Wait. Is this the group that goes around mutilating squirrels?",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 76,
    "season": 5,
    "episode": 12,
    "episode_title": "The Stall",
    "who": "Elaine",
    "quote": "I can't spare a square. I don't have a square to spare",
    "revised_quote_text": "I can't. I don't have it. I don't have a square to spare.",
    "duration": 4
  },
  {
    "audio_clip_id": 77,
    "season": 5,
    "episode": 13,
    "episode_title": "The Dinner Party",
    "who": "Elaine",
    "quote": "Napoleon? Who's he to have a cake? He was a ruthless war monger. Might as well get Mengele",
    "revised_quote_text": "Napoleon? Who's he to have a cake? He was a ruthless war monger.",
    "duration": 5
  },
  {
    "audio_clip_id": 78,
    "season": 5,
    "episode": 14,
    "episode_title": "The Marine Biologist",
    "who": "George",
    "quote": "The sea was angry that day, my friends - like an old man trying to send back soup in a deli",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 79,
    "season": 5,
    "episode": 15,
    "episode_title": "The Pie",
    "who": "Jerry",
    "quote": "Well, Poppie's a little sloppy",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 80,
    "season": 5,
    "episode": 16,
    "episode_title": "The Stand-In",
    "who": "Elaine",
    "quote": "He took it out",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 81,
    "season": 5,
    "episode": 17,
    "episode_title": "The Wife",
    "who": "Jerry",
    "quote": "Did the medical journal say anything about standing in a pool of someone else's urine?",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 82,
    "season": 5,
    "episode": 18,
    "episode_title": "The Raincoats (Part 1)",
    "who": "Frank",
    "quote": "What, are you trying to set my mouth on fire?!?",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 83,
    "season": 5,
    "episode": 19,
    "episode_title": "The Raincoats (Part 2)",
    "who": "Newman",
    "quote": "He was moving on her like the stormtroopers into Poland",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 84,
    "season": 5,
    "episode": 20,
    "episode_title": "The Fire",
    "who": "Kramer",
    "quote": "Well, people kept ringing the bell",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 85,
    "season": 5,
    "episode": 21,
    "episode_title": "The Hamptons",
    "who": "George",
    "quote": "Look, you don't understand. There was shrinkage",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 86,
    "season": 5,
    "episode": 22,
    "episode_title": "The Opposite",
    "who": "George",
    "quote": "I'm the opposite of every guy you've ever met",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 87,
    "season": 6,
    "episode": 1,
    "episode_title": "The Chaperone",
    "who": "Jerry",
    "quote": "That's a shame",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 88,
    "season": 6,
    "episode": 2,
    "episode_title": "The Big Salad",
    "who": "Kramer",
    "quote": "Poor Pinkus... Poor little Pinkus!",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 89,
    "season": 6,
    "episode": 3,
    "episode_title": "The Pledge Drive",
    "who": "George",
    "quote": "I am eating my dessert. How do you eat it, with your hands?",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 90,
    "season": 6,
    "episode": 4,
    "episode_title": "The Chinese Woman",
    "who": "Jerry",
    "quote": "You know it's a shame his parents didn't get divorced thirty years ago. He could have been normal",
    "revised_quote_text": "",
    "duration": 7
  },
  {
    "audio_clip_id": 91,
    "season": 6,
    "episode": 5,
    "episode_title": "The Couch",
    "who": "Jerry",
    "quote": "Poppie peed on my sofa!",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 92,
    "season": 6,
    "episode": 6,
    "episode_title": "The Gymnast",
    "who": "Kramer",
    "quote": "That sex will melt your face",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 93,
    "season": 6,
    "episode": 7,
    "episode_title": "The Soup",
    "who": "George",
    "quote": "When you consider the other choices, manure is actually pretty refreshing",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 94,
    "season": 6,
    "episode": 8,
    "episode_title": "The Mom and Pop Store",
    "who": "George",
    "quote": "Everybody's talkin' at me, I can't hear a word they're sayin', just drivin' around in Jon Voight's car",
    "revised_quote_text": "I can't hear a word they're sayin', just drivin' around in Jon Voight's car",
    "duration": 6
  },
  {
    "audio_clip_id": 95,
    "season": 6,
    "episode": 9,
    "episode_title": "The Secretary",
    "who": "George",
    "quote": "I'm giving you a raise!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 96,
    "season": 6,
    "episode": 10,
    "episode_title": "The Race",
    "who": "George",
    "quote": "Maybe he's just very well... red?",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 97,
    "season": 6,
    "episode": 11,
    "episode_title": "The Switch",
    "who": "Kramer",
    "quote": "From now on, I'm Cosmo!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 98,
    "season": 6,
    "episode": 12,
    "episode_title": "The Label Maker",
    "who": "Jerry",
    "quote": "It's a game of world domination, being played by two guys that can barely run their own lives",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 99,
    "season": 6,
    "episode": 13,
    "episode_title": "The Scofflaw",
    "who": "Kramer",
    "quote": "I wanna be a pirate",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 102,
    "season": 6,
    "episode": 16,
    "episode_title": "The Beard",
    "who": "George",
    "quote": "I got rejected by a bald woman",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 103,
    "season": 6,
    "episode": 17,
    "episode_title": "The Kiss Hello",
    "who": "Jerry",
    "quote": "If you could say touch her breast is part of the kiss hello, then I think I could see the value in it a little bit better",
    "revised_quote_text": "",
    "duration": 7
  },
  {
    "audio_clip_id": 104,
    "season": 6,
    "episode": 18,
    "episode_title": "The Doorman",
    "who": "Kramer",
    "quote": "Meet The Bro",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 105,
    "season": 6,
    "episode": 19,
    "episode_title": "The Jimmy",
    "who": "George",
    "quote": "So you were violated by two people while you were under the gas. Big deal! You're single",
    "revised_quote_text": "George is getting upset!",
    "duration": 2
  },
  {
    "audio_clip_id": 106,
    "season": 6,
    "episode": 20,
    "episode_title": "The Doodle",
    "who": "George",
    "quote": "I'd rather she hate me and thought I was good looking",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 107,
    "season": 6,
    "episode": 21,
    "episode_title": "The Fusilli Jerry",
    "who": "Kramer",
    "quote": "I'm Cosmo Kramer",
    "revised_quote_text": "I'm here to pick up my new plates. My name is Kramer. Cosmo Kramer.",
    "duration": 4
  },
  {
    "audio_clip_id": 108,
    "season": 6,
    "episode": 22,
    "episode_title": "The Diplomat's Club",
    "who": "Newman",
    "quote": "The Son of Sam!! The worst mass murderer the post office ever produced!",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 109,
    "season": 6,
    "episode": 23,
    "episode_title": "The Face Painter",
    "who": "Puddy",
    "quote": "We're the Devils!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 110,
    "season": 6,
    "episode": 24,
    "episode_title": "The Understudy",
    "who": "Kramer",
    "quote": "Oh, understudies are a very shifty bunch. The substitute teachers of the theater world",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 111,
    "season": 7,
    "episode": 1,
    "episode_title": "The Engagement",
    "who": "Jerry",
    "quote": "What kind of lives are these? We're like children. We're not men",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 112,
    "season": 7,
    "episode": 2,
    "episode_title": "The Postponement",
    "who": "Jerry",
    "quote": "The only sex you're gonna have better than make-up sex is if you're sent to prison and you have a conjugal visit",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 113,
    "season": 7,
    "episode": 3,
    "episode_title": "The Maestro",
    "who": "Jackie",
    "quote": "It's outrageous, egregious, preposterous",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 114,
    "season": 7,
    "episode": 4,
    "episode_title": "The Wink",
    "who": "George",
    "quote": "Pulp can move, baby!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 115,
    "season": 7,
    "episode": 5,
    "episode_title": "The Hot Tub",
    "who": "Jean-Paul",
    "quote": "Aw, look at the cute little bastard!",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 116,
    "season": 7,
    "episode": 6,
    "episode_title": "The Soup Nazi",
    "who": "Soup Nazi",
    "quote": "No soup for you, come back one year!",
    "revised_quote_text": "You know something? No soup for you!",
    "duration": 2
  },
  {
    "audio_clip_id": 117,
    "season": 7,
    "episode": 7,
    "episode_title": "The Secret Code",
    "who": "George",
    "quote": "If you're in some situation where some fast cash will save your life, I'll give you the code",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 118,
    "season": 7,
    "episode": 8,
    "episode_title": "The Pool Guy",
    "who": "George",
    "quote": "A George divided against itself cannot stand!",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 119,
    "season": 7,
    "episode": 9,
    "episode_title": "The Sponge",
    "who": "Elaine",
    "quote": "I just couldn't decide if he was really sponge-worthy",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 120,
    "season": 7,
    "episode": 10,
    "episode_title": "The Gum",
    "who": "George",
    "quote": "The Jon Voight Car is no more",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 121,
    "season": 7,
    "episode": 11,
    "episode_title": "The Rye",
    "who": "Elaine",
    "quote": "You know, one of these days, something terrible is gonna happen to you. It has to!",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 122,
    "season": 7,
    "episode": 12,
    "episode_title": "The Caddy",
    "who": "Steinbrenner",
    "quote": "Jerry, it's Frank Costanza, Mr.Steinbrenner is here, George is dead, call me back!",
    "revised_quote_text": "He's dead. Costanza's dead.",
    "duration": 3
  },
  {
    "audio_clip_id": 123,
    "season": 7,
    "episode": 13,
    "episode_title": "The Seven",
    "who": "George",
    "quote": "Oh, it's got cachet, baby! It's got cachet up the yin-yang!",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 124,
    "season": 7,
    "episode": 14,
    "episode_title": "The Cadillac (Part 1)",
    "who": "George",
    "quote": "I have never been anyone's type, but apparently, this Marisa Tomei loves funny, quirky, bald men",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 125,
    "season": 7,
    "episode": 15,
    "episode_title": "The Cadillac (Part 2)",
    "who": "George",
    "quote": "So, anyway, if you think about it, manure is not really that bad a word",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 126,
    "season": 7,
    "episode": 16,
    "episode_title": "The Shower Head",
    "who": "Kramer",
    "quote": "I'm sitting there in a tepid pool of my own filth. All kinds of microscopic parasites and organisms having sex all around me",
    "revised_quote_text": "I'm sitting there in a tepid pool of my own filth.",
    "duration": 4
  },
  {
    "audio_clip_id": 127,
    "season": 7,
    "episode": 17,
    "episode_title": "The Doll",
    "who": "George",
    "quote": "I feel like I'm in bed with my mother",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 128,
    "season": 7,
    "episode": 18,
    "episode_title": "The Friars Club",
    "who": "Kramer",
    "quote": "I woke up in the Hudson river in a SACK!!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 129,
    "season": 7,
    "episode": 19,
    "episode_title": "The Wig Master",
    "who": "Jerry",
    "quote": "Boy, imagine liking wigs to the point it becomes a career choice",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 130,
    "season": 7,
    "episode": 20,
    "episode_title": "The Calzone",
    "who": "George",
    "quote": "Beautiful women. You know they could get away with murder. You never she any of them lift anything over three pounds",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 131,
    "season": 7,
    "episode": 21,
    "episode_title": "The Bottle Deposit (Part 1)",
    "who": "Kramer",
    "quote": "Newman, you magnificent bastard, you did it!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 132,
    "season": 7,
    "episode": 22,
    "episode_title": "The Bottle Deposit (Part 2)",
    "who": "Kramer",
    "quote": "Jerry! We've lost the fat man, and we're running lean. We're back on track, buddy!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 133,
    "season": 7,
    "episode": 23,
    "episode_title": "The Wait Out",
    "who": "Elaine",
    "quote": "Well, I've been waiting out two or three marriages, but this is the one I really had my eye on",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 134,
    "season": 7,
    "episode": 24,
    "episode_title": "The Invitations",
    "who": "Kramer",
    "quote": "Poor Lily…",
    "revised_quote_text": "",
    "duration": 1
  },
  {
    "audio_clip_id": 135,
    "season": 8,
    "episode": 1,
    "episode_title": "The Foundation",
    "who": "Jerry",
    "quote": "Before we go any further, I'd just like to point out how disturbing it is that you equate eating a block of cheese with some sort of bachelor paradise",
    "revised_quote_text": "",
    "duration": 8
  },
  {
    "audio_clip_id": 136,
    "season": 8,
    "episode": 2,
    "episode_title": "The Soul Mate",
    "who": "Newman",
    "quote": "Jerry wouldn't know delicate beauty if it bludgeoned him over the head",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 137,
    "season": 8,
    "episode": 3,
    "episode_title": "The Bizarro Jerry",
    "who": "Jerry",
    "quote": "The hands of a man. It's like a creature out of Greek mythology. I mean, she was like part woman, part horrible beast",
    "revised_quote_text": "It's like a creature out of Greek mythology. I mean, she was like part woman, part horrible beast",
    "duration": 7
  },
  {
    "audio_clip_id": 138,
    "season": 8,
    "episode": 4,
    "episode_title": "The Little Kicks",
    "who": "George",
    "quote": "It was more like a full bodied dry heave set to music",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 139,
    "season": 8,
    "episode": 5,
    "episode_title": "The Package",
    "who": "Jerry",
    "quote": "He's all smooth now. Look's like a seal",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 140,
    "season": 8,
    "episode": 6,
    "episode_title": "The Fatigues",
    "who": "Frank",
    "quote": "I can still hear the retching, the screaming. I sent sixteen of my own men to the latrines that night. They were just boys",
    "revised_quote_text": "",
    "duration": 10
  },
  {
    "audio_clip_id": 141,
    "season": 8,
    "episode": 7,
    "episode_title": "The Checks",
    "who": "Kramer",
    "quote": "George is right, Jerry. See, here, you're just another apple, but in Japan, you're an exotic fruit. Like an orange. Which is rare there",
    "revised_quote_text": "",
    "duration": 9
  },
  {
    "audio_clip_id": 142,
    "season": 8,
    "episode": 8,
    "episode_title": "The Chicken Roaster",
    "who": "Jerry",
    "quote": "Hey everybody, I'm on no sleep, no sleep!. You don't know what it's like in there, all night long things are creeping and cracking. And that red light is burning my brain!",
    "revised_quote_text": "I'm on no sleep, no sleep!. You don't know what it's like in there, all night long things are creeping and cracking.",
    "duration": 7
  },
  {
    "audio_clip_id": 143,
    "season": 8,
    "episode": 9,
    "episode_title": "The Abstinence",
    "who": "Jackie",
    "quote": "Your face is my case",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 144,
    "season": 8,
    "episode": 10,
    "episode_title": "The Andrea Doria",
    "who": "Jerry",
    "quote": "You know, if this tenant board is so impressed with suffering, maybe you should tell them the Astonishing Tales of Costanza",
    "revised_quote_text": "If this board is so impressed with suffering, maybe you should tell them the Astonishing Tales of Costanza",
    "duration": 5
  },
  {
    "audio_clip_id": 145,
    "season": 8,
    "episode": 11,
    "episode_title": "The Little Jerry",
    "who": "Kramer",
    "quote": "You see in Little Jerry Seinfeld the unlimited future you once had. Now, just because Jerry Seinfeld is a has-been, don't make Little Jerry Seinfeld a never-was!",
    "revised_quote_text": "Now, just because Jerry Seinfeld is a has-been, don't make Little Jerry Seinfeld a never-was!",
    "duration": 5
  },
  {
    "audio_clip_id": 146,
    "season": 8,
    "episode": 12,
    "episode_title": "The Money",
    "who": "Peterman",
    "quote": "Kudos, Elaine, on a job... done",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 147,
    "season": 8,
    "episode": 13,
    "episode_title": "The Comeback",
    "who": "George",
    "quote": "Oh yeah? Well the jerk store called. They're running outta you",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 148,
    "season": 8,
    "episode": 14,
    "episode_title": "The Van Buren Boys",
    "who": "Jerry",
    "quote": "There's a street gang named after President Martin Van Buren?",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 149,
    "season": 8,
    "episode": 15,
    "episode_title": "The Susie",
    "who": "Elaine",
    "quote": "You're a, huuge part of the problem. But, I think that at it's core, this is a Susie-and-Elaine problem that requires, a Susie-and-Elaine solution! And, who better to do that than Elaine and Susie! Susie and Elaine!",
    "revised_quote_text": "This is a Susie-and-Elaine problem that requires, a Susie-and-Elaine solution!",
    "duration": 7
  },
  {
    "audio_clip_id": 150,
    "season": 8,
    "episode": 16,
    "episode_title": "The Pothole",
    "who": "Newman",
    "quote": "Oh, the humanity!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 151,
    "season": 8,
    "episode": 17,
    "episode_title": "The English Patient",
    "who": "Elaine",
    "quote": "Quit telling your stupid story, about the stupid desert, and just die already!",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 152,
    "season": 8,
    "episode": 18,
    "episode_title": "The Nap",
    "who": "Steinbrenner",
    "quote": "So, empty calories and male curiosity, eh, Georgie?",
    "revised_quote_text": "It's just empty calories and male curiosity, eh, Georgie?",
    "duration": 4
  },
  {
    "audio_clip_id": 153,
    "season": 8,
    "episode": 19,
    "episode_title": "The Yada Yada",
    "who": "George",
    "quote": "I gotta tell you, I am loving this yada yada thing. You know, I can cross over my whole life story",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 154,
    "season": 8,
    "episode": 20,
    "episode_title": "The Millennium",
    "who": "Kramer",
    "quote": "Well, those aren't for New Year's. Those are my everyday balloons",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 155,
    "season": 8,
    "episode": 21,
    "episode_title": "The Muffin Tops",
    "who": "Jerry",
    "quote": "The last thing this guy's qualified to give a tour of is reality",
    "revised_quote_text": "",
    "duration": 4
  },
  {
    "audio_clip_id": 156,
    "season": 8,
    "episode": 22,
    "episode_title": "The Summer of George",
    "who": "Jerry",
    "quote": "Men think if women are grabbing and clawing at each other there's a chance they might somehow kiss",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 157,
    "season": 9,
    "episode": 1,
    "episode_title": "The Butter Shave",
    "who": "Kramer",
    "quote": "Stick a fork in me Jerry, I'm done",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 158,
    "season": 9,
    "episode": 2,
    "episode_title": "The Voice",
    "who": "Jerry",
    "quote": "Hello-o-o-o! La-la-la!",
    "revised_quote_text": "Hello-o-o-o!",
    "duration": 3
  },
  {
    "audio_clip_id": 159,
    "season": 9,
    "episode": 3,
    "episode_title": "The Serenity Now",
    "who": "Frank",
    "quote": "Doctor gave me a relaxation cassette. When my blood pressure gets too high, the man on the tape tells me to say, 'Serenity now!'",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 160,
    "season": 9,
    "episode": 4,
    "episode_title": "The Blood",
    "who": "Kramer",
    "quote": "Don't be ridiculous. Now, if you'll excuse me, I have to go to fill my freezer with my own blood",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 161,
    "season": 9,
    "episode": 5,
    "episode_title": "The Junk Mail",
    "who": "Jack",
    "quote": "I'm... the Wiz! I'm the Wiz and noooobody beats me!",
    "revised_quote_text": "I'm the Wiz and noooobody beats me!",
    "duration": 3
  },
  {
    "audio_clip_id": 162,
    "season": 9,
    "episode": 6,
    "episode_title": "The Merv Griffin Show",
    "who": "Kramer",
    "quote": "But first, we're talking with Jerry. Okay, Jerry, uh, you drugged a woman in order to play with her toy collection. How do you feel about that?",
    "revised_quote_text": "It's the Merv Griffin set.",
    "duration": 3
  },
  {
    "audio_clip_id": 163,
    "season": 9,
    "episode": 7,
    "episode_title": "The Slicer",
    "who": "Kramer",
    "quote": "That's a lot of potatoes",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 164,
    "season": 9,
    "episode": 8,
    "episode_title": "The Betrayal",
    "who": "Elaine",
    "quote": "G'night, Jugdish!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 165,
    "season": 9,
    "episode": 9,
    "episode_title": "The Apology",
    "who": "Jerry",
    "quote": "The thing you don't realize is that there's good naked and bad naked. Naked hair brushing, good; naked crouching, bad",
    "revised_quote_text": "",
    "duration": 8
  },
  {
    "audio_clip_id": 166,
    "season": 9,
    "episode": 10,
    "episode_title": "The Strike",
    "who": "Frank",
    "quote": "A Festivus for the rest of us!",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 167,
    "season": 9,
    "episode": 11,
    "episode_title": "The Dealership",
    "who": "Puddy",
    "quote": "High-five!",
    "revised_quote_text": "That chimp's all right. High-five.",
    "duration": 2
  },
  {
    "audio_clip_id": 168,
    "season": 9,
    "episode": 12,
    "episode_title": "The Reverse Peephole",
    "who": "Puddy",
    "quote": "Check it out! 8-Ball! You got a question, you ask the 8-Ball",
    "revised_quote_text": "You got a question, you ask the 8-Ball",
    "duration": 4
  },
  {
    "audio_clip_id": 169,
    "season": 9,
    "episode": 13,
    "episode_title": "The Cartoon",
    "who": "Kramer",
    "quote": "C'mon George relax. Just because they look alike doesn't mean you're secretly in love with Jerry",
    "revised_quote_text": "",
    "duration": 6
  },
  {
    "audio_clip_id": 170,
    "season": 9,
    "episode": 14,
    "episode_title": "The Strongbox",
    "who": "Elaine",
    "quote": "Well, I am not paying Glenn off to get out of this relationship. Wh-what am I supposed to do, just walk into his hovel, and hand him... well, how much do you think it would be?",
    "revised_quote_text": "The Strongbox Well, I am not paying Glenn off to get out of this relationship.",
    "duration": 5
  },
  {
    "audio_clip_id": 171,
    "season": 9,
    "episode": 15,
    "episode_title": "The Wizard",
    "who": "Kramer",
    "quote": "Right. Yeah. The polls close after dinner, three o'clock. But then when we win, the celebration goes all night until the break of 8pm",
    "revised_quote_text": "",
    "duration": 8
  },
  {
    "audio_clip_id": 172,
    "season": 9,
    "episode": 16,
    "episode_title": "The Burning",
    "who": "Kramer",
    "quote": "Well, I got gonorrhea",
    "revised_quote_text": "",
    "duration": 3
  },
  {
    "audio_clip_id": 173,
    "season": 9,
    "episode": 17,
    "episode_title": "The Bookstore",
    "who": "Jerry",
    "quote": "To the Idiotmobile!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 174,
    "season": 9,
    "episode": 18,
    "episode_title": "The Frogger",
    "who": "George",
    "quote": "Kramer, listen to me. I'm never gonna have a child. If I lose this Frogger high score, that's it for me",
    "revised_quote_text": "",
    "duration": 9
  },
  {
    "audio_clip_id": 175,
    "season": 9,
    "episode": 19,
    "episode_title": "The Maid",
    "who": "Elaine",
    "quote": "Well, there's nothin' more sophisticated than diddlin' the maid and then chewin' some gum",
    "revised_quote_text": "",
    "duration": 5
  },
  {
    "audio_clip_id": 176,
    "season": 9,
    "episode": 20,
    "episode_title": "The Puerto Rican Day",
    "who": "George",
    "quote": "That's gotta hurt!",
    "revised_quote_text": "",
    "duration": 2
  },
  {
    "audio_clip_id": 179,
    "season": 9,
    "episode": 23,
    "episode_title": "The Finale (Part 1)",
    "who": "Newman",
    "quote": "The day will come. Oh yes, mark my words, Seinfeld - your day of reckoning is coming. When an evil wind will blow through your little playworld, and wipe that smug smile off your face. And I'll be there, in all my glory, watching - watching as it all comes crumbling down",
    "revised_quote_text": "Your day of reckoning is coming. When an evil wind will blow through your little playworld, and wipe that smug smile off your face. And I'll be there, in all my glory, watching - watching as it all comes crumbling down",
    "duration": 18
  },
  {
    "audio_clip_id": 180,
    "season": 9,
    "episode": 24,
    "episode_title": "The Finale (Part 2)",
    "who": "Jerry",
    "quote": "Alright, hey, you've been great! See you in the cafeteria",
    "revised_quote_text": "See now, to me, that button is in the worst possible spot",
    "duration": 4
  }
];
function Quotes($$payload, $$props) {
  push();
  let innerWidth = 1600;
  const numQuotes = (() => {
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
  })();
  const quotesToDisplay = (() => {
    const quotesToKeep = [];
    seasons.forEach((season) => {
      const allQuotes = quotes.filter((quote) => quote.season === season.seasonNum);
      const randomQuotes = getRandom(allQuotes, numQuotes).sort((a, b) => a.episode - b.episode);
      quotesToKeep.push(...randomQuotes);
    });
    return quotesToKeep;
  })();
  const each_array = ensure_array_like(quotesToDisplay);
  $$payload.out += `<div class="bg-black text-white py-80"><div class="container flex h-screen items-center"><ul class="quotes-list svelte-1sez9h1"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let quote = each_array[i];
    $$payload.out += `<li class="inline">`;
    if (i > 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="px-4">•</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr_class(`quote quote-${quote.audio_clip_id} relative inline cursor-default`, "svelte-1sez9h1")}${attr_style(`color: ${seasons.find((s) => s.seasonNum === quote.season)?.color}`)}>`;
    if (quote.revised_quote_text.length > 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `${escape_html(quote.revised_quote_text)}`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `${escape_html(quote.quote)}`;
    }
    $$payload.out += `<!--]--> <span class="quote-info small absolute left-0 top-7 w-96 svelte-1sez9h1" role="contentinfo">${escape_html(`s${quote.season}e${quote.episode} ${quote.episode_title}, ${quote.who}`)}</span></div></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div>`;
  pop();
}
function IntroEnd($$payload, $$props) {
  push();
  $$payload.out += `<div class="pt-80 bg-black text-white"><div id="intro-end" class="h-screen w-screen"><div class="h-screen container flex content-center flex-wrap"><div style="max-width: 900px;">How did Jerry Seinfeld and Larry David, with the support of their group of talented writers, achieve such consistent brilliance? Much like a football coach seeks to assemble the right players, in the right combinations, to win a game, we wanted to see how the Seinfeld coaching team used their resources, assembling the right characters, in the right scenes, <span class="highlight">to win the laughter</span>.</div></div></div></div>`;
  pop();
}
function SectionTitle($$payload, $$props) {
  push();
  let { section, title } = $$props;
  let innerWidth = 1600;
  let innerHeight = 800;
  const numColumns = (() => {
    switch (true) {
      case innerWidth >= 1024:
        return 4;
      case innerWidth >= 768:
        return 3;
      default:
        return 2;
    }
  })();
  const numRows = (() => {
    switch (true) {
      case innerHeight >= 800:
        return 3;
      case innerHeight >= 600:
        return 2;
      default:
        return 2;
    }
  })();
  const numTiles = numColumns * numRows;
  const tilesData = (() => {
    switch (section) {
      case "supp_char":
        return supportingCharacterTiles;
      case "locations":
        return locationsTiles;
      default:
        return mainCharacterTiles;
    }
  })();
  const tiles = getRandom(tilesData, numTiles);
  const tilesWidth = innerWidth / numColumns;
  const tilesHeight = innerHeight / numRows;
  const getOverlayColor = (tile) => {
    switch (section) {
      case "supp_char":
        return characters.find((char) => char.label === tile.category)?.color;
      case "main_char":
        return characters.find((char) => char.label === tile.name)?.color;
      default:
        return "#12020A";
    }
  };
  const each_array = ensure_array_like(tiles);
  $$payload.out += `<div${attr("id", `tiles-container-${section}`)} class="tiles-container relative h-screen w-screen bg-black text-white"><div class="tiles absolute z-0 flex flex-wrap"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let tile = each_array[i];
    $$payload.out += `<div${attr("id", tile.id)}${attr_class(`tile-container tile-container-${section} relative`, "svelte-2q31gi")} role="group"><div class="tile relative z-10 svelte-2q31gi"${attr_style(`width: ${stringify(tilesWidth)}px; height: ${stringify(tilesHeight)}px; background-image: url('https://amdufour.github.io/hosted-data/apis/thumbnails/${stringify(tile.thumbnail)}');`)}></div> <video class="absolute bottom-0 left-0 right-0 z-0" playsinline preload="none" data-object-fit="cover"${attr_style(`width: ${stringify(tilesWidth)}px; height: ${stringify(tilesHeight)}px;`)}${attr("poster", `https://amdufour.github.io/hosted-data/apis/thumbnails/${stringify(tile.thumbnail)}`)}><source${attr("src", `https://amdufour.github.io/hosted-data/apis/videos/${stringify(tile.video)}`)} type="video/mp4"/></video> <div class="z-1 absolute bottom-0 left-0 right-0 top-0"${attr_style(`background: rgba(18, 2, 10, 0.3); width: ${stringify(tilesWidth)}px;`)}></div> <div class="absolute z-10 bottom-0 left-0 right-0 top-0"${attr_style(`background-image: url('${stringify(tv_noise)}'); width: ${stringify(tilesWidth)}px;`)}></div> <div class="info absolute bottom-0 left-0 right-0 z-20 svelte-2q31gi"><div class="details px-4 svelte-2q31gi"${attr_style(`color: ${stringify(section === "locations" ? "#F9F5F7" : "#12020A")}; background-color: ${stringify(getOverlayColor(tile))};`)}><div><span class="name svelte-2q31gi">${escape_html(tile.name)}</span> `;
    if (tile.category) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="category small">${escape_html(tile.category)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="small">${escape_html(`s${tile.season}e${tile.episode} ${tile.episodeTitle}`)}</div></div></div> <div class="overlay absolute left-0 right-0 top-0 z-30 svelte-2q31gi"><div class="absolute left-0 right-0 top-0 bottom-0" style="background: rgba(18, 2, 10, 0.4);"></div> <div class="absolute left-0 right-0 top-0 bottom-0 opacity-30"${attr_style(`background-color: ${stringify(getOverlayColor(tile))};`)}></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div${attr("id", `section-title-${section}`)}${attr_class(`section-title absolute left-0 right-0 z-10 flex items-center ${""}`, "svelte-2q31gi")}${attr_style(`top: ${stringify(tilesHeight - 146)}px;`)}><div class="container"><h2 class="mask svelte-2q31gi">${escape_html(title)}</h2></div></div></div>`;
  pop();
}
function MainCharsSection($$payload) {
  $$payload.out += `<section>`;
  SectionTitle($$payload, {
    section: "main_char",
    title: "Lead Characters"
  });
  $$payload.out += `<!----> <div class="flex h-screen w-screen items-center"><div class="container"><div>PLACEHOLDER Lead Characters section</div></div></div></section>`;
}
function SupportingCharsSection($$payload) {
  $$payload.out += `<section>`;
  SectionTitle($$payload, {
    section: "supp_char",
    title: "Supporting Characters"
  });
  $$payload.out += `<!----> <div class="flex h-screen w-screen items-center"><div class="container"><div>PLACEHOLDER Supporting Characters section</div></div></div></section>`;
}
function LocationsSection($$payload) {
  $$payload.out += `<section>`;
  SectionTitle($$payload, { section: "locations", title: "Locations" });
  $$payload.out += `<!----> <div class="flex h-screen w-screen items-center"><div class="container"><div>PLACEHOLDER Locations section</div></div></div></section>`;
}
function PlayIcon($$payload, $$props) {
  let { color } = $$props;
  $$payload.out += `<svg width="44" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_938_3273)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 21C0 9.40154 9.40154 0 21 0C32.5985 0 42 9.40154 42 21C42 32.5985 32.5985 42 21 42C9.40154 42 0 32.5985 0 21ZM30.2055 18.8828C30.5828 19.0928 30.8972 19.3998 31.116 19.772C31.3348 20.1442 31.4502 20.5682 31.4502 21C31.4502 21.4318 31.3348 21.8558 31.116 22.228C30.8972 22.6002 30.5828 22.9072 30.2055 23.1172L18.1375 29.8222C17.7688 30.0269 17.353 30.1317 16.9312 30.1265C16.5095 30.1212 16.0965 30.0059 15.7329 29.7921C15.3694 29.5782 15.068 29.2732 14.8585 28.9071C14.649 28.5411 14.5387 28.1267 14.5385 27.7049V14.2951C14.5385 12.4492 16.5222 11.2797 18.1375 12.1778L30.2055 18.8828Z"${attr("fill", color)}></path></g><defs><clipPath id="clip0_938_3273"><rect width="42" height="42" fill="white"></rect></clipPath></defs></svg>`;
}
function BackwardIcon($$payload, $$props) {
  let { color } = $$props;
  $$payload.out += `<svg width="44" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41 28.499C41 30.3076 39.0469 31.4422 37.4769 30.5442L22.5975 22.0431C22.2368 21.8372 21.937 21.5396 21.7284 21.1804C21.5199 20.8212 21.41 20.4133 21.41 19.9979C21.41 19.5826 21.5199 19.1747 21.7284 18.8155C21.937 18.4563 22.2368 18.1587 22.5975 17.9527L37.4769 9.4517C37.8351 9.24711 38.2407 9.14018 38.6532 9.14162C39.0657 9.14306 39.4706 9.25281 39.8273 9.45991C40.1841 9.667 40.4802 9.96416 40.686 10.3216C40.8918 10.6791 41.0001 11.0844 41 11.4969V28.499ZM20.59 28.499C20.59 30.3076 18.6369 31.4422 17.0669 30.5442L2.18743 22.0431C1.82673 21.8372 1.52692 21.5396 1.31838 21.1804C1.10984 20.8212 1 20.4133 1 19.9979C1 19.5826 1.10984 19.1747 1.31838 18.8155C1.52692 18.4563 1.82673 18.1587 2.18743 17.9527L17.0669 9.4517C17.425 9.24711 17.8307 9.14018 18.2432 9.14162C18.6557 9.14306 19.0605 9.25281 19.4173 9.45991C19.774 9.667 20.0701 9.96416 20.2759 10.3216C20.4817 10.6791 20.59 11.0844 20.59 11.4969V28.499Z"${attr("stroke", color)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
}
function ForwardIcon($$payload, $$props) {
  let { color } = $$props;
  $$payload.out += `<svg width="44" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.50093C1 7.69228 2.95308 6.55769 4.52309 7.45573L19.4025 15.9568C19.7632 16.1627 20.063 16.4603 20.2716 16.8195C20.4801 17.1787 20.59 17.5866 20.59 18.002C20.59 18.4173 20.4801 18.8252 20.2716 19.1844C20.063 19.5436 19.7632 19.8412 19.4025 20.0472L4.52309 28.5482C4.16491 28.7528 3.75928 28.8597 3.34679 28.8583C2.9343 28.8569 2.52942 28.7471 2.17268 28.54C1.81594 28.3329 1.51985 28.0358 1.31405 27.6783C1.10825 27.3208 0.99995 26.9155 1 26.503V9.50093ZM21.41 9.50093C21.41 7.69228 23.3631 6.55769 24.9331 7.45573L39.8126 15.9568C40.1733 16.1627 40.4731 16.4603 40.6816 16.8195C40.8902 17.1787 41 17.5866 41 18.002C41 18.4173 40.8902 18.8252 40.6816 19.1844C40.4731 19.5436 40.1733 19.8412 39.8126 20.0472L24.9331 28.5482C24.575 28.7528 24.1693 28.8597 23.7568 28.8583C23.3443 28.8569 22.9395 28.7471 22.5827 28.54C22.226 28.3329 21.9299 28.0358 21.7241 27.6783C21.5183 27.3208 21.41 26.9155 21.41 26.503V9.50093Z"${attr("stroke", color)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
}
function Info($$payload) {
  $$payload.out += `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.6" y="1.6" width="30.8" height="30.8" rx="15.4" stroke="#12020A" stroke-width="1.2"></rect><path d="M17.0166 10.7419C13.9028 10.7419 11.3589 13.2859 11.3589 16.3997C11.3589 18.0278 12.0712 19.5949 13.2719 20.6531C14.1674 21.5486 14.086 23.4616 14.0656 23.482C14.0656 23.5838 14.086 23.6652 14.1674 23.7466C14.2285 23.8076 14.3302 23.8483 14.4116 23.8483H19.6013C19.703 23.8483 19.7844 23.8076 19.8455 23.7466C19.9065 23.6855 19.9472 23.5838 19.9472 23.482C19.9472 23.4616 19.8455 21.5486 20.7409 20.6531C20.7613 20.6328 20.7816 20.6124 20.802 20.5921C21.9824 19.5135 22.6743 17.9871 22.6743 16.3997C22.6743 13.2859 20.1304 10.7419 17.0166 10.7419ZM20.2729 20.124C20.2525 20.1444 20.2118 20.1851 20.2118 20.2054C19.4181 21.0602 19.2756 22.4644 19.2553 23.136H14.7576C14.7372 22.4644 14.5948 20.9991 13.74 20.124C12.6614 19.1878 12.0305 17.8243 12.0305 16.3793C12.0305 13.6319 14.2488 11.4135 16.9963 11.4135C19.7437 11.4135 21.962 13.6319 21.962 16.3793C21.962 17.8243 21.3515 19.1878 20.2729 20.124Z" fill="#12020A"></path><path d="M16.9964 12.1868C16.8132 12.1868 16.6504 12.3496 16.6504 12.5327C16.6504 12.7159 16.8132 12.8787 16.9964 12.8787C19.0519 12.8787 20.7003 14.5475 20.7003 16.5827C20.7003 16.7659 20.8632 16.9287 21.0463 16.9287C21.2295 16.9287 21.3923 16.7659 21.3923 16.5827C21.4126 14.1609 19.4385 12.1868 16.9964 12.1868Z" fill="#12020A"></path><path d="M19.2554 24.2349H14.7373C14.2692 24.2349 13.8826 24.6215 13.8826 25.0896C13.8826 25.5577 14.2692 25.9444 14.7373 25.9444H19.235C19.7235 25.924 20.1101 25.5577 20.1101 25.0896C20.1101 24.6215 19.7235 24.2349 19.2554 24.2349ZM19.2554 25.2321H14.7373C14.6559 25.2321 14.5745 25.171 14.5745 25.0693C14.5745 24.9675 14.6356 24.9065 14.7373 24.9065H19.235C19.3164 24.9065 19.3978 24.9675 19.3978 25.0693C19.3978 25.171 19.3368 25.2321 19.2554 25.2321Z" fill="#12020A"></path><path d="M18.5838 26.2905H15.409C14.9409 26.2905 14.5542 26.6772 14.5542 27.1453C14.5542 27.6134 14.9409 28.0001 15.409 28.0001H18.5838C19.0519 28.0001 19.4386 27.6134 19.4386 27.1453C19.4386 26.6569 19.0519 26.2905 18.5838 26.2905ZM18.5838 27.2878H15.409C15.3276 27.2878 15.2462 27.2267 15.2462 27.1249C15.2462 27.0232 15.3072 26.9621 15.409 26.9621H18.5838C18.6652 26.9621 18.7466 27.0232 18.7466 27.1249C18.7466 27.2267 18.6652 27.2878 18.5838 27.2878Z" fill="#12020A"></path><path d="M16.9964 9.05273C17.1999 9.05273 17.3423 8.88992 17.3423 8.70675V6.34598C17.3423 6.16281 17.1795 6 16.9964 6C16.8132 6 16.6504 6.16281 16.6504 6.34598V8.70675C16.6504 8.88992 16.8132 9.05273 16.9964 9.05273Z" fill="#12020A"></path><path d="M22.7559 7.75029C22.5931 7.62818 22.3896 7.68923 22.2878 7.83169L20.9853 9.78544C20.8632 9.94825 20.9039 10.1721 21.0667 10.2739C21.1278 10.3146 21.1888 10.3349 21.2499 10.3349C21.372 10.3349 21.4737 10.2739 21.5348 10.1721L22.8373 8.21837C22.9594 8.07591 22.9187 7.85204 22.7559 7.75029Z" fill="#12020A"></path><path d="M12.865 10.2536C12.926 10.2536 12.9871 10.2332 13.0481 10.1925C13.211 10.0908 13.2517 9.8669 13.1499 9.70409L11.8881 7.72999C11.7863 7.56718 11.5625 7.52647 11.3997 7.62823C11.2369 7.72999 11.1962 7.95386 11.2979 8.11667L12.5597 10.0908C12.6411 10.2129 12.7429 10.2536 12.865 10.2536Z" fill="#12020A"></path><path d="M10.4024 12.4109L8.34694 11.2915C8.18413 11.2101 7.96026 11.2712 7.87885 11.434C7.7771 11.5968 7.83815 11.8207 8.02131 11.9021L10.0768 13.0214C10.1379 13.0417 10.1786 13.0621 10.2396 13.0621C10.3617 13.0621 10.4838 13.001 10.5449 12.8789C10.6263 12.7161 10.5653 12.4923 10.4024 12.4109Z" fill="#12020A"></path><path d="M26.1342 11.434C26.0528 11.2712 25.8289 11.2101 25.6661 11.2915L23.5902 12.4109C23.4274 12.4923 23.3664 12.7161 23.4478 12.8789C23.5088 13.001 23.6309 13.0621 23.753 13.0621C23.8141 13.0621 23.8751 13.0417 23.9159 13.0214L25.9917 11.9021C26.1545 11.8207 26.2156 11.5968 26.1342 11.434Z" fill="#12020A"></path></svg>`;
}
function SonificationControls($$payload, $$props) {
  var $$store_subs;
  let innerWidth = 1200;
  $$payload.out += `<div class="relative"${attr_style(`max-width: ${stringify(innerWidth - 75)}px; margin-top: -4px;`)}><div class="small absolute left-0"${attr_style(`margin-top: ${stringify(16)}px; top: ${stringify(-67)}px; line-height: 24px; color: ${stringify(store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) ? "#E71D80" : "#BEBABC")};`)}>Listen to this episode's data</div> <div class="mr-8 mt-2 flex justify-start lg:justify-center"><button class="mx-2"${attr("disabled", true, true)}>`;
  BackwardIcon($$payload, {
    color: "#BEBABC"
  });
  $$payload.out += `<!----></button> `;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button class="mx-2"${attr("disabled", !store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth), true)}>`;
    PlayIcon($$payload, {
      color: store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) ? "#E71D80" : "#BEBABC"
    });
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]--> <button class="mx-2"${attr("disabled", true, true)}>`;
  ForwardIcon($$payload, {
    color: "#BEBABC"
  });
  $$payload.out += `<!----></button></div> <div class="absolute right-0 top-1"><button>`;
  Info($$payload);
  $$payload.out += `<!----></button></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function SonificationTrack($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    scenesWidth,
    scenes,
    xScale,
    playingScene
  } = $$props;
  const height = 24;
  const each_array = ensure_array_like(scenes);
  $$payload.out += `<div class="relative"><svg class="mt-6"${attr("width", scenesWidth)}${attr("height", height)}${attr_style(`transform: translateX(${stringify(0)}px);`)}><g${attr("transform", `translate(0, ${stringify(height / 2)})`)}><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let scene = each_array[i];
    $$payload.out += `<line${attr_class(`scene-player ${stringify(playingScene === i + 1 ? "playing" : "")} ${stringify(store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) ? "sound-is-auth" : "")}`, "svelte-1i90kez")}${attr("x1", xScale(scene.startTime))}${attr("y1", 0)}${attr("x2", xScale(scene.endTime))}${attr("y2", 0)}${attr("stroke-width", 10)} role="button"${attr("tabindex", 0)}></line>`;
    if (i > 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<line${attr("x1", xScale(scene.startTime))}${attr("y1", -10)}${attr("x2", xScale(scene.startTime))}${attr("y2", 10)} stroke="#BEBABC"${attr("stroke-width", 3)} stroke-linecap="round"></line>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></g></svg></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function SonificationPlayer($$payload, $$props) {
  push();
  let {
    labelsWidth,
    scenesWidth,
    scenes,
    xScale,
    playingScene
  } = $$props;
  let innerWidth = 1200;
  $$payload.out += `<div class="mb-4"${attr_style(`margin-left: ${stringify(labelsWidth)}px;`)}><div${attr_style(`max-width: ${stringify(innerWidth - 63)}px; overflow: scroll;`)}>`;
  SonificationTrack($$payload, {
    scenesWidth,
    scenes,
    xScale,
    playingScene
  });
  $$payload.out += `<!----></div> `;
  SonificationControls($$payload, {
    numScenes: scenes.length
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function Catalog($$payload, $$props) {
  push();
  let {
    episodesData,
    sonificationCharactersData,
    sonificationLocationData
  } = $$props;
  let innerWidth = 1200;
  let innerHeight = 800;
  const statsWidth = 0;
  const labelsWidth = 60;
  const extraPadding = 10;
  let vizWidth = innerWidth - statsWidth - 25 - extraPadding;
  let scenesWidth = vizWidth - labelsWidth;
  const navHeight = 0;
  const detailsHeight = 230 - navHeight;
  const sonificationPlayerHeight = 100;
  const vizHeight = innerHeight - detailsHeight - sonificationPlayerHeight - 40 + 0;
  let isPlaying = false;
  let playingScene = 0;
  const randomEpisode = getRandomEpisode();
  let currentSeason = randomEpisode?.newSeason;
  let currentEpisode = randomEpisode?.newEpisode;
  let currentEpisodeInfo = episodesInfo.find((e) => e.season === currentSeason && e.episode === currentEpisode);
  let currentEpisodeData = episodesData.filter((e) => e.season === currentSeason && +e.episode === currentEpisode)[0].data;
  let currentEpisodeSonificationCharactersData = sonificationCharactersData.filter((d) => d.Season === `Season${currentSeason}` && +d.Episode === currentEpisode);
  let currentEpisodeSonificationLocationData = sonificationLocationData.filter((d) => d.Season === `Season${currentSeason}` && +d.Episode === currentEpisode);
  const scenesData = currentEpisodeData.filter((d) => d.eventCategory === "SCENE");
  const scenes = (() => {
    const scenesArray = [];
    const lastSceneNumber = +scenesData[scenesData.length - 2].sceneNumber;
    for (let i = 1; i <= lastSceneNumber; i++) {
      const sceneData = scenesData.filter((d) => +d.sceneNumber === i);
      const startTime = sceneData[0].eventTime;
      const endTime = sceneData[sceneData.length - 1].eventTime;
      scenesArray.push({
        sceneNum: i,
        startTime: formatTime(startTime),
        endTime: formatTime(endTime) + 5
      });
    }
    return scenesArray;
  })();
  const xScale = scaleLinear().domain([0, scenes[scenes.length - 1].endTime]).range([0, scenesWidth]);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div id="catalog" class="flex w-screen overflow-hidden pb-12"${attr_style(`height: ${stringify("100vh")};`)}>`;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div${attr_style(`width: calc(100vw - ${stringify(0)}px);`)}>`;
    EpisodeDetails($$payload2, {
      episodes: episodesInfo,
      episodeInfo: currentEpisodeInfo,
      get currentSeason() {
        return currentSeason;
      },
      set currentSeason($$value) {
        currentSeason = $$value;
        $$settled = false;
      },
      get currentEpisode() {
        return currentEpisode;
      },
      set currentEpisode($$value) {
        currentEpisode = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    SonificationPlayer($$payload2, {
      labelsWidth,
      scenesWidth,
      scenes,
      xScale,
      playingScene
    });
    $$payload2.out += `<!----> <div class="score-wrapper svelte-xf9i9q"><div${attr_style(`max-height: ${stringify(vizHeight)}px; overflow: scroll; padding-bottom: 20px;`)}>`;
    EpisodeScore($$payload2, {
      episodeData: currentEpisodeData,
      width: scenesWidth,
      labelsWidth,
      statsWidth,
      scenes,
      xScale,
      sonificationCharactersData: currentEpisodeSonificationCharactersData,
      sonificationLocationData: currentEpisodeSonificationLocationData,
      isPlaying,
      playingScene
    });
    $$payload2.out += `<!----></div></div></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function DataIcon($$payload) {
  $$payload.out += `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.25 4.16663H12.5C11.3949 4.16663 10.3351 4.60561 9.55372 5.38701C8.77231 6.16842 8.33333 7.22822 8.33333 8.33329V41.6666C8.33333 42.7717 8.77231 43.8315 9.55372 44.6129C10.3351 45.3943 11.3949 45.8333 12.5 45.8333H37.5C38.6051 45.8333 39.6649 45.3943 40.4463 44.6129C41.2277 43.8315 41.6667 42.7717 41.6667 41.6666V14.5833L31.25 4.16663Z" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29.1667 4.16663V12.5C29.1667 13.605 29.6057 14.6648 30.3871 15.4462C31.1685 16.2276 32.2283 16.6666 33.3333 16.6666H41.6667" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.8333 18.75H16.6667" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.3333 27.0834H16.6667" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.3333 35.4166H16.6667" stroke="#E71D80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
}
function BrainIcon($$payload) {
  $$payload.out += `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_401_4187" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="52" height="53"><path d="M26 8.52149C26.0029 7.52165 25.8059 6.53131 25.4205 5.60873C25.0351 4.68614 24.4691 3.84993 23.7559 3.14929C23.0426 2.44864 22.1964 1.89771 21.267 1.52888C20.3377 1.16006 19.344 0.980793 18.3444 1.00163C17.3447 1.02246 16.3594 1.24298 15.4462 1.65021C14.533 2.05744 13.7105 2.64316 13.0271 3.37292C12.3436 4.10268 11.8129 4.96174 11.4663 5.89958C11.1197 6.83743 10.9641 7.83511 11.0087 8.83397C9.53933 9.21178 8.17519 9.919 7.01961 10.9021C5.86402 11.8852 4.9473 13.1183 4.33886 14.5081C3.73042 15.898 3.44622 17.408 3.50779 18.9239C3.56936 20.4399 3.97507 21.9219 4.69422 23.2578C3.42977 24.285 2.43547 25.6057 1.7978 27.1048C1.16013 28.604 0.898419 30.2362 1.03542 31.8596C1.17243 33.4829 1.704 35.0482 2.5839 36.4193C3.4638 37.7904 4.66538 38.9257 6.08411 39.7265C5.90891 41.082 6.01346 42.459 6.3913 43.7725C6.76914 45.0859 7.41224 46.308 8.28089 47.3632C9.14954 48.4185 10.2253 49.2844 11.4417 49.9075C12.6581 50.5307 13.9894 50.8979 15.3533 50.9864C16.7172 51.0749 18.0847 50.8829 19.3715 50.4221C20.6583 49.9614 21.8369 49.2418 22.8347 48.3077C23.8324 47.3736 24.628 46.2449 25.1725 44.9912C25.7169 43.7376 25.9985 42.3856 26 41.0189V8.52149Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 8.52149C25.9971 7.52165 26.1941 6.53131 26.5795 5.60873C26.9649 4.68614 27.5309 3.84993 28.2442 3.14929C28.9575 2.44864 29.8037 1.89771 30.733 1.52888C31.6623 1.16006 32.656 0.980793 33.6557 1.00163C34.6553 1.02246 35.6407 1.24298 36.5538 1.65021C37.467 2.05744 38.2895 2.64316 38.973 3.37292C39.6565 4.10268 40.1871 4.96174 40.5337 5.89958C40.8803 6.83743 41.0359 7.83511 40.9913 8.83397C42.4607 9.21178 43.8248 9.919 44.9804 10.9021C46.136 11.8852 47.0527 13.1183 47.6612 14.5081C48.2696 15.898 48.5538 17.408 48.4922 18.9239C48.4307 20.4399 48.025 21.9219 47.3058 23.2578C48.5703 24.285 49.5646 25.6057 50.2022 27.1048C50.8399 28.604 51.1016 30.2362 50.9646 31.8596C50.8276 33.4829 50.296 35.0482 49.4161 36.4193C48.5362 37.7904 47.3346 38.9257 45.9159 39.7265C46.0911 41.082 45.9866 42.459 45.6087 43.7725C45.2309 45.0859 44.5878 46.308 43.7191 47.3632C42.8505 48.4185 41.7747 49.2844 40.5583 49.9075C39.3419 50.5307 38.0106 50.8979 36.6467 50.9864C35.2828 51.0749 33.9153 50.8829 32.6285 50.4221C31.3418 49.9614 30.1631 49.2418 29.1654 48.3077C28.1676 47.3736 27.372 46.2449 26.8276 44.9912C26.2831 43.7376 26.0015 42.3856 26 41.0189V8.52149Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.4994 28.5199C31.4007 27.7816 29.568 26.4376 28.2331 24.6578C26.8983 22.8779 26.1211 20.7422 26 18.5208C25.8789 20.7422 25.1017 22.8779 23.7669 24.6578C22.432 26.4376 20.5993 27.7816 18.5006 28.5199" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.9963 12.2706C40.6013 11.2223 40.9434 10.0431 40.9936 8.83386" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.0087 8.83386C11.0581 10.0429 11.3994 11.2221 12.0034 12.2706" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.69421 23.2603C5.15146 22.8879 5.64075 22.5567 6.15638 22.2705" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.8434 22.2705C46.359 22.5567 46.8483 22.8879 47.3056 23.2603" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.0005 41.0187C9.27795 41.0195 7.58443 40.5753 6.08411 39.729" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.9152 39.729C44.4148 40.5753 42.7213 41.0195 40.9988 41.0187" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></mask><g mask="url(#mask0_401_4187)"><rect x="-3.99756" y="-6.3772" width="59.9952" height="59.9952" fill="url(#paint0_linear_401_4187)"></rect></g><defs><linearGradient id="paint0_linear_401_4187" x1="-3.99756" y1="23.6204" x2="55.9976" y2="23.6204" gradientUnits="userSpaceOnUse"><stop stop-color="#FDE824"></stop><stop offset="0.12" stop-color="#B8CE32"></stop><stop offset="0.24" stop-color="#7DBA57"></stop><stop offset="0.365" stop-color="#4CB278"></stop><stop offset="0.47" stop-color="#1DA388"></stop><stop offset="0.59" stop-color="#228A8D"></stop><stop offset="0.72" stop-color="#2F708E"></stop><stop offset="0.865" stop-color="#39578D"></stop><stop offset="1" stop-color="#453782"></stop></linearGradient></defs></svg>`;
}
function TableIcon($$payload) {
  $$payload.out += `<svg width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5417 45.8333H5.20833C2.3375 45.8333 0 43.4958 0 40.625V34.3749V23.9583V13.5417V5.20833C0 2.3375 2.3375 0 5.20833 0H44.7917C47.6625 0 50 2.3375 50 5.20833V13.5417V23.9583V34.3749V40.625C50 43.4958 47.6625 45.8333 44.7917 45.8333H36.4584H25H13.5417ZM37.5 43.75H44.7917C46.5146 43.75 47.9167 42.3479 47.9167 40.625V35.4166H37.5V43.75ZM35.4167 35.4166V43.75H26.0416V35.4166H35.4167ZM37.5 33.3333H47.9167V25H37.5V33.3333ZM35.4167 25V33.3333H26.0416V25H35.4167ZM37.5 22.9166H47.9167V14.5833H37.5V22.9166ZM35.4167 14.5833V22.9166H26.0416V14.5833H35.4167ZM36.4584 12.5H25H13.5417H2.08333V5.20833C2.08333 3.48542 3.48542 2.08333 5.20833 2.08333H44.7917C46.5146 2.08333 47.9167 3.48542 47.9167 5.20833V12.5H36.4584ZM23.9583 43.75V35.4166H14.5833V43.75H23.9583ZM23.9583 33.3333V25H14.5833V33.3333H23.9583ZM23.9583 22.9166V14.5833H14.5833V22.9166H23.9583ZM12.5 43.75H5.20833C3.48542 43.75 2.08333 42.3479 2.08333 40.625V35.4166H12.5V43.75ZM12.5 25H2.08333V33.3333H12.5V25ZM12.5 22.9166H2.08333V14.5833H12.5V22.9166Z" fill="url(#paint0_linear_429_210780)"></path><defs><linearGradient id="paint0_linear_429_210780" x1="0" y1="22.9167" x2="50" y2="22.9167" gradientUnits="userSpaceOnUse"><stop stop-color="#FDE824"></stop><stop offset="0.12" stop-color="#B8CE32"></stop><stop offset="0.24" stop-color="#7DBA57"></stop><stop offset="0.365" stop-color="#4CB278"></stop><stop offset="0.47" stop-color="#1DA388"></stop><stop offset="0.59" stop-color="#228A8D"></stop><stop offset="0.72" stop-color="#2F708E"></stop><stop offset="0.865" stop-color="#39578D"></stop><stop offset="1" stop-color="#453782"></stop></linearGradient></defs></svg>`;
}
function CodeIcon($$payload) {
  $$payload.out += `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.8645 8.98024C31.0792 8.63845 30.1514 9.00466 29.8137 9.80218L17.3137 38.9688C16.976 39.7623 17.3422 40.6778 18.1356 41.0196C18.335 41.1051 18.5425 41.1458 18.7501 41.1458C19.3563 41.1458 19.9341 40.7918 20.1864 40.1977L32.6864 11.031C33.0241 10.2376 32.6579 9.32204 31.8645 8.98024ZM11.3933 13.3626C10.7219 12.8296 9.74125 12.9354 9.196 13.6068L0.862671 24.0234C0.406942 24.5931 0.406942 25.4069 0.862671 25.9766L9.196 36.3932C9.50525 36.7798 9.96098 36.9792 10.4167 36.9792C10.7585 36.9792 11.1044 36.8652 11.3933 36.6374C12.0647 36.0962 12.1745 35.1156 11.6374 34.4401L4.08533 25L11.6374 15.5599C12.1745 14.8844 12.0647 13.9038 11.3933 13.3626ZM40.8041 13.6067L49.1374 24.0234C49.5932 24.593 49.5932 25.4068 49.1374 25.9765L40.8041 36.3932C40.4949 36.7797 40.0391 36.9791 39.5834 36.9791C39.2416 36.9791 38.8957 36.8652 38.6068 36.6373C37.9355 36.0961 37.8256 35.1155 38.3627 34.44L45.9148 24.9999L38.3627 15.5598C37.8256 14.8844 37.9355 13.9037 38.6068 13.3626C39.2782 12.8255 40.2629 12.9313 40.8041 13.6067Z" fill="url(#paint0_linear_429_210781)"></path><defs><linearGradient id="paint0_linear_429_210781" x1="0.520874" y1="24.999" x2="49.4792" y2="24.999" gradientUnits="userSpaceOnUse"><stop stop-color="#FDE824"></stop><stop offset="0.12" stop-color="#B8CE32"></stop><stop offset="0.24" stop-color="#7DBA57"></stop><stop offset="0.365" stop-color="#4CB278"></stop><stop offset="0.47" stop-color="#1DA388"></stop><stop offset="0.59" stop-color="#228A8D"></stop><stop offset="0.72" stop-color="#2F708E"></stop><stop offset="0.865" stop-color="#39578D"></stop><stop offset="1" stop-color="#453782"></stop></linearGradient></defs></svg>`;
}
function PaintIcon($$payload) {
  $$payload.out += `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8542 33.5874C20.3091 32.2438 19.3139 31.1315 18.0389 30.441C16.7639 29.7504 15.2885 29.5247 13.8654 29.8024C12.4422 30.0802 11.1599 30.8441 10.2381 31.9633C9.31632 33.0826 8.81233 34.4875 8.8125 35.9375C8.8125 36.5793 8.68067 37.2144 8.42517 37.8033C8.16967 38.3921 7.79595 38.9222 7.32718 39.3607C6.8584 39.7992 6.30456 40.1368 5.69998 40.3524C5.0954 40.5681 4.45297 40.6573 3.8125 40.6145C4.8426 42.404 6.43465 43.8034 8.34151 44.5954C10.2484 45.3874 12.3633 45.5277 14.3581 44.9946C16.3529 44.4614 18.1159 43.2847 19.3734 41.647C20.6308 40.0093 21.3125 38.0022 21.3125 35.9375C21.3125 35.1062 21.15 34.3124 20.8542 33.5874ZM20.8542 33.5874C23.3313 32.7435 25.7004 31.6107 27.9125 30.2125M17.4062 30.1604C18.2504 27.678 19.3847 25.3039 20.7854 23.0875M27.9104 30.2125C31.8611 27.7163 35.2427 24.4171 37.8354 20.5291L45.9104 8.41662C46.2198 7.95529 46.3594 7.40088 46.3054 6.84806C46.2514 6.29525 46.0071 5.77832 45.6144 5.38556C45.2216 4.99281 44.7047 4.74858 44.1519 4.69459C43.5991 4.6406 43.0447 4.78019 42.5833 5.08953L30.4708 13.1666C26.5823 15.7586 23.2824 19.1394 20.7854 23.0895C23.956 24.5072 26.4928 27.0439 27.9104 30.2145" stroke="url(#paint0_linear_585_1738)" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_585_1738" x1="3.8125" y1="24.9978" x2="46.3167" y2="24.9978" gradientUnits="userSpaceOnUse"><stop stop-color="#FDE824"></stop><stop offset="0.12" stop-color="#B8CE32"></stop><stop offset="0.24" stop-color="#7DBA57"></stop><stop offset="0.365" stop-color="#4CB278"></stop><stop offset="0.47" stop-color="#1DA388"></stop><stop offset="0.59" stop-color="#228A8D"></stop><stop offset="0.72" stop-color="#2F708E"></stop><stop offset="0.865" stop-color="#39578D"></stop><stop offset="1" stop-color="#453782"></stop></linearGradient></defs></svg>`;
}
function MethodologyAndCredits($$payload) {
  const credits = [
    {
      name: "Andy Kirk",
      url: "https://visualisingdata.com/",
      role: "Ideation, Data Analysis, Data Visualisation & Original Design"
    },
    {
      name: "Anne-Marie Dufour",
      url: "https://www.delightfuldata.art/",
      role: "Digital Design & Development"
    },
    {
      name: "Loud Numbers",
      url: "https://www.loudnumbers.net/",
      role: "Sonification"
    },
    { name: "Mark Knott", role: "Illustrations" },
    {
      name: "Rob Barker",
      role: "Data Collection & Research"
    }
  ];
  const each_array = ensure_array_like(credits);
  $$payload.out += `<div class="container mt-20 grid grid-cols-1 lg:grid-cols-3"><div class="col-span-2 mb-10 px-4"><h3>Methodology</h3> <div><p>The data used in this study did not exist; it had to be manually captured by watching every
				episode and logging the times, categories, and characteristics of different events within
				each.</p> <p>Typically, each episode's data was gathered via two full viewings. The first viewing noted
				the times of discrete scenes starting and finishing, the locations in which the scenes were
				set, and the characters who appeared (and when). The second viewing validated the data and
				recorded which characters caused the laughs (and when). This was a pragmatic solution to
				ensure the best quality data could be obtained in the most efficient way.</p> <p>To help with the efficiency of the data collecting, all periods of screen time were recorded
				in units of 5-second durations. This felt like a sufficient granularity of detail to
				accurately quantify any character's appearance (and aligned with the typical length of time
				recorded for the duration of a laugh). To qualify as a period of screen time, a character
				did not necessarily need to be speaking or even interacting, just that they at least played
				some role in the storyline's progression.</p> <p>Additional data was collected about broadcast dates, viewing figures, plot synopses and
				ratings via <a href="https://www.imdb.com/title/tt0098904/" target="_blank">IMDb</a>.
				Further qualitative enquiries about joke topics, specific patterns in language, and themes
				of representation were tempting to pursue but were considered beyond the scope of the
				enquiry.</p> <p><a class="flex items-center" href="" target="_blank">`;
  DataIcon($$payload);
  $$payload.out += `<!----> <span class="mx-2">Access the data</span></a></p></div></div> <div class="mb-10 px-4"><h3>Credits</h3> <div><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let credit = each_array[i];
    $$payload.out += `<div class="my-6 flex"><div class="w-14">`;
    if (i === 0) {
      $$payload.out += "<!--[-->";
      BrainIcon($$payload);
    } else if (i === 1) {
      $$payload.out += "<!--[1-->";
      CodeIcon($$payload);
    } else if (i === 2) {
      $$payload.out += "<!--[2-->";
      SoundIcon($$payload, {});
    } else if (i === 3) {
      $$payload.out += "<!--[3-->";
      PaintIcon($$payload);
    } else {
      $$payload.out += "<!--[!-->";
      TableIcon($$payload);
    }
    $$payload.out += `<!--]--></div> <div class="pl-4">`;
    if (credit.url) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", credit.url)} target="_blank" class="font-semibold">${escape_html(credit.name)}</a>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="font-semibold">${escape_html(credit.name)}</div>`;
    }
    $$payload.out += `<!--]--> <div class="leading-tight">${escape_html(credit.role)}</div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
}
function Footer($$payload, $$props) {
  push();
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  $$payload.out += `<footer class="bg-black text-white"><div class="container px-12 py-3 text-xs md:text-sm">Copyright © ${escape_html(year)} Visualising Data Ltd - All rights reserved</div></footer>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  gsap.registerPlugin(ScrollTrigger);
  const episodesDataUrl = "https://amdufour.github.io/hosted-data/apis/episodes_laughs.min.json";
  const sonificationCharactersDataUrl = "https://amdufour.github.io/hosted-data/apis/sonificationCharactersData.csv";
  const sonificationLocationDataUrl = "https://amdufour.github.io/hosted-data/apis/sonificationLocationsData.csv";
  $$payload.out += `<main>`;
  Navbar($$payload);
  $$payload.out += `<!----> <div class="text-white">`;
  Prologue($$payload);
  $$payload.out += `<!----> `;
  if (store_get($$store_subs ??= {}, "$soundAuthModaleIsOpen", soundAuthModaleIsOpen)) {
    $$payload.out += "<!--[-->";
    SoundAuthPopup($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  Title($$payload);
  $$payload.out += `<!----></div> <div class="bg-white text-black">`;
  Calendar($$payload);
  $$payload.out += `<!----> `;
  await_block($$payload, json(episodesDataUrl), () => {
  }, (episodesData) => {
    DataGathering($$payload, { episodesData });
    $$payload.out += `<!----> `;
    IntroEnd($$payload);
    $$payload.out += `<!----> `;
    Quotes($$payload);
    $$payload.out += `<!----> `;
    MainCharsSection($$payload);
    $$payload.out += `<!----> `;
    SupportingCharsSection($$payload);
    $$payload.out += `<!----> `;
    LocationsSection($$payload);
    $$payload.out += `<!----> `;
    await_block($$payload, csv(sonificationCharactersDataUrl), () => {
    }, (sonificationCharactersData) => {
      await_block($$payload, csv(sonificationLocationDataUrl), () => {
      }, (sonificationLocationData) => {
        Catalog($$payload, {
          episodesData,
          sonificationCharactersData,
          sonificationLocationData
        });
      });
      $$payload.out += `<!--]-->`;
    });
    $$payload.out += `<!--]-->`;
  });
  $$payload.out += `<!--]--> `;
  Quotes($$payload);
  $$payload.out += `<!----> `;
  MethodologyAndCredits($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
