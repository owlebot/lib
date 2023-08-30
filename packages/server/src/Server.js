import express from "express";

import { errorMiddleware, loggerMiddleware } from "../../middlewares/index.js";
import { createRouter } from "./Router.js";
import { getSwaggerOptions } from "./swagger.js";

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
	
	/**
	 * Add swagger if NODE_ENV is "local"
	 * @param {Object} swaggerOptions
	 */
	async addSwagger(swaggerOptions) {
		if (process.env.NODE_ENV === "local") {
			const swaggerUi = await import("swagger-ui-express");
			const { default: swaggerJsdoc } = await import("swagger-jsdoc");
			
			const openapiSpecification = swaggerJsdoc(getSwaggerOptions(swaggerOptions) );
			this.logger.info("Swagger", "Initialising Swagger with config", openapiSpecification);
			this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(openapiSpecification) );
			this.logger.info("Swagger", "/swagger => Swagger server started!");
		}
	}
	
	addHealthEndpoint() {
		this.app.use("/health", (req, res) => res.status(200).send( {} ) );
		this.logger.info("Health", "/health => Health endpoint active!");
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
