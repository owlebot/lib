/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// CHANNELS
//

/**
 * @typedef {Object} TwitchGwChannelsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} TwitchGwObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {TwitchGwChannelsObject} CHANNELS
 */

export const TWITCH_GW = {
	resolve: "/",
	CHANNELS: {
		resolve: "channels/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
		},
	},
};
