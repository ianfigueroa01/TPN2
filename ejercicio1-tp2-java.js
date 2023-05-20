let edad = prompt("Ingresar edad")

if(edad>=18){
    document.write("Puede conducir.")
}
else if(edad<18){
    document.write("No puede conducir.")
}
else{
    document.write("Edad ingresada no es número válido.")
}