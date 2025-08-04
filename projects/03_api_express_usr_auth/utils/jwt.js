const jwt = require("jsonwebtoken");

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in .env file");
}

const generateToken = (payload, expiresIn = "1h") => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { generateToken, verifyToken }