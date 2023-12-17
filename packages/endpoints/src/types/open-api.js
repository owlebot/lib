/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// ACCOUNTS
//

/**
 * @typedef {Object} OpenApiUserObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} COMMUNITIES
 */

/**
 * @typedef {Object} OpenApiSubAccountsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {OpenApiUserObject} USER
 */

/**
 * @typedef {Object} OpenApiAccountsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} OpenApiObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {OpenApiAccountsObject} ACCOUNTS
 */

export const OPEN_API = {
	resolve: "/",
	ACCOUNTS: {
		resolve: "accounts/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			USER: {
				resolve: "user/",
				COMMUNITIES: "communities/",
			},
		},
	},
};
