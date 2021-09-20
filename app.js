const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");
const loadingImg = document.querySelector("#loading-img");

submitHandler = () => {
    var iPrice = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var cPrice = Number(currentPrice.value);

    calculateProfitAndLoss(iPrice, qty, cPrice);
}


calculateProfitAndLoss = (initial, quantity, current) => {
    loadingImg.style.display = "block";
    outputBox.innerHTML = "";
    setTimeout(() => {
        loadingImg.style.display = "none";
        if (initial <= 0 || quantity <= 0 || current <= 0) {
            return outputBox.innerText = "Please enter valid inputs";
        }

        else if (initial < current) {
            //profit logic
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit / (initial * quantity)) * 100;
            showOutput(`The profit is ${profit} and profit percentage is ${profitPercentage.toFixed(2)}% 💰🤩`);
            outputBox.style.backgroundColor = 'green';

        } else if (initial > current) {
            //loss logic
            var loss = (initial - current) * quantity;
            var lossPercentage = (loss / (initial * quantity)) * 100;
            showOutput(`The loss is ${loss} and the loss percentage is ${lossPercentage.toFixed(2)}% 😌`);
            outputBox.style.backgroundColor = 'red';

        } else {
            showOutput("You are on 'break-even' point! Means, No profit or no loss yet! ");
            outputBox.style.backgroundColor = 'white';
        }
    }, 2000);

}

showOutput = (message) => {
    outputBox.innerHTML = message;
}

submitButton.addEventListener("click", submitHandler);