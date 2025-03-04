function convertTemperature() {
    let tempInput = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let resultDiv = document.getElementById("result");

    let temp = parseFloat(tempInput);

    if (isNaN(temp)) {
        resultDiv.innerHTML = "Please enter a valid number!";
        resultDiv.style.color = "red";
        return;
    }

    let result = "";
    if (unit === "Celsius") {
        let fahrenheit = (temp * 9) / 5 + 32;
        let kelvin = temp + 273.15;
        result = `${fahrenheit.toFixed(2)} °F (Fahrenheit), ${kelvin.toFixed(2)} K (Kelvin)`;
    } else if (unit === "Fahrenheit") {
        let celsius = ((temp - 32) * 5) / 9;
        let kelvin = celsius + 273.15;
        result = `${celsius.toFixed(2)} °C (Celsius), ${kelvin.toFixed(2)} K (Kelvin)`;
    } else if (unit === "Kelvin") {
        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9) / 5 + 32;
        result = `${celsius.toFixed(2)} °C (Celsius), ${fahrenheit.toFixed(2)} °F (Fahrenheit)`;
    }

    resultDiv.innerHTML = `Converted: ${result}`;
    resultDiv.style.color = "#333";
}