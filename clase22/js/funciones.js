document.getElementById("valor2").value="0"

function calcular() {
    nro1=parseFloat(document.getElementById("valor1").value)
    nro2 = parseFloat(document.getElementById("valor2").value)
    valor2 = nro1 * nro2
    document.getElementById("valor2").value=valor2
}