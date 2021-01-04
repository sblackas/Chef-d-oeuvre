const config = require('../modules/config');
const jwt = require('jsonwebtoken');

const authJWT = (req, res, next) => {
    const decocedToken = req.headers.authorization;

    if (decocedToken) {
        const token = decocedToken.split(' ')[1];

        jwt.verify(token, config.secret, (err, user) => {
            if (err) {
                return res.send.status(403).json({error: 'Unauthorized'});
            }
            next();
        });
    } else {
        res.send.status(401);
    }
};

module.exports 


