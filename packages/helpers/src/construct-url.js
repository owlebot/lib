export const getUrl = (app, platform = null) => {
	const appName = platform
		? `${app}_${platform}`
		: app;
	return process.env[`${appName}_URL`];
};

export const getPort = (app, platform = null) => {
	const appName = platform
		? `${app}_${platform}`
		: app;
	return process.env[`${appName}_PORT`];
};

export const getFullUrl = (app, platform = null) => `${getUrl(app, platform)}:${getPort(app, platform)}`;

export const getAppName = (type, platform) => `${type}_${platform}`;
