const textoEntrada = document.querySelector(".projeto__entrada__campo");
const textoSaida = document.querySelector(".projeto__saida__campo");

function criptografarTexto() {
    const textoEncriptado = criptografar(textoEntrada.value);
    textoSaida.value = textoEncriptado;
}

function descriptografarTexto() {
    const textoDesencriptado = descriptografar(textoEntrada.value)
    textoSaida.value = textoDesencriptado;
}

function copiarTexto() {
    var textoCopiado = document.querySelector(".projeto__saida__campo");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function criptografar(textoCriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoCriptado = textoCriptado.toLowerCase();
    
    for(let i= 0; i < matriz.length; i++) {
        if(textoCriptado.includes(matriz[i][0])) {       
        textoCriptado = textoCriptado.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return textoCriptado;
}

function descriptografar(textoDescriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDescriptado = textoDescriptado.toLowerCase();

    for(let i= 0; i < matriz.length; i++) {
        if(textoDescriptado.includes(matriz[i][1])){
            textoDescriptado = textoDescriptado.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return textoDescriptado;
}