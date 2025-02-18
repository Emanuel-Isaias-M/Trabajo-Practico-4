// services / superheroesService.mjs

// Importamos el repositorio de superhéroes que contiene la lógica para acceder a los datos
import SuperheroesRepository from '../repository/superheroesRepository.mjs';

// Creamos una instancia del repositorio para usarla en las funciones de servicio
const repository = new SuperheroesRepository();

// Función para obtener un superhéroe por su ID
export function obtenerSuperheroePorId(id) {
    // Obtenemos todos los superhéroes del repositorio
    const superheroes = repository.obtenerTodos();
    // Buscamos el superhéroe cuyo ID coincida con el proporcionado
    return superheroes.find(hero => hero.id === id);  // Retorna el primer superhéroe que tenga ese ID
}

// Función para buscar superhéroes por un atributo específico y su valor
export function buscarSuperheroesPorAtributo(atributo, valor) {
    // Obtenemos todos los superhéroes del repositorio
    const superheroes = repository.obtenerTodos();
    // Filtramos los superhéroes cuya propiedad 'atributo' contenga el 'valor' proporcionado (en minúsculas para que sea insensible a mayúsculas/minúsculas)
    return superheroes.filter(hero =>
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())  // Asegura que la comparación no sea sensible a mayúsculas
    );
}

// Función para obtener todos los superhéroes mayores de 30 años
export function obtenerSuperheroesMayoresDe30() {
    // Obtenemos todos los superhéroes del repositorio
    const superheroes = repository.obtenerTodos();
    // Filtramos a los superhéroes mayores de 30 años, cuyo planeta de origen sea 'Tierra' y tenga al menos 2 poderes
    return superheroes.filter(hero =>
        hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >= 2
    );
}
