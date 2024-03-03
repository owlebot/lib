export function bodyValidatorMiddleware(schema, response) {
	return (req, res, next) => {
		const validation = schema.validate(req.body);
		
		if (!validation.error) { // keep execution
			return next();
		}

		if (response) { // standard error handling
			// ErrorStatusEnum.INPUT_VALIDATION
			return response.sendError(res, {
				code: 100,
				message: "Issue with provided inputs",
			}, validation.error?.details?.map(e => e.message).join(" ; ") );
		}

		return res.status(422).send("Incorrect input");
	};
}
