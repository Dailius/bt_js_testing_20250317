const { verifyToken } = require("./jwt");

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    try {
        if (!token) {
            const error = new Error("Access denied");
            error.statusCode = 401;
            throw error
        }

        req.user = verifyToken(token);
        next();
    } catch (error) {
        console.error("Error on authentication: ", error);
        res.status(error.statusCode || 403).json({
            error: error.message == "jwt malformed" ? "Incorrect token" : error.message
        });
    }
}


module.exports = { authenticate }