export function loggerMiddleware(logger) {
	return (req, res, next) => {
		logger.request(req.method, req.path, req.method === "GET" ? req.query : req.body, req.headers["x-request-id"], req.headers["x-correlation-id"] );
		next();
	};
}
