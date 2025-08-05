1. Repeat and check homework
2. API vs. JWT
3. Unit testing (Jest lib)
4. Integration testing (Supertest lib)

## 1. Repeat and check homework


## 2. API vs. JWT

API key – A value provided by code when calling an API to identify and authorize the caller. It is intended to be used programmatically and is often a long string of letters and numbers.

Token – A piece of data that represents a user session or specific privileges. Used by individual users for a limited period of time.

API key good for BE (connection between systems), very bad for FE.
JWT good for FE (user authentication and authorization), very bad for BE.

Authentication

Authorization


## 3. Unit testing (Jest lib)

```bash
npm init -y
npm i jest --save-dev
npm i express
```

Fix/add script:
```json
{
    "test": "jest"
}
```
Run unit tests from script:  
```bash
npm run test
```
AAA test pattern:  
https://semaphore.io/blog/aaa-pattern-test-automation  


## 4. Integration testing (Supertest lib)

