import express from "express";

import { errorMiddleware, loggerMiddleware } from "../../middlewares/index.js";
import { createRouter } from "./Router.js";

export class Server {
	app = null;

	logger;

	init() {
		this.app = express();
		this.addMiddleware(express.json() );
		this.addMiddleware(express.urlencoded() );
	}

	addLogger(logger) {
		this.logger = logger;
		this.addMiddleware(loggerMiddleware(logger) );
	}

	addMiddleware(middleware) {
		this.app.use(middleware);
	}

	addRouter() {
		const router = createRouter();
		this.app.use(router);
		return router;
	}

	start(port) {
		this.addMiddleware(errorMiddleware(this.logger) );

		this.app.listen(port, () => this.logger.init(port) );
	}
}
