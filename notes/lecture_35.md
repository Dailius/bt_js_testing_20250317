1. Repeat and check homework
2. Get vs contains in cypress.
3. Actions in cypress: type and click.
4. E2E tests vs integration tests.

## 1. Repeat and check homework

## 2. Get vs contains in cypress.

**Get function:**  
https://docs.cypress.io/api/commands/get 

**Contains function:**  
https://docs.cypress.io/api/commands/contains


## 3. Actions in cypress: type and click.
**Type function:**   
https://docs.cypress.io/api/commands/type  

**Click function:**  
https://docs.cypress.io/api/commands/click


## 4. E2E tests vs integration, system tests.

E2E - End to end testing, a way to make sure that applications behave as expected and that the flow of data is maintained for all kinds of user tasks and processes. This type of testing approach starts from the end user's perspective and simulates a real-world scenario.

 E2E - tests the entire application, simulating real-world user scenarios from start to finish

Integration testing - focuses on verifying the interaction between integrated modules, components, or services.  


**AAA testing pattern:**  
    https://semaphoreci.com/blog/aaa-pattern-test-automation  

**Cypress test isolation:**   
https://docs.cypress.io/app/core-concepts/test-isolation  

**Writing and Organizing Tests:**  
https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests

## 5. http-server

https://www.npmjs.com/package/http-server  

```bash
# global installation
npm i -g http-server

# local installation
npm i http-server --save-dev

# run server from project root directory
npx http-server -p 8080

# current html file open from root directory:
http://localhost:8086/demo.html
```

```bash
npm i concurrently wait-on --save-dev
```


package.json script:
```json
{
    ...
    "cy:open": "concurrently -k \"npm run server\" \"wait-on http://localhost:8086/ && npm run test\""
}
```


In order to check server running pid number:
```bash
# bash command
lsof -i :8086

# on windows
netstat -ano | findstr :8086
```

manually kill server
```bash
# bash command
kill pid_number
kill 12345

# windows command
taskkill /PID pid_number /F
taskkill /PID 13572 /F
```