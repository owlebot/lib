/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// ACCOUNTS
//

/**
 * @typedef {Object} AccountAccountsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} _
 */

//
// CHANNELS
//

/**
 * @typedef {Object} AccountChannelAccountsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} _
 */

/**
 * @typedef {Object} AccountSubChannelsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {AccountChannelAccountsObject} ACCOUNTS
 */

/**
 * @typedef {Object} AccountChannelsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {AccountSubChannelsObject} _
 */

//
// COMMUNITIES
//

/**
 * @typedef {Object} AccountChannelChannelsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} _
 */

/**
 * @typedef {Object} AccountSubCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {AccountChannelChannelsObject} CHANNELS
 */

/**
 * @typedef {Object} AccountCommunitiesObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {AccountSubCommunitiesObject} _
 */

//
// USERS
//

/**
 * @typedef {Object} AccountUserAccountsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} OVERRIDE
 * @property {ResolveObject} _
 */

/**
 * @typedef {Object} AccountSubUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {AccountUserAccountsObject} ACCOUNTS
 */

/**
 * @typedef {Object} AccountUsersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {AccountSubUsersObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} AccountObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {AccountAccountsObject} ACCOUNTS
 * @property {AccountChannelsObject} CHANNELS
 * @property {AccountCommunitiesObject} COMMUNITIES
 * @property {AccountUsersObject} USERS
 */

export const ACCOUNT = {
	resolve: "/",
	ACCOUNTS: {
		resolve: "accounts/",
		router: true,
		_: {
			resolve: id => `${id}/`,
		},
	},
	CHANNELS: {
		resolve: "channels/",
		router: true,
		_: {
			resolve: id => `${id}/`,
			ACCOUNTS: {
				resolve: "accounts/",
				_: {
					resolve: id => `${id}/`,
				},
			},
		},
	},
	COMMUNITIES: {
		resolve: "communities/",
		router: true,
		_: {
			resolve: id => `${id}/`,
			CHANNELS: {
				resolve: "channels/",
				_: {
					resolve: id => `${id}/`,
				},
			},
		},
	},
	USERS: {
		resolve: "users/",
		router: true,
		_: {
			resolve: id => `${id}/`,
			ACCOUNTS: {
				resolve: "accounts/",
				OVERRIDE: "override/",
				_: {
					resolve: id => `${id}/`,
				},
			},
		},
	},
};
