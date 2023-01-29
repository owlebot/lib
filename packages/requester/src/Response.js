/**
 * Response object from any HTTP Request
 *
 * @prop {Object} data The reponse data
 * @prop {Object} headers The response headers
 * @prop {String} status The response status code
 * @prop {String | null} error The error if any
 *
 * @class Response
 */
export class Response {
	data = null;
	
	headers = null;

	status = null;
	
	error = null;
	
	constructor(res, error = null) {
		this.data = res.data;
		this.headers = res.headers?.raw();
		this.status = res?.status;
		this.error = error;
	}
}
