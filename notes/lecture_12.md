1. Repeat and check homework
2. FE vs BE
3. System integrations
4. REST API
5. Postman

## 1. Repeat and check homework


## 2. FE vs BE
![](/pictures/fe_be.png)

Monolithic architecture
Microservice architecture

UI/UX for humans
API for services, apps, systems, modules etc.


## 3. System integrations

API architecture styles:
***RESTfull API***
GraphQL
SOAP API
gRPC

Client and Server architecture 

Clients -> send request (messages)
Server -> send response (messages)

CRUD -> Create, Read, Update, Delete

HTTP/HTTPS -> protocols
TCP/UDP

Sniffing attack


Request message:
1. starting line
   HTTP (CRUD) method: GET, POST, PUT (all object), PATCH (part of object), DELETE
   url endpoint
2. header -> meta data (application type JSON, xml, toke, apikey,...)
3. body -> JSON for POST, PUT, PATCH; XML ...

https://www.mqtechconference.com/sessions_v2017/MQTC_2017_Introduction_to_JSON.pdf

user -> fistName, lastName, email, age, marriedStatus.
```json
{
    "firstName": "Vardenis",
    "lastName": "Pavardenis",
    "email": "demo@demo.com",
    "age": 1,
    "marriedStatus": true,
    "address": {
        "Street": "asdfa",
        "City": "Vilnius",
        "Country": "LT"
    }
}
```
```json
[
    {"firstName": "Vardenis", "lastName": "Pavardenis",},
    {"firstName": "Vardenis", "lastName": "Pavardenis",},
    {"firstName": "Vardenis", "lastName": "Pavardenis",},
]
```

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

Response message:
1. starting line
   Response code: 100, 200, 300, 400, 500
   url
2. header -> meta data
3. body -> JSON

https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design  
https://zuplo.com/blog/2025/03/12/common-pitfalls-in-restful-api-design  

## 4. REST API

https://jsonplaceholder.typicode.com


full_url = base_url + endpoint

base_url = https://jsonplaceholder.typicode.com
endpoint = /posts

endpoint = /posts/1
endpoint = /posts/:id
endpoint = /posts/{id}

endpoint = /posts/3/comments
endpoint = /posts/{post_id}/comments
endpoint = /posts/:post_id/comments

https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/posts/1
https://jsonplaceholder.typicode.com/posts/3/comments



## 5. Postman

