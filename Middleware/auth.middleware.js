//auth.middleware.js
const jwt = require('jsonwebtoken');
const User = require('../Models/user.model.js');
const dotenv = require('dotenv')

dotenv.config()

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Authorization token not found' });
    }

    const decodedToken = jwt.verify(token,"RAHUL1234");
    const user = await User.findOne({email:decodedToken.email});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = authMiddleware;