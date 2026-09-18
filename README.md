# Portafolio · Redes de Computadores (UNIMINUTO)

Portafolio digital (ePortfolio) del curso Redes de Computadores. Sitio estático
en **HTML + CSS + JavaScript**, con **Bootstrap 5** como base de maquetación y
un diseño propio minimalista inspirado en el estilo de Apple.

No necesita instalar nada (no hay `npm`, ni frameworks, ni backend): son 3
archivos que cualquier navegador puede abrir.

## Estructura del proyecto

```
.
├── index.html          # Todo el contenido y la estructura de la página (una sola página, con secciones ancla)
├── style.css           # Estilos visuales propios (colores, tipografía, tarjetas, animaciones)
├── script.js           # Interactividad: animaciones al hacer scroll, menú móvil, lightbox de imágenes
├── imagenes/           # Íconos e imágenes usados en el sitio
│   └── apuntes/        # Fotos de apuntes/laboratorios usadas como "Pruebas del aprendizaje"
└── .vscode/            # Configuración del editor (opcional)
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
navegador (`file://...`). Funciona para ver el diseño, pero por restricciones
de seguridad del navegador al abrir archivos locales sin servidor, se
recomienda la opción A o B para probar todo con normalidad.

## Cómo editar el contenido

- **Textos de cada semana/premisa**: se editan directo en `index.html`, dentro
  del `<section id="semanaX">` correspondiente. Cada premisa es un
  `<article class="premise-card">`.
- **Agregar una semana nueva**: hay instrucciones paso a paso en el comentario
  al inicio de `index.html`.
- **Aprendizajes + Pruebas del aprendizaje**: van UNA vez por semana (no por
  premisa), en el bloque `<div class="entry-summary">` que está después de las
  dos tarjetas de premisa de cada semana.
- **Integrantes del grupo**: sección `id="nosotros"` al final de `index.html`.
  Cada integrante tiene una foto (`<img class="member-photo">`) con respaldo
  automático a un círculo con su inicial si la foto no existe o falla.
- **Colores y tipografía**: variables al inicio de `style.css` (bloque `:root`).
- **Evidencias — fotos** (infografías, apuntes, laboratorios): se agregan con
  el patrón `<figure><button class="lightbox-trigger" data-bs-toggle="modal"
  data-bs-target="#imageLightbox" data-img-src="..." data-img-alt="..."><img
  src="..." alt="..."></button><figcaption>...</figcaption></figure>` dentro
  de un `<div class="evidence-images">`. Al hacer clic se abren en grande
  (lightbox) con opción de abrir en pestaña nueva. Busca "evidence-images" en
  `index.html` para copiar el patrón completo.
- **Evidencias — video/presentación embebida** (YouTube, Genially, y
  similares que SÍ permiten incrustarse): un `<div class="embed-responsive">`
  con un `<iframe>` adentro. Agrega la clase extra `embed-responsive-16x9`
  si es un video horizontal tipo YouTube.
- **Evidencias — video/presentación que NO se puede incrustar** (Canva, por
  ejemplo, bloquea esto por su propia política de seguridad): usa la tarjeta
  `<a class="external-embed-card" href="..." target="_blank" rel="noopener">`
  en vez de un iframe — abre el contenido en una pestaña nueva. Si al usar un
  iframe con un enlace nuevo el recuadro queda en blanco, revisa la consola
  del navegador: un error de tipo "Content Security Policy... frame-ancestors"
  confirma que esa plataforma bloquea el iframe, y hay que usar esta tarjeta.

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
