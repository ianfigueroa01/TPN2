function aleatorio(){
    let numeroDado = Math.floor(Math.random() * 99) + 1;

    return numeroDado;
}

let numero = aleatorio()

document.write("Número aleatorio = " + numero);