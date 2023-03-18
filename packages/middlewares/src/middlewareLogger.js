export function loggerMiddleware(logger) {
	// req.query is a `getter` so we need to copy it to a new object in order to correctly log it
	return (req, res, next) => {
		logger.request(req.method, req.path, req.method === "GET" ? { ...req.query } : req.body, req.get("x-request-id"), req.get("x-correlation-id") );
		next();
	};
}
