export const ErrorStatusEnum = {
	GENERIC: {
		code: 0,
		message: "Generic error",
	},
	UNKNOWN: {
		code: 1,
		message: "Unknown error",
	},
	DB: {
		code: 2,
		message: "Issue with DB",
	},
	EXTERNAL_API: {
		code: 3,
		message: "Issue when calling an external (non owlebot) API",
	},
	INTERNAL: {
		code: 4,
		message: "Issue in current API",
	},
	INTERNAL_CALL: {
		code: 5,
		message: "Issue when calling an other owlebot API",
	},
	
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
	XP_PUSH: {
		code: 1300,
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
