# Portafolio · Redes de Computadores (UNIMINUTO)

Portafolio digital (ePortfolio) del curso Redes de Computadores. Sitio estático
en **HTML + CSS + JavaScript**, con **Bootstrap 5** como base de maquetación y
un diseño propio minimalista inspirado en el estilo de Apple.

No necesita instalar nada (no hay `npm`, ni frameworks, ni backend): son 3
archivos que cualquier navegador puede abrir.

## Estructura del proyecto

```
.
├── index.html      # Todo el contenido y la estructura de la página (una sola página, con secciones ancla)
├── style.css       # Estilos visuales propios (colores, tipografía, tarjetas, animaciones)
├── script.js       # Interactividad: animaciones al hacer scroll, menú móvil, uploader de evidencias
├── imagenes/       # Íconos e imágenes usados en el sitio
└── .vscode/        # Configuración del editor (opcional)
```

No hay carpetas de "páginas" separadas: cada semana es una sección dentro de
`index.html` (`#semana1`, `#semana2`, etc.) y el menú de navegación solo hace
scroll hasta ahí.

## Cómo ejecutarlo en tu computador

No hace falta un servidor complejo. Elige la opción que te resulte más fácil:

### Opción A — VS Code + Live Server (la más sencilla)

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server** (de Ritwick Dey) desde la pestaña de
   extensiones (`Cmd+Shift+X`).
3. Click derecho sobre `index.html` → **"Open with Live Server"**.
4. Se abre solo en tu navegador en algo como `http://127.0.0.1:5500`. Cada vez
   que guardes un cambio, la página se recarga sola.

### Opción B — Terminal con Python (ya viene instalado en Mac)

```bash
cd "ruta/a/Proyecto-redes-computadores"
python3 -m http.server 8080
```

Y abre `http://localhost:8080` en el navegador.

### Opción C — Abrir el archivo directamente

También puedes hacer doble click en `index.html` y abrirlo directo en el
navegador (`file://...`). Funciona para ver el diseño, pero **el uploader de
evidencias (vista previa de archivos) puede fallar** en algunos navegadores
por restricciones de seguridad al abrir archivos locales sin servidor — por
eso se recomienda la opción A o B.

## Cómo editar el contenido

- **Textos de cada semana/premisa**: se editan directo en `index.html`, dentro
  del `<section id="semanaX">` correspondiente. Cada premisa es un
  `<article class="premise-card">`.
- **Agregar una semana nueva**: hay instrucciones paso a paso en el comentario
  al inicio de `index.html`.
- **Integrantes del grupo**: sección `id="nosotros"` al final de `index.html`
  (actualmente con datos de ejemplo "Integrante 1/2/3").
- **Colores y tipografía**: variables al inicio de `style.css` (bloque `:root`).
- **Evidencias (fotos, videos, PDFs)**: se agregan directo en el HTML de cada
  premisa, dentro de su `<article class="premise-card">`:
  1. Copiar el archivo real a la carpeta `imagenes/` (o crear una carpeta
     `evidencias/`).
  2. Agregar una etiqueta `<img src="imagenes/tu-archivo.jpg" alt="...">`,
     un `<video controls src="...">`, o un enlace `<a href="...">` de
     descarga, apuntando a ese archivo.

## Buenas prácticas aplicadas

- **HTML semántico**: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
  en vez de puros `<div>`, para que la estructura tenga sentido y sea más
  accesible (lectores de pantalla, SEO).
- **Separación de responsabilidades**: HTML (contenido), CSS (presentación) y
  JS (comportamiento) en archivos separados — nada de estilos ni scripts
  metidos en línea dentro del HTML.
- **Accesibilidad básica**: texto alternativo (`alt`) en imágenes,
  `aria-label` en el botón del menú móvil, jerarquía de encabezados ordenada
  (`h1` → `h2` → `h3` → `h4`), contraste de color cuidado.
- **Responsive / mobile-first**: la grilla de Bootstrap y varias reglas en
  `style.css` (`clamp()`, media queries) hacen que el sitio se vea bien desde
  un celular hasta una pantalla grande. Se probó en 375px (móvil) y escritorio.
- **Dependencias por CDN con versión fija**: Bootstrap se carga desde
  `jsdelivr` con la versión exacta `5.3.3`, para que el sitio no cambie de
  apariencia si Bootstrap saca una versión nueva.
- **Comentarios donde aportan valor**: cada archivo tiene un bloque explicando
  su propósito, y cada sección/componente está señalada, pensado para que
  cualquier integrante del grupo (con o sin experiencia previa) pueda ubicarse
  y editar sin tener que entender todo el código de una vez.
- **Sin datos sensibles ni backend**: al ser un sitio 100% estático, no hay
  contraseñas, bases de datos ni información que proteger — se puede publicar
  como está (por ejemplo en GitHub Pages) sin riesgo de seguridad.

## Publicarlo (opcional)

Al ser un sitio estático, se puede publicar gratis en **GitHub Pages**:
`Settings` → `Pages` → `Deploy from branch` → rama `master`, carpeta `/root`.
Quedaría disponible en una URL tipo
`https://kevinap1022.github.io/Proyecto-redes-computadores/`.
