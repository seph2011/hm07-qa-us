// eslint-disable-next-line no-undef
const config = require('../config');

test('all deliveries have later close time than opening time', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	const result = []
	const data = await response.json();
	for (let i = 0; i < data.length; i++) {
        const startWorkingHours = data[i]["workingHours"]["start"];
        const endWorkingHours = data[i]["workingHours"]["end"];
        result.push(startWorkingHours < endWorkingHours)
    }
    expect(result).not.toContain(false)
});


test('all couriers to have opening and closing times', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	const result = []
	const data = await response.json();
	for (let i = 0; i < data.length; i++) {
        const startWorkingHours = data[i]["workingHours"]["start"];
        const endWorkingHours = data[i]["workingHours"]["end"];
    
    expect(startWorkingHours).not.toBe(null)
	expect(endWorkingHours).not.toBe(null)}
});

test('status should be 200', async () => {
    let actualStatus;
    try {

        const response = await fetch(`${config.API_URL}/api/v1/couriers`);
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});