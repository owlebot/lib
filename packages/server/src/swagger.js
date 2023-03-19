export function getSwaggerOptions(swaggerOptions) {
	const options = {
		definition: {
			openapi: "3.0.0",
			info: {
				title: `Docs for ${swaggerOptions.name}`,
				version: "1.0.0",
			},
		},
		apis: [swaggerOptions.path || "./src/routes/*.js"], // files containing annotations as above
	};

	return options;
}
