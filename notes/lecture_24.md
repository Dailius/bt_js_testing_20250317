1. Repeat and check homework
2. Libs start-server-and-test
3. Postgres SQL


## 1. Repeat and check homework


## 2. Libs start-server-and-test

https://www.npmjs.com/package/start-server-and-test

```bash
npm i start-server-and-test
```

```json
{
    "scripts": {
        ...
        "tst:api":"start-server-and-test dev http://localhost:3011/users api"
    }
}

```

GitHub action yaml file:
```yml
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
    # - name: Start API server in background
    #   run:  nohup npm run dev &
      
    # - name: Wait for API to be ready
    #   run: npx wait-on http://localhost:3011

    # - name: Run newman tests
    #   run: npm run api

# 4th solution
    - name: Start API server and tests
      run:  npm run tst:api
```

## 3. Postgres SQL

https://neon.com/postgresqltutorial/dvdrental.zip   
https://neon.com/postgresqltutorial/printable-postgresql-sample-database-diagram.pdf  

SQL tables:
1. table name
2. column with names (static)
3. rows as data entry (dynamic)
4. values - tulep

PK -> primary key -> pirminis raktas (Unique)
FK -> foreign key -> antrinis raktas (it might duplicate)

ADDRESS
(PK) address_id
(FK) city_id (Duplicates)

CITY:
(PK) city_id (Unique)
(FK) country_id


