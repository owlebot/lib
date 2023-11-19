/**
 * Response object from any HTTP Request
 *
 * @prop {Boolean} ok Whereas the request was ok or not
 * @prop {String} status The response status code
 * @prop {Object} headers The response headers
 * @prop {Object} data The reponse data
 * @prop {Object} error The error if any
 * @prop {Number} error.code The error code
 * @prop {String} error.message The error message
 *
 * @class Response
 */
export class Response {
	ok = true;

	status = null;

	headers = null;

	data = null;

	error = null;
	
	constructor(data) {
		this.ok = data.ok;
		this.status = data.status;
		this.headers = data.headers?.raw();
		if (data.ok) {
			this.data = data.data;
		} else {
			this.error = data.error;
		}
	}
}
