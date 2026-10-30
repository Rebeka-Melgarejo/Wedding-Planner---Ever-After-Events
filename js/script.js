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


// Normaliza tildes para que "inspiracion" e "inspiración" coincidan.
function normalizeCategory(category) {
    return category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Función para renderizar las tarjetas
function renderDw(genero) {
    const categoriaSeleccionada = normalizeCategory(genero);
    const dwbekaToRender = categoriaSeleccionada === "all"
        ? dwbeka
        : dwbeka.filter(dw => normalizeCategory(dw.genero) === categoriaSeleccionada);

    if (dwbekaToRender.length === 0) {
        dwbekaContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

    // Crea y agrega las tarjetas
    dwbekaContainer.innerHTML = dwbekaToRender.map(dw => `
            <figure class="inspiracion-card" data-gender="${dw.genero}">
                <img src="${dw.image}" alt="se venden servicios de planeación de bodas, nombre: ${dw.name}">
                <figcaption>
                ${dw.name}
            </figcaption>
                <div class="card-description">
                    <p>${dw.description}</p>
                </div>
            </figure>
        `).join("");
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;


        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");
        
        // Renderiza las tarjetas con el filtro seleccionado
        renderDw(genero);
    });
});

// Renderizar todos para cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderDw('all');
});


// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
