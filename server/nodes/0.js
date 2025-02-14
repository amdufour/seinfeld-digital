

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BkMwevYT.js","_app/immutable/chunks/AnnM38rF.js","_app/immutable/chunks/Krh8yu2i.js"];
export const stylesheets = ["_app/immutable/assets/0.6ifv2cRQ.css"];
export const fonts = [];
