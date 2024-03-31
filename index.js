function Pesquisar() {
    var input, filtro, menu, menuItens, links;
    input = document.getElementById("pesquisar");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("search_game");
    menuItens = menu.getElementsByTagName("li");
    for (var i = 0; i < menuItens.length; i++) {
        links = menuItens[i].getElementsByTagName("a")[0];
        if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            menuItens[i].style.display = "";
        } else {
            menuItens[i].style.display = "none";
        }
    }
}