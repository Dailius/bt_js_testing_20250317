// import express from "express"
const express = require("express");

const port = 3011;
const app = express();

app.use(express.json());

// http://localhost:3011/
app.get("/", (req, res) => {
    res.status(200).send("Hello my world!!!");
});


// GET request all users


// GET request user details


// POST new user



// localhost -> 127.0.0.1
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
