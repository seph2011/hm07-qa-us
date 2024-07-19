// eslint-disable-next-line no-undef
const config = require('../config');

test('Response should be "ok"', async () => {
	let response
	let actualResponseBody
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true);
});


test('status should be 200', async () => {
    let actualStatus = null;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
			
		});
		
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});