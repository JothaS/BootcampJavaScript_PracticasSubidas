
const db = require('../models');
const User = db.User;

module.exports.checkDuplicateEmail = async (req, res, next) => {
    try {
        const email = req.body.email;
        const user = await User.findOne({ where: { email } });

        if (user) {
            return res.status(400).json({ message: 'Correo electrónico ya registrado' });
        }

        next();
    } catch (error) {
        res.status(500).json({ message: 'Error en la verificación del correo electrónico' });
    }
};

