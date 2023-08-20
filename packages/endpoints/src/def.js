import { ACCOUNT } from "./types/account.js";
import { AUTOEVENT_DISPATCHER } from "./types/autoevent-dispatcher.js";
import { AUTOEVENT_FILTER } from "./types/autoevent-filter.js";
import { CONFIG_HANDLE } from "./types/config-handle.js";
import { CONFIG_READ } from "./types/config-read.js";
import { IDENTIFICATION } from "./types/identification.js";
import { PROFILE } from "./types/profile.js";
import { STATS } from "./types/stats.js";

/**
 * @typedef {Object} Endpoints
 * @property {import("./types/account").AccountObject} ACCOUNT - ACCOUNT endpoints
 * @property {import("./types/autoevent-dispatcher").AutoeventDispatcherObject} AUTOEVENT_DISPATCHER - AUTOEVENT_DISPATCHER endpoints
 * @property {import("./types/autoevent-filter").AutoeventFilterObject} AUTOEVENT_FILTER - AUTOEVENT_FILTER endpoints
 * @property {import("./types/config-handle").ConfigHandleObject} CONFIG_HANDLE - CONFIG_HANDLE endpoints
 * @property {import("./types/config-read").ConfigReadObject} CONFIG_READ - CONFIG_READ endpoints
 * @property {import("./types/identification").IdentificationObject} IDENTIFICATION - IDENTIFICATION endpoints
 * @property {import("./types/profile").ProfileObject} PROFILE - PROFILE endpoints
 * @property {import("./types/stats.js").StatsObject} STATS - PROFILE endpoints
 */
export const definition = {
	ACCOUNT,
	AUTOEVENT_DISPATCHER,
	AUTOEVENT_FILTER,
	CONFIG_HANDLE,
	CONFIG_READ,
	IDENTIFICATION,
	PROFILE,
	STATS,
};
