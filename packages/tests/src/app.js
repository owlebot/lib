import { exec } from "node:child_process";
import http from "node:http";

const DEFAULT_PORT = 3000;
const DEFAULT_TEST_ENDPOINT = "/health";
const DEFAULT_TIMEOUT = 2000;

export const main = (command, options = {} ) => {
	const appProcess = exec(command, (error, stdout) => {
		console.log(stdout);
		  
		if (error) {
			console.error("Error starting the app:", error);
			process.exit(1);
		}
	} );
	
	setTimeout( () => {
		const testRequest = http.get(`http://localhost:${DEFAULT_PORT}${options.testEndpoint || DEFAULT_TEST_ENDPOINT}`, () => {
			console.log("App started successfully and responded to /health request.");
		
			// Gracefully shut down the app
			appProcess.kill("SIGINT");
		} );
	
		testRequest.on("error", (error) => {
			console.error("Request to /health endpoint error:", error);
			process.exit(1);
		} );
	}, options.timeout || DEFAULT_TIMEOUT);
};
