let contador = 0;
let texto = prompt("Ingresar texto")

for(let i=0; i<(texto.length); i++){
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
        contador++;
    }
}

document.write("El texto '" + texto + "' tiene " + contador + " vocales.")