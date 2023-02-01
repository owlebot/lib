export class Connector {
	ready = false;

	url;

	logger;

	source;

	target;

	constructor(source, target, url, logger) {
		this.source = source;
		this.target = target;
		this.url = url;
		this.logger = logger;
		this._connect();
	}

	async _connect() {
		const feedback = await this.connect();
		
		if (feedback) {
			this.ready = true;
			console.log("[INFO] - connector | CONNECTION SUCCESS");
		} else {
			console.log("[INFO] - connector | CONNECTION ERROR");
		}
	}

	send() {
		//
	}
}
