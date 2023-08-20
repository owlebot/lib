/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// COMMUNITIES
//

/**
 * @typedef {Object} ConfigReadCommunitiesSubObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} MODULES
 * @property {ResolveObject} INVALIDATE
 */

/**
 * @typedef {Object} ConfigReadCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ConfigReadCommunitiesSubObject} _
 */

//
// USERS
//

/**
 * @typedef {Object} ConfigReadSubUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} INVALIDATE
 */

/**
 * @typedef {Object} ConfigReadUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ConfigReadSubUsersObject} _
 */

//
// GLOBAL
//

/**
 * @typedef {Object} ConfigReadGlobalObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} INVALIDATE
 */

//
// ROOT
//

/**
 * @typedef {Object} ConfigReadObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ConfigReadCommunitiesObject} COMMUNITIES
 * @property {ConfigReadUsersObject} USERS
 * @property {ConfigReadGlobalObject} GLOBAL
 */

export const CONFIG_READ = {
	resolve: "/",
	COMMUNITIES: {
		resolve: "communities/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			MODULES: "modules/",
			INVALIDATE: "invalidate/",
		},
	},
	USERS: {
		resolve: "users/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			INVALIDATE: "invalidate/",
		},
	},
	GLOBAL: {
		resolve: "global/",
		router: true,
		INVALIDATE: "invalidate/",
	},
};
