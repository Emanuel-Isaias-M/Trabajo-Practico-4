// repositori/superheroesRepository.mjs

// Importamos los módulos necesarios:
// 'fs' para leer archivos del sistema de archivos
// 'path' para trabajar con rutas de archivos
// 'fileURLToPath' para obtener el nombre de archivo y directorio en el contexto de módulos ES
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Importamos la clase base SuperheroesDataSource, que contiene el método abstracto 'obtenerTodos'
import SuperheroesDataSource from './superheroesDataSource.mjs';

// Obtenemos el nombre de archivo actual y el directorio utilizando 'fileURLToPath' y 'path.dirname'
// Esto nos permite trabajar con rutas relativas dentro del proyecto.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definimos una clase 'SuperheroesFileRespository' que extiende la clase base 'SuperheroesDataSource'
export default class SuperheroesFileRespository extends SuperheroesDataSource {
    
    // Constructor de la clase. Aquí inicializamos la ruta al archivo de datos de superhéroes (superheroes.txt)
    constructor() {
        super();  // Llamada al constructor de la clase base (SuperheroesDataSource)
        // Establecemos la ruta del archivo 'superheroes.txt' que contiene la información de los superhéroes
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }

    // Implementación del método 'obtenerTodos', que fue definido como abstracto en la clase base
    obtenerTodos() {
        // Leemos el archivo 'superheroes.txt' de forma sincrónica utilizando fs.readFileSync
        const data = fs.readFileSync(this.filePath, 'utf-8');
        // Convertimos los datos JSON del archivo en un array de objetos JS y lo devolvemos
        return JSON.parse(data);
    }
}
