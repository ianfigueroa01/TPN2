let sumaNumeros = 0
let numero = 0

do{
    numero = prompt("Ingresar número para la suma");

    if(numero != null){

        numero = parseInt(numero);

        while(isNaN(numero)){
            alert("NO se ingresó un número.\nPor favor, ingresar número para la suma.");
            numero = parseInt(prompt("Ingresar número para la suma"));
        }

        sumaNumeros = sumaNumeros + numero;
    }

}while(numero != null);

document.write("La suma de los números ingresados es = " + sumaNumeros)
