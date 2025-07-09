1. Repeat and check homework
2. Breaking change
3. Postman scripts


## 1. Repeat and check homework


## 2. Breaking change

A breaking change in an API is any modification that could cause client applications to stop working or require modifications to their code to continue using the API.

https://www.freecodecamp.org/news/how-to-handle-breaking-changes/  

old endpoint: /company/user/{id} 
new endpoint: /company/{id}/user

client side receive response code 404

old endpoint: /v1/company/user/{id} 
new endpoint: /v2/company/{id}/user

client side receive response code 200

## 3. Postman scripts

Postman test scripts for response code and response time:  
```javascript
pm.test("", function (){

});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code is 200", ()=>{
    pm.expect(pm.response.code).to.equal(200);
});

pm.test("Response time is less than 600ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(600);
});
```


Postman test scripts for response body:   
```javascript

pm.test("Response body token property is string", function () {
    pm.expect(pm.response.json().token).to.be.a('string');
    pm.expect(pm.response.json()).to.have.property('token').that.is.a('string');
});

pm.test("Booking details are correct", function () {    

    pm.expect(pm.response.json().booking.firstname).a('string').eql("Jon");
    pm.expect(pm.response.json().booking.lastname).to.be.a('string').and.to.eql("Green");
    pm.expect(pm.response.json().booking.totalprice).to.eql(120);
    pm.expect(pm.response.json().booking.depositpaid).to.be.true;
    pm.expect(pm.response.json().booking.bookingdates.checkin).to.eql("2025-03-17");
    pm.expect(pm.response.json().booking.bookingdates.checkout).to.eql("2025-09-04");
    pm.expect(pm.response.json().booking.additionalneeds).to.eql("Cold water");
});
```

Save generated name, read and check:
```javascript
pm.collectionVariables.set("newBookingFirstName", JSON.parse(pm.request.body.raw).firstname);

pm.test("Booking details are correct", function () {  
    const firstName = pm.collectionVariables.get("newBookingFirstName");  

    pm.expect(pm.response.json().booking.firstname).a('string').eql(firstName);
    pm.expect(pm.response.json().booking.lastname).to.be.a('string').and.to.eql("Green");
    pm.expect(pm.response.json().booking.totalprice).to.eql(120);
    pm.expect(pm.response.json().booking.depositpaid).to.be.true;
    pm.expect(pm.response.json().booking.bookingdates.checkin).to.eql("2025-03-17");
    pm.expect(pm.response.json().booking.bookingdates.checkout).to.eql("2025-09-04");
    pm.expect(pm.response.json().booking.additionalneeds).to.eql("Cold water");
});
```

