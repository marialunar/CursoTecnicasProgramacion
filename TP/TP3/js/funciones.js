function calcular_Masa_Corporal(peso, altura) {
    imc = peso / (altura * altura)
    return imc
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