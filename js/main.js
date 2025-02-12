document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");

    const redValue = document.getElementById("redValue");
    const greenValue = document.getElementById("greenValue");
    const blueValue = document.getElementById("blueValue");

    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");
    const colorPicker = document.getElementById("colorPicker");

    function updateColor() {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let hex = rgbToHex(r, g, b);

        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        hexCode.textContent = hex;

        // Actualizamos los valores en los campos de texto
        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;
    }

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + +b).toString(16).slice(1).toUpperCase()}`;
    }

    // Actualiza el color cuando se mueve un control deslizante
    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    // Actualiza el color cuando se cambia el valor numérico
    redValue.addEventListener("input", function() {
        red.value = redValue.value;
        updateColor();
    });
    greenValue.addEventListener("input", function() {
        green.value = greenValue.value;
        updateColor();
    });
    blueValue.addEventListener("input", function() {
        blue.value = blueValue.value;
        updateColor();
    });

    // Actualiza el color cuando se elige un color con el color picker
    colorPicker.addEventListener("input", function() {
        const color = colorPicker.value;
        const r = parseInt(color.substring(1, 3), 16);
        const g = parseInt(color.substring(3, 5), 16);
        const b = parseInt(color.substring(5, 7), 16);

        red.value = r;
        green.value = g;
        blue.value = b;
        
        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;

        updateColor();
    });

    updateColor(); // Inicializa el color
});
