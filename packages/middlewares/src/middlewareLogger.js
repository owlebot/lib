export function loggerMiddleware(logger) {
	return (req, res, next) => {
		logger.request(req.method, req.path, req.method === "GET" ? req.query : req.body, req.get("x-request-id"), req.get("x-correlation-id") );
		next();
	};
}
