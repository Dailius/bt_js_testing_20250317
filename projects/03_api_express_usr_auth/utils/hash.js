const bcryptjs = require("bcryptjs");

const hashPassword = (password) => bcryptjs.hash(password, 10);
const comparePassword = (plain_psw, hashed_psw) => bcryptjs.compare(plain_psw, hashed_psw);

module.exports = { hashPassword, comparePassword };