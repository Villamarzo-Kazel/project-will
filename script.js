function convert() {
    const fromUnitSelects = document.querySelectorAll('#unitType');
    const fromUnit = fromUnitSelects[0].value;
    const toUnit = fromUnitSelects[1].value;
    const value = parseFloat(document.getElementById('valueInput').value);

    if (!fromUnit || !toUnit || isNaN(value)) {
        alert('Please select both units and enter a value.');
        return;
    }

    // Convert input value to meters (as base unit)
    const toMeters = {
        cm: value => value / 100,
        mm: value => value / 1000,
        m: value => value,
        km: value => value * 1000,
        inches: value => value * 0.0254,
        ft: value => value * 0.3048,
        yd: value => value * 0.9144
    };

    // Convert from meters to target unit
    const fromMeters = {
        cm: value => value * 100,
        mm: value => value * 1000,
        m: value => value,
        km: value => value / 1000,
        inches: value => value / 0.0254,
        ft: value => value / 0.3048,
        yd: value => value / 0.9144
    };

    const inMeters = toMeters[fromUnit](value);
    const result = fromMeters[toUnit](inMeters);

    document.getElementById('result').textContent = result.toFixed(4);
}
