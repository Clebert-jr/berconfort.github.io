const galeria = document.querySelectorAll("#galeria li img");

function trocar(event) {
  const imagemPrincipal = document.querySelector("#img-principal");
  const clique = event.currentTarget;
  imagemPrincipal.alt = clique.alt;
  imagemPrincipal.src = clique.src;
}
function clickgaleria(imagem) {
  imagem.addEventListener("click", trocar);
}
galeria.forEach(clickgaleria);
