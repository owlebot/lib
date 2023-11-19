export function loggerMiddleware(logger) {
	return (req, res, next) => {
		if (req.path !== "/health") {
			// req.query is a `getter` so we need to copy it to a new object in or der to correctly log it
			logger.request(req.method, req.path, req.method === "GET" ? { ...req.query } : req.body, req.get("x-request-id"), req.get("x-correlation-id") );
		}
		next();
	};
}
