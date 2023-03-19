/**
 * Response object send back by any service
 *
 * @prop {Boolean} ok Whereas the request was ok or not
 * @prop {Object} data The reponse data
 * @prop {Object} error The error if any
 * @prop {Number} error.code The error code
 * @prop {String} error.message The error message
 *
 * @class ServerResponse
 */
export class ServerResponse {
	ok = true;

	data = null;

	error = null;

	constructor(ok, data) {
		this.ok = ok;
		if (ok) {
			this.data = data.data;
		} else {
			this.error = {
				code: data.code,
				message: data.message,
			};
		}
	}

	static sendSuccess(res, data) {
		return res.status(200)
			.json(new ServerResponse(true, { data } ) );
	}
	
	static sendError(res, errorEnum, message) {
		return res.status(200)
			.json(new ServerResponse(false, { code: errorEnum.code, message: message ?? errorEnum.message } ) );
	}

	static send(res, ok, data, errorEnum, message) {
		if (ok) {
			return this.sendSuccess(res, data);
		}
		return this.sendError(res, errorEnum, message);
	}
}
