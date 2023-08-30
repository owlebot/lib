import { generateAll } from "./builder.js";
import { definition } from "./def.js";

/**
 * @type {import("./def.js").Endpoints}
 */
const ENDPOINTS = generateAll(definition);

export const { ACCOUNT } = ENDPOINTS;
export const { AUTOEVENT_DISPATCHER } = ENDPOINTS;
export const { AUTOEVENT_FILTER } = ENDPOINTS;
export const { CARD_MANAGER } = ENDPOINTS;
export const { CONFIG_HANDLE } = ENDPOINTS;
export const { CONFIG_READ } = ENDPOINTS;
export const { DISCORD_REST } = ENDPOINTS;
export const { IDENTIFICATION } = ENDPOINTS;
export const { PROFILE } = ENDPOINTS;
export const { STATS } = ENDPOINTS;
export const { TWITCH_GW } = ENDPOINTS;
