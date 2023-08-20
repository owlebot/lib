export const getFullUrl = (target) => {
	const url = process.env[`${target}_URL`];
	const port = process.env[`${target}_PORT`];
	return `${url}:${port}`;
};
