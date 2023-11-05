export function notFoundMiddleware(logger) {
	return (req, res) => {
		logger.warn(`Express - ${req.method} ${req.path}`, "Endpoint doesn't exist!");
		res
			.status(404)
			.send("Endpoint doesn't exist");
	};
}
