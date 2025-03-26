function convert() {
    let unitFrom = document.getElementById("unitType").value;
    let unitTo = document.getElementById("convertTo").value;
    let value = parseFloat(document.getElementById("valueInput").value);
    let result = 0;

    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    // Conversion rates relative to meters
    const conversionRates = {
        cm: 0.01,
        inches: 0.0254,
        m: 1,
        km: 1000,
        mm: 0.001
    };

    // Convert input to meters first
    let meters = value * conversionRates[unitFrom];

    // Convert meters to the target unit
    result = meters / conversionRates[unitTo];

    document.getElementById("result").textContent = result.toFixed(4);
}
