export function errorMiddleware(logger) {
	// We NEED to define all args otherwise express doesn't understand it's an error middleware
	// eslint-disable-next-line no-unused-vars
	return (err, req, res, next) => {
		logger.error("Express", "Fatal error", err);
		return res.status(500).send("Service unavailable");
	};
}
