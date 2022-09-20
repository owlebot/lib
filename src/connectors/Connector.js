export default class Connector {
	ready = false;

	url;

	constructor(url) {
		this.url = url;
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
