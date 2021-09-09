const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitHandler = () => {
    var iPrice = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var cPrice = Number(currentPrice.value);

    calculateProfitAndLoss(iPrice, qty, cPrice);
}

submitButton.addEventListener("click", submitHandler);

calculateProfitAndLoss = (initial, quantity, current) => {
    if (initial < current) {
        //profit logic
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`The profit is ${profit} and profit percentage is ${profitPercentage.toFixed(2)}% 💰🤩`);
        outputBox.style.backgroundColor = 'green';

    } else if (initial > current) {
        //loss logic
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`The loss is ${loss} and the loss percentage is ${lossPercentage.toFixed(2)}% 😌`);
        outputBox.style.backgroundColor = 'red';

    } else {
        showOutput("You are on 'break-even' point! Means, No profit & no loss yet! ");
        outputBox.style.backgroundColor = 'white';
    }
}

showOutput = (message) => {
    outputBox.innerHTML = message;
}