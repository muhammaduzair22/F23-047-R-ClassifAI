const jwt = require('jsonwebtoken');
const User = require('./models/User');
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const checkLoggedIn = async (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (token) {
        jwt.verify(token, JWT_SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.status(501).json({ message: 'Failed to authenticate token.' });
            } else {
                const existingUser = await User.findById(decoded.userId);
                if(existingUser)
                   {
                    req.user = existingUser;
                    next();
                   } 
            }
        });
    } else {
        return res.status(403).json({message: 'No token provided.'});
    }
}

module.exports={checkLoggedIn}