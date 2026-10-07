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

        // Si tarda 30 minutos o menos, es rápida
        // Si tarda más de 30 minutos, es elaborada
        const etiqueta = receta.tiempo <= TIEMPO_RAPIDO ? "rápida" : "elaborada";
        
        // Mostramos el id, nombre y etiqueta
        console.log(`${receta.id}. ${receta.nombre} - ${etiqueta}`);
    }
}


// 2. Función para filtrar recetas
function filtrar(recetas, limite) {

    // Contador de recetas encontradas
    let encontradas = 0;

    console.log(`--- Recetas fáciles y de ${limite} minutos o menos ---`);

    // Recorremos todas las recetas
    for (let i = 0; i < recetas.length; i++) {

        // Guardamos la receta actual
        const receta = recetas[i];

        // Comprobamos que sea fácil y que tarde como máximo
        // el número de minutos indicado en limite
        if (receta.dificultad === "Fácil" && receta.tiempo <= limite) {

            // Mostramos la receta
            console.log(`${receta.id}. ${receta.nombre}`);

            // Sumamos 1 al contador
            encontradas++;
        }
    }

    // Devolvemos cuántas recetas hemos encontrado
    return encontradas;
}


// 3. Función para contar recetas por categoría
function contarPorCategoria(recetas) {

    // Contadores para cada categoría
    let platoPrincipal = 0;
    let pasta = 0;
    let arroz = 0;
    let entrante = 0;
    let ensalada = 0;
    let carne = 0;
    let postre = 0;

    // Recorremos todas las recetas
    for (const receta of recetas) {

        // Comprobamos la categoría de la receta
        switch (receta.categoria) {

            case "Plato principal":
                platoPrincipal++;
                break;

            case "Pasta":
                pasta++;
                break;

            case "Arroz":
                arroz++;
                break;

            case "Entrante":
                entrante++;
                break;

            case "Ensalada":
                ensalada++;
                break;

            case "Carne":
                carne++;
                break;

            case "Postre":
                postre++;
                break;
        }
    }

    // Mostramos el resultado
    console.log("--- Recetas por categoría ---");
    console.log(`Plato principal: ${platoPrincipal}`);
    console.log(`Pasta: ${pasta}`);
    console.log(`Arroz: ${arroz}`);
    console.log(`Entrante: ${entrante}`);
    console.log(`Ensalada: ${ensalada}`);
    console.log(`Carne: ${carne}`);
    console.log(`Postre: ${postre}`);
}


// 4. Llamamos a las funciones

listarTodas(recetas);

// Filtramos recetas con un límite de 30 minutos
const resultado30 = filtrar(recetas, 30);
console.log(`Encontradas: ${resultado30}`);

// Filtramos recetas con un límite de 45 minutos
const resultado45 = filtrar(recetas, 45);
console.log(`Encontradas: ${resultado45}`);

// Contamos las recetas de cada categoría
contarPorCategoria(recetas);