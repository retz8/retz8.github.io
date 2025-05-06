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
		client: {start:"_app/immutable/entry/start.U45A0QW4.js",app:"_app/immutable/entry/app.DmtC-0Od.js",imports:["_app/immutable/entry/start.U45A0QW4.js","_app/immutable/chunks/iL7FOX08.js","_app/immutable/chunks/CIuKuh2F.js","_app/immutable/chunks/Sa_9zBaw.js","_app/immutable/entry/app.DmtC-0Od.js","_app/immutable/chunks/CIuKuh2F.js","_app/immutable/chunks/jUJyxnV1.js","_app/immutable/chunks/BrlRvMJm.js","_app/immutable/chunks/Sa_9zBaw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
