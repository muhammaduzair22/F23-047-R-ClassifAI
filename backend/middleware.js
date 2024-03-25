const jwt = require('jsonwebtoken');
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const checkLoggedIn = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(501).json({ message: 'Failed to authenticate token.' });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(403).json({message: 'No token provided.'});
    }
}

module.exports={checkLoggedIn}