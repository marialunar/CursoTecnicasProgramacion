function cambiar() {
    var valor1=document.getElementById("valor1")
    var tipoCambio=document.getElementById("tipoCambio")
    var cotizacion=document.getElementById("cotizacion")
    var valor2=document.getElementById("valor2")
    
    if (tipoCambio.value=="pesos") {
        console.log(1)
        valor2.value=(valor1.value*cotizacion.value).toFixed(2)
    } else {
        console.log(2)
        valor2.value=(valor1.value/cotizacion.value).toFixed(2)
    }
    

}