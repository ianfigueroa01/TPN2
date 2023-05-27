let texto = prompt("Ingresar texto")

for(let i=0; i<(texto.length); i++){
    if(i === (texto.length)-1){
        document.write(texto[i]);
    }
    else{
        document.write(texto[i] + "-");
    }
    
}