import assert from "node:assert/strict";

import { ACCOUNT, AUTOEVENT_DISPATCHER, CONFIG_READ, STATS } from "../src/endpoints.js";

console.log("=== RESOLVE ===");
console.log("CONFIG_READ");
assert.strictEqual(CONFIG_READ.COMMUNITIES.resolve(), "/communities/");
assert.strictEqual(CONFIG_READ.COMMUNITIES._.MODULES.resolve("test"), "/communities/test/modules/");
console.log("ACCOUNT");
assert.strictEqual(ACCOUNT.COMMUNITIES._.CHANNELS._.resolve("test1", "test2"), "/communities/test1/channels/test2/");
assert.strictEqual(ACCOUNT.COMMUNITIES._.resolve("test"), "/communities/test/");
console.log("STATS");
assert.strictEqual(STATS.USERS._.resolve("test"), "/users/test/");
console.log("AUTOEVENT_DISPATCHER");
assert.strictEqual(AUTOEVENT_DISPATCHER.EVENTS.resolve("test"), "/test/");

console.log("=== DEF ===");
console.log("CONFIG_READ");
assert.strictEqual(CONFIG_READ.COMMUNITIES.def(), "/communities/");
assert.strictEqual(CONFIG_READ.COMMUNITIES._.MODULES.def("test"), "/test/modules/");
console.log("ACCOUNT");
assert.strictEqual(ACCOUNT.COMMUNITIES._.CHANNELS._.def("test1", "test2"), "/test1/channels/test2/");
assert.strictEqual(ACCOUNT.COMMUNITIES._.def("test"), "/test/");
console.log("STATS");
assert.strictEqual(STATS.USERS._.def("test"), "/test/");
console.log("AUTOEVENT_DISPATCHER");
assert.strictEqual(AUTOEVENT_DISPATCHER.EVENTS.def("test"), "/test/");
