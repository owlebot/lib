/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// COMMUNITIES
//

/**
 * @typedef {Object} ConfigHandleCommunitiesSubObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} MODULES
 */

/**
 * @typedef {Object} ConfigHandleCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ConfigHandleCommunitiesSubObject} _
 */

//
// USERS
//

/**
 * @typedef {Object} ConfigHandleUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} COPY
 * @property {ResolveObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} ConfigHandleObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ConfigHandleCommunitiesObject} COMMUNITIES
 * @property {ConfigHandleUsersObject} USERS
 */

export const CONFIG_HANDLE = {
	resolve: "/",
	COMMUNITIES: {
		resolve: "communities/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			MODULES: "modules/",
		},
	},
	USERS: {
		resolve: "users/",
		router: true,
		COPY: "copy/",
		_: {
			resolve: (id) => `${id}/`,
		},
	},
};
