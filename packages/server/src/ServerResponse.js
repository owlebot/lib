export class ServerResponse {
	ok = true;

	data = null;

	error = null;

	errorMessage = null;

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
