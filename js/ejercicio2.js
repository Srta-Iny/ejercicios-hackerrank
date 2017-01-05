var numero;
var resultado;

for(var i = 1; i <= n; i++){
    var resultado = "";

    for(var espacio = 1; espacio <= (numero-i); espacio++){
        resultado += " ";
    }
    for(var gato = 1; gato <= i; gato++){
        resultado += "#";
    }
    return resultado;
}