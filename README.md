# Sprint 7 project
These tests are meant to test a few of the aspects of the Urban Grocers web app. The tests are divided by their request method (GET, POST, PUT, AND DELETE).
All tests were designed for use with JEST and designed in VS Code.
To find the endpoints, go to (URL)/docs/

CONFIG.JS
When performing the tests, ensure you have put an active url in the 'config.js' file, otherwise the test will artificially fail. Note that the servers will need to be restarted occasionally, and when this happens you will need to put in the new server URL.

GET tests:
There are three tests for the 'Get a list of deliveries' action (endpoint /api/v1/couriers). 
The first test is 'All deliveries have a later close time than opening time'. This test compares the 'start' and 'end' of each courier's working hours (workingHours) to ensure the latter is greater than the former, and this is iterated through all the couriers.
The second test is 'All couriers to have opening and closing times'. This test ensures that each courier has a value for both 'start' and 'end' working hours (workingHours) to ensure no errors. This is also iterated thorugh all couriers. 
The final test is 'Status should be 200' This test ensures the retun status of the request is 200 and therefore not an error. This is done by reading the return status of the request.

POST tests:
There are two tests for the 'Check the quantity of goods in warehouses' action (endpoint /api/v1/warehouses/amount). These tests do require a header to tell it to put the body in JSON, and a body which includes ids (an array corresponding to a product in product_model table) and an optional dataType(string). The body parameters I used are included in the tests.
The first test is 'response includes all of the warehouses'. This tests that all warehouses are included in the response by checking that each warehouse name is in the body of the response. Ensure the body is put into JSON so it is readable by JEST.
The second test is 'respone should be 200'. This test ensures the return status of the request is 200 and not an error. This is done by reading the return status of the request.

PUT tests:
There are two test for the 'Grocery item price change' action (endpoint /api/v1/products/:id). These tests do require a header to tell it to put the body in JSON, a body which includes the string "price" and what its being changed to, as the kit ID (found in the product_model table) in the URL.
The first test is 'Response should be "ok". This test confirms that the response body for the price change is "ok". 
The second test is 'respone should be 200'. This test ensures the return status of the request is 200 and not an error. This is done by reading the return status of the request.

DELETE tests:
There are two test for the 'Deleting the kit' action (endpoint /api/v1/kits/:id). These tests require a kit ID (found in the kit_model table) passed in the URL.
The first test is 'Response should be "ok". This test confirms that the response body for the price change is "ok". 
The second test is 'respone should be 200'. This test ensures the return status of the request is 200 and not an error. This is done by reading the return status of the request.