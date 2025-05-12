import { V as attr, W as store_get, X as unsubscribe_stores, Y as stringify, Q as pop, O as push, Z as ensure_array_like, T as escape_html, _ as bind_props, $ as copy_payload, a0 as assign_payload } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { scaleLinear, scaleTime } from "d3-scale";
import { sum, max, range } from "d3-array";
import "tone";
Promise.resolve();
const navBarColor = writable("white");
const soundIsAuth = writable(false);
const soundAuthModaleIsOpen = writable(false);
const catalogIsInView = writable(false);
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
  let innerWidth = 1200;
  let showMenu = false;
  let color = (() => {
    switch (true) {
      case store_get($$store_subs ??= {}, "$navBarColor", navBarColor) === "white":
        return "#F9F5F7";
      default:
        return "#E71D80";
    }
  })();
  $$payload.out += `<div class="fixed right-6 top-0 flex h-14 items-center"${attr("style", `height: 56px; z-index: ${stringify(catalogIsInView && innerWidth <= 539 ? 0 : 10)};`)}><div class="flex"><button>`;
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
  gsap.registerPlugin(ScrollTrigger);
  $$payload.out += `<div class="relative flex h-screen items-center"><div class="container"><div id="prologue-1" class="svelte-136tb6d">I was a late arrival to Seinfeld fandom.</div></div> <div class="down-icon-container mask svelte-136tb6d"><div id="down-icon" class="svelte-136tb6d">`;
  DownIcon($$payload);
  $$payload.out += `<!----></div></div></div>`;
  pop();
}
function PrologueTimeline($$payload, $$props) {
  push();
  let innerWidth, innerHeight;
  gsap.registerPlugin(ScrollTrigger);
  innerWidth = 0;
  innerHeight = 0;
  $$payload.out += `<div id="timeline-container" class="container mt-20 grid grid-cols-3 md:grid-cols-2 svelte-1j30q02"><div class="col-span-2 px-4 md:col-span-1 svelte-1j30q02"><div class="flex h-screen flex-col justify-center svelte-1j30q02"><p id="prologue-1" class="svelte-1j30q02">Though the first episode was aired in the US in 1989, there would be a four-year delay until
				it was broadcast in the UK. As a teenager, and with the show lurking in the shadows of BBC’s
				late-night schedules, it passed me by.</p></div> <div class="flex h-screen flex-col justify-center svelte-1j30q02"><p id="prologue-2" class="svelte-1j30q02">It wasn't until I was in my 30s when Seinfeld reappeared on UK TV in a prime-time slot.
				Fully aware of the show's standing in the canon of popular culture this was my best
				opportunity to tune in.</p></div></div> <div id="timeline" class="relative col-span-1 px-4 svelte-1j30q02"><div id="timeline-line" class="absolute bg-white svelte-1j30q02"${attr("style", `left: ${stringify(innerWidth >= 768 ? 213 : 85)}px; width: 2px; height: ${stringify(innerHeight - 120)}px; border-radius: 1px; top: 60px;`)}></div> <div id="date-1" class="absolute w-full svelte-1j30q02"${attr("style", `top: ${(innerHeight - 120) / 3 + 30}px; left: 0`)}><div id="date-us" class="flex items-center svelte-1j30q02"><div id="year-us" class="year svelte-1j30q02"${attr("style", `width: ${stringify(innerWidth >= 768 ? 176 : 60)}px;`)}>1989</div> <div id="circle-us" class="circle bg-white svelte-1j30q02"></div> `;
  if (innerWidth >= 996) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="desc-us"${attr("style", `margin-left: 24px`)} class="svelte-1j30q02">Seinfeld first aired on NBC in the USA</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <div id="date-2" class="absolute w-full svelte-1j30q02"${attr("style", `top: ${(innerHeight - 120) / 3 * 2 + 30}px; left: 0`)}><div id="date-uk" class="flex items-center svelte-1j30q02"><div id="year-uk" class="year svelte-1j30q02"${attr("style", `width: ${stringify(innerWidth >= 768 ? 176 : 60)}px;`)}>1993</div> <div id="circle-uk" class="circle bg-white svelte-1j30q02"></div> `;
  if (innerWidth >= 996) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="desc-uk"${attr("style", `margin-left: 24px`)} class="svelte-1j30q02">Seinfeld first aired on BBC2 in the UK</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <div id="date-3" class="absolute w-full svelte-1j30q02"${attr("style", `top: ${innerHeight - 120 + 30}px; left: 0`)}><div id="date-andy" class="flex items-center svelte-1j30q02" style="opacity: 0"><div id="year-andy" class="year svelte-1j30q02"${attr("style", `width: ${stringify(innerWidth >= 768 ? 176 : 60)}px;`)}>2012</div> <div id="circle-andy" class="pulse circle bg-accent svelte-1j30q02"></div> `;
  if (innerWidth >= 996) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="desc-andy"${attr("style", `margin-left: 24px`)} class="svelte-1j30q02">Seinfeld returns to prime-time on Sky TV in the UK</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
  pop();
}
const tv_noise = "/_app/immutable/assets/tv_noise.CynwfRsk.png";
function PrologueTheShow($$payload, $$props) {
  push();
  gsap.registerPlugin(ScrollTrigger);
  let innerWidth = 1600;
  let sideSpacing = (innerWidth - 1280) / 2 + 16;
  $$payload.out += `<section id="the-show"><div class="container"><div id="the-show-1" class="grid grid-cols-12 gap-4 mb-24" role="presentation"><div class="col-span-7 md:col-span-4 mask"><div class="text">It only took a handful of episodes for me to find myself completely hooked. Seinfeld was written in a different key, deviating from the traditional rules of sitcoms, focusing on - and amplifying of - the minutiae of daily life, earning its reputation as <a href="https://www.latimes.com/archives/la-xpm-1993-03-04-ca-474-story.html" target="_blank">the show about nothing</a>.</div></div> <div class="col-span-5"><div class="relative video-container" data-speed="1"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/6c.ShowAboutNothing.mp4" type="video/mp4"></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute z-10 bottom-0 left-0 right-0 top-0"${attr("style", `background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2">S4E3 - The Pitch</h5></div></div></div> <div id="the-show-2" class="grid grid-cols-12 gap-4 mb-52" role="presentation"${attr("style", `margin-left: -${stringify(sideSpacing)}px;`)}><div class="col-span-5 md:col-span-7"><div class="relative video-container" data-speed="1.3"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/32.Minutiae.mp4" type="video/mp4"></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr("style", `background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2">S8E3 - The Bizzaro Jerry</h5></div></div> <div class="col-span-7 md:col-span-5 mask"><div class="text">I loved the irreverent characters - with their absurd obsessions and neurotic tendencies - and the hilariously avoidable situations they found themselves in.</div></div></div> <div id="the-show-3" class="grid grid-cols-12 gap-4 mb-52" role="presentation"${attr("style", `margin-left: ${stringify(-sideSpacing)}px;`)}><div class="col-auto md:col-span-1"></div> <div class="col-span-12 md:col-span-10"><div class="mask"><div class="text"><div>It rejected the classic three-act story, sidestepping sentimentality and the pursuit of resolution. With its mantra of <span class="em">no hugging*, no learning</span> the lead characters were insecure and entertainingly flawed, lacking any desire and capability for personal growth.</div> <div class="number mt-2 mb-4">* the earlier clip not withstanding!</div></div></div> <div><div class="relative video-container" data-speed="1"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/11a.GoodSamaritan.mp4" type="video/mp4"></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr("style", `background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2">S9E24 - The Good Samaritan Law</h5></div></div></div></div> <div id="the-show-4" class="grid grid-cols-12 gap-4 mb-44" role="presentation"${attr("style", `margin-right: ${stringify(-sideSpacing)}px;`)}><div class="col-span-1 md:col-span-2"></div> <div class="col-span-6 md:col-span-5 mask"><div class="text">As with any shows from its time, as <a href="https://www.theguardian.com/culture/2024/oct/16/jerry-seinfeld-tom-papa-breaking-bad-podcast-interview-politics-comedy-extreme-left-pc-crap-#:~:text=%E2%80%9CDoes%20culture%20change,my%20skiing%20analogy.%E2%80%9D" target="_blank">culture and society evolve</a> a contemporary lens exposes negative stereotypes and flashes of chauvinism and sizeism, to name but two isms. The amoral instincts of these <a href="https://www.theguardian.com/tv-and-radio/2018/may/10/no-hugging-no-learning-20-years-on-seinfelds-mantra-still-looms-large" target="_blank">anti-heroes</a> was most on-show in their romantic encounters and when faced with the slightest adversity or irrational annoyance.</div></div> <div class="col-span-5 md:col-span-5"><div class="relative video-container" data-speed="1.2"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/13a.TheNose.mp4" type="video/mp4"></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr("style", `background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2">S3E9 - The Nose Job</h5></div></div></div> <div id="the-show-5" class="grid grid-cols-12 gap-4 pb-52" role="presentation"${attr("style", `margin-left: ${stringify(-sideSpacing)}px;`)}><div class="col-auto md:col-span-2"></div> <div class="col-span-12 md:col-span-10"><div class="mb-2 mask"><div class="text">And then there’s the dancing.</div></div> <div><div class="relative video-container" data-speed="0.9"><video playsinline autoplay loop><source src="https://amdufour.github.io/hosted-data/apis/videos/14.ElaineDancing.mp4" type="video/mp4"></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr("style", `background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask"><h5 class="mt-2">S8E4 - The Little Kicks</h5></div></div></div></div></div></section>`;
  pop();
}
function PrologueVideo($$payload, $$props) {
  push();
  $$payload.out += `<div class="relative flex h-screen items-center" role="presentation"><div class="relative"><video playsinline autoplay loop class="svelte-xb5cly"><source src="https://amdufour.github.io/hosted-data/apis/videos/1a.ElaineArrives.mp4" type="video/mp4"></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute bottom-0 left-0 right-0 top-0"${attr("style", `background-image: url('${stringify(tv_noise)}')`)}></div></div> <div class="mask z-2 absolute left-0"${attr("style", `bottom: ${stringify(0)}px;`)}><h5 id="stroked-title-s4e4" class="p-2">S4E4 - The Wallet</h5></div></div>`;
  pop();
}
function PrologueRythmAndTexture($$payload, $$props) {
  push();
  gsap.registerPlugin(ScrollTrigger);
  const videos = [
    {
      id: "parallax-2",
      isMuted: true,
      position: "top: 0px; right: 150px;",
      fileName: "8.KramerCigarette",
      episode: " S5E4 - The Sniffing Accountant"
    },
    {
      id: "parallax-3",
      isMuted: true,
      position: "top: 400px; left: 50px;",
      fileName: "Elaine1b",
      episode: "S8E12 - The Money"
    },
    {
      id: "parallax-4",
      isMuted: true,
      position: "top: 600px; left: 50%;",
      fileName: "26.JerryFriend",
      episode: "S1E4 - Male Unbonding"
    },
    {
      id: "parallax-1",
      isMuted: true,
      position: "top: 800px; left: 50%; transform: translate(-120%);",
      fileName: "24b.Jerrys",
      episode: "S3E2 - The Truth"
    },
    {
      id: "parallax-5",
      isMuted: true,
      position: "top: 1200px; right: 50px;",
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
    $$payload.out += `<div${attr("class", `${stringify(`parallax ${video.id} absolute w-80`)} svelte-10jri6f`)} data-speed="-1"${attr("style", video.position)} role="presentation"><video playsinline autoplay loop><source${attr("src", `https://amdufour.github.io/hosted-data/apis/videos/${video.fileName}.mp4`)} type="video/mp4"></video> <div class="readable-layer z-1 absolute bottom-0 left-0 right-0 top-0"></div> <div class="absolute z-10 bottom-0 left-0 right-0 top-0"${attr("style", `background-image: url('${stringify(tv_noise)}')`)}></div> <div class="episode svelte-10jri6f">${escape_html(video.episode)}</div></div>`;
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
  gsap.registerPlugin(ScrollTrigger);
  let innerHeight = 800;
  $$payload.out += `<div id="book-section-container" class="flex h-screen flex-col justify-between"><div id="book-cover-container" class="container grid grid-cols-1 lg:grid-cols-2"${attr("style", `margin-top: ${stringify(innerHeight / 6)}px;`)}><div class="col-span-1 flex h-full items-center px-4"><div><p>My curiosity transcended just <a href="https://jenniferkarmstrong.com/books/seinfeldia/" target="_blank">reading more about the show</a>, it was now time to go deep. I decided to immerse myself in an entirely unnecessary,
					self-motivated, long-running, data-driven exploration of every episode of Seinfeld. Why
					not!</p> <p>The first product of this work was my 2020 publishing of The Seinfeld Chronicles, a
					limited-edition printed book presenting all my extensive analysis. With 176 copies
					released, matching the number of written episodes, this reached a small but exclusive
					audience. In 2024 I decided it was time to work on a new product, to reach a wider
					audience with a completely new format: The Seinfeld Chronicles digital edition.</p></div></div> <div class="col-span-1 px-4"><img id="book-cover"${attr("src", BookCover)} alt="Cover of the book The Seinfeld Chronicles."></div></div> <div id="books-outer-container"><div id="accent-line" class="mb-3 h-2 w-full" style="background-color: #E71D80;"></div> <div id="books-inner-container" class="flex"><img class="mx-4"${attr("style", `height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookIntro)} alt="Introduction of the book."> <img class="mx-4"${attr("style", `height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookCalendar)} alt="Calendar of the nine seasons of Seinfeld."> <img class="mx-4"${attr("style", `height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookLaughs)} alt="Data visualizations of the laughs caused by the four main characters."> <img class="mx-4"${attr("style", `height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookScatterplot)} alt="Data visualizations of the peak performances of the four main characters."> <img class="mx-4"${attr("style", `height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookQuotes)} alt="Famous quotes from each episode."> <img class="mx-4"${attr("style", `height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookCatalog1)} alt="Data visualization of season 4 episode 11 'The Contest'."> <img class="mx-4"${attr("style", `height: ${stringify(innerHeight / 3.5)}px;`)}${attr("src", BookCatalog2)} alt="Data visualization of season 7 episode 6 'The Soup Nazi'."></div></div></div>`;
  pop();
}
function Prologue($$payload) {
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
  $$payload.out += `<!----></div> <div class="ml-4 mt-2"${attr("style", `max-width: ${stringify("none")}`)}><p class="svelte-ss9vkl">This project is an immersive audio experience. Turn your sound up!</p></div></div> <div class="mt-8 flex leading-5 md:ml-4 md:mt-0 md:justify-end"><button class="btn btn-secondary">No, thanks</button> <button class="btn btn-primary ml-4">Allow sound</button></div></div></div>`;
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
sum(seasons, (d) => d.numEpisodes);
function Title($$payload, $$props) {
  push();
  gsap.registerPlugin(ScrollTrigger);
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
  $$payload.out += `<section id="title-screen" class="h-screen mb-80 svelte-xku71n" style="margin-top: 1200px;"><svg${attr("width", svgWidth)} height="132"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let season = each_array[i];
    $$payload.out += `<rect class="season-rect"${attr("x", 0)}${attr("y", i * 12)}${attr("width", seasonScale(season.numEpisodes))}${attr("height", 8)}${attr("fill", season.color)}></rect>`;
  }
  $$payload.out += `<!--]--></svg> <div class="container h-full"><div style="margin-top: -25px;"><h1>The Seinfield Chronicles</h1></div> <div><p id="subtitle" class="subtitle svelte-xku71n">An unnecessary data exploration by <span class="name svelte-xku71n"><span class="highlight">Andy Kirk</span> <img id="portrait-andy" class="portrait svelte-xku71n" alt="Portrait of Andy Kirk" src="https://amdufour.github.io/hosted-data/apis/portraits/andy.jpg"></span>, <span class="name svelte-xku71n"><span class="highlight">Anne-Marie Dufour</span> <img id="portrait-am" class="portrait svelte-xku71n" alt="Portrait of Anne-Marie Dufour" src="https://amdufour.github.io/hosted-data/apis/portraits/annemarie_square_closeup.jpg"></span>, and <span class="name svelte-xku71n"><span class="highlight">Loud Numbers</span> <img id="portrait-ln" class="portrait svelte-xku71n" alt="Loud Numbers logo" src="https://amdufour.github.io/hosted-data/apis/portraits/loud_numbers.jpg"></span></p></div></div></section>`;
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
  gsap.registerPlugin(ScrollTrigger);
  let innerWidth = 1600;
  let innerHeight = 800;
  let screenSize = { width: innerWidth, height: innerHeight };
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
        console.log("show2");
        selectors = episodesShow2.map((e) => `#calendar-${e}`).join(",");
        break;
      case 3:
        console.log("show3");
        selectors = episodesShow3.map((e) => `#calendar-${e}`).join(",");
        break;
      case 4:
        selectors = episodesShow4.map((e) => `#calendar-${e}`).join(",");
        break;
      default:
        selectors = episodesShow5.map((e) => `#calendar-${e}`).join(",");
        break;
    }
    console.log(selectors);
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
    $$payload2.out += `<div id="intro-calendar-container" class="relative"><div id="intro-calendar" class="absolute flex h-screen w-screen"><div class="flex flex-col"${attr("style", `width: ${stringify(seasonsWidth)}px;`)}><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let season = each_array[i];
      $$payload2.out += `<div${attr("id", `catalog-season-${i + 1}`)} class="flex flex-col justify-center px-4"${attr("style", `flex-grow: ${stringify(i === 0 ? 2 : 1)}; color: ${stringify(i > 1 ? "#F9F5F7" : "#12020A")}; background: ${stringify(season.color)}; font-size: ${stringify("1.125rem")};`)}><div class="uppercase">${escape_html(season.id)}</div> <div>${escape_html(season.years)}</div></div>`;
    }
    $$payload2.out += `<!--]--></div> <svg class="absolute"${attr("width", innerWidth - seasonsWidth)}${attr("height", innerHeight)}${attr("style", `top: 0px; left: ${stringify(seasonsWidth)}px;`)}><rect${attr("x", timeScale(/* @__PURE__ */ new Date("January 1 1990")))}${attr("y", 0)}${attr("width", timeScale(/* @__PURE__ */ new Date("May 1 1990")) - timeScale(/* @__PURE__ */ new Date("January 1 1990")))}${attr("height", innerHeight)} fill="#EEECED"></rect><!--[-->`;
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
    $$payload2.out += `<!--]--></svg> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <div class="z-1000 relative" style="pointer-events: none">`;
    CalendarTexts($$payload2, {
      get showEpisodes() {
        return showEpisodes;
      },
      set showEpisodes($$value) {
        showEpisodes = $$value;
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
function _page($$payload, $$props) {
  push();
  var $$store_subs;
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
  $$payload.out += `<!----></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
