
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'tu_clave_secreta';
const User = require('../models/user.model');

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).send('Credenciales inválidas.');
        }

        const token = jwt.sign({ id: user.id, email: user.email }, secretKey);
        res.json({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { login };