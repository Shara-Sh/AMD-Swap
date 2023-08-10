const amdInput = document.getElementById('amd-input');
const usdInput = document.getElementById('usd-input');
const tomInput = document.getElementById('tom-input');
const gelInput = document.getElementById('gel-input');

const amd = 386.25;
const tom = 49632;
const gel = 2.62;

amdInput.addEventListener('input', function() {
    const amdAmount = parseFloat(amdInput.value.replace(/[^\d.]/g, ''));
    
    if (isNaN(amdAmount) || amdAmount <= 0) {
        amdInput.value = '';
        usdInput.value = '';
        tomInput.value = '';
        gelInput.value = '';
    } else {
        const usdAmount = amdAmount / amd;
        const tomAmount = Math.ceil(tom * usdAmount);
        const gelAmount = Math.ceil(gel * usdAmount);
        
        amdInput.value = isNaN(amdAmount) ? '' : '֏ ' + amdAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
        usdInput.value = isNaN(usdAmount) ? '' : '$ ' + usdAmount.toFixed(2);
        tomInput.value = isNaN(tomAmount) ? '' : 'T ' + tomAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
        gelInput.value = isNaN(gelAmount) ? '' : '₾ ' + gelAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
    }
});

usdInput.addEventListener('input', function() {
    const usdAmount = parseFloat(usdInput.value.replace(/[^\d.]/g, ''));
    
    if (isNaN(usdAmount) || usdAmount <= 0) {
        amdInput.value = '';
        usdInput.value = '';
        tomInput.value = '';
        gelInput.value = '';
    } else {
        const amdAmount = usdInput * amd;
        const tomAmount = usdInput * tom;
        const gelAmount = usdInput * gel;
        
        amdInput.value = isNaN(amdAmount) ? '' : '֏ ' + amdAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
        usdInput.value = isNaN(usdAmount) ? '' : '$ ' + usdAmount.toFixed(2);
        tomInput.value = isNaN(tomAmount) ? '' : 'T ' + tomAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
        gelInput.value = isNaN(gelAmount) ? '' : '₾ ' + gelAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
    }
});

tomInput.addEventListener('input', function() {
    const tomAmount = parseFloat(tomInput.value.replace(/[^\d.]/g, ''));
    
    if (isNaN(tomAmount) || tomAmount <= 0) {
        amdInput.value = '';
        usdInput.value = '';
        tomInput.value = '';
        gelInput.value = '';
    } else {
        const usdAmount = tomAmount / tom;
        const amdAmount = Math.ceil(amd * usdAmount);
        const gelAmount = Math.ceil(gel * usdAmount);
        
        amdInput.value = isNaN(amdAmount) ? '' : '֏ ' + amdAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
        usdInput.value = isNaN(usdAmount) ? '' : '$ ' + usdAmount.toFixed(2);
        tomInput.value = isNaN(tomAmount) ? '' : 'T ' + tomAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
        gelInput.value = isNaN(gelAmount) ? '' : '₾ ' + gelAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
    }
});

gelInput.addEventListener('input', function() {
    const gelAmount = parseFloat(gelInput.value.replace(/[^\d.]/g, ''));
    
    if (isNaN(gelAmount) || gelAmount <= 0) {
        amdInput.value = '';
        usdInput.value = '';
        tomInput.value = '';
        gelInput.value = '';
    } else {
        const usdAmount = gelAmount / gel;
        const amdAmount = Math.ceil(amd * usdAmount);
        const tomAmount = Math.ceil(tom * usdAmount);
        
        amdInput.value = isNaN(amdAmount) ? '' : '֏ ' + amdAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
        usdInput.value = isNaN(usdAmount) ? '' : '$ ' + usdAmount.toFixed(2);
        tomInput.value = isNaN(tomAmount) ? '' : 'T ' + tomAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
        gelInput.value = isNaN(gelAmount) ? '' : '₾ ' + gelAmount.toLocaleString(undefined, { minimumFractionDigits: 0 });
    }
});

amdInput.addEventListener('click', function() {
    amdInput.value = '';
    usdInput.value = '';
    tomInput.value = '';
    gelInput.value = '';
});

usdInput.addEventListener('click', function() {
    amdInput.value = '';
    usdInput.value = '';
    tomInput.value = '';
    gelInput.value = '';
});

tomInput.addEventListener('click', function() {
    amdInput.value = '';
    usdInput.value = '';
    tomInput.value = '';
    gelInput.value = '';
});

gelInput.addEventListener('click', function() {
    amdInput.value = '';
    usdInput.value = '';
    tomInput.value = '';
    gelInput.value = '';
});

tippy("#amdFlag", {content: amd});
tippy("#tomFlag", {content: tom.toLocaleString(undefined, { minimumFractionDigits: 0 })});
