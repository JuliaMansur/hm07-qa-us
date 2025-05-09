# Sprint 7 project
This project contains automated tests for the Urban Grocers application. The tests cover eight API operations using GET, POST, PUT, and DELETE methods.
## Technologies & Techniques Used
- Node.js
- npm
- apiDoc (for API documentation)
- Git & GitHub
## Instructions
1. link your GitHub account to TripleTen.
2. clone the repo to my computer, the repository name will be hm07-qa-us will be created automaticly
3. on Git Bash creat a file name projects, clone the director using git clone git@github.com:username/hm07-qa-us.git
4. Open the folder on VS code and run npm install
5. On config.js add the server URL
6. Using the templates write the code for testing each test on a separet file 
## Writing & Organizing Tests
Use the provided templates to write the tests.
Create separate files for each test inside a /tests folder.
## Running the Tests
To run all tests, open a terminal in VS Code and run using npm test
# Documentation
- Used apiDoc: URL /docs/ to check the endpoints
End points used:
GET:
- /api/v1/warehouses
POST:
- /api/v1/warehouses/check 
- /api/v1/warehouses
PUT:
- /api/v1/products/7 
- /your/api/v1/orders/123/complete
DELETE:
- /api/v1/orders/123
- /api/v1/kits/6