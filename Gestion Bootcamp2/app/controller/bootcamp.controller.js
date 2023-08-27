
const db = require('../models');
const Bootcamp = db.Bootcamp;
const User = db.User;

exports.createBootcamp = async (req, res) => {
    try {
        const { title, cue, description } = req.body;

        const bootcamp = await Bootcamp.create({
            title,
            cue,
            description,
        });

        res.status(201).json(bootcamp);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el bootcamp' });
    }
};

exports.addUserToBootcamp = async (req, res) => {
    try {
        const bootcampId = req.params.id;
        const userId = req.body.userId;

        const bootcamp = await Bootcamp.findByPk(bootcampId);
        if (!bootcamp) {
            return res.status(404).json({ message: 'Bootcamp no encontrado' });
        }

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        await bootcamp.addUser(user);

        res.status(200).json({ message: 'Usuario agregado al bootcamp exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar usuario al bootcamp' });
    }
};

exports.findBootcampById = async (req, res) => {
    try {
        const bootcampId = req.params.id;
        const bootcamp = await Bootcamp.findByPk(bootcampId, {
            include: User,
        });

        if (!bootcamp) {
            return res.status(404).json({ message: 'Bootcamp no encontrado' });
        }

        res.status(200).json(bootcamp);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el bootcamp' });
    }
};

exports.findAllBootcamps = async (req, res) => {
    try {
        const bootcamps = await Bootcamp.findAll({
            include: User,
        });

        res.status(200).json(bootcamps);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los bootcamps' });
    }
};
