const currencyData = [
    { name: 'amd', rate: 385.90, symbol: '֏' },
    { name: 'usd', rate: 1, symbol: '$' },
    { name: 'tom', rate: 49673, symbol: 'T' },
    { name: 'gel', rate: 2.62, symbol: '₾' },
    { name: 'gbp', rate: 0.79, symbol: '£' },
    { name: 'eur', rate: 0.91, symbol: '€' },
    // Add more currencies here
];

const inputFields = {
    amd: document.getElementById('amd-input'),
    usd: document.getElementById('usd-input'),
    tom: document.getElementById('tom-input'),
    gel: document.getElementById('gel-input'),
    gbp: document.getElementById('gbp-input'),
    eur: document.getElementById('eur-input'),
    // Add more input fields here
};

for (const currency of currencyData) {
    inputFields[currency.name].addEventListener('input', function () {
        updateCurrencyInputs(currency);
    });

    inputFields[currency.name].addEventListener('click', function () {
        clearAllInputs();
    });

    tippy(`#${currency.name}Flag`, { content: currency.rate });
}

function updateCurrencyInputs(baseCurrency) {
    const baseAmount = parseFloat(inputFields[baseCurrency.name].value.replace(/[^\d.]/g, ''));

    if (isNaN(baseAmount) || baseAmount <= 0) {
        clearAllInputs();
    } else {
        for (const currency of currencyData) {
            const convertedAmount = baseAmount * (currency.rate / baseCurrency.rate);
            const formattedAmount = currency.symbol + ' ' + convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
            inputFields[currency.name].value = isNaN(convertedAmount) ? '' : formattedAmount;
        }
    }
}

function clearAllInputs() {
    for (const field of Object.values(inputFields)) {
        field.value = '';
    }
}
