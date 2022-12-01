let decInp = document.getElementById('dec-inp');
let binInp = document.getElementById('bin-inp');
let errorMsg = document.getElementById('error-msg');

decInp.addEventListener('input', () => {
    let decValue = parseInt(decInp.value);
    //Converts the decimal value to binary
    binInp.value = decValue.toString(2);
})

binInp.addEventListener('input', () => {
    let binValue = binInp.value;
    //if the binary number is valid convert it to decimal
    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
        errorMsg.textContent = '';
    } else {
        errorMsg.textContent ='Please Enter a Valid Binary Input'
    }
    // function to check if binary number is valid
    function binValidator(num) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] != '0' && num[i] != '1') {
                return false
            }
        }
        return true
    }
})