

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BaqqYkv6.js","_app/immutable/chunks/Cu3NuL5B.js","_app/immutable/chunks/CJGxoYMP.js"];
export const stylesheets = ["_app/immutable/assets/0.D1Np_giM.css"];
export const fonts = [];
