
function calculate(operator){
    const firstInput = parseFloat(document.getElementById("firstInput").value);
    const secondInput = parseFloat(document.getElementById("secondInput").value);
    const resultElement = document.getElementById("res");

    if (isNaN(firstInput) || isNaN(secondInput)) {
        resultElement.textContent = "Input harus angka!";
    } else {
        let result;
        switch (operator) {
            case '+':
                result = firstInput + secondInput;
                break;
            case '-':
                result = firstInput - secondInput;
                break;
            case '*':
                result = firstInput * secondInput;
                break;
            case '/':
                if (secondInput === 0) {
                    resultElement.textContent = "Pembagian dengan nol tidak diizinkan!";
                    return;
                }
                result = firstInput / secondInput;
                break;
            default:
                resultElement.textContent = "Operasi tidak valid!";
                return;
        }
        resultElement.textContent = `Hasil: ${result}`;
    }
}