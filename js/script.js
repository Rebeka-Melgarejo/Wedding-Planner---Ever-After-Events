// DATOS PARA FILTRAR //

// Primer filtro: inspiracion //

const dwbeka = [

// inspiracion //

{id: 1, name:"Romantic Wedding", image: "img/foto8.jpg", genero: "inspiración", description: "Un instante íntimo que refleja la belleza de compartir una vida juntos." },
{id: 2, name:"Elegant Venue", image: "img/foto6.jpg", genero: "inspiración", description: "Ambientes llenos de encanto, armonía y detalles especiales." },
{id: 3, name:"Bridal Details", image: "img/foto1.jpg", genero: "inspiración", description: "Pequeños detalles que reflejan la esencia y elegancia de la novia en su día especial." },
{id: 4, name:"Behind the Scenes", image: "img/foto3.jpg", genero: "inspiración", description: "Cuidamos cada detalle y coordinamos cada espacio para que todo luzca perfecto en tu gran día." },

// boda //

{id: 5, name:"Your Dream Wedding", image: "img/foto5.jpg", genero: "boda", description: "Diseñamos bodas únicas que reflejan tu historia de amor y convierten tus sueños en recuerdos inolvidables." },
{id: 6, name:"The First Look", image: "img/foto2.jpg", genero: "boda", description: "Una mirada, una sonrisa y la emoción de verla por primera vez vestida de novia." },
{id: 7, name:"By Your Side", image: "img/foto4.jpg", genero: "boda", description: "Pequeños gestos que expresan amor, complicidad y la promesa de caminar juntos para siempre." },
{id: 8, name:"Forever Begins", image: "img/foto7.jpg", genero: "boda", description: "Un anillo, dos manos y una historia que apenas comienza a escribir sus capítulos más bonitos." },
];

// Obtener los contenedores y botones del DOM
const dwbekaContainer = document.getElementById("servicios-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwbekaToRender = [];
    if (genero === "all") {
        dwbekaToRender = dwbeka;
    } else {
        dwbekaToRender = dwbeka.filter(Dwbeka => Dwbeka.genero === genero);
    }
}
