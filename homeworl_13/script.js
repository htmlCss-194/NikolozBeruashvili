
function convertTemperature() {
 let celsiusTemperature = prompt("Enter temperature in Celsius:");

    if (celsiusTemperature !== null && celsiusTemperature !== "") {

        let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

        alert(celsiusTemperature + " Celsius is equal to " + fahrenheitTemperature.toFixed(2) + " Fahrenheit.");
    } else {

        alert("Please enter a valid temperature in Celsius.");
    }
}
