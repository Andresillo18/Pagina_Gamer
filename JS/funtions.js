

// Events listeners que reaccionan al darle like al botón
const clickHeart = document.getElementById('contenido');
clickHeart.addEventListener("click", () => {
    document.getElementById('contenido').classList.add('corazon-activo');
    document.getElementById('corazon').classList.add('corazon-activo');
    document.getElementById('text').classList.add('corazon-activo');
});
clickHeart.addEventListener("dblclick", () => {
    document.getElementById('contenido').classList.remove('corazon-activo');
    document.getElementById('corazon').classList.remove('corazon-activo');
    document.getElementById('text').classList.remove('corazon-activo');
})

