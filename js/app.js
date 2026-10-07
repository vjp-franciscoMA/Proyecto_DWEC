const recetas = [
    {
        id: 1,
        nombre: "Tortilla de patatas",
        categoria: "Plato principal",
        tiempo: 40,
        dificultad: "Fácil",
        raciones: 4,
        fechaUltimaVez: "05/10/2026"
    },
    {
        id: 2,
        nombre: "Espaguetis a la carbonara",
        categoria: "Pasta",
        tiempo: 25,
        dificultad: "Fácil",
        raciones: 2,
        fechaUltimaVez: "03/10/2026"
    },
    {
        id: 3,
        nombre: "Paella",
        categoria: "Arroz",
        tiempo: 60,
        dificultad: "Media",
        raciones: 4,
        fechaUltimaVez: "01/10/2026"
    },
    {
        id: 4,
        nombre: "Gazpacho",
        categoria: "Entrante",
        tiempo: 15,
        dificultad: "Fácil",
        raciones: 4,
        fechaUltimaVez: "28/09/2026"
    },
    {
        id: 5,
        nombre: "Lasaña",
        categoria: "Pasta",
        tiempo: 75,
        dificultad: "Media",
        raciones: 6,
        fechaUltimaVez: "25/09/2026"
    },
    {
        id: 6,
        nombre: "Ensalada César",
        categoria: "Ensalada",
        tiempo: 20,
        dificultad: "Fácil",
        raciones: 2,
        fechaUltimaVez: "22/09/2026"
    },
    {
        id: 7,
        nombre: "Pollo al horno",
        categoria: "Carne",
        tiempo: 50,
        dificultad: "Fácil",
        raciones: 4,
        fechaUltimaVez: "20/09/2026"
    },
    {
        id: 8,
        nombre: "Arroz con leche",
        categoria: "Postre",
        tiempo: 45,
        dificultad: "Media",
        raciones: 4,
        fechaUltimaVez: "18/09/2026"
    }
];

console.table(recetas);

// Reto 3
// Tiempo máximo para considerar que una receta es rápida
const TIEMPO_RAPIDO = 30;

// Mostramos el título del primer listado
console.log("--- Todas las recetas ---");

// Recorremos todas las recetas
for (const receta of recetas) {

    // Si tarda 30 minutos o menos, es rápida.
    // Si tarda más, es elaborada.
    const etiqueta = receta.tiempo <= TIEMPO_RAPIDO ? "rápida" : "elaborada";

    // Mostramos el id, el nombre y la etiqueta de cada receta
    console.log(`${receta.id}. ${receta.nombre} - ${etiqueta}`);
}

// Mostramos el título del segundo listado
console.log("--- Recetas que cumplen el filtro ---");

// Contador de recetas que cumplen la condición
let encontradas = 0;

// Recorremos las recetas usando un for clásico
for (let i = 0; i < recetas.length; i++) {

    // Guardamos la receta que estamos recorriendo
    const receta = recetas[i];

    // Comprobamos las condiciones:
    // que sea fácil Y rápida, O que tenga 6 o más raciones
    if ((receta.dificultad === "Fácil" && receta.tiempo <= TIEMPO_RAPIDO) || receta.raciones >= 6) {

        // Mostramos la receta que cumple la condición
        console.log(`${receta.id}. ${receta.nombre}`);

        // Aumentamos el contador
        encontradas++;
    }
}

// Mostramos cuántas recetas cumplen la condición
console.log(`${encontradas} de ${recetas.length} cumplen la condición`);