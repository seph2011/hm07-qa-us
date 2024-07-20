// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "ids": [
		1,
		4,
		44
	]
}

test('POST test 2 checks that response includes all of the warehouses', async () => {
    let response;
	let data
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
        
	} catch (error) {
		console.error(error);
	}
	
	
	
	expect(Object.keys(data).toString()).toBe('Everything You Need,Food City,Big World,Fresh Food')
});

test('POST test 2 checks that status is 200', async () => {
    let actualStatus
    try {

        const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
		method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});        
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});