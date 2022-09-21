import axios from "axios";

import Connector from "./Connector.js";

export default class HTTPConnector extends Connector {
	#instance;

	constructor(url, apiAuth) {
		super(url);

		this.#instance = axios.create( {
			baseURL: url,
			headers: { authorization: apiAuth },
		} );
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
