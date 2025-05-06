

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CCx1KJWa.js","_app/immutable/chunks/BrlRvMJm.js","_app/immutable/chunks/CIuKuh2F.js","_app/immutable/chunks/CLb0Wg_W.js"];
export const stylesheets = [];
export const fonts = [];
