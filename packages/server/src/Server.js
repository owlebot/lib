import express from "express";

import { errorMiddleware, loggerMiddleware } from "../../middlewares/index.js";
import { notFoundMiddleware } from "../../middlewares/src/middlewareNotFound.js";
import { createRouter } from "./Router.js";
import { getSwaggerOptions } from "./swagger.js";

export class Server {
	app = null;

	port = 3000;

	logger;

	init(port = 3000) {
		this.app = express();
		this.port = port;
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
			this.logger.info("Server", "Initialising Swagger with config", openapiSpecification);
			this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(openapiSpecification) );
			this.logger.info("Server", `${this._host()}/swagger => Swagger server started!`);
		}
	}
	
	addHealthEndpoint(func) {
		let ok = true;
		if (func) {
			ok = func();
		}
		this.app.use("/health", (req, res) => res.status(ok ? 200 : 500).send( { status: ok ? "OK" : "KO" } ) );
		this.logger.info("Server", `${this._host()}/health => Health endpoint active!`);
	}

	addMiddleware(middleware) {
		this.app.use(middleware);
	}

	addRouter() {
		const router = createRouter();
		this.app.use(router);
		return router;
	}

	start() {
		this.addMiddleware(errorMiddleware(this.logger) );
		this.addMiddleware(notFoundMiddleware(this.logger) );

		this.app.listen(this.port, () => this.logger.notice("Server", `${this._host()} => Server started!`) );
	}

	_host() {
		return `http://localhost:${this.port}`;
	}
}
