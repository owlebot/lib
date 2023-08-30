/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// COMMUNITIES
//

/**
 * @typedef {Object} CardManagerSubMembersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} PROFILE
 */

/**
 * @typedef {Object} CardManagerMembersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {CardManagerSubMembersObject} _
 */

/**
 * @typedef {Object} CardManagerSubCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} PROFILE
 * @property {CardManagerMembersObject} MEMBERS
 */

/**
 * @typedef {Object} CardManagerCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {CardManagerSubCommunitiesObject} _
 */

//
// USERS
//

/**
 * @typedef {Object} CardManagerSubUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} PROFILE
 */

/**
 * @typedef {Object} CardManagerUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {CardManagerSubUsersObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} CardManagerObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {CardManagerCommunitiesObject} COMMUNITIES
 * @property {CardManagerUsersObject} USERS
 */

export const CARD_MANAGER = {
	resolve: "/",
	COMMUNITIES: {
		resolve: "communities/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			PROFILE: "profile/",
			MEMBERS: {
				resolve: "members/",
				_: {
					resolve: (id) => `${id}/`,
					PROFILE: "profile/",
				},
			},
		},
	},
	USERS: {
		resolve: "users/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			PROFILE: "profile/",
		},
	},
};
