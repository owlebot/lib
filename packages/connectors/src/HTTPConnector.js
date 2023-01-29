import axios from "axios";

import { Connector } from "./Connector.js";

export class HTTPConnector extends Connector {
	#instance;

	constructor(url, apiAuth) {
		super(url);

		const options = {
			baseURL: url,
		};

		if (apiAuth) {
			options.headers = { authorization: apiAuth };
		}

		this.#instance = axios.create(options);
	}

	async connect() {
		return true;
	}

	async send(req, endpoint) {
		if (!this.ready) {
			return false;
		}

		const request = {
			method: "post",
			url: endpoint,
			data: req,
		};
		
		try {
			await this.#instance.request(request);
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}
}
