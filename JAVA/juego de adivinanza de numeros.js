let numeroS = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

function adivinar() {
    const intento = parseInt(document.getElementById('intento').value);

    if (isNaN(intento) || intento < 1 || intento > 100) {
        document.getElementById("Pista").textContent = "Por favor ingrese un número entre 1 y 100";
    } else {
        intentos++;
        document.getElementById("IntentosRealizados").textContent = `Intentos realizados: ${intentos}`;

        if (intento < numeroS) {
            document.getElementById("Pista").textContent = "El número es mayor";
        } else if (intento > numeroS) {
            document.getElementById("Pista").textContent = "El número es menor";
        } else {
            adivinado = true;
            document.getElementById("Pista").textContent = `¡Felicidades! Has adivinado el número ${numeroS} en ${intentos} intentos.`;
        }
    }

    document.getElementById("intento").value = "";
}