function encriptarTexto() {
    let texto = document.getElementById('input-text').value;
    if (texto === '') {
        alert('Por favor, introduce un texto para encriptar.');
        return;
    }
    let encriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = encriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById('input-text').value;
    if (texto === '') {
        alert('Por favor, introduce un texto para desencriptar.');
        return;
    }
    let desencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = desencriptado;
}

function copiarTexto() {
    let texto = document.getElementById('output-text');
    texto.select();
    texto.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Texto copiado: ' + texto.value);
}

function limpiarTexto() {
    const outputText = document.getElementById('output-text');
    outputText.value = '';
}