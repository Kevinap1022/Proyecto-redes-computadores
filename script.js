/*
    script.js — Interactividad del portafolio (sin backend, todo corre en el navegador)
    =======================================================================================
    Este archivo hace cuatro cosas, cada una en su propio bloque:
      1. Revela con una animación (fade + slide) cada elemento con la clase
         "reveal" cuando entra en la pantalla, usando IntersectionObserver.
      2. Ajusta el fondo del navbar según el scroll y cierra el menú móvil
         al elegir una opción (comportamiento típico de Bootstrap + UX).
      3. Lightbox de imágenes: cuando se abre el modal #imageLightbox, copia
         la imagen del botón que lo disparó dentro del modal.
      4. Avatar de integrantes: si la foto de un integrante no existe o no
         carga, muestra en su lugar el círculo con la inicial.
*/

// Revela elementos al hacer scroll
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// Fondo del navbar más sólido al hacer scroll
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
    nav.style.background = window.scrollY > 20
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(255, 255, 255, 0.72)";
});

// Cierra el menú móvil al elegir un enlace
document.querySelectorAll("#navMenu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("navMenu");
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});

/**
 * Lightbox de imágenes.
 * Bootstrap dispara el evento "show.bs.modal" justo antes de mostrar el
 * modal, y nos pasa en "event.relatedTarget" el elemento que se clickeó
 * para abrirlo (el <button data-bs-toggle="modal" ...>). De ahí leemos
 * los atributos data-img-src / data-img-alt y los usamos para llenar la
 * imagen grande, el título y el enlace "Abrir en pestaña nueva" del modal
 * ANTES de que se vea. Así un solo modal sirve para todas las imágenes del
 * sitio, sin tener que duplicarlo por cada foto.
 */
const imageLightbox = document.getElementById("imageLightbox");

if (imageLightbox) {
    imageLightbox.addEventListener("show.bs.modal", (event) => {
        const trigger = event.relatedTarget;
        const src = trigger.getAttribute("data-img-src");
        const alt = trigger.getAttribute("data-img-alt") || "Vista previa";

        const img = document.getElementById("imageLightboxImg");
        img.src = src;
        img.alt = alt;

        document.getElementById("imageLightboxLabel").textContent = alt;
        document.getElementById("imageLightboxOpenLink").href = src;
    });
}

/**
 * Avatar de integrantes.
 * Cada foto (.member-photo) tiene al lado un <span class="member-avatar-fallback">
 * con la inicial, oculto con la clase "d-none" de Bootstrap. Si la imagen no
 * existe todavía (o falla al cargar), el navegador dispara el evento "error"
 * en el <img>: ahí la escondemos y le quitamos "d-none" al span de al lado,
 * para que siempre se vea algo (la inicial) en vez de un ícono de imagen rota.
 */
function showMemberFallback(photo) {
    photo.style.display = "none";
    photo.nextElementSibling?.classList.remove("d-none");
}

document.querySelectorAll(".member-photo").forEach((photo) => {
    // El navegador empieza a cargar la imagen apenas el HTML se parsea,
    // mucho antes de que este script corra (está al final de la página).
    // Si ya falló para cuando llegamos aquí, "complete" es true pero
    // "naturalWidth" queda en 0 — en ese caso no hay que esperar un
    // evento "error" que ya pasó, sino aplicar el respaldo de una vez.
    if (photo.complete && photo.naturalWidth === 0) {
        showMemberFallback(photo);
    } else {
        photo.addEventListener("error", () => showMemberFallback(photo));
    }
});
