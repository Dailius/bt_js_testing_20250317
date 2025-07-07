1. Repeat and check homework
2. Postman collection variables 
3. Request queries
4. API Key
5. API queries


## 1. Repeat and check homework

All http requests are Stateless

## 2. Postman collection variables 

Postman collection variables within `{{baseUrl}}/todos/{{userId}}`

Postman collection variables within request body
```json
{
    "userId": 18,
    "title": "{{postTitle}}",
    "body": {{postBody}},
    "randomEmail": "{{$randomEmail}}",
    "randomText": "{{$randomLoremText}}"
}
```

## 3. Request queries

`{{baseUrl}}/v2/top-headlines/sources?apiKey=144e0c5c31324ea199b7e9cb410e96d0`

`?`
`?apiKey=some_key`
`?apiKey=some_key&page=10&per_page=25`

`{{baseUrl}}/v2/top-headlines?apiKey={{apiKey}}&q=us&pageSize=3&page=15`


## 4. API Key

1. In request query:
`{{baseUrl}}/v2/top-headlines/sources?apiKey=144e0c5c31324ea199b7e9cb410e96d0`


## 5. API queries

