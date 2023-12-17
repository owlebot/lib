import express from "express";

import { errorMiddleware, loggerMiddleware, notFoundMiddleware } from "../../middlewares/index.js";
import { createRouter } from "./router.js";
import { buildSwaggerJsdocOptions, buildSwaggerOptions } from "./swagger.js";

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
	 * @param {Object} options
	 * @param {Boolean} options.enableProd - Whether to enable swagger in prod
	 * @param {Boolean} options.generateFromJsDoc - Whether to generate OpenApi definition from jsdoc
	 * @param {Object} options.definition - OpenApi definition
	 * @param {Object} options.meta - Meta data to build swagger template
	 */
	async addSwagger(options) {
		if (process.env.NODE_ENV === "local" || options.enableProd) {
			const swaggerUi = await import("swagger-ui-express");
			
			let openapiSpecification;
			if (options.generateFromJsDoc) { // generate spec definition from JSDoc
				let swaggerJsdocLoader;
				try {
					const { default: swaggerJsdoc } = await import("swagger-jsdoc");
					swaggerJsdocLoader = swaggerJsdoc.default;
				} catch (err) {
					this.logger.error("Server", "Error when building swagger! Missing dependencie.");
				}

				if (swaggerJsdocLoader) {
					openapiSpecification = swaggerJsdocLoader(buildSwaggerJsdocOptions(options.meta) );
				}
			} else { // use provded spec definition
				openapiSpecification = buildSwaggerOptions(options.definition, options.meta);
			}
			
			if (!openapiSpecification) {
				this.logger.error("Server", "Error when generating OpenApi definition!");
				return;
			}
			
			// load swagger server
			this.logger.info("Server", "Initialising Swagger with config", {
				info: openapiSpecification.info,
				paths: openapiSpecification.paths,
				servers: openapiSpecification.servers,
			} );
			this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(openapiSpecification) );
			this.logger.info("Server", `${this._host()}/swagger => Swagger server started!`);
			return;
		}
		return;
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
