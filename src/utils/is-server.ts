const IS_SERVER = typeof window === 'undefined' || 'Deno' in window;
const IS_BROWSER = !IS_SERVER;

export { IS_SERVER, IS_BROWSER };
