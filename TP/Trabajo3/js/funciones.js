function calcular() {
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
        return;
    }

    imc = calcular_Masa_Corporal(peso, altura)
    estado = obtener_Estado(imc)

    document.getElementById("imc").textContent = imc.toFixed(2);
    document.getElementById("estado").textContent= estado;

        // `Su IMC es: ${imc.toFixed(2)}\nEstado: ${estado}`;
}

function calcular_Masa_Corporal(peso, altura) {
    return peso / (altura * altura)
}

function obtener_Estado(imc) {
    if (imc < 15) {
        return "Delgadez Muy Severa";
    }
    else if (imc >= 15 && imc <= 15.9) {
        return "Delgadez Severa"
    }
    else if (imc >= 16 && imc <= 18.4) {
        return "Delgadez";
    }
    else if (imc >= 18.5 && imc < 24.9) {
        return "Peso Normal";
    }
    else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    }
    else if (imc >= 30 && imc <= 34.9) {
        return "Obesidad Moderada";
    }
    else if (imc >= 35 && imc <= 39.9) {
        return "Obesidad Severa";
    }
    else {
        return "Obesidad Morbida";
    }
}