// Get elements
const inputValue = document.getElementById("inputValue");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Conversion rates (example for length)
const conversionRates = {
    meter: {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701
    },
    kilometer: {
        meter: 1000,
        kilometer: 1,
        centimeter: 100000,
        millimeter: 1000000,
        mile: 0.621371,
        yard: 1093.61,
        foot: 3280.84,
        inch: 39370.1
    },
    mile: {
        meter: 1609.34,
        kilometer: 1.60934,
        centimeter: 160934,
        millimeter: 1609340,
        mile: 1,
        yard: 1760,
        foot: 5280,
        inch: 63360
    }
};

// Conversion function
function convert() {
    const value = parseFloat(inputValue.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(value)) {
        result.innerText = "Please enter a valid number.";
        return;
    }

    if (!conversionRates[from] || !conversionRates[from][to]) {
        result.innerText = "Conversion not available.";
        return;
    }

    const convertedValue = value * conversionRates[from][to];
    result.innerText = `${value} ${from} = ${convertedValue.toFixed(4)} ${to}`;
}

// Event listener
convertBtn.addEventListener("click", convert);
