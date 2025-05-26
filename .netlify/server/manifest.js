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
		client: {start:"_app/immutable/entry/start.Bq78lBS1.js",app:"_app/immutable/entry/app.Dvocsmnl.js",imports:["_app/immutable/entry/start.Bq78lBS1.js","_app/immutable/chunks/DP4BBpd1.js","_app/immutable/chunks/BmwHchBg.js","_app/immutable/chunks/Cu14s-Mg.js","_app/immutable/entry/app.Dvocsmnl.js","_app/immutable/chunks/BmwHchBg.js","_app/immutable/chunks/B6mIMwbx.js","_app/immutable/chunks/CZ-zgf4q.js","_app/immutable/chunks/D4Trzba9.js","_app/immutable/chunks/Cu14s-Mg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
