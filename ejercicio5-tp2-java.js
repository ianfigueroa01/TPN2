let dni = 0
let resto = 0
const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do{
    dni = prompt("Ingresar número de DNI");

    if(dni != null){

        dni = parseInt(dni);

        while(dni<0 || dni>99999999 || (isNaN(dni))){
            if(isNaN(dni)){
                alert("Se solicita ingresar un DNI. Por favor, ingrese DNI nuevamente.");
            }
            else{
                alert("Número de DNI inválido. Por favor, ingrese DNI nuevamente.");
            }

            dni = prompt("Ingresar número de DNI");
            dni = parseInt(dni);
        }

        resto = dni % 23;

        alert("DNI: " + dni + " - " + letras[resto]);
    }


}while(dni != null)

