function cambiarTema() {
    const body = document.body;
    const icono = document.getElementById('icono-tema');
    body.classList.toggle('oscuro');

    if (body.classList.contains('oscuro')) {
        icono.src = 'iconos/claro.png';
    } else {
        icono.src = 'iconos/oscuro.png';
    }
}
