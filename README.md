# Sprint 7 project
This test suite is meant to test specific aspects of the Urban Grocers web app. The tests are divided by their request method (GET, POST, PUT, AND DELETE).
Technologies used: VS Code, Node.js, npm, and JEST, and is shared on GitHub. VSCode can be installed at https://code.visualstudio.com/download, Node.js can be installed at https://nodejs.org/en, and npm is installed with Node.js. The dependencies are in the file labled 'package.json', which includes jest. Please ensure to pull both package.json and package-lock.json from github to in order to run these tests.
To find the test URL, start a fresh Triple-Ten test server and copy that URL between the "" in config.js. This will populate the URL in all the tests. Note that you will need to add the endpoint to the tests (included in the test summaries).
To run the tests in VS Code, ensure your test server is running, then type 'npx jest' in the terminal. this will run all the tests in this test suite. If any fail, the terminal will print the error and which test has failed. Remember to save any changes to the code before running tests, otherwise you are running old versions of the test.

GET tests:
There are three tests for the 'Get a list of deliveries' action (endpoint /api/v1/couriers). 
1. GET test 1 checks that all deliveries have later close time than opening time. This test compares the 'start' and 'end' of each courier's working hours (workingHours) to ensure the latter is greater than the former, and this is iterated through all the couriers.
2. GET test 2 checks that all couriers to have opening and closing times. This test ensures that each courier has a value for both 'start' and 'end' working hours (workingHours) to ensure no errors. This is also iterated thorugh all couriers. 
3. GET test 3 checks that status is 200'. This test ensures the retun status of the request is 200 and therefore not an error. This is done by reading the return status of the request.

POST tests:
There are two tests for the 'Check the quantity of goods in warehouses' action (endpoint /api/v1/warehouses/amount). These tests do require a header to tell it to put the body in JSON, and a body which includes ids (an array corresponding to a product in product_model table) and an optional dataType(string). The body parameters I used are included in the tests.
1. POST test 2 checks that response includes all of the warehouses. This tests that all warehouses are included in the response by checking that each warehouse name is in the body of the response. Ensure the body is put into JSON so it is readable by JEST.
2. POST test 2 checks that status is 200. This test ensures the return status of the request is 200 and not an error. This is done by reading the return status of the request.

PUT tests:
There are two test for the 'Grocery item price change' action (endpoint /api/v1/products/:id). These tests do require a header to tell it to put the body in JSON, a body which includes the string "price" and what its being changed to, as the kit ID (found in the product_model table) in the URL.
1. PUT test 1 checks that response should be "ok". This test confirms that the response body for the price change is "ok". 
2. PUT test 2 checks that status is 200. This test ensures the return status of the request is 200 and not an error. This is done by reading the return status of the request.

DELETE tests:
There are two test for the 'Deleting the kit' action (endpoint /api/v1/kits/:id). These tests require a kit ID (found in the kit_model table) passed in the URL.
1. DELETE test 1 checks that the kit DELETE endpoint actually deletes a kit. This test first creates a new kit with a random new ID, then deletes the new kit, then attempts to get the kit. The test is passed if the final GET request returns a '404' status. 
2. DELETE test 2 checks that status is 200. This test ensures the return status of the request is 200 and not an error. This is done by reading the return status of the request.