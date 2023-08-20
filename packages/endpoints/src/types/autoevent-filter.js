/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

/**
 * @typedef {Object} AutoeventFilterObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} EVENTS
 */

export const AUTOEVENT_FILTER = {
	resolve: "/",
	EVENTS: (id) => `${id}/`,
};
