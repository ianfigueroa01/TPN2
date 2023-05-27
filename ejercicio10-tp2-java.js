let filas = parseInt(prompt("Ingresar número de filas"));
let columnas = parseInt(prompt("Ingresar número de columnas"));
let multiplicacion = filas * columnas;

for(let i=0; i<filas; i++){
    for(let j=0 ; j<columnas; j++){
        document.write(multiplicacion);
        document.write("&nbsp");
        multiplicacion--;
        
    }
    document.write("<br>");
}