// --- CONFIGURACIÓN ---
const tuNumeroWA = "593991234567"; // <-- ¡TU NÚMERO DE WHATSAPP!
const totalFotos = 49;
const carpetaFotos = "imagenes"; // Asegúrate de que este nombre sea EXACTO
// --------------------

// Obtenemos el contenedor de la galería
const galeria = document.getElementById("galeria-container");

// Bucle para crear las tarjetas de los muñecos
for (let i = 1; i <= totalFotos; i++) {
    const mensaje = encodeURIComponent(`Hola Mercy, me interesa el muñeco de la foto #${i}. ¿Está disponible?`);
    const linkWA = `https://wa.me/${tuNumeroWA}?text=${mensaje}`;
    const archivoImg = `${carpetaFotos}/${i}.webp`; // <-- Asegúrate de que la extensión sea .webp

    const tarjetaHTML = `
        <div class="foto-card">
            <img src="${archivoImg}" alt="Muñeco ${i}" loading="lazy" width="320" height="320">
            <div class="foto-info">
                <h3>Muñeco Mágico #${i}</h3>
                <a href="${linkWA}" class="wa-button" target="_blank" rel="noopener noreferrer">
                    Consultar por WhatsApp
                </a>
            </div>
        </div>
    `;
    galeria.innerHTML += tarjetaHTML;
}

// --- EFECTO DE NIEVE ---
const snowContainer = document.querySelector('.snow-container');
const numberOfSnowflakes = 50; // Ajusta la cantidad de nieve

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowContainer.appendChild(snowflake);

    // Posición inicial aleatoria
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración entre 2 y 5 segundos
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Retraso para que aparezcan en diferentes momentos
    snowflake.style.opacity = Math.random(); // Opacidad aleatoria
    snowflake.style.fontSize = Math.random() * 0.8 + 0.4 + 'em'; // Tamaño aleatorio

    // Remover la copo de nieve cuando termina la animación para no sobrecargar
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        // createSnowflake(); // Esto recrearía la nieve constantemente
    });
}

// Crear los copos de nieve iniciales
for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
}

// Opcional: Para que la nieve aparezca continuamente, aunque consume más recursos
// setInterval(createSnowflake, 500); // Crea un nuevo copo cada 0.5 segundos
