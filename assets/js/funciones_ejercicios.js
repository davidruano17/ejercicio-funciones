function volumencubo(){
    let lado1 = document.getElementById("lado1").value;
    document.getElementById("resultado").innerHTML =
    "el volumen del cubo es:" +  Math.pow(lado1,3) ;
}

function volumenpara(){
    let lado1 = document.getElementById("lado1").value;
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    document.getElementById("resultado").innerHTML =
    "el volumen del cubo es:" +  lado1 * base * altura ;
}
function volumencilindro(){
    let radio = document.getElementById("radio").value;
    let altura = document.getElementById("altura").value;
    document.getElementById("resultado").innerHTML =
    "el volumen del cilindro es:" +  Math.PI * Math.pow(radio,2) * altura ;
}
function volumenesfera(){
    let radio = document.getElementById("radio").value;
    document.getElementById("resultado").innerHTML =
    "el volumen de la esfera es:" +  (4/3) * Math.PI * Math.pow(radio,3) ;
}
function volumencono(){
    let radio = document.getElementById("radio").value;
    let altura = document.getElementById("altura").value;
    document.getElementById("resultado").innerHTML =
    "el volumen del cono es:" +  (1/3) * Math.PI * Math.pow(radio,2) * altura ;
}
function areatriangulo(){
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    document.getElementById("resultado").innerHTML =
    "el area del triangulo es:" +  (base * altura) / 2 ;
}
function areaparalelograma(){
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    document.getElementById("resultado").innerHTML =
    "el area del paralelogramo es:" +  base * altura ;
}
function arearectangulo(){
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    document.getElementById("resultado").innerHTML =
    "el area del rectangulo es:" +  base * altura ;
}
function areacuadrado(){
    let lado = document.getElementById("lado").value;
    document.getElementById("resultado").innerHTML =
    "el area del cuadrado es:" +  Math.pow(lado,2) ;
}
function arearombo(){
    let Dmayor = document.getElementById("Dmayor").value;
    let Dmenor = document.getElementById("Dmenor").value;
    document.getElementById("resultado").innerHTML =
    "el area del rombo es:" +  (Dmayor * Dmenor) / 2 ;
}
function areacometa(){
    let Dmayor = document.getElementById("Dmayor").value;
    let Dmenor = document.getElementById("Dmenor").value;
    document.getElementById("resultado").innerHTML =
    "el area del cometa es:" +  (Dmayor * Dmenor) / 2 ;
}
function areatrapecio(){
    let Bmayor = Number (document.getElementById("Bmayor").value);
    let Bmenor = Number (document.getElementById("Bmenor").value);
    let altura = document.getElementById("altura").value;
    document.getElementById("resultado").innerHTML =
    "el area del trapecio es:" +  ((Bmayor + Bmenor) * altura) / 2 ;
}
function areacirculo(){
    let radio = document.getElementById("radio").value;
    document.getElementById("resultado").innerHTML =
    "el area del circulo es:" +  Math.PI * Math.pow(radio,2) ;
}