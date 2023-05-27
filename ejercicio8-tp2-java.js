let numero = parseInt(prompt("Ingresar número menor de 50"))

if(numero != null && !isNaN(numero)){

    while(numero>50 || (isNaN(numero))){
        if(isNaN(numero)){
            alert("Se solicita ingresar un número. Por favor, ingresar un número." )
        }
        else{
            alert("El número ingresado debe ser menor a 50. Por favor, ingresar otro número.");
        }

        numero = parseInt(prompt("Ingresar número menor de 50"));
    }

    for(let i=1; i<=numero; i++){
        for(let j=0; j<i; j++){
            document.write(j+1);
        }
        document.write("<br>");
    }

}