import axios from "axios";

import Connector from "./Connector.js";

export default class HTTPConnector extends Connector {
	auth;

	constructor(config) {
		super(config);
		this.auth = config.api.auth;
	}

	async connect() {
		return true;
	}

	async send(req) {
		if (!this.ready) {
			return false;
		}
		
		try {
			await axios.post(`${this.url}/post`, req, { headers: { authorization: this.auth } } );
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}
}
