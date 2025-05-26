export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","404.html","favicon.png"]),
	mimeTypes: {".html":"text/html",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DTziA1gN.js",app:"_app/immutable/entry/app.Dx-DxM5f.js",imports:["_app/immutable/entry/start.DTziA1gN.js","_app/immutable/chunks/B2YyOa-i.js","_app/immutable/chunks/CJGxoYMP.js","_app/immutable/chunks/BD2hDPmt.js","_app/immutable/entry/app.Dx-DxM5f.js","_app/immutable/chunks/CJGxoYMP.js","_app/immutable/chunks/DqQZL48a.js","_app/immutable/chunks/Cu3NuL5B.js","_app/immutable/chunks/BD2hDPmt.js","_app/immutable/chunks/CqjKSWiw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
