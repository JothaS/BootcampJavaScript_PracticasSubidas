
const jwt = require('jsonwebtoken');
const secretKey = 'tu_clave_secreta';

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Token no proporcionado.');

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).send('Token inválido.');
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;


