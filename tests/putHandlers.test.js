// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"price" : 175
}

test('Response should be "ok"', async () => {
    let response
	let actualResponseBody
	try {
		response = await fetch(`${config.API_URL}/api/v1/products/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
		
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true);
});

test('Status should be 200', async () => {
    let data
	let actualStatus
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
		actualStatus = response.status;}
	catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
