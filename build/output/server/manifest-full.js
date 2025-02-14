export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B9CRjvWX.js","app":"_app/immutable/entry/app.D3-zXQpw.js","imports":["_app/immutable/entry/start.B9CRjvWX.js","_app/immutable/chunks/DEKdIo6p.js","_app/immutable/chunks/Krh8yu2i.js","_app/immutable/chunks/-9xANnOf.js","_app/immutable/chunks/B8PFditG.js","_app/immutable/entry/app.D3-zXQpw.js","_app/immutable/chunks/Krh8yu2i.js","_app/immutable/chunks/ywYxyxe_.js","_app/immutable/chunks/AnnM38rF.js","_app/immutable/chunks/cbXI22fa.js","_app/immutable/chunks/B8PFditG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
