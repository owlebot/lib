import { Requester } from "../../requester/src/Requester.js";
import { Connector } from "./Connector.js";

export class HTTPConnector extends Connector {
	#requester;

	constructor(source, target, url, logger) {
		super(source, target, url, logger);

		this.#requester = new Requester(url, { source, target }, logger);
	}

	async connect() {
		return true;
	}

	async send(endpoint, data, options) {
		if (!this.ready) {
			return false;
		}

		return this.#requester.post(endpoint, data, options);
	}
}
