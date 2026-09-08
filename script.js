const menuIcon = document.querySelector(".iconoMenu");
const body = document.querySelector("body");
const contenedorEnlaces = document.querySelector(".contenedorEnlaces");

menuIcon.addEventListener("click", function () {
    this.classList.toggle("activo");
    body.classList.toggle("esconderBarraY");
    this.querySelectorAll("div").forEach((line)=>{
        line.classList.remove("noAnimacion");
    });
    contenedorEnlaces.classList.toggle("menuActivo");
});
