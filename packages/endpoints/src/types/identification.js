/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// ACCOUNTS
//

/**
 * @typedef {Object} IdentificationSubAccountsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} USER
 */

/**
 * @typedef {Object} IdentificationAccountsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {IdentificationSubAccountsObject} _
 */

//
// CHANNELS
//

/**
 * @typedef {Object} IdentificationSubChannelAccountsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} MEMBER
 */

/**
 * @typedef {Object} IdentificationChannelAccountsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {IdentificationSubChannelAccountsObject} _
 */

/**
 * @typedef {Object} IdentificationSubChannelsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} COMMUNITY
 * @property {IdentificationChannelAccountsObject} ACCOUNTS
 */

/**
 * @typedef {Object} IdentificationChannelsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {IdentificationSubChannelsObject} _
 */

//
// COMMUNITIES
//

/**
 * @typedef {Object} IdentificationSubCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} OWNER
 */

/**
 * @typedef {Object} IdentificationCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {IdentificationSubCommunitiesObject} _
 */


//
// USERS
//

/**
 * @typedef {Object} IdentificationSubUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} COMMUNITIES
 * @property {ResolveObject} OWN_COMMUNITIES
 */

/**
 * @typedef {Object} IdentificationUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {IdentificationSubUsersObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} IdentificationObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {IdentificationAccountsObject} ACCOUNTS
 * @property {IdentificationChannelsObject} CHANNELS
 * @property {IdentificationCommunitiesObject} COMMUNITIES
 * @property {IdentificationUsersObject} USERS
 */

export const IDENTIFICATION = {
	resolve: "/",
	ACCOUNTS: {
		resolve: "accounts/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			USER: "user/",
		},
	},
	CHANNELS: {
		resolve: "channels/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			COMMUNITY: "community/",
			ACCOUNTS: {
				resolve: "accounts/",
				_: {
					resolve: (id) => `${id}/`,
					MEMBER: "member/",
				},
			},
		},
	},
	COMMUNITIES: {
		resolve: "communities/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			OWNER: "owner/",
		},
	},
	USERS: {
		resolve: "users/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
			COMMUNITIES: "communities/",
			OWN_COMMUNITIES: "own-communities/",
		},
	},
};
