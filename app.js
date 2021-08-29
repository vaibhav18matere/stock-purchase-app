console.log("Let's Start !");

const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

calculateProfitAndLoss = (initial, quantity, current) => {
    if (initial < current) {
        //profit logic
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        console.log(`The profit is ${profit} and profit percentage is ${profitPercentage}% 🤩`);

    } else if (initial > current) {
        //loss logic
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        console.log(`The loss is ${loss} and the loss percentage is ${lossPercentage}% 😌`);

    } else {
        console.log("No pain, No gain.. and No gain so No pain !😃")
    }
}

submitButton.addEventListener("click", calculateProfitAndLoss);