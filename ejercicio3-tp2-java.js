let cadena = ""
let cadenaConcatenada = ""
let i = 0

do{
    cadena = prompt("Ingresar cadena de texto");

    if(i === 0 && cadena != null){
        cadenaConcatenada = cadena;
    }
    else if(cadena != null){
        cadenaConcatenada = cadenaConcatenada + " - " + cadena;
    }

    i++;

}while(confirm("¿Desea ingresar otra cadena de texto?") == true);

if(cadena == null){
    document.write("No se ha ingresado ninguna cadena.");
}
else{
    document.write("El resultado de las cadenas concatenadas es: " + cadenaConcatenada);
}