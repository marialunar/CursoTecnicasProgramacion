var caja1 = document.getElementById("caja1")

function style(color) {
    return "color:" + color + ";" +
        "background-color:lightblue; " +
        "padding: 10px; " + "text-align: center; " + "border-radius: 20px;"

}
function cargar() {
    //caja1.innerHTML = "<h1>Hola a todos!</h1>"
    caja1.innerHTML = "<p>" + getFecha() + "</p>"
    caja1.style = "color: white; " + "background-color:lightblue; " +
        "padding: 10px; " + "text-align: center; " + "border-radius: 20px;"
}

function rojo() {
    caja1.style = "color: red; " + "background-color:lightblue; " +
        "padding: 10px; " + "text-align: center; " + "border-radius: 20px;"
}

function verde() {
    caja1.style = "color: green; " + "background-color:lightblue; " +
        "padding: 10px; " + "text-align: center; " + "border-radius: 20px;"
}

function azul() {
    caja1.style = "color: blue; " + "background-color:lightblue; " +
        "padding: 10px; " + "text-align: center; " + "border-radius: 20px;"
}