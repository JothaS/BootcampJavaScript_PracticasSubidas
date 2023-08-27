
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/auth.config');

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).json({ message: 'Token no proporcionado' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Acceso no autorizado' });
        }

        req.userId = decoded.id;
        next();
    });
};

