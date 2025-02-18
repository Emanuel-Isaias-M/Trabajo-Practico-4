// controllers/superheroesController.mjs

// Importamos las funciones del servicio y las vistas necesarias
import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

// Controlador para obtener un superhéroe por su ID
export function obtenerSuperheroePorIdController(req, res) {
    const { id } = req.params;  // Extraemos el parámetro "id" de la URL
   
    const superheroe = obtenerSuperheroePorId(parseInt(id));  // Llamamos a la función para obtener el superhéroe por ID

    // Si encontramos el superhéroe, lo renderizamos y lo enviamos como respuesta
    if (superheroe) {
        res.send(renderizarSuperheroe(superheroe));  // Renderizamos la vista y enviamos el superhéroe encontrado 
        console.log(`Superhéroes encontrado con el ID ${id}`);  // Mostramos en la consola el ID que estamos buscando
    } else {
        // Si no encontramos el superhéroe, devolvemos un mensaje de error con código 404
        res.status(404).send({ mensaje: "Superhéroe no encontrado" });
        console.log(`Superheroe no encontrado con el ID ${id}`); // Mostramos en la consola que no se encotro el superheroe
    }
}

// Controlador para buscar superhéroes por un atributo específico
export function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params;  // Extraemos los parámetros "atributo" y "valor" de la URL
    
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);  // Llamamos a la función que busca superhéroes según el atributo y valor

    // Si encontramos superhéroes que coinciden con la búsqueda, los renderizamos y enviamos como respuesta
    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes));  // Renderizamos la lista de superhéroes y los enviamos
        console.log(`Superhéroes con atributo: ${atributo}, valor: ${valor}`);  // Mostramos en la consola el atributo y el valor que estamos buscando
    } else {
        // Si no encontramos ningún superhéroe, devolvemos un mensaje de error con código 404
        res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
        console.log(`No se enctraron superheroes con atributo: ${atributo}, valor: ${valor}`);
    }
}

// Controlador para obtener todos los superhéroes mayores de 30 años
export function obtenerSuperheroesMayoresDe30Controller(req, res) {
    const superheroes = obtenerSuperheroesMayoresDe30();  // Llamamos a la función que obtiene los superhéroes mayores de 30 años
    // Usamos JSON.stringify(superheroes, null, 2) porque sin esto los objetos se ven como [object Object];
    // Con este formato, la consola muestra los datos de forma clara y estructurada.
    console.log(`Superhéroes mayores de 30: ${JSON.stringify(superheroes, null, 2)}`);  // Mostramos en consola los superhéroes mayores de 30 años
    res.send(renderizarListaSuperheroes(superheroes));  // Renderizamos la lista de superhéroes y los enviamos como respuesta
}
