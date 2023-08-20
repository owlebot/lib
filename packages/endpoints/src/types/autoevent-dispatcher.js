/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

/**
 * @typedef {Object} AutoeventDispatcherObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} EVENTS
 */

export const AUTOEVENT_DISPATCHER = {
	resolve: "/",
	EVENTS: (id) => `${id}/`,
};
