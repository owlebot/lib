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
	
	async addSwagger(swaggerConfig) {
		if (process.env.NODE_ENV === "local") {
			const swaggerUi = await import("swagger-ui-express");
			
			this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerConfig) );
		}
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
