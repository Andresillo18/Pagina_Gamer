// Events listeners que reaccionan al darle like al botón
let clickHeart = document.getElementById('contenido');
clickHeart.addEventListener("click", () => {
    // Se le añade a cada div una nueva clase que cambia su estilo
    document.getElementById('contenido').classList.add('corazon-activo');
    document.getElementById('corazon').classList.add('corazon-activo');
    document.getElementById('text').classList.add('corazon-activo');
});

// Y al darle doble click se le elimina esa clase
clickHeart.addEventListener("dblclick", () => {
    document.getElementById('contenido').classList.remove('corazon-activo');
    document.getElementById('corazon').classList.remove('corazon-activo');
    document.getElementById('text').classList.remove('corazon-activo');
})

// Función para agrandar la imagen
function agrandarImg() {
    // Se cambia el display de una imagen ya colocada que esta oculta
    document.getElementById('imgBig').classList.add('imgBig__activa');
    // Le coloca un filtro a todo el contenedor menos a la imagen que no esta ahí
    document.getElementById('contenedor').classList.add('contenedor-filtro')
}

// Función para cerrar la imagen en grande, al darle click a la imagen o boton que esta en el html
// se cambia el display
function closeImg() {
    let imgBigger = document.getElementById('imgBig');
    imgBigger.classList.remove('imgBig__activa');
    // Le elimina la clase, el filtro del contenedor original
    document.getElementById('contenedor').classList.remove('contenedor-filtro')
}
