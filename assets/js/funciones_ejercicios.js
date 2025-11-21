function volumencubo(){
    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;
    document.getElementById("resultado").innerHTML =
    "el volumen del cubo es:" +  lado1 * lado2 * lado3;
}

function volumenpara(){
    let lado1 = document.getElementById("lado1").value;
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    document.getElementById("resultado").innerHTML =
    "el volumen del cubo es:" +  lado1 * base * altura ;
}