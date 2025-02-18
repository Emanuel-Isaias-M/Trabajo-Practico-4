// views/responseView.mjs

// Función para renderizar un superhéroe individual en formato JSON
// Recibe un objeto 'superheroe' y lo convierte en una cadena JSON con un formato legible
export function renderizarSuperheroe(superheroe) {
    // 'JSON.stringify' convierte el objeto 'superheroe' en una cadena JSON con una indentación de 2 espacios
    return JSON.stringify(superheroe, null, 2);
}

// Función para renderizar una lista de superhéroes en formato JSON
// Recibe un array de objetos 'superheroes' y los convierte en una cadena JSON con un formato legible
export function renderizarListaSuperheroes(superheroes) {
    // 'JSON.stringify' convierte el array 'superheroes' en una cadena JSON con una indentación de 2 espacios
    return JSON.stringify(superheroes, null, 2);
}
