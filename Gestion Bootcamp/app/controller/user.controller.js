const db = require('./../models/index.js');
const User = db.User;

exports.createUser = async (data) => {
    try {
        return await User.create(data);
    } catch (error) {
        throw error;
    }
};

exports.findUserById = async (userId) => {
    try {
        return await User.findByPk(userId, { include: "bootcamps" });
    } catch (error) {
        throw error;
    }
};

exports.findAll = async () => {
    try {
        return await User.findAll({ include: "bootcamps" });
    } catch (error) {
        throw error;
    }
};

exports.updateUserById = async (userId, newData) => {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            throw new Error("Usuario no encontrado.");
        }

        await user.update(newData);

        return user;
    } catch (error) {
        throw error;
    }
};

exports.deleteUserById = async (userId) => {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
        } throw new Error("Usuario no encontrado.");


        await user.destroy();

        return true;
    } catch (error) {
        throw error;
    }
};