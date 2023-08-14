# FINALL DRILLING MODULO 7

## DESCRIPCIÓN
Planteamiento del ejercicio de aplicación.
Actualmente, el equipo de desarrollo de software emite un requerimiento, donde se desea diseñar la gestión de cursos Bootcamp de una determinada empresa de adiestramiento. 
El equipo aplica la Metodología Scrum, y realiza el primer Sprint que trata de elaborar el proyecto por medio de Node.js, el registro de cursos Bootcamp y de usuarios de éstos.
En este primer Sprint se obtiene el diseño inicial de la base de datos, el cual consta del registro de usuarios y de cursos Bootcamp.

## DESARROLLO

1. Hacer uso de Node.JS para el desarrollo.
2. Partir de la siguiente estructura para el desarrollo:
3. Crear dentro de la carpeta config, el archivo db.config.js, que posee la configuración a la base de datos; el nombre de ésta es: db_bootcamp.
4. Dentro de la carpeta models, se encuentran los modelos tanto para el usuario (user.model.js), como para el Bootcamp (bootcamp.model.js)
        Los atributos para el usuario son:
            • firstName: cadena de caracteres y campo obligatorio.
            • lastName: cadena de caracteres y campo obligatorio.
            • email: campo obligatorio, y con las siguientes validaciones: formato de correo y que sea único, no repetitivo en la base de datos.
        Los atributos para el Bootcamp son:
            • title: cadena de caracteres que define el título del Bootcamp, campo obligatorio.
            • cue: número que define la cantidad de sesiones (CUE) que contiene el Bootcamp, campo obligatorio con las siguientes validaciones: tipo entero con un valor mínimo de 5 CUE y como máximo 10.
            • description: cadena de caracteres que define la descripción o el objetivo del Bootcamp, campo obligatorio.
        Y el archivo index.js, donde se define la conexión con sequelize a la base de datos y modelos.

5. En la carpeta controllers posee los controladores tanto para el usuario (user.controller.js), como para el Bootcamp (bootcamp.controller.js).
        Para el usuario, construir los siguientes controladores:
            • Crear y guardar usuarios llamado createUser.
            • Obtener los Bootcamp de un usuario llamado findUserById.
            • Obtener todos los Usuarios incluyendo, los Bootcamp llamado findAll.
            • Actualizar usuario por Id llamado updateUserById.
            • Eliminar un usuario por Id llamado deleteUserById.
        Para el Bootcamp, construir los siguientes controladores:
            • Crear y guardar un nuevo Bootcamp llamado createBootcamp.
            • Agregar un Usuario al Bootcamp llamado addUser.
            • Obtener los Bootcamp por id llamado findById.
            • Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll.

6. Por último, para verificar los modelos y las relaciones con sus métodos, se crea el archivo server.js, donde hacemos uso de la base de datos, los modelos y los controladores.
Crear los siguientes usuarios:
firstName
    lastName
        email
            Mateo
            Díaz
            mateo.diaz@correo.com
                Santiago
                Mejías
                santiago.mejias@correo.com
                    Lucas
                    Rojas
                    lucas.rojas@correo.com
                        Facundo
                        Fernandez
                        facundo.fernandez@correo.com


Crear los siguientes Bootcamp:
title
    cue
    description
        Introduciendo El Bootcamp De React.
        10
        React es la librería más usada en JavaScript para el desarrollo de interfaces.
            Bootcamp Desarrollo Web Full Stack.
            12
            Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.
                Bootcamp Big Data, Inteligencia Artificial & Machine Learning.
                18
                Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.

Agregar los siguientes usuarios al Bootcamp:
    title
    usuarios
            Introduciendo El Bootcamp De React.
            Mateo Díaz
            Santiago Mejías
                Bootcamp Desarrollo Web Full Stack.
                Mateo Díaz
                    Bootcamp Big Data, Inteligencia Artificial & Machine Learning.
                    Mateo Díaz
                    Santiago Mejías
                    Lucas Rojas

Realizar las siguientes consultas:
• Consultando el Bootcamp por id, incluyendo los usuarios.
• Listar todos los Bootcamp con sus usuarios.
• Consultar un usuario por id, incluyendo los Bootcamp.
• Listar los usuarios con sus Bootcamp.
• Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez.
• Eliminar un usuario por id; por ejemplo: el usuario con id=1.