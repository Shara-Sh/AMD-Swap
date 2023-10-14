const currencyData = [
    { name: 'amd', rate: 396.13, symbol: '֏' },
    { name: 'usd', rate: 1, symbol: '$' },
    { name: 'tom', rate: 50743, symbol: 'T' },
    { name: 'gel', rate: 2.63, symbol: '₾' },
    { name: 'gbp', rate: 0.82, symbol: '£' },
    { name: 'eur', rate: 0.95, symbol: '€' },
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
    inputFields[currency.name].addEventListener('blur', function () { // if you want decimal for usd replace input with blur.
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
            if (currency.name == "tom" || currency.name == "amd") {
                const convertedAmount = baseAmount * (currency.rate / baseCurrency.rate);
                const formattedAmount = currency.symbol + ' ' + convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 0 });
                inputFields[currency.name].value = isNaN(convertedAmount) ? '' : formattedAmount;
            }
            else {
                const convertedAmount = baseAmount * (currency.rate / baseCurrency.rate);
                const formattedAmount = currency.symbol + ' ' + convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
                inputFields[currency.name].value = isNaN(convertedAmount) ? '' : formattedAmount;
            }
        }
    }
}

function clearAllInputs() {
    for (const field of Object.values(inputFields)) {
        field.value = '';
    }
}

const swapBox = document.getElementById("swap-box");
const swapOverlay = document.getElementById("calOverlay");
const swapBoxDiamention = swapBox.getBoundingClientRect();

swapOverlay.style.width = swapBoxDiamention.width + "px";
swapOverlay.style.height = swapBoxDiamention.height + "px";

$(document).ready(function() {
    $("#calIcon").click(function() {
        $("#calOverlay").removeClass("cal-overlay-hidden");
    });
    $("#xIcon").click(function() {
        $("#calOverlay").addClass("cal-overlay-hidden");
    });
});