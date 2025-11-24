/**
 * funciones
 */
function myFunction(){
    document.getElementById("demo3").innerHTML = "soy cristiano ronaldo";
}

/**
 * funcion para capturar los datos
 */
function datos(){
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let resultado = unir(titulo,autor);
    document.getElementById("msj").innerHTML = resultado;
    
}

/**
 * funcion para unir dos cadenas de texto
 */
function unir(titulo,autor){
    return "titulo:" + titulo + "</br>"
    + "autor:" + autor;

}
/**
 * ejemplo utilizandp el objeto math
 */
function redondearNumero(){
    let num = document.getElementById("numero").value;

    //convertir a numero y redondear
    let redondeo = Math.round(Number(num));

    document.getElementById("resultado").innerHTML =
    "el numero redondeado es :" + redondeo;
}
