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
};
