function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');
    const num = parseFloat(value);

    if (!isFinite(num)) {
        result.innerHTML = "Invalid, please enter a number";
        return;
    }

    const squared = num * num;
    result.innerHTML = squared;
}

const calculateBtn = document.getElementById('calculate');
if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateSquare);
}
 