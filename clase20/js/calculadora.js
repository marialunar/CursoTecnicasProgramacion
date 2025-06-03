// imprimir en caja resultado

// https://crios2020.github.io/calculadora

document.getElementById("resultado").value="0"

function sumar() {
    nro1=parseFloat(document.getElementById("number1").value)
    nro2 = parseFloat(document.getElementById("number2").value)
    resultado = nro1 + nro2
    document.getElementById("resultado").value=resultado
}

function restar() {
    nro1=parseFloat(document.getElementById("number1").value)
    nro2 = parseFloat(document.getElementById("number2").value)
    resultado = nro1 - nro2
    document.getElementById("resultado").value=resultado
}

function multiplicar() {
    nro1=parseFloat(document.getElementById("number1").value)
    nro2 = parseFloat(document.getElementById("number2").value)
    resultado = nro1 * nro2
    document.getElementById("resultado").value=resultado
}

function dividir() {
    nro1=parseFloat(document.getElementById("number1").value)
    nro2 = parseFloat(document.getElementById("number2").value)
    if (nro2 != 0) {
        resultado = nro1 / nro2
    } else {
        resultado="Error / 0"
    }    
    document.getElementById("resultado").value = resultado
    
}