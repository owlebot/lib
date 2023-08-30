/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// EVENTS
//

/**
 * @typedef {Object} AutoeventFilterEventsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} AutoeventFilterObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {AutoeventFilterEventsObject} EVENTS
 */

export const AUTOEVENT_FILTER = {
	resolve: "/",
	EVENTS: {
		resolve: "events/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
		},
	},
};
