export function buildSwaggerJsdocOptions(meta) {
	const options = {
		definition: {
			openapi: "3.0.0",
			info: {
				title: `Docs for ${meta.name}`,
				description: meta.description || "Specs definition",
				version: meta.version || "1.0.0",
			},
			produces: ["application/json"],
		},
		apis: [meta.path || "./src/routes/*.js"], // files containing annotations as above
	};

	return options;
}

export function buildSwaggerOptions(definition, meta) {
	const options = definition;

	if (process.env.NODE_ENV !== "local") {
		options.servers = [{ url: "https://api.owle.bot/v1" }];
	}

	if (meta.name) {
		options.info.title = `Docs for ${meta.name}`;
	}
	
	if (meta.description) {
		options.info.description = meta.description;
	}
	
	if (meta.version) {
		options.info.version = meta.version;
	}
	
	return options;
}
