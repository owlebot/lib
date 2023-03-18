export const ErrorStatusEnum = {
	TWITCH_ERROR: {
		code: 1000,
		message: "Could not find twitch user",
	},

	AUTOEVENT_FILTER: {
		code: 1100,
		message: "Error",
	},
	AUTOEVENT_DISPATCHER: {
		code: 1200,
		message: "Error",
	},

	PG_CREATE: {
		code: 2000,
		message: "Could not create",
	},
	PG_UPDATE: {
		code: 2001,
		message: "Could not update",
	},
	PG_DELETE: {
		code: 2002,
		message: "Could not delete",
	},

	MONGO_CREATE: {
		code: 3000,
		message: "Could not create",
	},
	MONGO_UPDATE: {
		code: 3001,
		message: "Could not update",
	},
	MONGO_DELETE: {
		code: 3002,
		message: "Could not delete",
	},
	UNLINK_ERROR: {
		code: 4000,
		message: "Could not unlink",
	},

};
