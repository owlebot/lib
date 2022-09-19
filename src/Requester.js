// eslint-disable-next-line max-classes-per-file
import axios from "axios";

/**
 * Response object from any HTTP Request
 *
 * @prop {Object} data The reponse data
 * @prop {String} status The response status code
 * @prop {String | null} error The error if any
 *
 * @class Response
 */
export class Response {
	data = null;
	
	status = null;
	
	error = null;
	
	constructor(res, error = null) {
		this.data = res?.data;
		this.status = res?.status;
		this.error = error;
	}
}

/**
 * Universal HTTP Request.
 * Abstracted from the request engine.
 *
 * @class Requester
 */
export class Requester {
	#baseURL;
	
	#headers;
	
	#instance;
	
	/**
	 * Creates an instance of Requester.
	 *
	 * @param {String} base - Base URL
	 * @param {Object} [headers={}] Default headers for axios
	 * @memberof Requester
	 */
	constructor(base, headers = {} ) {
		this.#baseURL = base;
		this.#headers = headers;
		
		this.#instance = axios.create( {
			baseURL: base,
			headers,
		} );
	}
	
	async #_request(type, url, options = {} ) {
		const request = {
			method: type,
			url: url,
		};
		
		request.headers ??= options.headers;
		request.data ??= options.body;
		
		try {
			const res = await this.#instance.request(request);
			return new Response(res);
		} catch (error) {
			console.error(error);
			return new Response(null, error);
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
