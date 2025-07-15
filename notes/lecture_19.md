1. Repeat and check homework
2. Test isolation
3. Newman tool
4. GitHub Actions run Newman
3. Newman reports

## 1. Repeat and check homework

## 2. Test isolation

https://docs.cypress.io/app/core-concepts/test-isolation  

https://www.browserstack.com/guide/isolation-test 

TS.1. Create new booking:
POST -> create new booing:
* response code
* response time
* response body (!)
  
GET -> booking details (booking id):
* response code
* response time
* response body (!)


TS.2. Update booking:

POST -> login
POST -> create new booking
PUT -> Update Booking (id):
* response code
* response time
* response body (!)

GET -> booking details (booking id):
* response code
* response time
* response body (!)




## 3. Newman tool

https://learning.postman.com/docs/collections/using-newman-cli/installing-running-newman/  
https://www.npmjs.com/package/newman  


newman installation:
```bash
npm i -g newman
```

Run newman:  
```bash
newman run <postman_json_file_name>
newman run postmanJsonPlaceHolder.json
```

Run newman with environment file:  
```bash
newman run postmanJsonPlaceHolder.json -e jsonPlaceHolder-env.json
```

## 4. GitHub Actions run Newman

```yaml
name: Postman CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  postman-api-test:

    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Install Node.js 
      uses: actions/setup-node@v4
      with:
        node-version: '18'

    - name: Install newman
      run: npm i -g newman

    - name: Runt newman tests
      run: npm run test
```

## 3. Newman reports
