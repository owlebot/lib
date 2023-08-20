/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// COMMUNITIES
//

/**
 * @typedef {Object} ProfileMembersSubObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} SYNC
 */

/**
 * @typedef {Object} ProfileMembersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} SYNC
 * @property {ProfileMembersSubObject} _
 */

/**
 * @typedef {Object} ProfileCommunitiesSubObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} SYNC
 * @property {ProfileMembersObject} MEMBERS
 */

/**
 * @typedef {Object} ProfileCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ProfileCommunitiesSubObject} _
 */

//
// CUSTOM
//

/**
 * @typedef {Object} ProfileCustomObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} INCREMENT
 */

//
// GLOBAL
//

/**
 * @typedef {Object} ProfileGlobalObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} INCREMENT
 */

//
// USERS
//

/**
 * @typedef {Object} ProfileSubUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} SYNC
 */

/**
 * @typedef {Object} ProfileUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ProfileSubUsersObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} ProfileObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ProfileCommunitiesObject} COMMUNITIES
 * @property {ProfileCustomObject} CUSTOM
 * @property {ProfileGlobalObject} GLOBAL
 * @property {ProfileUsersObject} USERS
 */

export const PROFILE = {
	resolve: "/",
	COMMUNITIES: {
		resolve: "communities/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			SYNC: "sync/",
			MEMBERS: {
				resolve: "members/",
				SYNC: "sync/",
				_: {
					resolve: (id) => `${id}/`,
					SYNC: "sync/",
				},
			},
		},
	},
	CUSTOM: {
		resolve: "custom/",
		router: true,
		INCREMENT: "",
	},
	GLOBAL: {
		resolve: "global/",
		router: true,
		INCREMENT: "",
	},
	USERS: {
		resolve: "users/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			SYNC: "sync/",
		},
	},
};
