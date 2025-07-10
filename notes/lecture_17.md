1. Repeat and check homework
2. Postman scripts


## 1. Repeat and check homework


## 2. Postman scripts

Save object into Collection Variables:
```javascript
pm.collectionVariables.set(
    "newBookingDetails",
    // pm.response.json()
    // pm.request.body.raw
    JSON.stringify(pm.response.json())
);
```

Read object from Collection Variables:
```javascript
function getBookingDetails(){
    // return pm.collectionVariables.get("newBookingDetails");
    return JSON.parse(pm.collectionVariables.get("newBookingDetails"));
}
```

Check with Postman types:
```javascript
pm.test("Check response body", function(){
    pm.expect(pm.response.json().status).to.be.an('String');
    pm.expect(pm.response.json().totalResults).to.be.an('Number');
    pm.expect(pm.response.json().articles).to.be.an('Array');
    pm.expect(pm.response.json().articles[0]).to.be.an('Object');
    pm.expect(pm.response.json().articles[0]).to.be.an('Object');
    pm.expect(pm.response.json().articles[0].source).to.be.an('Object');
    pm.expect(pm.response.json().articles[0].source.id).to.be.an('String').and.to.be.equal('usa-today');
});
```

