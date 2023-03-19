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
		let message = `Target: ${this.#target} => ${type.toUpperCase()} ${url.pathname}/${url.search}`;
		if (request.headers["x-correlation-id"] ) {
			message += ` ; Correlation ${request.headers["x-correlation-id"]}`;
		}
		if (request.headers["x-request-id"] ) {
			message += ` ; Request ${request.headers["x-request-id"]}`;
		}
		this.#logger?.verbose("Requester", message, request);
	}
	
	#_createUrl(endpoint, query) {
		const url = new URL(endpoint, this.#baseURL);

		if (query) {
			const searchParams = new URLSearchParams();
			for (const key in query) {
				searchParams.append(key, query[key] );
			}
			url.search = searchParams;
		}
	
		return url;
	}

	/**
	 *
	 * options obj
	 * {
	 * 	req: Object
	 * 	headers: Object
	 * 	body: Object
	 * 	correlationId: string
	 * 	requestId: string
	 * }
	 */
	async #_request(type, endpoint, options = {} ) {
		const url = this.#_createUrl(endpoint, options.query);
		const request = {
			method: type,
			headers: { ...this.#headers, ...options.headers } || this.#headers,
		};
		if (options.body) {
			request.body = JSON.stringify(options.body);
		}
		
		// add meta data (correlation ID, request ID)
		const requestId = options.requestId || (options.req?.headers && options.req?.headers["x-request-id"] ) || uuidv4();
		const correlationId = options.correlationId || (options.req?.headers && options.req?.headers["x-correlation-id"] );
		request.headers["x-request-id"] ??= requestId;
		request.headers["x-correlation-id"] ??= correlationId;
		
		this.#_log(type, url, request);
		
		const response = await nodeFetch(url.href, request);
		return this.#_handleResponse(response);
	}

	async #_handleResponse(response) {
		if (response.status !== 200) {
			this.#logger?.error("Requester", `Error requesting ${this.#target} (${response.url}): ${response.status} ${response.statusText}`);
			throw new Error(response.stack);
		}

		let data;
		if (response.headers.get("content-type")?.toLowerCase().includes("application/json") ) {
			data = await response.json();
		} else {
			data = await response.text();
		}

		const standardResponse = new Response( {
			ok: data.ok,
			status: response.status,
			headers: response.headers,
			data: data.data,
			error: data.error,
		} );
		this.#logger?.verbose("Requester",
			`Response: ${standardResponse.status}`,
			standardResponse.ok ? standardResponse.data : standardResponse.error
		);
		return standardResponse;
	}
	
	/**
	 * Perform a GET request
	 *
	 * @param {String} url
	 * @param {Object} query
	 * @param {Object} options
	 * @returns {Promise<Response>}
	 */
	get(url, query, options) {
		if (!options) { // backward compat + easier when no query
			options = query;
			query = null;
		}
		return this.#_request("get", url, { ...options, query } );
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
