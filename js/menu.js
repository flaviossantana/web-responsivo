document.querySelector('.menu-abrir').onclick = function funAbrirMenu(ev) {
    document.documentElement.classList.add('menu-ativo');
}

document.querySelector('.menu-fechar').onclick = function funFecharMenu(ev) {
    document.documentElement.classList.remove('menu-ativo');
};