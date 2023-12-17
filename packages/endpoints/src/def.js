import { ACCOUNT } from "./types/account.js";
import { AUTOEVENT_DISPATCHER } from "./types/autoevent-dispatcher.js";
import { AUTOEVENT_FILTER } from "./types/autoevent-filter.js";
import { CARD_GENERATOR } from "./types/card-generator.js";
import { CARD_MANAGER } from "./types/card-manager.js";
import { CONFIG_HANDLE } from "./types/config-handle.js";
import { CONFIG_READ } from "./types/config-read.js";
import { DISCORD_REST } from "./types/discord-rest.js";
import { IDENTIFICATION } from "./types/identification.js";
import { OPEN_API } from "./types/open-api.js";
import { PROFILE } from "./types/profile.js";
import { STATS } from "./types/stats.js";
import { TWITCH_GW } from "./types/twitch-gw.js";
import { XP_PUSH } from "./types/xp-push.js";
import { XP_READ } from "./types/xp-read.js";

/**
 * @typedef {Object} Endpoints
 * @property {import("./types/account").AccountObject} ACCOUNT - ACCOUNT endpoints
 * @property {import("./types/autoevent-dispatcher").AutoeventDispatcherObject} AUTOEVENT_DISPATCHER - AUTOEVENT_DISPATCHER endpoints
 * @property {import("./types/autoevent-filter").AutoeventFilterObject} AUTOEVENT_FILTER - AUTOEVENT_FILTER endpoints
 * @property {import("./types/card-generator").CardGeneratorObject} CARD_GENERATOR - CARD_GENERATOR endpoints
 * @property {import("./types/card-manager").CardManagerObject} CARD_MANAGER - CARD_MANAGER endpoints
 * @property {import("./types/config-handle").ConfigHandleObject} CONFIG_HANDLE - CONFIG_HANDLE endpoints
 * @property {import("./types/config-read").ConfigReadObject} CONFIG_READ - CONFIG_READ endpoints
 * @property {import("./types/discord-rest").DiscordRestObject} DISCORD_REST - DISCORD_REST endpoints
 * @property {import("./types/identification").IdentificationObject} IDENTIFICATION - IDENTIFICATION endpoints
 * @property {import("./types/open-api").OpenApiObject} OPEN_API - OPEN_API endpoints
 * @property {import("./types/profile").ProfileObject} PROFILE - PROFILE endpoints
 * @property {import("./types/stats").StatsObject} STATS - PROFILE endpoints
 * @property {import("./types/twitch-gw").TwitchGwObject} TWITCH_GW - TWITCH_GW endpoints
 * @property {import("./types/xp-push").XpPushObject} XP_PUSH - XP_PUSH endpoints
 * @property {import("./types/xp-read").XpReadObject} XP_READ - XP_READ endpoints
 */
export const definition = {
	ACCOUNT,
	AUTOEVENT_DISPATCHER,
	AUTOEVENT_FILTER,
	CARD_GENERATOR,
	CARD_MANAGER,
	CONFIG_HANDLE,
	CONFIG_READ,
	DISCORD_REST,
	IDENTIFICATION,
	OPEN_API,
	PROFILE,
	STATS,
	TWITCH_GW,
	XP_PUSH,
	XP_READ,
};
