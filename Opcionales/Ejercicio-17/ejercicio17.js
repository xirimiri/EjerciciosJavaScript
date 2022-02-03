document.getElementById("bot-guardar").addEventListener("click", mensGuardar);
function mensGuardar() {
    alert("¡Se ha guardado correctamente!");
};

document.getElementById("nombre").addEventListener("focus", colorFoco);
function colorFoco() {
    document.getElementById("nombre").style.backgroundColor = "yellow";
};

document.getElementById("nombre").addEventListener("blur", colorNOfoco);
function colorNOfoco() {
    document.getElementById("nombre").style.backgroundColor = "aquamarine";
};

document.getElementById("letra").addEventListener("keyup", vocalCons);
function vocalCons() {
    let letraText = document.getElementById("letra").value;
    let letraMin = letraText.toLowerCase();
    if (letraMin == "a" || letraMin == "e" || letraMin == "i" || 
        letraMin == "o" || letraMin == "u") {
        console.log(letraMin);
        document.getElementById("letra").style.color = "red";
    } else {
        console.log(letraMin);
        document.getElementById("letra").style.color = "green";
    }
};