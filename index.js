function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');
    const num = parseFloat(value);

    if (!isFinite(num)) {
        result.textContent = "Invalid, please enter a number";
        return;
    }

    const squared = num * num;
    result.textContent = squared;
}
