

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.s6ZhXeV2.js","_app/immutable/chunks/CZ-zgf4q.js","_app/immutable/chunks/BmwHchBg.js"];
export const stylesheets = ["_app/immutable/assets/0.D1Np_giM.css"];
export const fonts = [];
