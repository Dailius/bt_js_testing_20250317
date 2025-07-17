// import express from "express"
const express = require("express");

const port = 3011;
const app = express();

const userArray = [
    { id: 1, userName: 'tree', email: "user01@demo.com", password: "abcd123" },
    { id: 2, userName: 'spoon', email: "user02@demo.com", password: "adf45df3" },
    { id: 3, userName: 'gold', email: "user03@gamil.com", password: "ab#dy45&as" }
]

const dataBase = { maxId: 3, users: userArray };

app.use(express.json());

// http://localhost:3011/
app.get("/", (req, res) => {
    res.status(200).send("Hello my world!!!");
});

// GET request all users
app.get("/users", (req, res) => {
    res.status(200).send(dataBase.users)
})

// require to get user with id = 1
// http://localhost:3011/users/1

// GET request user details
app.get("/users/:id", (req, res) => {
    const { id } = req.params;

    userId = parseInt(id)

    if (!userId) {
        return res.status(400).send(
            {
                message: "Url endpoint must contain user id as number."
            }
        )
    }

    findUserById = dataBase.users.find(user => user.id === userId);

    if (!findUserById) {
        return res.status(400).send(
            {
                message: "User not found."
            }
        )
    }

    res.status(200).send(findUserById)
})

// POST new user
app.post("/users", (req, res) => {
    const { userName, email, password } = req.body;

    // validation: all request body properties ar mandatory
    // response on error:
    // 400, "Request properties 'userName', 'email' and 'password' are mandatory."

    const newUser = {
        id: dataBase.maxId + 1,
        userName: userName,
        email: email,
        password: password
    };

    // validation userName: 
    // userName is unique, doNotContains space


    // validation email: 
    // email is unique, appropriate email format 


    // validation password: 
    // length 8, contains Aa, 0-9, special char.


    dataBase.maxId = newUser.id;
    dataBase.users.push(newUser);

    res.status(201).send(
        {
            message: "User created",
            user: newUser
        }
    )
});


// PUT user details


// DELETE user


// localhost -> 127.0.0.1
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
