/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// GUILDS
//

/**
 * @typedef {Object} DiscordRestGuildsObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} _
 */

//
// ROOT
//

/**
 * @typedef {Object} DiscordRestObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {DiscordRestGuildsObject} GUILDS
 */

export const DISCORD_REST = {
	resolve: "/",
	GUILDS: {
		resolve: "guilds/",
		router: true,
		_: {
			resolve: (id) => `${id}/`,
		},
	},
};
