// eslint-disable-next-line no-undef
const config = require('../config');

test('DELETE test 1 checks that the kit DELETE endpoint actually deletes a kit', async () => {
	const kitBody={name:"shiloh's test kit", cardId:1}
	let kitResponse
//creates a new kit
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(kitBody)
		});
		kitResponse = await response.json();
        
	} catch (error) {
		console.error(error);
	}
	console.log(kitResponse);
	let response
	let actualResponseBody
//deletes the made kit
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/${kitResponse.id}`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true);
//tries to get deleted kit
	try {

        const response = await fetch(`${config.API_URL}/api/v1/kits/${kitResponse.id}`);
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(404);
});


test('DELETE test 2 checks that status is 200', async () => {
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
