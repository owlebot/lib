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
			this.logger?.info("Connector", `Connection success to ${this.target} (${this.url})`);
		} else {
			this.logger?.info("Connector", `Connection error to ${this.target} (${this.url})`);
		}
	}

	send() {
		//
	}
}
