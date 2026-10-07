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


// Reto 2: listados como funciones

// Tiempo máximo para considerar que una receta es rápida
const TIEMPO_RAPIDO = 30;


// 1. Función para listar todas las recetas
function listarTodas(recetas) {

    console.log("--- Todas las recetas ---");

    // Recorremos todas las recetas
    for (const receta of recetas) {

        // Comprobamos si la receta es rápida o elaborada
        const etiqueta = receta.tiempo <= TIEMPO_RAPIDO ? "rápida" : "elaborada";

        // Mostramos el id, el nombre y la etiqueta
        console.log(`${receta.id}. ${receta.nombre} - ${etiqueta}`);
    }
}


// 2. Función para filtrar recetas
function filtrar(recetas, limite) {

    // Contador de recetas que cumplen la condición
    let encontradas = 0;

    console.log(`--- Recetas fáciles y de ${limite} minutos o menos ---`);

    // Recorremos las recetas con un for clásico
    for (let i = 0; i < recetas.length; i++) {

        // Guardamos la receta actual
        const receta = recetas[i];

        // Comprobamos que sea fácil Y que tarde menos o igual que el límite
        // O que tenga 6 o más raciones
        if ((receta.dificultad === "Fácil" && receta.tiempo <= limite) || receta.raciones >= 6) {

            // Mostramos la receta
            console.log(`${receta.id}. ${receta.nombre}`);

            // Aumentamos el contador
            encontradas++;
        }
    }

    // Devolvemos el número de recetas encontradas
    return encontradas;
}


// 3. Función para contar recetas por categoría
function contarPorCategoria(recetas) {

    console.log("--- Recetas por categoría ---");

    // Guardamos cuántas recetas hay de cada categoría
    const categorias = {};

    // Recorremos todas las recetas
    for (const receta of recetas) {

        // Si la categoría no existe todavía, la ponemos a 0
        if (categorias[receta.categoria] === undefined) {
            categorias[receta.categoria] = 0;
        }

        // Sumamos una receta a esa categoría
        categorias[receta.categoria]++;
    }

    // Mostramos las categorías y sus cantidades
    for (const categoria in categorias) {
        console.log(`${categoria}: ${categorias[categoria]}`);
    }
}


// 4. Llamamos a las funciones

listarTodas(recetas);

// Llamamos a filtrar con un límite de 30
const resultado30 = filtrar(recetas, 30);
console.log(`Encontradas: ${resultado30}`);

// Llamamos a filtrar otra vez con un límite de 45
const resultado45 = filtrar(recetas, 45);
console.log(`Encontradas: ${resultado45}`);

// Contamos las recetas por categoría
contarPorCategoria(recetas);