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
	ok = true;

	status = null;

	headers = null;

	error = null;

	data = null;
	
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
