
1. Repeat and check homework
2. API token
3. Postman scripts


## 1. Repeat and check homework
## 2. API token
## 3. Postman scripts

Save to collection variables:
```javascript
console.log(pm.response.json());
pm.collectionVariables.set('token', pm.response.json().token);
```

Read variable value from collection variables:
```javascript
pm.collectionVariables.get('token')
```

Add to request headers: 
```javascript
pm.request.headers.add({ 
        key: "Cookie", 
        value: `token=${pm.collectionVariables.get('token')}`
    });
```

Good practice to create functions used for requests/responses:
```javascript
function saveToCollectionVariables() {
    pm.collectionVariables.set(
        "newBookingId", pm.response.json().bookingid
    );

    pm.collectionVariables.set(
        "newBookingFirstName", pm.response.json().booking.firstname
    );

    pm.collectionVariables.set(
        "newBookingLastName", pm.response.json().booking.lastname
    );

    pm.collectionVariables.set(
        "newBookingChckin", pm.response.json().booking.bookingdates.checkin
    );

    pm.collectionVariables.set(
        "newBookingChckOut", pm.response.json().booking.bookingdates.checkout
    );
}
```