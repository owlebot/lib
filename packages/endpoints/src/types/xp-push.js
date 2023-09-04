/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// EVENTS
//

/**
 * @typedef {Object} XpPushEventsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 */

//
// ROOT
//

/**
 * @typedef {Object} XpPushObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {XpPushEventsObject} AUTOEVENT
 */

export const XP_PUSH = {
	resolve: "/",
	AUTOEVENT: {
		resolve: "autoevent/",
		router: true,
	},
};
