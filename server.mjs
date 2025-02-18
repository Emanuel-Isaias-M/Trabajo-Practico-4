// server.mjs 
//Importa el framework Express, que facilita la creación de servidores en Node.js.
import express from 'express';
//Importación de controladores (superheroesController.mjs). Se importan tres funciones
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller } from './controllers/superheroesController.mjs';


//Crea una instancia de una aplicación Express.
const app = express();
//Defino el puerto en el que se ejecutará el servidor
const PORT = 3005;

// Rutas
//Se define una ruta raíz (/)
//Agrege esto para mostrar mensaje al usuario cuando acceda al servidor http://localhost:3005/ 
app.get('/', (req,res) => {
    console.log(`Muestro en consola que al usuario le corre el SV `);
    res.send('Servidor corriendo correctamente, Esta es la api de Superheroes');
})


// Ruta GET básica para obtener todos los superhéroes mayores de 30 años
// Tipo de ruteo: Ruteo básico (ruta fija)
// Ejemplo de URL: http://localhost:3005/superheroes/edad/mayorA30
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

// Ruta GET con parámetro de ruta para obtener un superhéroe por ID
// Tipo de ruteo: Ruteo de parámetros (ruta dinámica)
// Ejemplo de URL: http://localhost:3005/superheroes/id/:id
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);

// Ruta GET con parámetros de ruta para buscar superhéroes por un atributo específico
// Tipo de ruteo: Ruteo de parámetros (ruta dinámica)
// Ejemplo de URL: http://localhost:3005/superheroes/atributo/:atributo/:valor
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);




//levantar el servidor en el puerto 3005
//app.listen: Esta función le dice a Express que inicie un servidor
//y empiece a escuchar las solicitudes HTTP en el puerto que se haya especificado (en este caso, PORT es el valor de 3005).
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});