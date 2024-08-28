// Selección de elementos DOM
const textArea = document.querySelector("#textoIngresado");
const mensaje = document.querySelector("#textoSalida");

// Diccionario para las conversiones de encriptación/desencriptación
const matrizCodigo = [
    { letra: "e", encriptado: "enter" },
    { letra: "i", encriptado: "imes" },
    { letra: "a", encriptado: "ai" },
    { letra: "o", encriptado: "ober" },
    { letra: "u", encriptado: "ufat" }
];

// Función para encriptar el texto
function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(texto) {
    return matrizCodigo.reduce((acumulador, item) => {
        const regex = new RegExp(item.letra, 'g');
        return acumulador.replace(regex, item.encriptado);
    }, texto.toLowerCase());
}

// Función para desencriptar el texto
function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(texto) {
    return matrizCodigo.reduce((acumulador, item) => {
        const regex = new RegExp(item.encriptado, 'g');
        return acumulador.replace(regex, item.letra);
    }, texto.toLowerCase());
}

// Función para copiar el texto al portapapeles
function botonCopiar() {
    navigator.clipboard.writeText(mensaje.value).then(() => {
        alert('¡Texto copiado con éxito!');
    });
}
