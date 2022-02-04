function mensGuardar() {
    alert("¡Se ha guardado correctamente!");
};

function colorFoco() {
    document.getElementById("nombre").style.backgroundColor = "yellow";
};

function colorNOfoco() {
    document.getElementById("nombre").style.backgroundColor = "aquamarine";
};

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