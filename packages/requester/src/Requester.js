import nodeFetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";

import { Response } from "./Response.js";

/**
 * Universal HTTP Request.
 * Abstracted from the request engine.
 *
 * @class Requester
 */
export class Requester {
	#baseURL;
	
	#headers;

	#target;
	
	#instance;

	#logger;
	
	/**
	 * Creates an instance of Requester.
	 *
	 * @param {String} base - Base URL
	 * @param {Object} [options={}] - Options { target: string, source: string, headers: Object }
	 * @param {Object<Logger>} [logger] - Logger
	 * @memberof Requester
	 */
	constructor(base, options = {}, logger) {
		this.#baseURL = base;
		this.#target = options.target || base;
		const baseHeaders = {
			"User-Agent": options.source || "Owlebot",
			"Content-Type": "application/json",
		};
		this.#headers = options.headers ? { ...baseHeaders, ...options.headers } : baseHeaders;
		
		this.#logger = logger;
		this.#logger?.info("Requester", `Initialisation for ${this.#target}: ${this.#baseURL}`);
	}

	/**
	 * Chainable method to add Logger
	 *
	 * @param {Logger} logger
	 * @return {Requester} - this
	 * @memberof Requester
	 */
	 logger(logger) {
		this.#logger = logger;
		return this;
	}

	#_log(type, url, request) {
		let message = `Target: ${this.#target} => ${type.toUpperCase()} ${url}`;
		if (request.headers["x-correlation-id"] ) {
			message += ` ; Correlation ${request.headers["x-correlation-id"]}`;
		}
		if (request.headers["x-request-id"] ) {
			message += ` ; Request ${request.headers["x-request-id"]}`;
		}
		this.#logger?.verbose("Requester", message, request);
	}
	
	#_createUrl(url) {
		return new URL(url, this.#baseURL).href;
	}

	/**
	 *
	 * options obj
	 * {
	 * 	req: Object
	 * 	headers: Object
	 * 	body: Object
	 * 	correlationID: string
	 * 	requestID: string
	 * }
	 */
	async #_request(type, url, options = {} ) {
		const request = {
			method: type,
			headers: { ...this.#headers, ...options.headers } || this.#headers,
		};
		if (options.body) {
			request.body = JSON.stringify(options.body);
		}
		
		// add meta data (correlation ID, request ID)
		const requestID = options.requestID || (options.req?.headers && options.req?.headers["x-request-id"] ) || uuidv4();
		const correlationID = options.correlationID || (options.req?.headers && options.req?.headers["x-correlation-id"] );
		request.headers["x-request-id"] ??= requestID;
		request.headers["x-correlation-id"] ??= correlationID;
		
		this.#_log(type, url, request);
		
		try {
			const res = await nodeFetch(this.#_createUrl(url), request);
			
			let data;
			if (res.headers.get("content-type")?.toLowerCase().includes("application/json") ) {
				data = await res.json();
			} else {
				data = await res.text();
			}

			const standardResponse = new Response( {
				status: res.status,
				headers: res.headers,
				data,
			} );
			this.#logger?.verbose("Requester", `Response: ${res.status}`, standardResponse.data);
			return standardResponse;
		} catch (error) {
			this.#logger?.error("Requester", `Error requesting ${this.#target}`, error);

			return new Response(
				{
					message: "Error",
					status: 500,
				},
				error
			);
		}
	}
	
	/**
	 * Perform a GET request
	 *
	 * @param {String} url
	 * @param {Object} options
	 * @returns {Promise<Response>}
	 */
	get(url, options) {
		return this.#_request("get", url, options);
	}
	
	/**
	 * Perform a POST request
	 *
	 * @param {String} url
	 * @param {Object} body
	 * @param {Object} options
	 * @returns {Promise<Response>}
	 */
	post(url, body, options) {
		return this.#_request("post", url, { ...options, body } );
	}
	
	/**
	 * Perform a PUT request
	 *
	 * @param {String} url
	 * @param {Object} body
	 * @param {Object} options
	 * @returns {Promise<Response>}
	 */
	put(url, body, options) {
		return this.#_request("put", url, { ...options, body } );
	}

	/**
	 * Perform a PATCH request
	 *
	 * @param {String} url
	 * @param {Object} body
	 * @param {Object} options
	 * @returns {Promise<Response>}
	 */
	patch(url, body, options) {
		return this.#_request("patch", url, { ...options, body } );
	}
	
	/**
	 * Perform a DELETE request
	 *
	 * @param {String} url
	 * @param {Object} options
	 * @returns {Promise<Response>}
	 */
	delete(url, options) {
		return this.#_request("delete", url, options);
	}
}
