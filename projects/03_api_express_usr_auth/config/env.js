const dotenv = require('dotenv');

dotenv.config();

const requiredEnvConfig = ["DB_USER", "DB_HOST", "DB_PASSWORD"];

requiredEnvConfig.forEach(key => {
    if (!process.env[key]) {
        throw new Error(`Key "${key}" is missing in file .env `);
    }
});

module.exports = process.env;