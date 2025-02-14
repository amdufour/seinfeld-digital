import { V as attr, W as store_get, X as unsubscribe_stores, Y as stringify, Z as ensure_array_like, T as escape_html, _ as bind_props, O as push, $ as copy_payload, a0 as assign_payload, Q as pop, a1 as await_block } from "../../chunks/index.js";
import { csv } from "d3-fetch";
import { w as writable } from "../../chunks/index2.js";
import { sum, range } from "d3-array";
import { scaleBand, scaleLinear } from "d3-scale";
import "tone";
const soundIsAuth = writable(true);
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
  $$payload.out += `<div class="fixed right-0 top-0 z-10 flex h-14 items-center"${attr("style", `height: ${stringify(catalogIsInView && innerWidth >= 540 ? 82 : 56)}px;`)}><div class="flex"${attr("style", `padding-right: ${stringify(32)}px;`)}><button>`;
  if (store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth)) {
    $$payload.out += "<!--[-->";
    AudioOn($$payload, {
      color: catalogIsInView && innerWidth >= 540 ? "#F9F5F7" : "#E71D80"
    });
  } else {
    $$payload.out += "<!--[!-->";
    AudioOff($$payload, {
      color: catalogIsInView && innerWidth >= 540 ? "#F9F5F7" : "#BEBABC"
    });
  }
  $$payload.out += `<!--]--></button> <button class="ml-4"${attr("disabled", showMenu, true)}>`;
  Burger($$payload, {
    color: catalogIsInView && innerWidth >= 540 ? "#F9F5F7" : "#E71D80"
  });
  $$payload.out += `<!----></button></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
const seasons = [
  { id: "s1", seasonNum: 1, color: "#FDE824", numEpisodes: 5 },
  { id: "s2", seasonNum: 2, color: "#B8CE32", numEpisodes: 12 },
  { id: "s3", seasonNum: 3, color: "#7DBA57", numEpisodes: 23 },
  { id: "s4", seasonNum: 4, color: "#4CB278", numEpisodes: 24 },
  { id: "s5", seasonNum: 5, color: "#1DA388", numEpisodes: 22 },
  { id: "s6", seasonNum: 6, color: "#228A8D", numEpisodes: 24 },
  { id: "s7", seasonNum: 7, color: "#2F708E", numEpisodes: 24 },
  { id: "s8", seasonNum: 8, color: "#39578D", numEpisodes: 22 },
  { id: "s9", seasonNum: 9, color: "#453782", numEpisodes: 24 }
];
sum(seasons, (d) => d.numEpisodes);
const isEpisodeValid = (season, episode) => {
  if (season === 6 && episode === 14 || season === 6 && episode === 15 || season === 9 && episode === 21 || season === 9 && episode === 22) {
    return false;
  } else {
    return true;
  }
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
Promise.resolve();
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
const formatTime = (timeString) => {
  const min = +timeString.slice(0, 2);
  const sec = +timeString.slice(3);
  return min * 60 + sec;
};
function More($$payload) {
  $$payload.out += `<svg width="33" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_937_995)"><path d="M16 11.5V21.5M21 16.5H11M31 16.5C31 18.4698 30.612 20.4204 29.8582 22.2403C29.1044 24.0601 27.9995 25.7137 26.6066 27.1066C25.2137 28.4995 23.5601 29.6044 21.7403 30.3582C19.9204 31.112 17.9698 31.5 16 31.5C14.0302 31.5 12.0796 31.112 10.2597 30.3582C8.43986 29.6044 6.78628 28.4995 5.3934 27.1066C4.00052 25.7137 2.89563 24.0601 2.14181 22.2403C1.38799 20.4204 1 18.4698 1 16.5C1 12.5218 2.58035 8.70644 5.3934 5.8934C8.20644 3.08035 12.0218 1.5 16 1.5C19.9782 1.5 23.7936 3.08035 26.6066 5.8934C29.4196 8.70644 31 12.5218 31 16.5Z" stroke="#12020A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_937_995"><rect width="32" height="32" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>`;
}
const UpDownCarets = "data:image/svg+xml,%3csvg%20width='28'%20height='27'%20viewBox='0%200%2028%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20stroke='%23F9F5F7'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M8.59216%2016.875L14.2172%2022.5L19.8422%2016.875'%20/%3e%3cpath%20d='M8.59216%2010.125L14.2172%204.5L19.8422%2010.125'%20/%3e%3c/g%3e%3c/svg%3e";
function Dropdown($$payload, $$props) {
  let { options, value = void 0, prefix } = $$props;
  const each_array = ensure_array_like(options);
  $$payload.out += `<div class="dropdown svelte-1jrpx8c"><select${attr("style", `background-image: url(${stringify(UpDownCarets)});`)} class="svelte-1jrpx8c"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$payload.out += `<option${attr("value", option)}>${escape_html(prefix)}${escape_html(option)}</option>`;
  }
  $$payload.out += `<!--]--></select></div>`;
  bind_props($$props, { value });
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
    $$payload2.out += `<div${attr("style", `width: ${stringify("100vw")}; background-color: #E71D80;`)}><div class="flex flex-nowrap items-center justify-between px-4 py-3"${attr("style", `max-width: ${stringify(600)}px; `)}><button class="my-1"${attr("disabled", currentSeason === 1 && currentEpisode === 1, true)}${attr("style", `opacity: ${stringify(currentSeason === 1 && currentEpisode === 1 ? 0.3 : 1)};`)}>`;
    Prev($$payload2);
    $$payload2.out += `<!----></button> <div class="my-1">`;
    Dropdown($$payload2, {
      options: seasonNums,
      get value() {
        return currentSeason;
      },
      set value($$value) {
        currentSeason = $$value;
        $$settled = false;
      },
      prefix: "s"
    });
    $$payload2.out += `<!----></div> <div class="my-1">`;
    Dropdown($$payload2, {
      options: availableEpisodes,
      get value() {
        return currentEpisode;
      },
      set value($$value) {
        currentEpisode = $$value;
        $$settled = false;
      },
      prefix: "e"
    });
    $$payload2.out += `<!----></div> <button class="my-1"${attr("disabled", currentSeason === 9 && currentEpisode === 24, true)}${attr("style", `opacity: ${stringify(currentSeason === 9 && currentEpisode === 24 ? 0.3 : 1)};`)}>`;
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
    episodes,
    currentSeason = void 0,
    currentEpisode = void 0,
    episodeInfo
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div${attr("style", `display: ${stringify("block")}`)}>`;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div${attr("style", `margin-top: ${stringify(0)}px;`)}>`;
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
    $$payload2.out += `<!----> <div class="mx-4"><div class="mt-4 flex items-center justify-between"${attr("style", `margin-left: ${stringify(0)}px;`)}><h2${attr("style", `overflow: ${stringify("hidden")}; white-space: ${stringify("nowrap")}`)} class="svelte-1vauw6j">${escape_html(episodeInfo.title)}</h2> `;
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
function PlayIcon($$payload, $$props) {
  let { color } = $$props;
  $$payload.out += `<svg width="44" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_938_3273)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 21C0 9.40154 9.40154 0 21 0C32.5985 0 42 9.40154 42 21C42 32.5985 32.5985 42 21 42C9.40154 42 0 32.5985 0 21ZM30.2055 18.8828C30.5828 19.0928 30.8972 19.3998 31.116 19.772C31.3348 20.1442 31.4502 20.5682 31.4502 21C31.4502 21.4318 31.3348 21.8558 31.116 22.228C30.8972 22.6002 30.5828 22.9072 30.2055 23.1172L18.1375 29.8222C17.7688 30.0269 17.353 30.1317 16.9312 30.1265C16.5095 30.1212 16.0965 30.0059 15.7329 29.7921C15.3694 29.5782 15.068 29.2732 14.8585 28.9071C14.649 28.5411 14.5387 28.1267 14.5385 27.7049V14.2951C14.5385 12.4492 16.5222 11.2797 18.1375 12.1778L30.2055 18.8828Z"${attr("fill", color)}></path></g><defs><clipPath id="clip0_938_3273"><rect width="42" height="42" fill="white"></rect></clipPath></defs></svg>`;
}
function StopIcon($$payload, $$props) {
  let { color } = $$props;
  $$payload.out += `<svg width="44" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_959_1735)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 21C0 9.40154 9.40154 0 21 0C32.5985 0 42 9.40154 42 21C42 32.5985 32.5985 42 21 42C9.40154 42 0 32.5985 0 21ZM12.9231 15.7489C12.9231 14.1895 14.1895 12.9231 15.7511 12.9231H26.2489C27.8105 12.9231 29.0769 14.1895 29.0769 15.7511V26.2489C29.0769 27.8105 27.8105 29.0769 26.2489 29.0769H15.7532C15.3818 29.0772 15.0139 29.0043 14.6707 28.8622C14.3274 28.7202 14.0156 28.5119 13.7529 28.2493C13.4902 27.9866 13.2819 27.6747 13.1399 27.3315C12.9979 26.9883 12.9249 26.6204 12.9252 26.2489V15.7532L12.9231 15.7489Z"${attr("fill", color)}></path></g><defs><clipPath id="clip0_959_1735"><rect width="42" height="42" fill="white"></rect></clipPath></defs></svg>`;
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
const getLevel = (laughBin) => {
  switch (laughBin) {
    case "2":
      return "mid";
    case "3":
      return "wild";
    default:
      return "mild";
  }
};
const getCharSoundFileName = (char, laughBin) => {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (char === "Situation") {
    return "char_situation";
  }
  const level = getLevel(laughBin);
  switch (char) {
    case "Jerry":
      return `char_jerry_${level}_${randomNum}`;
    case "George":
      return `char_george_${level}_${randomNum}`;
    case "Elaine":
      return `char_elaine_${level}_${randomNum}`;
    case "Kramer":
      return `char_kramer_${level}_${randomNum}`;
    case "LoveInterest":
      return `char_love_interest_${level}_${randomNum}`;
    case "Families":
      return `char_families_${level}`;
    case "FNC":
      return `char_fnc_${level}`;
    case "Other":
      return `char_other_${level}`;
    default:
      return null;
  }
};
const getLocationSoundFileName = (location) => {
  switch (location) {
    case "CharacterHome":
      return "loc_home";
    case "Diner":
      return "loc_diner";
    case "Leisure":
      return "loc_leisure";
    case "OtherFamilyHome":
      return "loc_family_home";
    case "Outside":
      return "loc_outside";
    case "Transport":
      return "loc_transport";
    case "Workplace":
      return "loc_workplace";
    default:
      return "loc_other";
  }
};
function SonificationControls($$payload, $$props) {
  var $$store_subs;
  let {
    scenesWidth,
    isPlaying,
    playingScene,
    numScenes,
    play,
    playNext,
    playPrev,
    stop
  } = $$props;
  let innerWidth = 1200;
  $$payload.out += `<div class="relative"${attr("style", `max-width: ${stringify(innerWidth - 75)}px; margin-top: -4px;`)}><div class="small absolute left-0"${attr("style", `margin-top: ${stringify(16)}px; top: ${stringify(-67)}px; line-height: 24px; color: ${stringify(store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) ? "#E71D80" : "#BEBABC")};`)}>Listen to this episode's data</div> <div class="mr-8 mt-2 flex justify-start lg:justify-center"><button class="mx-2"${attr("disabled", !isPlaying || !store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) || playingScene <= 1, true)}>`;
  BackwardIcon($$payload, {
    color: isPlaying && store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) && playingScene > 1 ? "#E71D80" : "#BEBABC"
  });
  $$payload.out += `<!----></button> `;
  if (isPlaying) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="mx-2">`;
    StopIcon($$payload, { color: "#E71D80" });
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button class="mx-2"${attr("disabled", !store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth), true)}>`;
    PlayIcon($$payload, {
      color: store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) ? "#E71D80" : "#BEBABC"
    });
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]--> <button class="mx-2"${attr("disabled", !isPlaying || !store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) || playingScene == numScenes, true)}>`;
  ForwardIcon($$payload, {
    color: isPlaying && store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) && playingScene < numScenes ? "#E71D80" : "#BEBABC"
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
    playingScene,
    handleClickOnScene
  } = $$props;
  let innerWidth = 1200;
  const height = 24;
  const each_array = ensure_array_like(scenes);
  $$payload.out += `<div class="relative"><svg class="mt-6"${attr("width", scenesWidth)}${attr("height", height)}${attr("style", `transform: translateX(${stringify(playingScene && innerWidth <= 1e3 ? xScale(scenes.find((s) => s.sceneNum === playingScene).startTime) * -1 : 0)}px);`)}><g${attr("transform", `translate(0, ${stringify(height / 2)})`)}><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let scene = each_array[i];
    $$payload.out += `<line${attr("class", `scene-player ${stringify(playingScene === i + 1 ? "playing" : "")} ${stringify(store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) ? "sound-is-auth" : "")} svelte-1i90kez`)}${attr("x1", xScale(scene.startTime))}${attr("y1", 0)}${attr("x2", xScale(scene.endTime))}${attr("y2", 0)}${attr("stroke-width", 10)} role="button"${attr("tabindex", 0)}></line>`;
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
  var $$store_subs;
  let {
    labelsWidth,
    scenesWidth,
    scenes,
    xScale,
    sonificationCharactersData,
    sonificationLocationData,
    isPlaying,
    playingScene,
    updatePlayingData
  } = $$props;
  let innerWidth = 1200;
  let soundtrack;
  let playSceneTimeout;
  const playScene = (sceneNum) => {
    if (isPlaying && store_get($$store_subs ??= {}, "$soundIsAuth", soundIsAuth) && playingScene === sceneNum) {
      let chars = sonificationCharactersData.filter((d) => +d.SceneNumber === sceneNum);
      let locations2 = sonificationLocationData.filter((d) => +d.SceneNumber === sceneNum);
      soundtrack.player("rythm").start();
      chars.forEach((charData) => {
        const player = getCharSoundFileName(charData.Character, charData.laughBinFull);
        if (player) {
          soundtrack.player(player).start();
        }
      });
      locations2.forEach((locData) => {
        const player = getLocationSoundFileName(locData.Location);
        if (player) {
          soundtrack.player(player).start();
        }
      });
      playSceneTimeout = setTimeout(
        () => {
          if (sceneNum < scenes.length) {
            updatePlayingData(true, sceneNum + 1);
            playScene(sceneNum + 1);
          } else {
            updatePlayingData(false, 0);
            soundtrack.player("end").start();
          }
        },
        8727.272727
      );
    }
  };
  const playFirstScene = () => {
    soundtrack.player("start").start();
    setTimeout(
      () => {
        playScene(1);
      },
      500
    );
  };
  const play = () => {
    updatePlayingData(true, 1);
    playFirstScene();
  };
  const playNext = () => {
    updatePlayingData(true, playingScene + 1);
    clearTimeout(playSceneTimeout);
    soundtrack.stopAll();
    playScene(playingScene);
  };
  const playPrev = () => {
    updatePlayingData(true, playingScene - 1);
    clearTimeout(playSceneTimeout);
    soundtrack.stopAll();
    playScene(playingScene);
  };
  const stop = () => {
    updatePlayingData(false, 0);
    clearTimeout(playSceneTimeout);
    soundtrack.stopAll();
  };
  const handleClickOnScene = (sceneNum) => {
    updatePlayingData(true, sceneNum);
    clearTimeout(playSceneTimeout);
    soundtrack.stopAll();
    if (sceneNum === 1) {
      playFirstScene();
    } else {
      playScene(sceneNum);
    }
  };
  $$payload.out += `<div class="mb-4"${attr("style", `margin-left: ${stringify(labelsWidth)}px;`)}><div${attr("style", `max-width: ${stringify(innerWidth - 63)}px; overflow: scroll;`)}>`;
  SonificationTrack($$payload, {
    scenesWidth,
    scenes,
    xScale,
    playingScene,
    handleClickOnScene
  });
  $$payload.out += `<!----></div> `;
  SonificationControls($$payload, {
    scenesWidth,
    isPlaying,
    playingScene,
    numScenes: scenes.length,
    play,
    playNext,
    playPrev,
    stop
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
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
  $$payload.out += `<ul class="relative z-10 shrink-0 pt-8"${attr("style", `width: ${stringify(labelsWidth)}px; background-color: #F9F5F7;`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let char = each_array[$$index];
    $$payload.out += `<li class="absolute flex w-full justify-end svelte-qag8a1"${attr("style", `top: ${stringify(yScale(char.id) + yScale.bandwidth() / 2 - 16)}px; right: 16px; opacity: ${stringify(!isHighlight || isHighlight && hoveredCharacters.includes(char.id) ? 1 : 0.2)}`)}>`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="image h-8 w-8 rounded-full svelte-qag8a1"${attr("style", `background-image: url(${stringify(getCharacterImagePath(char.id))});`)}></div></li>`;
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
      $$payload.out += `<rect${attr("x", xScale(moment.startTime))}${attr("y", 0)}${attr("width", xScale(moment.duration))}${attr("height", yScale.bandwidth())}${attr("fill", char.color)}${attr("fill-opacity", !isHover && !isPlaying || isHover && hoveredTime >= moment.startTime && hoveredTime <= moment.startTime + moment.duration || isPlaying && playingScene === moment.scene ? 1 : 0.1)} class="svelte-il4s97"></rect>`;
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
      $$payload.out += `<rect${attr("x", xScale(laugh))}${attr("y", -10)}${attr("width", laughWidth)}${attr("height", yScale.bandwidth() + 20)}${attr("fill", char.color)}${attr("fill-opacity", !isHover && !isPlaying || isHover && hoveredTime >= laugh && hoveredTime <= laugh + laughWidth || isPlaying && laugh >= playingSceneData.startTime && laugh + laughWidth <= playingSceneData.endTime ? 1 : 0.2)} stroke="#F9F5F7"${attr("stroke-opacity", !isHover && !isPlaying || isHover && hoveredTime >= laugh && hoveredTime <= laugh + laughWidth || isPlaying && laugh >= playingSceneData.startTime && laugh + laughWidth <= playingSceneData.endTime ? 1 : 0)} class="svelte-il4s97"></rect>`;
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
  $$payload.out += `<!----> <div class="flex-shrink-0"${attr("style", `max-width: ${stringify(innerWidth - 63)}px; overflow: scroll;`)}><svg${attr("width", width)}${attr("height", vizHeight)}${attr("style", `transform: translateX(${stringify(playingScene && innerWidth <= 1e3 ? xScale(scenes.find((s) => s.sceneNum === playingScene).startTime) * -1 : 0)}px);`)}>`;
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
    episodeDuration,
    isHover,
    hoveredTime,
    hoveredPosition,
    scenes,
    playingScene
  } = $$props;
  let innerWidth = 1200;
  const height = 40;
  const numMinutes = Math.ceil(episodeDuration / 60);
  let minutesArray = range(0, numMinutes + 1);
  const minHoveredTime = Math.floor(hoveredTime / 60);
  const secHoveredTime = Math.floor(hoveredTime - minHoveredTime * 60);
  const formattedHoveredTime = `${minHoveredTime < 10 ? "0" : ""}${minHoveredTime}:${secHoveredTime < 10 ? "0" : ""}${secHoveredTime}`;
  const each_array = ensure_array_like(minutesArray);
  $$payload.out += `<svg${attr("width", xScale(numMinutes * 60) + 100)}${attr("height", height)}${attr("style", `margin-left: ${stringify(labelsWidth - 50)}px; transform: translateX(${stringify(playingScene && innerWidth <= 1e3 ? xScale(scenes.find((s) => s.sceneNum === playingScene).startTime) * -1 : 0)}px);`)}><g transform="translate(50, 0)" stroke="#928D90"><line${attr("x1", 0)}${attr("y1", 0)}${attr("x2", xScale(numMinutes * 60))}${attr("y2", 0)}></line><line${attr("x1", 0)}${attr("y1", height)}${attr("x2", xScale(numMinutes * 60))}${attr("y2", 40)}></line><!--[-->`;
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
  if (isHover) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<rect${attr("x", hoveredPosition - 25)}${attr("y", height / 2 - 9)}${attr("width", 50)}${attr("height", 20)} fill="#F9F5F7" stroke="none"></rect><text class="number"${attr("x", hoveredPosition)}${attr("y", height / 2 + 1)} text-anchor="middle" dominant-baseline="middle" fill="#12020A" stroke="none">${escape_html(formattedHoveredTime)}</text>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></g></svg>`;
  pop();
}
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
  $$payload.out += `<ul class="relative z-10 shrink-0 pt-4"${attr("style", `width: ${stringify(labelsWidth)}px; background-color: #F9F5F7;`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let location = each_array[$$index];
    $$payload.out += `<li class="absolute flex w-full justify-end svelte-qag8a1"${attr("style", `top: ${stringify(yScale(location.id) + yScale.bandwidth() / 2 - 16)}px; right: 16px; opacity: ${stringify(!isHover && !isPlaying || (isHover || isPlaying) && hoveredLocations.includes(location.id) ? 1 : 0.2)}`)}>`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="image h-8 w-8 rounded-full svelte-qag8a1"${attr("style", `background-image: url(${stringify(getLocationIconPath(location.id, true))});`)}></div></li>`;
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
      $$payload.out += `<rect${attr("x", xScale(moment.startTime))}${attr("y", 0)}${attr("width", xScale(moment.duration))}${attr("height", yScale.bandwidth())} fill="#12020A"${attr("fill-opacity", !isHover && !isPlaying || isHover && hoveredTime >= moment.startTime && hoveredTime <= moment.startTime + moment.duration || isPlaying && playingScene === moment.scene ? 1 : 0.1)} class="svelte-il4s97"></rect>`;
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
  $$payload.out += `<div class="flex pl-6"${attr("style", `width: ${stringify(width)}px;`)}><div class="mr-4"${attr("style", `width: ${stringify(columnWidth)}px;`)}><svg${attr("width", columnWidth)}${attr("height", height)}><!--[-->`;
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
  $$payload.out += `<!----> <div class="flex-shrink-0"${attr("style", `max-width: ${stringify(innerWidth - 63)}px; overflow: scroll;`)}><svg${attr("width", width)}${attr("height", vizHeight)}${attr("style", `transform: translateX(${stringify(playingScene && innerWidth <= 1e3 ? xScale(scenes.find((s) => s.sceneNum === playingScene).startTime) * -1 : 0)}px);`)}>`;
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
  LocationsStats($$payload, {
    width: statsWidth,
    height: vizHeight,
    yScale,
    locationsOnScreen,
    episodeDuration
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function EpisodeScore($$payload, $$props) {
  push();
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
  } = $$props;
  let innerWidth = 1200;
  let episodeDuration = +episodeData[episodeData.length - 1].eventTimeSeconds;
  let isHover = false;
  let hoveredPosition = 0;
  let hoveredTime = 0;
  $$payload.out += `<div${attr("style", `width: ${stringify(width + statsWidth)}px; max-width: 100vw;`)} role="document">`;
  Characters($$payload, {
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
    sonificationCharactersData
  });
  $$payload.out += `<!----> <div${attr("style", `max-width: ${stringify(innerWidth)}px; overflow: scroll;`)}>`;
  Timeline($$payload, {
    labelsWidth,
    xScale,
    episodeDuration,
    isHover,
    hoveredTime,
    hoveredPosition,
    scenes,
    playingScene
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
  const vizHeight = innerHeight - detailsHeight - sonificationPlayerHeight - 40;
  let isPlaying = false;
  let playingScene = 0;
  const updatePlayingData = (playing, sceneNum) => {
    isPlaying = playing;
    playingScene = sceneNum;
  };
  const randomEpisode = getRandomEpisode();
  let currentSeason = randomEpisode?.newSeason;
  let currentEpisode = randomEpisode?.newEpisode;
  let currentEpisodeInfo = episodesInfo.find((e) => e.season === currentSeason && e.episode === currentEpisode);
  let currentEpisodeData = episodesData.filter((e) => e.season === `Season${currentSeason}` && +e.episode === currentEpisode);
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
    $$payload2.out += `<div id="catalog" class="flex h-screen w-screen overflow-hidden pb-12">`;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div${attr("style", `width: calc(100vw - ${stringify(0)}px);`)}>`;
    EpisodeDetails($$payload2, {
      episodes: episodesInfo,
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
      },
      episodeInfo: currentEpisodeInfo
    });
    $$payload2.out += `<!----> `;
    SonificationPlayer($$payload2, {
      labelsWidth,
      scenesWidth,
      scenes,
      xScale,
      sonificationCharactersData: currentEpisodeSonificationCharactersData,
      sonificationLocationData: currentEpisodeSonificationLocationData,
      isPlaying,
      playingScene,
      updatePlayingData
    });
    $$payload2.out += `<!----> <div class="score-wrapper svelte-xf9i9q"><div${attr("style", `max-height: ${stringify(vizHeight)}px; overflow: scroll; padding-bottom: 20px;`)}>`;
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
function _page($$payload, $$props) {
  push();
  const episodesDataUrl = "https://amdufour.github.io/hosted-data/apis/episodesData.csv";
  const sonificationCharactersDataUrl = "https://amdufour.github.io/hosted-data/apis/sonificationCharactersData.csv";
  const sonificationLocationDataUrl = "https://amdufour.github.io/hosted-data/apis/sonificationLocationsData.csv";
  $$payload.out += `<main>`;
  Navbar($$payload);
  $$payload.out += `<!---->  <!---->`;
  await_block(
    csv(episodesDataUrl),
    () => {
    },
    (episodesData) => {
      $$payload.out += `<!---->`;
      await_block(
        csv(sonificationCharactersDataUrl),
        () => {
        },
        (sonificationCharactersData) => {
          $$payload.out += `<!---->`;
          await_block(
            csv(sonificationLocationDataUrl),
            () => {
            },
            (sonificationLocationData) => {
              Catalog($$payload, {
                episodesData,
                sonificationCharactersData,
                sonificationLocationData
              });
            },
            () => {
            }
          );
          $$payload.out += `<!---->`;
        },
        () => {
        }
      );
      $$payload.out += `<!---->`;
    }
  );
  $$payload.out += `<!----></main>`;
  pop();
}
export {
  _page as default
};
