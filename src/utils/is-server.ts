// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
const IS_SERVER = typeof window === 'undefined' || 'Deno' in window;
const IS_BROWSER = !IS_SERVER;

export { IS_SERVER, IS_BROWSER };
