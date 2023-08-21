/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// COMMUNITIES
//

/**
 * @typedef {Object} StatsMembersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} _
 */

/**
 * @typedef {Object} StatsSubCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {StatsMembersObject} MEMBERS
 */

/**
 * @typedef {Object} StatsCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {StatsSubCommunitiesObject} _
 */

//
// USERS
//

/**
 * @typedef {Object} StatsUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} StatsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {StatsCommunitiesObject} COMMUNITIES
 * @property {StatsUsersObject} USERS
 */

export const STATS = {
	resolve: "/",
	COMMUNITIES: {
		resolve: "communities/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			MEMBERS: {
				resolve: "members/",
				_: {
					resolve: (id) => `${id}/`,
				},
			},
		},
	},
	USERS: {
		resolve: "users/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
		},
	},
};
