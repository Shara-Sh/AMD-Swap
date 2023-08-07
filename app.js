// Get the input and result fields
const amdInput = document.getElementById('amd-input');
const usdResult = document.getElementById('usd-result');
const tomResult = document.getElementById('tom-result');

// Define the initial values
const amd = 385.51;
const tom = 49644;

// Add an event listener to the amdInput field to calculate and update the results
amdInput.addEventListener('input', function() {
    const amdAmount = parseFloat(amdInput.value.replace(/[^\d.]/g, '')); // Parse the AMD amount input to a number
    
    if (isNaN(amdAmount) || amdAmount <= 0) {
        amdInput.value = '';
        usdResult.value = '';
        tomResult.value = '';
    } else {
        // Calculate USD and TOM amounts based on the initial values of amd and tom
        const usdAmount = amdAmount / amd;
        const tomAmount = Math.ceil(tom * usdAmount);
        
        usdResult.value = isNaN(usdAmount) ? '' : '$ ' + usdAmount.toFixed(2); // Display USD amount with 2 decimal places
        tomResult.value = isNaN(tomAmount) ? '' : 'T ' + tomAmount.toLocaleString(undefined, { minimumFractionDigits: 0 }); // Display TOM amount with 2 decimal places
        amdInput.value = '֏ ' + amdAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
    }
});

tippy("#amdFlag", {content: amd});
tippy("#tomFlag", {content: tom.toLocaleString(undefined, { minimumFractionDigits: 0 })});
