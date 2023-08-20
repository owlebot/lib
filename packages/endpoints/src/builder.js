const generate = (node, path, routerPath) => {
	const output = {};

	let buildPath,
	 buildRouterPath;
	if (typeof node.resolve === "function") {
		buildPath = (...args) => {
			const last = args.pop();
			return path(...args) + node.resolve(last);
		};
		buildRouterPath = (...args) => {
			const last = args.pop();
			return routerPath(...args) + (node.router ? "" : node.resolve(last) );
		};
	} else {
		buildPath = (...args) => path(...args) + node.resolve;
		buildRouterPath = (...args) => routerPath(...args) + (node.router ? "" : node.resolve);
	}

	output.resolve = (...args) => buildPath(...args);
	output.def = (...args) => (node.router ? routerPath(...args) + node.resolve : buildRouterPath(...args) );

	for (const key in node) {
		if (key !== "resolve" && key !== "router") {
			if (typeof node[key] === "function") {
				output[key] = {
					resolve: (...args) => {
						const last = args.pop();
						return buildPath(...args) + node[key](last);
					},
					def: (...args) => {
						const last = args.pop();
						return buildRouterPath(...args) + node[key](last);
					},
				};
			} else if (typeof node[key] === "string") {
				output[key] = {
					resolve: (...args) => buildPath(...args) + node[key],
					def: (...args) => buildRouterPath(...args) + (node.router ? "" : node[key] ),
				};
			} else {
				output[key] = generate(node[key], buildPath, node.router ? () => "/" : buildRouterPath);
			}
		}
	}

	return output;
};

export const generateAll = (definition) => {
	const output = {};

	for (const key in definition) {
		output[key] = generate(definition[key], () => "", () => "");
	}

	return output;
};
