/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// EVENTS
//

/**
 * @typedef {Object} AutoeventDispatcherEventsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} AutoeventDispatcherObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {AutoeventDispatcherEventsObject} EVENTS
 */

export const AUTOEVENT_DISPATCHER = {
	resolve: "/",
	EVENTS: {
		resolve: "events/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
		},
	},
};
