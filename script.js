// --- CONFIGURACIÓN ---
// Cambia esto por tu número de WhatsApp (código de país + número sin el 0)
const tuNumeroWA = "593991234567"; // <-- ¡CAMBIA ESTE NÚMERO!

const totalFotos = 49; // El número total de tus fotos
const carpetaFotos = "imagenes"; // El nombre de tu carpeta
// --------------------

// Obtenemos el contenedor de la galería del HTML
const galeria = document.getElementById("galeria-container");

// Bucle: Recorre desde 1 hasta 49
for (let i = 1; i <= totalFotos; i++) {
    
    // 1. Crear el mensaje personalizado
    // encodeURIComponent prepara el texto para una URL (maneja espacios, etc.)
    const mensaje = encodeURIComponent(`Hola Mercy, me interesa el muñeco de la foto #${i}. ¿Está disponible?`);

    // 2. Crear el enlace de WhatsApp
    const linkWA = `https://wa.me/${tuNumeroWA}?text=${mensaje}`;

    // 3. Crear el nombre del archivo de imagen
    const archivoImg = `${carpetaFotos}/${i}.png`;

    // 4. Crear la tarjeta HTML para esta foto
    const tarjetaHTML = `
        <div class="foto-card">
            <img src="${archivoImg}" alt="Muñeco ${i}">
            <div class="foto-info">
                <h3>Muñeco #${i}</h3>
                <a href="${linkWA}" class="wa-button" target="_blank">
                    Consultar por WhatsApp
                </a>
            </div>
        </div>
    `;

    // 5. Añadir la tarjeta a la galería en la página
    galeria.innerHTML += tarjetaHTML;
}