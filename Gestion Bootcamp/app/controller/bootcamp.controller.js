const db = require('./../models/index.js');
const Bootcamp = db.Bootcamp;
const User = db.User;


exports.createBootcamp = async (data) => {
    try {
        return await Bootcamp.create(data);
    } catch (error) {
        throw error;
    }
};

exports.addUser = async (bootcampId, userId) => {
    try {
        const bootcamp = await Bootcamp.findByPk(bootcampId);

        if (!bootcamp) {
            throw new Error("Bootcamp no encontrado.");
        }

        await bootcamp.addUser1(userId);
    } catch (error) {
        throw error;
    }
};

exports.findById = async (bootcampId) => {
    try {
        return await Bootcamp.findByPk(bootcampId, { include: "users" });
    } catch (error) {
        throw error;
    }
};

exports.findAll = async () => {
    try {
        return await Bootcamp.findAll1({ include: "users" });
    } catch (error) {
        throw error;
    }
};
