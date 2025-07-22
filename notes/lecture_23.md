1. Repeat and check homework
2. Libs Concurrently, wait-on
3. Libs start-server-and-test

## 1. Repeat and check homework


## 2. Libs Concurrently, wait-on

Install libs:
```bash
    npm i concurrently wait-on
```

```json
{
    "scripts": {
        "dev": "node --watch .",
        "api": "newman run postman_express_usr_mng.json",
        "test:api": "concurrently -k \"npm run dev\" \"wait-on http://localhost:3011/ && npm run api\""
    },
}
```

GitHub yml file dtls:
```yml
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Postman CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

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

    - name: Install libs
      run: npm i

# 1st solution
    # - name: Run API server
    #   run: |
    #     nohup npm run dev > server.log 2>&1 &
    #     sleep 10

    # - name: Run newman tests
    #   run: npm run api

# 2nd solution with concurrently but problems with closing GitHub actions
    # - name: Run API server and  tests
    #   run: npm run test:api

# 3rd solution
    - name: Start API server in background
      run:  nohup npm run dev &
      
    - name: Wait for API to be ready
      run: npx wait-on http://localhost:3011

    - name: Run newman tests
      run: npm run api
```
