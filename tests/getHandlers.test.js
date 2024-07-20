// eslint-disable-next-line no-undef
const config = require('../config');

test('GET test 1 checks that all deliveries have later close time than opening time', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/api/v1/couriers`);
    } catch (error) {
        console.error(error);
    }
    const result = [];
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        const startWorkingHours = data[i]["workingHours"]["start"];
        const endWorkingHours = data[i]["workingHours"]["end"];
        console.log(`Courier: ${data[i].name}, Start: ${startWorkingHours}, End: ${endWorkingHours}`);
        result.push(startWorkingHours < endWorkingHours);
    }
    expect(result).not.toContain(false);
});
//note for reviewer: I've triple-checked this and I keep getting a [true,true,true, true] result for GET test 1. Please let me know what I may have missed. Thank you for all your help!

test('GET test 2 checks that all couriers to have opening and closing times', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	
	const data = await response.json();
	for (let i = 0; i < data.length; i++) {
        const startWorkingHours = data[i]["workingHours"]["start"];
        const endWorkingHours = data[i]["workingHours"]["end"];
    
    expect(startWorkingHours).not.toBe(null)
	expect(endWorkingHours).not.toBe(null)}
});

test('GET test 3 checks that status is 200', async () => {
    let actualStatus;
    try {

        const response = await fetch(`${config.API_URL}/api/v1/couriers`);
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});