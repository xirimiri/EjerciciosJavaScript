const numEnlaces = document.getElementsByTagName("a").length;
const text_numEnlaces = document.createElement("h4");
text_numEnlaces.innerHTML = "Número de enlaces de la página: " + numEnlaces;
document.body.appendChild(text_numEnlaces);

const dirPenulEnlace = document.getElementsByTagName("a")[4].href;
const text_dirPenulEnlace = document.createElement("h4");
text_dirPenulEnlace.innerHTML = "Dirección a la que enlaza el penúltimo enlace: " + dirPenulEnlace;
document.body.appendChild(text_dirPenulEnlace);

const numEnlacesTercP = document.getElementById("third-paragraph").getElementsByTagName("a").length;
const text_numEnlacesTercP = document.createElement("h4");
text_numEnlacesTercP.innerHTML = "Número de enlaces del tercer párrafo: " + numEnlacesTercP;
document.body.appendChild(text_numEnlacesTercP);