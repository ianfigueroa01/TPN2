let nombres = []
let edades = []
let edadMayor = 0
let lugar = 0

for(i=0; i<3; i++){
    nombres[i] = prompt("Ingresar " + (i+1) + "º nombre");
    edades[i] = prompt("Ingresar " + (i+1) + "º nombre");
}

edadMayor = edades[0];

for(i=0; i<3; i++){
    if(edades[i] > edadMayor){
        edadMayor = edades[i];
        lugar = i;
    }
}

document.write("El mayor de los 3 es " + nombres[lugar] + " con " + edades[lugar] + " años.")