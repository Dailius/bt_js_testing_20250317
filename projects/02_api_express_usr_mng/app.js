//import express from 'express';
const express = require('express');
const port = 3011;
const app = express();

const usersArray = [
    { id: 1, userName: 'tree', email: "user01@demo.com", password: 'abc123' },
    { id: 2, userName: 'people', email: "user02@demo.com", password: 'cba123' },
    { id: 3, userName: 'tent', email: "user03@demo.com", password: 'dsg123' },
    { id: 4, userName: 'forest', email: "user04@demo.com", password: 'abc123jxjx' },
];
const dataBase = { maxId: 4, users: usersArray }

app.use(express.json());

//http://localhost:3011/
app.get('/', (req, res) => {
    res.status(200).json('Hello My World!');
})

app.get('/users', (req, res) => {
    res.status(200).json(dataBase.users)
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    userId = parseInt(id)

    if (!userId) {
        return res.status(400).json(
            {
                message: "Url endpoint must contain user id as number"
            }
        )
    };

    findUserById = dataBase.users.find(user => user.id === userId)

    if (!findUserById) {
        return res.status(400).json(
            {
                message: "User not found"
            }

        )
    }

    res.status(200).json(findUserById)
})

app.post('/users', (req, res) => {
    const { userName, email, password } = req.body;

    //validation:all request body properties are mandatory
    //response on error:
    //400, "Reques properties 'userName', 'email', 'password' are mandoatory"
    if (!userName || !email || !password) {
        return res.status(400).json(
            {
                message: "Request properties 'userName', 'email' and 'password' are mandatory."
            }
        )
    }

    const newUser = {
        id: dataBase.maxId + 1,
        userName: userName,
        email: email,
        password: password,
    };

    userIndexByName = dataBase.users.findIndex(user => user.userName === updatedUser.userName)
    userIndexByEmail = dataBase.users.findIndex(user => user.email === updatedUser.email)

    // Validation userNme;
    //username is unique, doNotContain space,
    if (userName.includes(' ')) {
        return res.status(400).json(
            {
                message: "User name must be without spaces"
            }
        )
    }

    if (userIndexByName !== -1) {
        return res.status(400).json(
            {
                message: "User name is taken allready"
            }
        )
    }

    // Validation email:
    //User email is unique, appropriate email format
    if (userIndexByEmail !== -1) {
        return res.status(400).json(
            {
                message: "User email allready exist"
            }
        )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        return res.status(400).json(
            {
                error: "Invalid email!"
            }
        );
    }

    // Validation password
    //length 8, contains Aa, 0-9, special char.
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\d]).{8,}$/;
    if (!password.match(passwordRegex)) {
        return res.status(400).json(
            {
                error: "Password must be at lest 8 characters long and include letters, numbers and special char."
            }
        );
    }

    dataBase.maxId = newUser.id;
    dataBase.users.push(newUser)

    res.status(201).json(
        {
            message: 'New user created',
            user: newUser
        }
    )
})

//PUT
app.put('/users/:id', (req, res) => {
    const { userName, email, password } = req.body;
    const { id } = req.params;
    
    const userId = parseInt(id)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\d]).{8,}$/;

    const updatedUser = {
        id: userId,
        userName: userName,
        email: email,
        password: password,
    };

    if (!userName || !email || !password) {
        return res.status(400).json(
            {
                message: "Request properties 'userName', 'email' and 'password' are mandatory."
            }
        )
    }

    userIndex = dataBase.users.findIndex(user => user.id === updatedUser.id)
    userIndexByName = dataBase.users.findIndex(user => user.userName === updatedUser.userName)
    userIndexByEmail = dataBase.users.findIndex(user => user.email === updatedUser.email)

    if (userIndex === -1) {

        return res.status(400).json(
            {
                message: "User not found"
            }
        )
    }

    if (userName.includes(' ')) {
        return res.status(400).json(
            {
                message: "User name must be without spaces"
            }
        )
    }

    if (userIndexByName !== -1) {
        return res.status(400).json(
            {
                message: "User name is taken allready"
            }
        )
    }

    if (userIndexByEmail !== -1) {
        return res.status(400).json(
            {
                message: "User email allready exist"
            }
        )
    }

    if (!email.match(emailRegex)) {
        return res.status(400).json(
            {
                error: "Invalid email!"
            }
        );
    }

    if (!password.match(passwordRegex)) {
        return res.status(400).json(
            {
                error: "Password must be at lest 8 characters long and include letters, numbers and special char."
            }
        );
    }

    dataBase.users[userIndex] = updatedUser;

    res.status(200).json(
        {
            message: 'New user name updated',
            user: updatedUser
        }
    )
})

//DELETE
app.delete('/users/:reqId', (req, res) => {
    const { reqId } = req.params;
    const id = parseInt(reqId);

    console.log(id);
    console.log(reqId);
    
    userIndex = dataBase.users.findIndex(user => user.id === id)

    if (userIndex === -1) {

        return res.status(400).json(
            {
                message: "User not found"
            }
        )
    }
    dataBase.users.splice(userIndex, 1)
    res.status(200).json(
        {
            message: 'User deleted',
            userId: id
        }
    )
})

//localhost-->127.0.0.1
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});
