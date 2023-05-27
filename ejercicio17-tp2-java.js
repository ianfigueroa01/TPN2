let texto = prompt("Ingresar texto")

for(let i=0; i<(texto.length); i++){
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
        document.write("La vocal '" + texto[i] + "' está en la posición " + i);

        break;
    }
}
