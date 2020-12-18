const config = require('./config');
const jwt = require('jsonwebtoken');

const checkthetoken = (req, res, next) => {
    let decoded = jwt.verify(req.headers.authorization, config.secret)
}

module.exports