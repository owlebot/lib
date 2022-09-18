import amqp from "amqplib";

import Connector from "./Connector.js";

export default class AMQPConnector extends Connector {
	#channel;

	#channelName = "discord";

	async connect() {
		const connection = await amqp.connect(`amqp://${this.url}`);
		this.#channel = await connection.createChannel();
		await this.channel.assertQueue(this.#channelName);
		return true;
	}

	async send(req) {
		if (!this.ready) {
			return false;
		}

		try {
			this.#channel.sendToQueue(this.#channelName, Buffer.from(JSON.stringify(req) ) );
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}
}
