function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p

  let nombreSections = document.getElementById("qty").value;
  let contenuARemplacer = document.getElementById("demo");
  contenuARemplacer.textContent = "";

  for(let i = 0; i < nombreSections; i++){
    let h = document.createElement("h2");
    contenuARemplacer.appendChild(h);
    h.setAttribute("monId", "Id" + i);
    let titre = document.getElementById("titre").value;
    h.textContent = titre + " " + i;

    h.addEventListener('mousedown', (event) => {
    console.log(event);
    console.log(event.target);
    console.log(h.getAttribute("monId"));
    });

    let aside = document.createElement("aside");
    contenuARemplacer.appendChild(aside);
    aside.textContent = "Plus de détails à propos de: " + i;

    h.addEventListener('mouseenter', (event) => {
    aside.className = "show";
    });

    h.addEventListener('mouseleave', (event) => {
    aside.className = "";
    });

    let p = document.createElement("p");
    contenuARemplacer.appendChild(p);
    let texte = document.getElementById("contenu").value;
    p.textContent = texte + " " + i;
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  
  let couleur = document.getElementById("couleur").value;
  let contenuARemplacer = document.getElementById("demo").getElementsByTagName("p");
  console.log(contenuARemplacer);

  for(let p of contenuARemplacer) {
    p.style.color = couleur;
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input

  let nouveauButon = document.getElementById("btnClass").value;
  let boutons = document.getElementsByTagName("button");

  for(let buton of boutons) {
    buton.className = nouveauButon;
  }
}