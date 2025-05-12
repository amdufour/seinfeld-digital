export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["404.html","favicon.png"]),
	mimeTypes: {".html":"text/html",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DeEz0pD1.js","app":"_app/immutable/entry/app.VM68IxKK.js","imports":["_app/immutable/entry/start.DeEz0pD1.js","_app/immutable/chunks/aSryyxo2.js","_app/immutable/chunks/BJgJQmd1.js","_app/immutable/chunks/BGarQcE3.js","_app/immutable/chunks/BwrVzP86.js","_app/immutable/entry/app.VM68IxKK.js","_app/immutable/chunks/BJgJQmd1.js","_app/immutable/chunks/BzeDtWwB.js","_app/immutable/chunks/CoqtAHIu.js","_app/immutable/chunks/D54ZT-Aw.js","_app/immutable/chunks/BwrVzP86.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
