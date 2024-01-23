let clave = "Miclave";

function tomarValoresEncriptar() {
    let valor = document.getElementById('input-text').value;
    let textoEncriptado = encriptar(valor,clave);
    console.log(textoEncriptado);
    mostrarElementos("output-text",textoEncriptado); //
}

function tomarValoresDesencriptar() {
    let valor = document.getElementById("input-text").value;
    let textoDesencriptado = desencriptar(valor,clave);
    console.log(textoDesencriptado)
    mostrarElementos("output-text",textoDesencriptado); //
}

function mostrarElementos(element, text) {
    let elementHTML = document.getElementById(element);
    elementHTML.value = text; 
    return;
}


function encriptar(texto, clave) {
    var textoEncriptado = CryptoJS.AES.encrypt(texto, clave).toString();
    return textoEncriptado;
  }
  
  // Función para desencriptar el texto
  function desencriptar(textoEncriptado, clave) {
    var bytesDesencriptados = CryptoJS.AES.decrypt(textoEncriptado, clave);
    var textoDesencriptado = bytesDesencriptados.toString(CryptoJS.enc.Utf8);
    return textoDesencriptado;
  }