const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer")) {
            throw new Error("You must be logged in order 2B 2SICC")
        }

        const rawJWT = authHeader.split(' ')[1];
        const decodedJWT = jwt.verify(
            rawJWT,
            process.env.SECRET_KEY
        );
        req.username = decodedJWT.username;

        next();
        } catch(e) {
            res.status(401).send(e.message);
        }

    }
    module.exports = authenticationMiddleware;