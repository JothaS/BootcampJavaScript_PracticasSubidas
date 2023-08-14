const express = require("express");
const bodyParser = require("body-parser");
const db = require("./app/models");
const userController = require("./app/controllers/user.controller");
const bootcampController = require("./app/controllers/bootcamp.controller");

const app = express();
app.use(bodyParser.json());

const createUsersAndBootcamps = async () => {
    try {
        // Crear usuarios
        const user1 = await userController.createUser({
            firstName: "Mateo",
            lastName: "Díaz",
            email: "mateo.diaz@correo.com",
        });

        const user2 = await userController.createUser({
            firstName: "Santiago",
            lastName: "Mejías",
            email: "santiago.mejias@correo.com",
        });

        const user3 = await userController.createUser({
            firstName: "Lucas",
            lastName: "Rojas",
            email: "lucas.rojas@correo.com",
        });

        const user4 = await userController.createUser({
            firstName: "Facundo",
            lastName: "Fernandez",
            email: "facundo.fernandez@correo.com",
        });


        console.log("Usuarios creados:");
        console.log(user1);
        console.log(user2);
        console.log(user3);
        console.log(user4);

        // Crear Bootcamps
        const bootcamp1 = await bootcampController.createBootcamp({
            title: "Introduciendo El Bootcamp De React",
            cue: 10,
            description: "React es la librería más usada en JavaScript para el desarrollo de interfaces.",
        });

        const bootcamp2 = await bootcampController.createBootcamp({
            title: "Bootcamp Desarrollo Web Full Stack",
            cue: 12,
            description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.",
        });

        const bootcamp3 = await bootcampController.createBootcamp({
            title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning.",
            cue: 18,
            description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.",
        });

        console.log("Bootcamps creados:");
        console.log(bootcamp1);
        console.log(bootcamp2);
        console.log(bootcamp3);

        // Asociar usuarios a Bootcamps
        await bootcampController.addUser(bootcamp1.id, user1.id);
        await bootcampController.addUser(bootcamp1.id, user2.id);
        await bootcampController.addUser(bootcamp2.id, user1.id);
        await bootcampController.addUser(bootcamp3.id, user1.id);
        await bootcampController.addUser(bootcamp3.id, user2.id);
        await bootcampController.addUser(bootcamp3.id, user3.id);
    } catch (error) {
        console.error("Error al crear usuarios y Bootcamps:", error);
    }
};

db.sequelize.sync({ force: true }).then(() => {
    console.log("Eliminando y resincronizando la base de datos.");
    createUsersAndBootcamps();
});



//Consultando el Bootcamp por id, incluyendo los usuarios:

const bootcampId = 1; // Reemplazar con el id del Bootcamp que deseas consultar

const bootcamp = await bootcampController.getBootcampById(bootcampId);
console.log("Bootcamp consultado por id, incluyendo usuarios:");
console.log(bootcamp);

//Listar todos los Bootcamp con sus usuarios:
const bootcampsWithUsers = await bootcampController.getAllBootcampsWithUsers();
console.log("Bootcamps con usuarios:");
console.log(bootcampsWithUsers);

//Consultar un usuario por id, incluyendo los Bootcamp:

const userId = 1; // Reemplaza con el id del usuario que deseas consultar

const user = await userController.findUserById(userId);
console.log("Usuario consultado por id, incluyendo Bootcamp:");
console.log(user);

//Listar los usuarios con sus Bootcamp:

const usersWithBootcamps = await userController.findAllUsersWithBootcamps();
console.log("Usuarios con Bootcamp:");
console.log(usersWithBootcamps);

//Actualizar el usuario según su id:
const userIdToUpdate = 1; // Reemplaza con el id del usuario que deseas actualizar
const updatedUserData = {
    firstName: "Pedro",
    lastName: "Sánchez",
};

const updatedUser = await userController.updateUserById(userIdToUpdate, updatedUserData);
console.log("Usuario actualizado:");
console.log(updatedUser);

//Eliminar un usuario por id:

const userIdToDelete = 1; // Reemplaza con el id del usuario que deseas eliminar

const isDeleted = await userController.deleteUserById(userIdToDelete);
if (isDeleted) {
    console.log(`Usuario con id ${userIdToDelete} ha sido eliminado.`);
} else {
    console.log(`No se pudo eliminar el usuario con id ${userIdToDelete}.`);
}



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
